import clsx from 'clsx';
import React, { useRef } from 'react';
import { mergeProps, useFocusRing, useSlider, useSliderThumb, VisuallyHidden } from 'react-aria';
import { useSliderState } from 'react-stately';

function parseTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;
  return [hours, minutes, seconds];
}

function formatTime(seconds, total = seconds) {
  const totalWithoutLeadingZeroes = total.slice(total.findIndex((x) => x !== 0));
  return seconds
    .slice(seconds.length - totalWithoutLeadingZeroes.length)
    .map((x) => x.toString().padStart(2, '0'))
    .join(':');
}

const Thumb = (props) => {
  const { state, trackRef, focusProps, index } = props;
  const inputRef = useRef(null);
  const { thumbProps, inputProps } = useSliderThumb({ index, trackRef, inputRef }, state);

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2"
      style={{
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        {...thumbProps}
        className="h-3 w-1 rounded-full bg-white"
        onMouseDown={(...args) => {
          thumbProps.onMouseDown(...args);
          props.onChangeStart?.();
        }}
        onPointerDown={(...args) => {
          thumbProps.onPointerDown(...args);
          props.onChangeStart?.();
        }}
      >
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </div>
    </div>
  );
};

const Slider = (props) => {
  const trackRef = useRef(null);
  const state = useSliderState(props);
  const { groupProps, trackProps, labelProps, outputProps } = useSlider(props, state, trackRef);
  const { focusProps, isFocusVisible } = useFocusRing();

  const currentTime = parseTime(state.getThumbValue(0));
  const totalTime = parseTime(state.getThumbMaxValue(0));

  return (
    <div
      {...groupProps}
      className="relative flex flex-auto touch-none items-center gap-6 md:absolute md:inset-x-0 md:top-0"
    >
      {props.label && (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label className="sr-only" {...labelProps}>
          {props.label}
        </label>
      )}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        {...trackProps}
        ref={trackRef}
        className="relative w-full rounded-full bg-gray-3 md:rounded-none"
        onMouseDown={(...args) => {
          trackProps.onMouseDown(...args);
          props.onChangeStart?.();
        }}
        onPointerDown={(...args) => {
          trackProps.onPointerDown(...args);
          props.onChangeStart?.();
        }}
      >
        <div
          className="h-1 rounded-l-full"
          style={{
            background: 'linear-gradient(270deg, #FFBB33 21.09%, #E300BD 55.18%, #FF006A 92.64%)',
            width:
              state.getThumbValue(0) === 0
                ? 0
                : `calc(${state.getThumbPercent(0) * 100}% - ${
                    isFocusVisible || state.isThumbDragging(0) ? '5px' : '4px'
                  })`,
          }}
        />
        <Thumb
          index={0}
          state={state}
          trackRef={trackRef}
          focusProps={focusProps}
          isFocusVisible={isFocusVisible}
          onChangeStart={props.onChangeStart}
        />
      </div>
      <div className="leading-dancer flex items-center gap-1 text-xs text-gray-8 md:hidden">
        <output
          {...outputProps}
          aria-live="off"
          className={clsx('block rounded-md', state.getThumbMaxValue(0) === 0 && 'opacity-0')}
        >
          {formatTime(currentTime, totalTime)}
        </output>
        <span>/</span>
        <span className={clsx('block rounded-md', state.getThumbMaxValue(0) === 0 && 'opacity-0')}>
          {formatTime(totalTime)}
        </span>
      </div>
    </div>
  );
};

export default Slider;

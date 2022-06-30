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
  const { state, trackRef, focusProps, isFocusVisible, index } = props;
  const inputRef = useRef(null);
  const { thumbProps, inputProps } = useSliderThumb({ index, trackRef, inputRef }, state);

  return (
    <div
      className="absolute -top-1/2 -translate-x-1/2"
      style={{
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <div
        {...thumbProps}
        className={clsx(
          'bg-slate-700 h-4 w-1 rounded-full',
          isFocusVisible || state.isThumbDragging(index) ? 'bg-slate-900 w-1.5' : 'bg-slate-700 w-1'
        )}
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
      className="relative inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:absolute"
    >
      {props.label && (
        <label className="sr-only" {...labelProps}>
          {props.label}
        </label>
      )}
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
          className={clsx(
            'h-2 md:rounded-r-md md:rounded-l-xl',
            isFocusVisible || state.isThumbDragging(0) ? 'bg-white' : 'bg-white'
          )}
          style={{
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
      <div className="flex items-center gap-2 md:hidden">
        <output
          {...outputProps}
          aria-live="off"
          className={clsx(
            'block rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:hidden',
            state.getThumbMaxValue(0) === 0 && 'opacity-0',
            isFocusVisible || state.isThumbDragging(0)
              ? 'bg-slate-100 text-slate-900'
              : 'text-gray-8'
          )}
        >
          {formatTime(currentTime, totalTime)}
        </output>
        <span className="text-sm leading-6 text-gray-8">/</span>
        <span
          className={clsx(
            'block rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-gray-8 md:hidden',
            state.getThumbMaxValue(0) === 0 && 'opacity-0'
          )}
        >
          {formatTime(totalTime)}
        </span>
      </div>
    </div>
  );
};

export default Slider;

import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import blueBg from './images/blue-bg.svg';
import pinkBg from './images/pink-bg.svg';

const TITLE = 'Community Heroes';
const DESCRIPTION = `
Novu is being built for developers using the incredible power of the community!
<br /> 
Here is a list
of these amazing individuals, working together to build the best open-source notification
infrastructure 🚀
<br />
<br />
Do you want to be listed here too?`;
const BUTTON_TEXT = 'Become a contributor';

const BACKGROUND = {
  pink: pinkBg,
  blue: blueBg,
};

const CommunityHeroes = ({
  className,
  title = TITLE,
  titleSize = '3xl',
  titleTag = 'h1',
  titleClassName,
  description = DESCRIPTION,
  buttonText = BUTTON_TEXT,
  buttonUrl,
  onClickButton,
  bgTheme = 'pink',
}) => (
  <section className={clsx('hero safe-paddings relative overflow-hidden', className)}>
    <div className="container-lg relative z-10">
      <div className="mx-auto max-w-[800px] text-center">
        <Heading
          size={titleSize}
          tag={titleTag}
          className={clsx('font-bold leading-tight md:text-5xl sm:text-4xl', titleClassName)}
          theme="white"
        >
          {title}
        </Heading>
        <p
          className="mt-5 text-lg font-book leading-snug text-gray-9 md:text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button
          className="mt-7 md:mt-5"
          size="sm"
          theme="white-filled"
          to={buttonUrl}
          onClick={onClickButton}
        >
          {buttonText}
        </Button>
      </div>
    </div>

    <img
      className="relative left-1/2 -mt-[330px] min-w-[1920px] -translate-x-1/2 lg:-mt-[280px] lg:min-w-[1700px] md:-mt-[210px] md:min-w-[1300px]"
      src={BACKGROUND[bgTheme]}
      loading="eager"
      height={654}
      width={1920}
      alt=""
      aria-hidden
    />
  </section>
);

export default CommunityHeroes;

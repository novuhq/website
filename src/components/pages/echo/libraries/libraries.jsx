import clsx from 'clsx';
import React from 'react';

import astroLogo from './images/astro.svg';
import expressLogo from './images/express.svg';
import honoLogo from './images/hono.svg';
import koaLogo from './images/koa.svg';
import launchDarklyLogo from './images/launch-darkly.svg';
import mjmlLogo from './images/mjml.svg';
import nestJsLogo from './images/nestjs.svg';
import reactEmailLogo from './images/react-email.svg';
import remixLogo from './images/remix.svg';
import twilioLogo from './images/twilio.svg';

const LIBRARIES = [
  {
    title: 'MJML',
    src: mjmlLogo,
  },
  {
    title: 'NestJS',
    src: nestJsLogo,
  },
  {
    title: 'Remix',
    src: remixLogo,
  },
  {
    title: 'Astro',
    src: astroLogo,
  },
  {
    title: 'Hono',
    src: honoLogo,
  },
  {
    title: 'Twilio Segment',
    src: twilioLogo,
  },
  {
    title: 'React Email',
    src: reactEmailLogo,
  },
  {
    title: 'LaunchDarkly',
    src: launchDarklyLogo,
  },
  {
    title: 'Express',
    src: expressLogo,
  },
  {
    title: 'Koa',
    src: koaLogo,
  },
];

const Libraries = () => (
  <section className="libraries mt-[172px]">
    <div className="container-md text-center">
      <h2 className="text-5xl leading-tight tracking-snug font-medium">Integrates with anything</h2>
      <p className="text-[17px] leading-snug font-book text-gray-9 mt-3 max-w-lg mx-auto">
        Built from scratch to integrate your existing tooling and content with the Novu Platform.
      </p>
      <ul className="grid grid-cols-5 grid-rows-2 mt-10 px-1">
        {LIBRARIES.map(({ title, src }, index) => (
          <li
            className={clsx('p-8 border-gray-2', {
              'border-b': index < 5,
              'border-r': (index + 1) % 5 !== 0,
            })}
            key={index}
          >
            <img src={src} alt={title} width={128} height={44} />
          </li>
        ))}
      </ul>
      <p className="text-[17px] leading-snug font-book text-white mt-8 [mask-image:radial-gradient(34%_361.31%_at_50.23%_-67.39%,#FFFFFF_0%,rgba(255,255,255,0)_100%)]">
        and literally anything else...
      </p>
    </div>
  </section>
);

export default Libraries;

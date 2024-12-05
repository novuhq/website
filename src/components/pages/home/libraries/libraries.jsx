import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';

import expressLogo from './images/express.svg';
import honoLogo from './images/hono.svg';
import koaLogo from './images/koa.svg';
import launchDarklyLogo from './images/launch-darkly.svg';
import mjmlLogo from './images/mjml.svg';
import nestJsLogo from './images/nestjs.svg';
import nextJsLogo from './images/nextjs.svg';
import reactEmailLogo from './images/react-email.svg';
import remixLogo from './images/remix.svg';
import zodLogo from './images/zod.svg';

const TITLE = 'Integrates with anything';

const DESCRIPTION =
  'Built from scratch to integrate your existing tooling and content with the Novu Platform.';

const LIBRARIES = [
  {
    title: 'MJML',
    src: mjmlLogo,
    target: 'https://github.com/novuhq/novu-framework-nextjs-mjml-example',
  },
  {
    title: 'NestJS',
    src: nestJsLogo,
    target: 'https://github.com/novuhq/nestjs-quickstart',
  },
  {
    title: 'Remix',
    src: remixLogo,
    target: 'https://docs.novu.co/quickstart/remix',
  },
  {
    title: 'Zod',
    src: zodLogo,
    target: 'https://docs.novu.co/integrations/schema/zod',
  },
  {
    title: 'Hono',
    src: honoLogo,
    target: 'https://docs.novu.co/integrations/',
  },
  {
    title: 'NextJS',
    src: nextJsLogo,
    target: 'https://docs.novu.co/quickstart/nextjs',
  },
  {
    title: 'React Email',
    src: reactEmailLogo,
    target: 'https://docs.novu.co/integrations/content/react-email',
  },
  {
    title: 'LaunchDarkly',
    src: launchDarklyLogo,
    target: 'https://docs.novu.co/integrations/',
  },
  {
    title: 'Express',
    src: expressLogo,
    target:
      'https://docs.novu.co/quickstart/express#how-to-send-notifications-with-expressjs-and-novu-framework',
  },
  {
    title: 'Koa',
    src: koaLogo,
    target: 'https://docs.novu.co/integrations/',
  },
];

const Libraries = () => (
  <section className="libraries mt-[172px] lg:mt-[100px] md:mt-[131px] sm:mt-18">
    <div className="container-md text-center">
      <h2 className="text-5xl leading-tight tracking-snug font-medium lg:text-[32px] md:text-3xl">
        {TITLE}
      </h2>
      <p className="text-[17px] leading-snug font-book text-gray-9 mt-3 max-w-lg mx-auto lg:max-w-md md:text-base">
        {DESCRIPTION}
      </p>
      <ul className="grid grid-cols-5 mt-10 px-1 lg:mt-8 md:mt-7 sm:grid-cols-2 sm:mt-8">
        {LIBRARIES.map(({ title, src, target }, index) => (
          <li
            className={clsx('p-8 border-gray-2 lg:py-7 md:p-5', {
              'border-b': index < 5,
              'border-r': (index + 1) % 5 !== 0,
              'sm:border-r': index % 2 === 0,
              'sm:border-r-0': index % 2 !== 0,
              'sm:border-b': index < 8,
            })}
            key={index}
          >
            <Link className="h-full flex items-center" to={target}>
              <img
                className="mx-auto sm:max-h-10"
                src={src}
                alt={title}
                width={128}
                height={44}
                loading="lazy"
              />
            </Link>
          </li>
        ))}
      </ul>
      {/* <p className="text-[17px] leading-snug font-book text-white mt-8 [mask-image:radial-gradient(34%_361.31%_at_50.23%_-67.39%,#FFFFFF_50%,rgba(255,255,255,0.5)_150%)] lg:mt-7 md:mt-6 md:text-base w-fit mx-auto">
        and literally anything else...
      </p> */}
    </div>
  </section>
);

export default Libraries;

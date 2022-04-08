import React from 'react';

import Button from 'components/shared/button/button';
import CodeTabs from 'components/shared/code-tabs/code-tabs';
import Heading from 'components/shared/heading/heading';

const TITLE = 'An infrastructure that speaks your language';
const DESCRIPTION = "Community built server-side SDK's for your preferred programming language";
const BUTTON_TEXT = 'Read Docs';
const BUTTON_URL = '/';

const ITEMS = [
  {
    name: 'Node.js',
    language: 'javascript',
    code: `import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY);
    
await novu.trigger('<EVENT_NAME>', {
  $user_id: "<USER IDENTIFIER>",
  firstName: "John",
  lastName: "Doe",
  organization: {
    logo: 'https://happycorp.com/logo.png'
  }
});
  `,
  },
  {
    name: 'Ruby',
    language: 'ruby',
  },
  {
    name: 'Python',
    language: 'python',
  },
  {
    name: 'Go',
    language: 'go',
  },
  {
    name: 'PHP',
    language: 'php',
  },
  {
    name: 'Curl',
    language: 'bash',
  },
];

const Languages = () => (
  <section className="languages safe-paddings bg-gray-2 pt-30 pb-40 lg:pt-24 lg:pb-32 md:pt-18 md:pb-28 sm:pt-12 sm:pb-18">
    <div className="container grid-gap-x grid grid-cols-12 items-center lg:flex lg:flex-col lg:items-start">
      <div className="col-start-1 col-end-8 w-full lg:order-2 lg:mt-12 sm:mt-8">
        <CodeTabs
          className="min-h-[560px] lg:min-h-[560px] lg:w-full md:min-h-[482px] sm:min-h-[310px]"
          items={ITEMS}
        />
      </div>
      <div className="col-start-9 col-end-13 xl:col-start-8 lg:order-1">
        <Heading size="lg" tag="h2" className="leading-tight md:text-4xl sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light leading-snug text-gray-8 md:mt-3 md:text-base">
          {DESCRIPTION}
        </p>
        <Button className="mt-7 md:mt-6" to={BUTTON_URL} size="sm" theme="gray-outline">
          {BUTTON_TEXT}
        </Button>
      </div>
    </div>
  </section>
);

export default Languages;

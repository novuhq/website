import React from 'react';

import Question from 'components/pages/pricing/faq/question';

import Heading from '../heading';
// import Link from '../link';

const FAQ_DATA = [
  {
    question: 'What is Hacktoberfest?',
    answer:
      'Hacktoberfest is an annual month-long event that encourages open-source contributions. Participants make valid pull requests on GitHub to earn rewards and celebrate open-source software.',
  },
  {
    question: 'How can I participate in Hacktoberfest?',
    answer:
      'To participate, register on the Hacktoberfest website, then contribute to open-source projects on GitHub by creating at least four valid pull requests during October.',
  },
  {
    question: 'What contributions are considered valid for Hacktoberfest?',
    answer:
      'Valid contributions include bug fixes, new features, documentation improvements, and more. You can take a look at dedicated issues for Hacktoberfest from our team.',
  },
  {
    question: 'Can I register for both Hacktoberfest and Hacksquad?',
    answer:
      'Yes, and even recommended! Each contribution will be counted for both Hacktoberfest and HackSquad',
  },
  {
    question: 'How long will it take to receive the swag?',
    answer: 'We assume that it will reach everybody within 60-180 days after the event ends.',
  },
  {
    question: 'Do I need to pay duty for the SWAG?',
    answer: 'No! We are taking care of it!',
  },
  {
    question: 'There are two swag kits: Normal & Premium. What’s the difference?',
    answer:
      'The first 30 contributors to get 5 merged PRs throughout the period of Hacktoberfest get the premium swag kits. The first 90 contributors to get 3 merged PRs throughout the period of Hacktoberfest get the normal swag kits',
  },
  {
    question: 'Do I need to be a programmer to join Hacktoberfest?',
    answer:
      'No, anyone can participate! You can help with documentation, translations, artwork, and other non-coding contributions. You can even create issues that you think people should work on.',
  },
  {
    question: 'What rewards can I earn in Hacktoberfest?',
    answer:
      'Participants who complete the Hacktoberfest challenge can earn an exclusive digital reward kit. The reward kit will include a customizable badge that evolves with each pull/merge request accepted by maintainers, representing the participant’s journey in open-source and Hacktoberfest. Additionally, winners will receive unique badges featuring a delightful surprise and gifts from sponsors',
  },
  {
    question: 'Are contributions to any open-source project eligible?',
    answer:
      "Contributions to any public GitHub repository can be eligible for Hacktoberfest, but maintainers can label issues as 'hacktoberfest-accepted' to indicate that they welcome contributions.",
  },
  {
    question: 'How do I track my progress in Hacktoberfest?',
    answer:
      'You can track your progress by signing in to your Hacktoberfest profile on the official website. It will show your completed pull requests.',
  },
  {
    question: "Can I participate if I don't have a GitHub account?",
    answer:
      'You need a GitHub account to participate, but signing up is free and easy. Visit GitHub to create an account.',
  },
  {
    question: 'Is Hacktoberfest open to participants worldwide?',
    answer:
      'Yes, Hacktoberfest is a global event. Anyone, regardless of their location, can join and participate.',
  },
];

// const FAQ_DATA = [
//     {
//         question: 'What is a trigger event?',
//         answer:
//             'A trigger event (also called an event) is a request that kicks off a process in Novu logic engine (API call to /v1/events/trigger for example). A trigger event can make many different types of actions, including digests, delays, and sending notifications to various channels, as well filters and user preference checks. You are charged for trigger event that starts a process in the logic engine for each unique subscriber.',
//     },
//     {
//         question: 'What is a notification?',
//         answer:
//             'A notification is any message sent over any channel, after Novu logic engine, Novu user preferences, and your configuration calculated and crafted the message. A notification can be sent to an email, In-App notification center, chat, push, and more.',
//     },
//     {
//         question: 'What are the differences between Novu Cloud and Open Source?',
//         answer: (
//             <>
//                 Novu{' '}
//                 <Link to="https://github.com/novuhq/novu" target="_blank" rel="noreferrer" theme="primary">
//                     Open source
//                 </Link>{' '}
//                 is a technology available under an MIT license, build and maintained by Novu community. You
//                 can adapt it to your needs, contribute, or simply use docker files and run it. Novu Cloud is
//                 a managed service run, managed, and maintained by Novu, Cloud version is scalable and robust
//                 by design, including uptime SLAs, and more business-facing features, that are not available
//                 under the Open Source version.
//             </>
//         ),
//     },
//     {
//         question: 'Can I send more than 1 million events a month on Novu Cloud?',
//         answer:
//             'Yes, you absolutely can. Our managed cloud system was built to scale with your usage, so you don’t have to worry about it.',
//     },
//     {
//         question: 'Do you offer any enterprise plan?',
//         answer: (
//             <>
//                 Yes, we do. Enterprise plans are available for teams who require extended enterprise-grade
//                 features, and specific SLAs or have unique concerns about PII, security, insurance, or
//                 legal. Feel free to reach out to us over Intercom, or send us an email at{' '}
//                 <Link to="mailto:sales@novu.co" theme="primary">
//                     sales@novu.co
//                 </Link>
//                 .
//             </>
//         ),
//     },
//     {
//         question: 'Do you have offer enterprise support plan?',
//         answer:
//             'As part of our enterprise support, you’ll get our usual support channels as well as a Microsoft Teams/Slack/Discord channel. In case you want to add an enterprise support plan, with dedicated technical support, we are happy to offer that next to an active enterprise plan.',
//     },
//     {
//         question: 'How long is the open beta for? When do you plan to start charging?',
//         answer:
//             'We plan to convert to the paid version of Novu sometime between Q2 and Q4 of 2023. We will ensure that we contact all of our customers at least x months before the switch so that you have plenty of time to ensure your systems are not impacted.',
//     },
//     {
//         question: 'I need more events or enterprise features, can you help?',
//         answer: (
//             <>
//                 We sure can. We are happy to work with enterprises and build Novu to support both their
//                 needs as well as the grand community ones. From new features, security, and privacy, or if
//                 you need to send dozens or hundreds of events a month, we are here to help. Feel free to
//                 reach out to us over Chat, or send us an email at{' '}
//                 <Link to="mailto:sales@novu.co" theme="primary">
//                     sales@novu.co
//                 </Link>
//                 .
//             </>
//         ),
//     },
//     {
//         question: 'What should I do if I have regulatory or security issues with PII?',
//         answer: (
//             <>
//                 We regularly work with big companies and are happy to help and support you with guidance,
//                 and various compliances including reports to ease your security and legal team. If you have
//                 very complicated PII needs, you can use our OS version, Novu Hybrid-Cloud enterprise plan,
//                 or reach out to us at{' '}
//                 <Link to="mailto:sales@novu.co" theme="primary">
//                     sales@novu.co
//                 </Link>
//                 , or our support, or{' '}
//                 <Link to="https://discord.novu.co" theme="primary">
//                     Discord
//                 </Link>
//                 .
//             </>
//         ),
//     },
//     {
//         question: 'Do you promise any Service Level Agreement (SLA)?',
//         answer: (
//             <>
//                 We sure do! First of all we promise uptime SLA for our cloud system for 99.99%. We also
//                 offer an initial 2 days support SLA, but most enquiries on our Intercom or{' '}
//                 <Link to="https://discord.novu.co" theme="primary">
//                     Discord
//                 </Link>{' '}
//                 get a response in a couple of hours. For our enterprise plan we can offer upgraded SLA as
//                 part of the commercial contract.
//             </>
//         ),
//     },
//     {
//         question: 'Can I use Novu free of charge?',
//         answer:
//             'Yes, you can. If you send less than 10K events per month, then Novu Cloud is entirely free. Another option is to deploy the Open-Source version of Novu onto your own infrastructure, but that does not give you the unique SLA and global redundancy we have in the Cloud version of Novu.',
//     },
// ];

const FAQS = () => (
  <section className="safe-paddings bg-gray-2 py-20 lg:py-16 md:py-12 sm:py-10">
    <div className="container-md text-center">
      <Heading className="leading-tight md:text-5xl sm:text-4xl" size="xl" tag="h2" theme="white">
        Frequently Asked Questions
      </Heading>
      <p className="mt-7 text-lg font-book text-gray-9 lg:mt-5 sm:mt-4 sm:text-base">
        Looking for answers? Here are some common questions we've been asked.
      </p>
      <ul className="mt-16 divide-y divide-gray-3 border-y border-gray-3 xl:mt-10">
        {FAQ_DATA.map((questionItem, index) => (
          <Question {...questionItem} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

export default FAQS;

import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import BlogPosts from 'components/shared/reusable-sections/blog-posts';
import CodeSection from 'components/shared/reusable-sections/code-section';
import CTA from 'components/shared/reusable-sections/cta/cta';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import Events from 'components/shared/reusable-sections/events';
import EventsWithImages from 'components/shared/reusable-sections/events-with-images';
import GetInvolved from 'components/shared/reusable-sections/get-involved';
import Inbox from 'components/shared/reusable-sections/inbox';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import SectionWithCards from 'components/shared/reusable-sections/section-with-cards';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import SectionWithSmallIcons from 'components/shared/reusable-sections/section-with-small-icons';
import SectionWithVideo from 'components/shared/reusable-sections/section-with-video';
import Testimonials from 'components/shared/reusable-sections/testimonials';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import LINKS from 'constants/links';
import discordIcon from 'icons/discord.svg';
import githubIcon from 'icons/github.svg';
import novuIcon from 'icons/novu-gradient-logo.svg';
import bugIcon from 'images/icons/bug.svg';
import cloudDataIcon from 'images/icons/cloud-data.svg';
import consoleIcon from 'images/icons/console.svg';
import debugIcon from 'images/icons/debug.svg';
import editIcon from 'images/icons/edit.svg';
import ideaIcon from 'images/icons/idea.svg';
import improveIcon from 'images/icons/improve.svg';
import integrationIcon from 'images/icons/integration.svg';
import microphoneIcon from 'images/icons/microphone.svg';
import migrationIcon from 'images/icons/migration.svg';
import paintIcon from 'images/icons/paint.svg';
import settingsIcon from 'images/icons/settings.svg';
import negativeIcon from 'images/reusable-sections/section-with-cards/negative.svg';
import notificationIcon from 'images/reusable-sections/section-with-cards/notification.svg';
import warningIcon from 'images/reusable-sections/section-with-cards/warning.svg';
import astroLogo from 'images/reusable-sections/section-with-logos/astro.svg';
import expressLogo from 'images/reusable-sections/section-with-logos/express.svg';
import honoLogo from 'images/reusable-sections/section-with-logos/hono.svg';
import koaLogo from 'images/reusable-sections/section-with-logos/koa.svg';
import launchDarklyLogo from 'images/reusable-sections/section-with-logos/launch-darkly.svg';
import mjmlLogo from 'images/reusable-sections/section-with-logos/mjml.svg';
import nestJsLogo from 'images/reusable-sections/section-with-logos/nestjs.svg';
import reactEmailLogo from 'images/reusable-sections/section-with-logos/react-email.svg';
import remixLogo from 'images/reusable-sections/section-with-logos/remix.svg';
import twilioLogo from 'images/reusable-sections/section-with-logos/twilio.svg';

const SECTION_WITH_SMALL_ICONS = [
  {
    title: 'Runs in your IT boundary',
    description:
      'Deploy within your organization`s VPC, Kubernetes, serverless setups, or locally for secure data access.',
    image: cloudDataIcon,
  },
  {
    title: 'Limitless integrations',
    description:
      'Use ReactEmail, MJML, LaunchDarkly (and more!), and fetch content and values from anywhere.',
    image: integrationIcon,
  },
  {
    title: 'Easy migration',
    description:
      'Seamlessly integrate with existing services and legacy systems to facilitate adoption.',
    image: migrationIcon,
  },
  {
    title: 'No-code editor',
    description:
      'Product teams can manage workflow configurations without the risk of breaking notification flows.',
    image: editIcon,
  },
  {
    title: 'Powerful debugging',
    description:
      'Rapidly identify and solve previously complicated content hydrating and notification routing issues.',
    image: debugIcon,
  },
  {
    title: 'Speaks your language',
    description: 'Native developer experience and autocomplete in your code and IDE of choice.',
    image: consoleIcon,
  },
];

const SECTION_WITH_BIG_ICONS = [
  {
    icon: paintIcon,
    title: 'Create content',
    description: 'Help others discover Novu with videos and blog articles.',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
  {
    icon: microphoneIcon,
    title: 'Present at meetups',
    description: 'Share your experience and represent Novu in public meetups.',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
  {
    icon: bugIcon,
    title: 'Report bugs',
    description: 'Find and fix bugs in the code, then submit pull requests to resolve them.',
    linkUrl: 'https://roadmap.novu.co/roadmap',
  },
  {
    icon: ideaIcon,
    title: 'Submit new ideas',
    description: 'Suggest features, integrations, or SDKs for our roadmap.',
    linkUrl: 'https://roadmap.novu.co/roadmap',
  },
  {
    icon: improveIcon,
    title: 'Improve documentation',
    description: 'Share your experience and represent Novu in public',
    linkUrl: 'https://github.com/novuhq/docs/issues',
  },
  {
    icon: settingsIcon,
    title: 'Helping others',
    description: 'Support developers with their projects and contributions',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
];

const TESTIMONIALS = [
  {
    content:
      "Deploy within your organization's VPC, Kubernetes, serverless setups, or locally for secure data access. Integrate content across notification channels and use Novu to choose when and where to notify users. Rapidly identify and solve previously complicated content hydrating and notification routing issues.",
    avatar: (
      <StaticImage
        src="../images/reusable-sections/testimonials/jesselynn-mah.jpg"
        width={32}
        height={32}
        alt="Jesselynn Mah"
        loading="lazy"
      />
    ),
    name: 'Jesselynn Mah',
    company: 'KnowledgeTouch',
  },
  {
    content:
      "Deploy within your organization's VPC, Kubernetes, serverless setups, or locally for secure data access. Integrate content across notification channels and use Novu to choose when and where to notify users. Rapidly identify and solve previously complicated content hydrating and notification routing issues.",

    avatar: (
      <StaticImage
        src="../images/reusable-sections/testimonials/jesselynn-mah.jpg"
        width={32}
        height={32}
        alt="Jesselynn Mah"
        loading="lazy"
      />
    ),
    name: 'Jesselynn Mah',
    company: 'KnowledgeTouch',
  },
];

const SECTION_WITH_LOGOS = [
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

const SECTION_WITH_CARDS = [
  {
    icon: warningIcon,
    title: 'Missed Updates',
    description:
      'Without timely notifications, users may miss critical updates or events related to their interests or activities, which may lead to frustration.',
  },
  {
    icon: notificationIcon,
    title: 'Irrelevant Notifications',
    description:
      'Poorly targeted or excessive notifications can overwhelm users, causing annoyance and distraction from their intended tasks or activities.',
  },
  {
    icon: negativeIcon,
    title: 'Negative Brand Perception',
    description:
      'Poorly managed notifications can reflect negatively on the brand, portraying it as intrusive, unorganized, or unresponsive to user needs and preferences.',
  },
];

const GET_INVOLVED = [
  {
    icon: novuIcon,
    title: 'Novu Cloud',
    description: 'Embark on your journey by creating your personalized account',
    linkText: 'Get started',
    linkUrl: 'https://dashboard.novu.co/?utm_campaign=community_page',
  },
  {
    icon: discordIcon,
    title: 'Join Discord',
    description: 'Immerse yourself in the community by joining our dedicated server',
    linkText: 'Join discord',
    linkUrl: 'https://discord.novu.co/',
  },
  {
    icon: githubIcon,
    title: 'Fork and Work',
    description: 'Discover an issue within our project and make a valuable contribution',
    linkText: 'Find an issue',
    linkUrl: 'https://github.com/novuhq/novu/issues',
  },
];

const EVENTS = [
  {
    title: 'The Help Desk Session',
    description: 'Solving your most common Novu questions.',
    category: 'Webinar',
    categoryColor: 'text-yellow-2',
    date: '2024-08-07T15:30:00Z',
    venue: 'Youtube',
    linkUrl: 'https://www.youtube.com/watch?v=VBHierIbPHc',
    linkText: 'Ask questions',
  },
  {
    title: 'Inbox Component',
    description: 'How to add in-app notifications to any app in minutes.',
    category: 'Webinar',
    categoryColor: 'text-purple-2',
    date: '2024-08-21T15:30:00Z',
    venue: 'Youtube',
    linkUrl: 'https://www.youtube.com/watch?v=8fpghRkVWBY',
    linkText: 'Watch live',
  },
  {
    title: 'SSO and RBAC',
    description: 'How we migrated our user management to Clerk with one engineer.',
    category: 'Webinar',
    categoryColor: 'text-blue-2',
    date: '2024-09-04T15:30:00Z',
    venue: 'Youtube',
    linkUrl: 'https://www.youtube.com/watch?v=zpz3Q2Iox2k',
    linkText: 'Join us',
  },
];

const EVENTS_WITH_IMAGES = [
  {
    title: 'The Help Desk Session',
    description: 'Solving your most common Novu questions.',
    category: 'Webinar',
    categoryColor: 'text-yellow-2',
    date: '2024-08-07T15:30:00Z',
    venue: 'Youtube',
    image: (
      <StaticImage
        className="w-full"
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="eager"
        width={384}
        height={214}
      />
    ),
  },
  {
    title: 'Inbox Component',
    description: 'How to add in-app notifications to any app in minutes.',
    category: 'Webinar',
    categoryColor: 'text-purple-2',
    date: '2024-08-21T15:30:00Z',
    venue: 'Youtube',
    image: (
      <StaticImage
        className="w-full"
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="eager"
        width={384}
        height={214}
      />
    ),
  },
  {
    title: 'SSO and RBAC',
    description: 'How we migrated our user management to Clerk with one engineer.',
    category: 'Webinar',
    categoryColor: 'text-blue-2',
    date: '2024-09-04T15:30:00Z',
    venue: 'Youtube',
    image: (
      <StaticImage
        className="w-full"
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="eager"
        width={384}
        height={214}
      />
    ),
  },
];

const INBOX_CATEGORIES = ['System', 'Social', 'Test'];

const INBOX_MESSAGES = [
  {
    category: 'system',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers are thrilled to introduce advanced task dependencies and conditional workflow triggers are thrilled to introduce advanced task dependencies and conditional workflow triggers are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: [],
  },
  {
    category: 'system',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'system',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'system',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: true,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'system',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: true,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'system',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: true,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'system',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: true,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: false,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: true,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: true,
    buttons: ['Main button', 'Secondary button'],
  },
  {
    category: 'social',
    title: 'New feature: conditional workflow triggers',
    text: 'We are thrilled to introduce advanced task dependencies and conditional workflow triggers',
    date: 'Sep 23, 2024',
    isRead: true,
    buttons: ['Main button', 'Secondary button'],
  },
];

const CODE_SECTION = `import { Echo } from '@novu/echo';

const echo = new Echo();

const commentWorkflow = echo.workflow('comment-on-post', async (event) => {
  const inAppResponse = await event.step.inApp('notify-user', async () => ({
    body: renderReactComponent(event.payload.postId)
  }));

  const { events } = await event.step.digest('1 week');

  await event.step.email('weekly-comments', async (inputs) => {
    return {
      subject: \`Weekly post comments (\${events.length + 1})\`,
      body: renderReactEmail(inputs, events)
    };
  }, { skip: () => inAppResponse.seen });
}, { payloadSchema: z.object({ postId: z.string() }) }
);

// Use the same familiar syntax to send a notification
commentWorkflow.trigger({
  to: { subscriberId: 'joe@acme.com' },
  payload: { postId: '12345' }
});`;

const SECTION_WITH_FORM_LEFT = {
  title: 'Getting started with Novu',
  description:
    "Do any of these questions describe you? If so, please fill the form out, and we'll respond with next steps.",
  features: [
    {
      title: 'Non-technical users',
      description: 'Do you prefer a UI when building out workflows?',
    },
    {
      title: 'Backend stack',
      description:
        'Is your backend comprised of something other than Javascript (NodeJS, Next.Js, etc.)?',
    },
    {
      title: 'Not you? Keep reading below.',
      description:
        'Our code-first workflow approach insanely powerful. Keep reading to see how you can get started.',
    },
  ],
  formPosition: 'left',
  hubspotFormId: '6ec81561-2562-477e-92a3-dcb06c35f510',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'first-form',
  headingTag: 'h1',
};

const SECTION_WITH_FORM_RIGHT = {
  title: 'Getting started with Novu',
  description:
    "Do any of these questions describe you? If so, please fill the form out, and we'll respond with next steps.",
  features: [
    {
      title: 'Non-technical users',
      description: 'Do you prefer a UI when building out workflows?',
    },
    {
      title: 'Backend stack',
      description:
        'Is your backend comprised of something other than Javascript (NodeJS, Next.Js, etc.)?',
    },
    {
      title: 'Not you? Keep reading below.',
      description:
        'Our code-first workflow approach insanely powerful. Keep reading to see how you can get started.',
    },
  ],
  formPosition: 'right',
  hubspotFormId: 'e7e1ff66-ecd4-4c5c-a670-0de73dae69d4',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'second-form',
};

const ReusableComponents = (props) => {
  const {
    data: {
      allWpPost: { nodes: articles },
    },
  } = props;

  const latestBlogPosts = articles.map((post) => ({
    title: post.title,
    category: {
      name: post.categories.nodes[0].name,
      slug: post.categories.nodes[0].slug,
      color: post.categories.nodes[0].categories.color,
    },
    date: post.date,
    url: post.url,
    image: post.pageBlogPost.imageMedium,
    description: post.pageBlogPost.description,
    author: {
      name: post.pageBlogPost.author.title,
      photo: post.pageBlogPost.author.postAuthor?.photo,
    },
  }));

  // START OF PAGE LAYOUT

  return (
    <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
      <SectionWithForm {...SECTION_WITH_FORM_LEFT} />
      <SectionWithForm {...SECTION_WITH_FORM_RIGHT} />
      <Inbox
        title="Fully featured Notification Inbox in minutes"
        description="Include a real-time Notification Center using our embeddable components or connect your custom UI with our notification feed API."
        button={{
          label: 'READ DOCS',
          link: 'https://docs.novu.co/getting-started/introduction',
        }}
        categories={INBOX_CATEGORIES}
        messages={INBOX_MESSAGES}
      />
      <TextWithPicture
        title="Some header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        image={
          <StaticImage
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={576}
            height={480}
          />
        }
        button={{
          label: 'Read docs',
          link: '/',
        }}
      />
      <TextWithPicture
        title="Some header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        image={
          <StaticImage
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={576}
            height={480}
          />
        }
      />
      <TextWithPicture
        title="Some header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        image={
          <StaticImage
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={576}
            height={480}
          />
        }
        button={{
          label: 'Read docs',
          link: '/',
        }}
        theme="imageRight"
      />
      <TextWithPicture
        title="Some header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        image={
          <StaticImage
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={576}
            height={480}
          />
        }
        theme="imageRight"
      />
      <TextWithPicture
        title="Some header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        image={
          <StaticImage
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={1088}
            height={480}
          />
        }
        button={{
          label: 'Read docs',
          link: '/',
        }}
        theme="imageFullWidth"
      />
      <TextWithPicture
        title="Some header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        image={
          <StaticImage
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={1088}
            height={480}
          />
        }
        theme="imageFullWidth"
      />
      <SectionWithSmallIcons
        title="Seamlessly integrate with existing services and legacy systems to facilitate adoption"
        items={SECTION_WITH_SMALL_ICONS}
      />
      <SectionWithBigIcons title="Other ways to help" items={SECTION_WITH_BIG_ICONS} />
      <Testimonials title="Don't just listen to us" testimonials={TESTIMONIALS} />
      <SectionWithLogos
        title="Integrates with anything"
        description="Built from scratch to integrate your existing tooling and content with the Novu Platform."
        logos={SECTION_WITH_LOGOS}
      />
      <GetInvolved title="Get involved: start, engage, contribute" items={GET_INVOLVED} />
      <SectionWithCards
        title="Seamlessly integrate with existing services and legacy systems to facilitate adoption"
        cards={SECTION_WITH_CARDS}
      />
      <Events
        title="Engage in events, forging connections, and gaining insights"
        description="Let’s say you’ve been tasked to build an application to help consumers find agencies
          providing a specific service tasked to build. To&nbsp;build an application to help
          consumers"
        buttonText="View all events"
        buttonUrl="/"
        events={EVENTS}
      />
      <EventsWithImages
        title="Engage in events, forging connections, and gaining insights"
        description="Let’s say you’ve been tasked to build an application to help consumers find agencies providing a specific service tasked to build. To&nbsp;build an application to help consumers"
        buttonText="View all events"
        buttonUrl="/"
        events={EVENTS_WITH_IMAGES}
      />
      <BlogPosts
        title="Check out our latest blog posts"
        buttonText="Submit Your Content"
        buttonUrl="https://github.com/novuhq/blog"
        items={latestBlogPosts}
        blogPageURL={LINKS.blog.to}
      />
      <CTA
        title="Create and send your first code-based notification"
        leftCard={{
          title: 'Self-Hosted',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Read Docs',
          buttonLink: '/',
        }}
        rightCard={{
          title: 'Get started now',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Book a demo',
          buttonLink: '/',
        }}
        theme="purple"
      />
      <CTA
        title="Create and send your first code-based notification"
        leftCard={{
          title: 'Self-Hosted',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Read Docs',
          buttonLink: '/',
        }}
        rightCard={{
          title: 'Get started now',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Book a demo',
          buttonLink: '/',
        }}
        theme="blue"
      />
      <CTA
        title="Create and send your first code-based notification"
        leftCard={{
          title: 'Self-Hosted',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Read Docs',
          buttonLink: '/',
        }}
        rightCard={{
          title: 'Get started now',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Book a demo',
          buttonLink: '/',
        }}
        theme="green"
      />
      <CtaWithForm
        title="Get started now"
        description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo."
        leftItem={{ code: 'npx novu-labs@latest echo' }}
        rightItem={{ text: 'Book a demo', link: '/' }}
      />
      <CtaWithForm
        title="Get started now"
        description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo."
        leftItem={{ text: 'Book a demo', link: '/' }}
        rightItem={{ text: 'Book a demo', link: '/' }}
      />
      <SectionWithVideo
        video={{ type: 'youtube', url: 'https://www.youtube.com/watch?v=VBHierIbPHc' }}
        title="Video header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
      />
      <SectionWithVideo
        video={{
          type: 'vimeo',
          embed:
            '<div style="padding:54% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/961460192?h=401d48f654" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        }}
        title="Video header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        videoPosition="left"
      />
      <SectionWithVideo
        video={{
          type: 'loom',
          embed:
            '<iframe src="https://www.loom.com/embed/5bbdeb480ba84e65b1b3de8c190e2003?sid=9dc95980-6f6f-4f80-be82-6cb77240ad1e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>',
        }}
        title="Video header that includes up to two lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface."
        videoPosition="fullWidth"
        transcription={[
          'Like concerts, live webinars are time-based and singular events. Sure, you can have on-demand webinars, but there is something special about attending a live webinar - the excitement leading up to the presentation and the energy between presenter and the audience.',
          'Since live webinars only happen once, planning for promotion of your webinar event is crucial to maximize the value for your business. On average, 85% of registrations occur in the last 2 weeks leading up to the webinar, with 29% registering on the same day.',
          'This means that capturing the other 15% will require you to start marketing your webinar several weeks or more prior to the event.',
          'In this article, we’ll go over the benefits of planning for your webinar and top actionable tips to get you moving forward with your webinar marketing strategy.',
          'Like concerts, live webinars are time-based and singular events. Sure, you can have on-demand webinars, but there is something special about attending a live webinar - the excitement leading up to the presentation and the energy between presenter and the audience.',
          'Since live webinars only happen once, planning for promotion of your webinar event is crucial to maximize the value for your business. On average, 85% of registrations occur in the last 2 weeks leading up to the webinar, with 29% registering on the same day.',
        ]}
      />
      <CodeSection
        code={CODE_SECTION}
        title="Some header that includes up to three lines of text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Read docs', link: '/' }}
      />
      <CodeSection
        code={CODE_SECTION}
        title="Some header that includes up to three lines of text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
      />
      <CodeSection
        code={CODE_SECTION}
        title="Some header that includes up to three lines of text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Read docs', link: '/' }}
        codePosition="right"
      />
      <CodeSection
        code={CODE_SECTION}
        title="Some header that includes up to three lines of text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        codePosition="right"
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allWpPost(sort: { date: DESC }, limit: 3) {
      nodes {
        title
        url: uri
        date
        categories {
          nodes {
            name
            slug
            categories {
              color
            }
          }
        }
        pageBlogPost {
          description
          author {
            ... on WpPostAuthors {
              title
              postAuthor {
                photo {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 36, height: 36)
                    }
                  }
                }
              }
            }
          }
          imageMedium: image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 384, height: 214)
              }
            }
            altText
          }
          imageLarge: image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 592, height: 333)
              }
            }
            altText
          }
        }
      }
    }
  }
`;

export default ReusableComponents;

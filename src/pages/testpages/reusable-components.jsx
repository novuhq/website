import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import BlogPosts from 'components/shared/reusable-sections/blog-posts';
import CodeSectionNew from 'components/shared/reusable-sections/code-section-new';
import CTA from 'components/shared/reusable-sections/cta/cta';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import Events from 'components/shared/reusable-sections/events';
import EventsWithImages from 'components/shared/reusable-sections/events-with-images';
import Inbox from 'components/shared/reusable-sections/inbox';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import SectionWithSmallIcons from 'components/shared/reusable-sections/section-with-small-icons';
import SectionWithVideo from 'components/shared/reusable-sections/section-with-video';
import Testimonials from 'components/shared/reusable-sections/testimonials';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import LINKS from 'constants/links';
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
const SECTION_WITH_BIG_ICONS_3 = [
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
];

const TESTIMONIALS = [
  {
    content:
      "Deploy within your organization's VPC, Kubernetes, serverless setups, or locally for secure data access. Integrate content across notification channels and use Novu to choose when and where to notify users. Rapidly identify and solve previously complicated content hydrating and notification routing issues.",
    avatar: (
      <StaticImage
        src="../../images/reusable-sections/testimonials/jesselynn-mah.jpg"
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
      "Deploy within your organization's VPC, Kubernetes, serverless setups, or locally for secure data access. Integrate content across notification channels and use Novu to choose when and where to notify users.",
    name: 'Jesselynn Mah',
    company: 'KnowledgeTouch',
  },
];

const SECTION_WITH_LOGOS_MD = [
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

const SECTION_WITH_LOGOS_LG = [
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
  {
    title: 'Express',
    src: expressLogo,
  },
  {
    title: 'Koa',
    src: koaLogo,
  },
];

const EVENTS = [
  {
    title: 'Webinar marketing planning',
    description:
      'An application to help consumers find agencies providing a specific service tasked to build.',
    category: 'Webinar',
    categoryColor: 'text-yellow-2',
    date: '2024-08-07T15:30:00Z',
    venue: 'Discord',
    linkUrl: 'https://www.youtube.com/watch?v=VBHierIbPHc',
    linkText: 'Learn more',
  },
  {
    title: '7 Strategies for success',
    description:
      'Tasked to build an application to help consumers find agencies providing a specific service tasked to build.',
    category: 'Meetup',
    categoryColor: 'text-purple-2',
    date: '2024-08-21T15:30:00Z',
    venue: 'Discord',
    linkUrl: 'https://www.youtube.com/watch?v=8fpghRkVWBY',
    linkText: 'Learn more',
  },
  {
    title: 'Application to help consumers',
    description:
      'Let’s say you’ve been tasked to build an application to help consumers find agencies providing a specific.',
    category: 'Conference',
    categoryColor: 'text-blue-2',
    date: '2024-09-04T15:30:00Z',
    venue: 'Discord',
    linkUrl: 'https://www.youtube.com/watch?v=zpz3Q2Iox2k',
    linkText: 'Learn more',
  },
];

const EVENTS_WITH_IMAGES = [
  {
    title: 'Webinar marketing planning',
    description:
      'An application to help consumers find agencies providing a specific service tasked to build.',
    category: 'Webinar',
    categoryColor: 'text-yellow-2',
    date: '2024-08-07T15:30:00Z',
    venue: 'Discord',
    linkUrl: 'https://www.youtube.com/watch?v=VBHierIbPHc',
    linkText: 'Learn more',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="eager"
        width={384}
        height={214}
      />
    ),
  },
  {
    title: '7 Strategies for success',
    description:
      'Tasked to build an application to help consumers find agencies providing a specific service tasked to build.',
    category: 'Meetup',
    categoryColor: 'text-purple-2',
    date: '2024-08-21T15:30:00Z',
    venue: 'Discord',
    linkUrl: 'https://www.youtube.com/watch?v=8fpghRkVWBY',
    linkText: 'Learn more',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="eager"
        width={384}
        height={214}
      />
    ),
  },
  {
    title: 'Application to help consumers',
    description:
      'Let’s say you’ve been tasked to build an application to help consumers find agencies providing a specific.',
    category: 'Conference',
    categoryColor: 'text-blue-2',
    date: '2024-09-04T15:30:00Z',
    venue: 'Discord',
    linkUrl: 'https://www.youtube.com/watch?v=zpz3Q2Iox2k',
    linkText: 'Learn more',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="eager"
        width={384}
        height={214}
      />
    ),
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
  title: 'SectionWithForm',
  description:
    "We're here to support you in navigating the open-source notification infrastructure for developers.",
  features: [
    {
      title: 'Seamless integration',
      description:
        'Integrate Novu effortlessly into your workflow for streamlined notification management.',
    },
    {
      title: 'Customization at its core',
      description:
        "Tailor notifications to your unique needs with Novu's flexible and customizable features.",
    },
    {
      title: 'Developer-friendly',
      description:
        'Empowering developers with an open-source infrastructure, Novu simplifies the way you handle notifications.',
    },
  ],
  formPosition: 'left',
  hubspotFormId: '6ec81561-2562-477e-92a3-dcb06c35f510',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'first-form',
  withBlur: true,
};

const SECTION_WITH_FORM_RIGHT = {
  title: 'SectionWithForm',
  description:
    "We're here to support you in navigating the open-source notification infrastructure for developers.",
  features: [
    {
      title: 'Seamless integration',
      description:
        'Integrate Novu effortlessly into your workflow for streamlined notification management.',
    },
    {
      title: 'Customization at its core',
      description:
        "Tailor notifications to your unique needs with Novu's flexible and customizable features.",
    },
    {
      title: 'Developer-friendly',
      description:
        'Empowering developers with an open-source infrastructure, Novu simplifies the way you handle notifications.',
    },
  ],
  formPosition: 'right',
  hubspotFormId: 'e7e1ff66-ecd4-4c5c-a670-0de73dae69d4',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'second-form',
  withBlur: true,
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
      <TextWithPicture
        title="TextWithPicture"
        description="You can set many different options to change the side of text and image, as well as add or remove the button."
        image={
          <StaticImage
            className="size-full object-cover"
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={576}
            height={480}
          />
        }
        button={{
          label: 'Learn more',
          link: '/',
        }}
      />
      <TextWithPicture
        title="TextWithPicture"
        description="You can set many different options to change the side of text and image, as well as add or remove the button."
        image={
          <StaticImage
            className="size-full object-cover"
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={576}
            height={480}
          />
        }
      />
      <TextWithPicture
        title="TextWithPicture"
        description="You can set many different options to change the side of text and image, as well as add or remove the button."
        image={
          <StaticImage
            className="size-full object-cover"
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={576}
            height={480}
          />
        }
        button={{
          label: 'Learn more',
          link: '/',
        }}
        theme="imageRight"
      />
      <TextWithPicture
        title="TextWithPicture"
        description="You can set many different options to change the side of text and image, as well as add or remove the button."
        image={
          <StaticImage
            className="size-full object-cover"
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
        title="TextWithPicture"
        description="You can set many different options to change the side of text and image, as well as add or remove the button."
        image={
          <StaticImage
            className="size-full object-cover"
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={1088}
            height={480}
          />
        }
        button={{
          label: 'Learn more',
          link: '/',
        }}
        theme="imageFullWidth"
      />
      <TextWithPicture
        title="TextWithPicture"
        description="You can set many different options to change the side of text and image, as well as add or remove the button."
        image={
          <StaticImage
            className="size-full object-cover"
            src="../../images/placeholder-image.jpg"
            alt="Placeholder image"
            loading="eager"
            width={1088}
            height={480}
          />
        }
        theme="imageFullWidth"
      />
      <SectionWithSmallIcons title="SectionWithSmallIcons" items={SECTION_WITH_SMALL_ICONS} />
      <SectionWithSmallIcons
        title="SectionWithSmallIcons"
        description="True omnichannel notifications are just a few clicks away."
        items={SECTION_WITH_SMALL_ICONS}
      />
      <SectionWithSmallIcons
        title="SectionWithSmallIcons"
        items={SECTION_WITH_SMALL_ICONS}
        hasOutroText
      />
      <SectionWithBigIcons title="SectionWithBigIcons" items={SECTION_WITH_BIG_ICONS} />
      <SectionWithBigIcons
        title="SectionWithBigIcons"
        items={SECTION_WITH_BIG_ICONS_3}
        isCentered
      />
      <Testimonials title="Testimonials" testimonials={TESTIMONIALS} />
      <SectionWithLogos
        title="SectionWithLogos"
        description="Built from scratch to integrate your existing tooling and content with the Novu Platform."
        logos={SECTION_WITH_LOGOS_MD}
      />
      <SectionWithLogos
        title="SectionWithLogos"
        description="Built from scratch to integrate your existing tooling and content with the Novu Platform."
        logos={SECTION_WITH_LOGOS_LG}
        containerSize="lg"
      />
      <Events
        title="Events"
        description="Let’s say you’ve been tasked to build an application to help consumers find agencies
          providing a specific service tasked to build. To&nbsp;build an application to help
          consumers"
        buttonText="View all events"
        buttonUrl="/"
        events={EVENTS}
      />
      <EventsWithImages
        title="EventsWithImages"
        description="Let’s say you’ve been tasked to build an application to help consumers find agencies providing a specific service tasked to build. To&nbsp;build an application to help consumers"
        buttonText="View all events"
        buttonUrl="/"
        events={EVENTS_WITH_IMAGES}
      />
      <BlogPosts
        title="BlogPosts"
        buttonText="Submit Your Content"
        buttonUrl="https://github.com/novuhq/blog"
        items={latestBlogPosts}
        blogPageURL={LINKS.blog.to}
      />
      <CTA
        title="CTA"
        leftCard={{
          title: 'Self-Hosted',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Learn more',
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
        title="CTA"
        leftCard={{
          title: 'Self-Hosted',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Learn more',
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
        title="CTA"
        leftCard={{
          title: 'Self-Hosted',
          description: 'Create complex workflows, access local data, and reuse existing content.',
          buttonText: 'Learn more',
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
        title="CtaWithForm"
        description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo."
        leftItem={{ code: 'npx novu-labs@latest echo' }}
        rightItem={{ text: 'Book a demo', link: '/' }}
      />
      <CtaWithForm
        title="CtaWithForm"
        description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo."
        leftItem={{ text: 'Get started', link: '/' }}
        rightItem={{ text: 'Contact us', link: '/' }}
      />
      <SectionWithVideo
        video={{ type: 'youtube', url: 'https://www.youtube.com/watch?v=VBHierIbPHc' }}
        title="SectionWithVideo"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
      />
      <SectionWithVideo
        video={{
          type: 'vimeo',
          embed:
            '<div style="padding:54% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/961460192?h=401d48f654" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        }}
        title="SectionWithVideo"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        videoPosition="left"
      />
      <SectionWithVideo
        video={{
          type: 'loom',
          embed:
            '<iframe src="https://www.loom.com/embed/5bbdeb480ba84e65b1b3de8c190e2003?sid=9dc95980-6f6f-4f80-be82-6cb77240ad1e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>',
        }}
        title="SectionWithVideo"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
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
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/' }}
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/', theme: 'white-filled' }}
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/' }}
        codeBlockSize="lg"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/', theme: 'white-filled' }}
        codeBlockSize="lg"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        codeBlockSize="lg"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/' }}
        codeBlockPosition="right"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/', theme: 'white-filled' }}
        codeBlockPosition="right"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        codeBlockPosition="right"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/' }}
        codeBlockSize="lg"
        codeBlockPosition="right"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{ label: 'Learn more', link: '/', theme: 'white-filled' }}
        codeBlockSize="lg"
        codeBlockPosition="right"
      />
      <CodeSectionNew
        code={CODE_SECTION}
        title="CodeSectionNew"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        codeBlockSize="lg"
        codeBlockPosition="right"
      />
      <Inbox
        title="Inbox"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{
          label: 'Learn more',
          link: 'https://docs.novu.co/getting-started/introduction',
        }}
      />
      <Inbox
        title="Inbox"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
        button={{
          label: 'Learn more',
          link: 'https://docs.novu.co/getting-started/introduction',
        }}
        inboxPosition="right"
        initialThemeIndex={3}
      />

      <SectionWithForm {...SECTION_WITH_FORM_RIGHT} />
      <SectionWithForm {...SECTION_WITH_FORM_LEFT} />
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

export const Head = () => {
  const pageMetadata = {
    slug: '/reusable-components/',
    title: 'Novu - Reusable Components Examples',
    description: 'Reusable components examples',
  };
  return <SEO {...pageMetadata} />;
};

import { graphql } from 'gatsby';
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
import DATA from 'data/pages/testpages/reusable-components';

const ReusableComponents = (props) => {
  const {
    data: { sanityLatestBlogPosts: latestBlogPosts },
  } = props;

  return (
    <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
      <TextWithPicture {...DATA.textWithPictureImageLeftWithButton} />
      <TextWithPicture {...DATA.textWithPictureImageLeft} />
      <TextWithPicture {...DATA.textWithPictureImageRightWithButton} />
      <TextWithPicture {...DATA.textWithPictureImageRight} />
      <TextWithPicture {...DATA.textWithPictureImageCenterWithButton} />
      <TextWithPicture {...DATA.textWithPictureImageCenter} />
      <SectionWithSmallIcons {...DATA.sectionWithSmallIcons} />
      <SectionWithSmallIcons {...DATA.sectionWithSmallIconsWithDescription} />
      <SectionWithSmallIcons {...DATA.sectionWithSmallIconsWithOutro} />
      <SectionWithBigIcons {...DATA.sectionWithBigIcons} />
      <SectionWithBigIcons {...DATA.sectionWithBigIconsCentered} />
      <SectionWithBigIcons {...DATA.sectionWithBigIconsCenteredWithButtonNoLinks} />
      <Testimonials {...DATA.testimonials} />
      <SectionWithLogos {...DATA.sectionWithLogos} />
      <SectionWithLogos {...DATA.sectionWithLogosLg} />
      <Events {...DATA.events} />
      <EventsWithImages {...DATA.eventsWithImages} />
      <BlogPosts {...DATA.blogPosts} items={latestBlogPosts || []} />
      <CTA {...DATA.ctaPurple} />
      <CTA {...DATA.ctaBlue} />
      <CTA {...DATA.ctaGreen} />
      <CtaWithForm {...DATA.ctaWithFormCode} />
      <CtaWithForm {...DATA.ctaWithFormButtons} />
      <SectionWithVideo {...DATA.sectionWithVideoRight} />
      <SectionWithVideo {...DATA.sectionWithVideoLeft} />
      <SectionWithVideo {...DATA.sectionWithVideoCenterWithTranscription} />
      <CodeSectionNew {...DATA.codeSectionLeftSmall} />
      <CodeSectionNew {...DATA.codeSectionLeftSmallButton} />
      <CodeSectionNew {...DATA.codeSectionLeftSmallButtonFilled} />
      <CodeSectionNew {...DATA.codeSectionLeftBig} />
      <CodeSectionNew {...DATA.codeSectionLeftBigButton} />
      <CodeSectionNew {...DATA.codeSectionLeftBigButtonFilled} />
      <CodeSectionNew {...DATA.codeSectionRightSmall} />
      <CodeSectionNew {...DATA.codeSectionRightSmallButton} />
      <CodeSectionNew {...DATA.codeSectionRightSmallButtonFilled} />
      <CodeSectionNew {...DATA.codeSectionRightBig} />
      <CodeSectionNew {...DATA.codeSectionRightBigButton} />
      <CodeSectionNew {...DATA.codeSectionRightBigButtonFilled} />
      <Inbox {...DATA.inboxLeft} />
      <Inbox {...DATA.inboxRight} />
      <SectionWithForm {...DATA.sectionWithFormRight} />
      <SectionWithForm {...DATA.sectionWithFormLeft} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    sanityLatestBlogPosts {
      title
      slug {
        current
      }
      caption
      publishedAt
      pathname
      cover
      category {
        title
        slug {
          current
        }
      }
      authors {
        name
        position
        photo
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

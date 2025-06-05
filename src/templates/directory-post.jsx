import { MDXProvider } from '@mdx-js/react';
import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import Breadcrumb from 'components/pages/directory/breadcrumb';
import Blockquote from 'components/pages/directory/content/blockquote';
import ImageZoom from 'components/pages/directory/content/image-zoom';
import InfoBox from 'components/pages/directory/content/info-box';
import Picture from 'components/pages/directory/content/picture';
import Tabs, { Tab } from 'components/pages/directory/content/tabs';
import CopyCodeBtn from 'components/pages/directory/copy-code-btn';
import CtaWithForm from 'components/pages/directory/cta-with-form';
import RelatedPosts from 'components/pages/directory/related-posts';
import SliderWrapper from 'components/pages/directory/slider-wrapper';
import Button from 'components/shared/button';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import GitHubIcon from 'icons/github.inline.svg';
import ScaleIcon from 'icons/scale.inline.svg';
import TimerIcon from 'icons/timer.inline.svg';
import getTimeAgo from 'utils/get-time-ago';
import registerLanguages from 'utils/register-syntax-highlighting';

registerLanguages();

const CodeTabs = ({ codeBlocks }) => {
  const [activeTab, setActiveTab] = useState(codeBlocks[0]?.language || 'bash');
  const activeCode = codeBlocks.find((block) => block.language === activeTab);

  return (
    <div className="my-[20px] overflow-hidden rounded-md border border-gray-2 bg-gray-1 text-white">
      <div className="flex border-b border-gray-2">
        {codeBlocks.map(({ language }) => (
          <button
            key={language}
            className={clsx(
              'relative px-[14px] py-[12px] text-[13px] font-medium leading-none tracking-snug',
              activeTab === language
                ? 'cursor-default text-primary-1'
                : 'text-white hover:text-primary-2'
            )}
            type="button"
            onClick={() => setActiveTab(language)}
          >
            {language}
            {activeTab === language && (
              <span className="absolute inset-x-0 bottom-0 h-px w-full bg-primary-1" aria-hidden />
            )}
          </button>
        ))}
      </div>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            key={activeTab}
            layout
          >
            <SyntaxHighlighter
              className="echo-code scrollbar-hidden relative z-10 overflow-y-scroll bg-[#000000] p-4 text-[14px] font-normal lg:text-xs sm:text-[10px] [&_code]:!block"
              language={activeCode.language.toLowerCase()}
              useInlineStyles={false}
              showLineNumbers
            >
              {activeCode.code.trim()}
            </SyntaxHighlighter>
            <CopyCodeBtn codeText={activeCode.code} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

const DetailItem = ({ icon: Icon, children }) => (
  <li className="flex items-start gap-2">
    <Icon className="mt-px w-3.5 shrink-0" />
    <span className="text-sm leading-snug tracking-snug text-gray-8">{children}</span>
  </li>
);

const mdxComponents = {
  h2: ({ children }) => (
    <h2 className="mb-4 mt-14 text-[32px] font-medium leading-denser tracking-snug">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-4 mt-14 text-[24px] font-medium leading-denser tracking-snug">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-4 mt-8 text-[18px] font-medium leading-denser tracking-snug">{children}</h4>
  ),
  h5: ({ children }) => <h5 className="text-[16px] font-medium leading-normal">{children}</h5>,
  p: ({ children }) => (
    <p className="mb-4 mt-4 text-[16px] leading-normal text-gray-9">{children}</p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="sm:text-16 rounded-lg border border-gray-2 p-5 pt-4 text-[16px] not-italic leading-normal text-gray-9 sm:border-l-2 sm:pl-3">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-3.5 border-gray-2" />,
  pre: ({ children }) => {
    if (!children || !children.props) {
      return <pre>{children}</pre>;
    }

    const codeProps = children.props;
    const className = codeProps.className || '';
    const match = className.match(/language-(\w+)/);
    const language = match?.[1] || 'bash';
    const codeText = codeProps.children.trim?.() || '';

    return (
      <div className="relative my-4">
        <SyntaxHighlighter
          className="scrollbar-hidden relative z-10 overflow-y-scroll rounded-lg border border-gray-2 bg-[#000000] px-4 py-5 text-sm font-normal [&_code]:!block"
          language={language}
          useInlineStyles={false}
          showLineNumbers
        >
          {codeText}
        </SyntaxHighlighter>
        <CopyCodeBtn codeText={codeText} />
      </div>
    );
  },
  code: ({ children }) => (
    <code className="rounded-lg border border-gray-5 bg-gray-3 px-1 py-0.5 font-mono text-[14px] font-normal leading-snug tracking-snug text-white">
      {children}
    </code>
  ),
  ol: (props) => (
    <ol
      className="mb-2.5 mt-4 list-inside list-decimal space-y-2.5 text-[16px] leading-normal text-gray-9"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 mt-4 space-y-2.5 pl-5 text-[16px] leading-normal text-gray-9" {...props} />
  ),
  a: (props) => <Link size="base" theme="primary" {...props} />,
  Picture,
  InfoBox,
  Blockquote,
  CodeTabs,
  Tabs,
  Tab,
};

const DirectoryPostPage = ({ data, children }) => {
  const {
    frontmatter: {
      title,
      description,
      authors,
      updatedAt,
      license,
      ghSourceLink,
      demoLink,
      images,
    },
  } = data.mdx;

  const otherPosts = data.otherPosts.nodes;
  const isSlider = images?.length > 1;

  return (
    <Layout mainClassName="bg-[#05050B]">
      <section className="safe-paddings relative mt-[127px] overflow-hidden pb-[127px] lg:mt-[119px] md:mt-[110px] md:pb-[112px] sm:mt-[103px]">
        <header className="container-lg relative grid grid-cols-[1fr_704px_1fr] items-start gap-x-16 lg:grid-cols-[704px_1fr] lg:px-8 md:grid-cols-1 sm:px-5">
          <div className="col-start-2 lg:col-start-1">
            <Breadcrumb title={title} />
            <h1 className="mt-4 text-[48px] font-medium leading-denser tracking-snug md:text-[44px] sm:text-[36px]">
              {title}
            </h1>
            <p className="mt-4 text-[18px] font-book leading-normal tracking-snug text-gray-8 sm:mt-[10px]">
              {description}
            </p>
          </div>
        </header>
        {isSlider && <SliderWrapper images={images} />}
        <div className="container-lg relative grid grid-cols-[1fr_704px_1fr] items-start gap-x-16 lg:grid-cols-[704px_1fr] lg:px-8 md:grid-cols-1 sm:px-5">
          {!isSlider && images?.[0] && (
            <div className="col-start-2 mt-8 rounded-[10px] lg:col-start-1 md:col-span-full">
              <ImageZoom image={images[0]}>
                <GatsbyImage
                  image={getImage(images[0])}
                  alt=""
                  className="aspect-video h-full w-full rounded-[10px] object-cover object-center"
                />
              </ImageZoom>
            </div>
          )}
          <div className="directory col-start-2 mb-6 mt-12 lg:col-start-1 md:col-span-full sm:mt-10">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          <CtaWithForm
            className="col-start-2 mt-16 lg:col-start-1 md:col-span-full sm:mb-[54px]"
            title="Try the template"
            code="npx novu-labs@latest echo"
          />
          <aside
            className={clsx(
              'sticky top-20 col-start-3 row-start-1 row-end-4 flex shrink-0 flex-col gap-[26px] lg:col-start-2 md:col-span-full md:mt-12 md:flex-row md:gap-4 sm:mt-[34px] sm:flex-col sm:gap-[22px]',
              isSlider ? 'mt-[126px]' : 'mt-10 md:static md:row-start-2'
            )}
          >
            <div>
              <h2 className="text-base font-medium leading-denser tracking-snug md:min-w-40">
                Contributors
              </h2>
              <ul className="mt-4 flex flex-col gap-3.5">
                {authors.map(({ name, avatar }) => (
                  <li key={name}>
                    <div className="flex items-center gap-2">
                      {avatar ? (
                        <img
                          src={avatar.publicURL}
                          alt=""
                          className="h-6 w-6 shrink-0 rounded-full"
                        />
                      ) : (
                        <div className="h-6 w-6 shrink-0 rounded-full bg-primary-2/80" />
                      )}
                      <span className="text-sm leading-snug tracking-snug text-gray-8">{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-medium leading-denser tracking-snug">Details</h2>
              <ul className="mt-4 flex flex-col gap-3">
                <DetailItem icon={TimerIcon}>Last updated {getTimeAgo(updatedAt)}</DetailItem>
                <DetailItem icon={ScaleIcon}>{license}</DetailItem>
              </ul>
            </div>
            <div className="md:ml-auto sm:ml-0 sm:mt-0.5">
              <ul className="flex flex-col gap-2">
                <li>
                  <Button
                    className="w-full md:w-[146px] sm:w-full"
                    size="custom-xs"
                    theme="gray-outline"
                    to={ghSourceLink}
                  >
                    <GitHubIcon className="mr-2.5 size-4 [&_path]:fill-current" />
                    <span>View Source</span>
                  </Button>
                </li>
                <li>
                  <Button
                    className="w-full md:w-[146px] sm:w-full"
                    size="custom-xs"
                    theme="white-filled"
                    to={demoLink}
                  >
                    View Demo
                  </Button>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <RelatedPosts otherPosts={otherPosts} />
    </Layout>
  );
};

export default DirectoryPostPage;

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { directorySlug: { eq: $slug } }) {
      frontmatter {
        title
        description
        authors {
          name
          avatar {
            childImageSharp {
              gatsbyImageData(width: 100, height: 100, layout: FIXED, placeholder: BLURRED)
            }
            publicURL
          }
        }
        updatedAt
        license
        ghSourceLink
        demoLink
        images {
          childImageSharp {
            gatsbyImageData(width: 2688, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }

    otherPosts: allMdx(
      limit: 3
      filter: { fields: { directorySlug: { ne: $slug } } }
      sort: { frontmatter: { updatedAt: DESC } }
    ) {
      nodes {
        fields {
          directorySlug
        }
        frontmatter {
          title
          description
          images {
            childImageSharp {
              gatsbyImageData(width: 588, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;

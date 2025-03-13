import { Editor } from '@maily-to/core';
import '@maily-to/core/style.css';
import {
  text,
  heading1,
  heading2,
  heading3,
  bulletList,
  orderedList,
  image,
  section,
  spacer,
  button,
} from '@maily-to/core/blocks';
import clsx from 'clsx';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import { emailContents } from './data/email-content';
import configureIcon from './images/configure.svg';
import editorIcon from './images/editor.svg';

const TITLE = 'Beautiful Emails, not HTML Tables';

const DESCRIPTION =
  'Create dynamic emails with our block based content editor powered by React Email.';

const TABS = ['One-Time Password', 'Magic Link', 'Review', 'Security Alert'];

const EmailEditor = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [, setEditor] = useState();
  const [, setJson] = useState();

  return (
    <section className="email-editor relative z-20 mt-[196px] lg:mt-[144px] md:mt-[112px] sm:mt-[104px]">
      <div className="container-md">
        <h2 className="relative z-20 mx-auto max-w-4xl text-center text-[44px] font-medium leading-tight tracking-snug lg:max-w-2xl lg:text-[40px] md:text-[32px] sm:text-[28px]">
          {TITLE}
        </h2>
        <p className="relative z-20 mt-2 text-center text-lg font-book tracking-snug text-gray-8 sm:text-base">
          {DESCRIPTION}
        </p>
        <div className="scrollbar-hidden relative z-20 mt-11 md:mt-10 sm:mt-9 sm:w-[calc(100%+32px)] sm:-translate-x-4 sm:overflow-x-auto">
          <div className="flex items-center justify-center gap-x-0.5 sm-xs:block sm-xs:gap-y-1 sm-xs:whitespace-nowrap sm-xs:px-4">
            {TABS.map((tab, index) => (
              <button
                type="button"
                key={index}
                className={clsx(
                  'relative flex h-[30px] items-center gap-x-1.5 px-3 text-sm leading-none transition-colors duration-300 sm-xs:inline-block last:sm-xs:mr-4',
                  index === activeIndex ? 'text-[#E3E4E9]' : 'text-[#CAE9FF99]'
                )}
                onClick={() => setActiveIndex(index)}
              >
                <span className="relative z-10">{tab}</span>
                <span
                  className={clsx(
                    'absolute inset-0 z-0 rounded-full bg-[radial-gradient(265.68%_330.77%_at_50%_-84.62%,#2E3038_21.52%,#81869E_74.56%)] p-px transition-opacity duration-300',
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  )}
                  aria-hidden
                >
                  <span className="block h-full w-full rounded-full bg-[#111219]" />
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="relative mx-auto mt-6 h-[678px] max-w-[960px] md:mt-5 md:h-[614px] sm:h-[628px] sm:max-w-80">
          <div className="relative z-20 flex items-center justify-between px-5 py-3.5 sm:px-4 sm:text-sm">
            <span className="flex items-center gap-x-1.5 leading-none text-gray-10">
              <img src={configureIcon} alt="" loading="lazy" width={18} height={18} />
              Configure Template
            </span>
            <span className="flex items-center gap-x-1.5 leading-none text-gray-10">
              <img src={editorIcon} alt="" loading="lazy" width={16} height={16} />
              Editor
            </span>
          </div>
          <div className="pointer-events-none relative z-20 mx-auto h-px w-[calc(100%-2px)] bg-white mix-blend-overlay" />

          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {emailContents.map(
                ({ subject, tabletImage, mobileImage, content }, index) =>
                  index === activeIndex && (
                    <m.div
                      className="absolute inset-x-0 bottom-0 z-20 mx-auto w-[606px] md:w-[514px] sm:relative sm:w-full"
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.3 } }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-t-[10px] bg-[linear-gradient(106.86deg,rgba(212,250,255,0.2)_-2.18%,rgba(212,250,255,0.05)_23.6%)] p-px pb-0 sm:bg-none">
                        <div className="relative flex gap-x-10 overflow-hidden rounded-t-[10px] bg-[linear-gradient(168.3deg,rgba(38,45,60,0.35)_6.29%,rgba(38,40,60,0.14)_91.42%),radial-gradient(75.74%_45.73%_at_27.61%_0%,rgba(194,229,255,0.075)_0%,rgba(194,240,255,0)_76.65%)] px-8 py-6 font-book leading-none sm:gap-x-4 sm:bg-none sm:px-4 sm:py-3.5 sm:text-sm">
                          <span className="text-[#8AA0B2]">Subject</span>
                          <span>{subject}</span>
                          <div className="absolute left-[-83px] top-[-124px] z-0 h-[169px] w-[236px] rounded-[50%] bg-[#476E8245] blur-3xl sm:hidden" />
                        </div>
                      </div>
                      <div className="relative h-[538px] rounded-b-[10px] bg-[linear-gradient(215.33deg,rgba(51,51,71,0.6)_20.1%,rgba(43,43,59,0.4)_75.75%),linear-gradient(139.28deg,#3f6073_0.64%,#171d2d_17.89%)] p-px after:absolute after:inset-px after:z-0 after:rounded-b-[10px] after:bg-[#08070e] md:h-auto">
                        <img
                          className="relative z-10 hidden h-auto w-full rounded-b-[10px] md:block sm:hidden"
                          src={tabletImage}
                          alt=""
                          loading="lazy"
                          width={512}
                          height={452}
                        />
                        <img
                          className="relative z-10 hidden h-auto w-full rounded-b-[10px] sm:block"
                          src={mobileImage}
                          alt=""
                          loading="lazy"
                          width={320}
                          height={552}
                        />
                        <Editor
                          config={{
                            hasMenuBar: false,
                            wrapClassName: 'editor-wrapper z-10 relative md:hidden',
                            bodyClassName: 'editor-body !mt-0 !border-0 !py-6 !px-12',
                            contentClassName: 'editor-content !text-gray-8',
                            toolbarClassName: 'editor-toolbar flex-wrap !items-start',
                            autofocus: false,
                          }}
                          contentJson={content}
                          blocks={[
                            {
                              title: 'Basic Blocks',
                              commands: [
                                text,
                                heading1,
                                heading2,
                                heading3,
                                bulletList,
                                orderedList,
                                image,
                                section,
                                spacer,
                                button,
                              ],
                            },
                          ]}
                          onCreate={(e) => {
                            setEditor(e);
                            const json = e?.getJSON() || {};
                            setJson(json);
                          }}
                          onUpdate={(e) => {
                            setEditor(e);
                            const json = e?.getJSON() || {};
                            setJson(json);
                          }}
                        />
                      </div>
                    </m.div>
                  )
              )}
            </AnimatePresence>
          </LazyMotion>
          <span className="pointer-events-none absolute inset-x-0 bottom-[50px] top-0 z-10 w-full overflow-hidden rounded-[20px] bg-[radial-gradient(62.49%_87.01%_at_33.8%_-1.3%,rgba(135,188,195,0.15)_0%,#1E2438_49.26%,rgba(30,36,56,0.5)_100%),radial-gradient(48.6%_77.42%_at_12.45%_-6.51%,rgba(255,255,255,0.4)_0%,rgba(134,204,255,0.2)_35.17%,rgba(67,64,74,0)_100%)] p-px [mask-image:linear-gradient(180deg,#08070E_65.01%,rgba(8,7,14,0)_100%)] sm:rounded-[10px]">
            <span className="block h-full w-full rounded-[20px] bg-[linear-gradient(147.55deg,#16222E_22.39%,#080C1A_47.64%,#05050B_97.13%)] sm:rounded-[10px]" />
            <span className="absolute left-[-50px] top-[-150px] h-[505px] w-[656px] rotate-[-160deg] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#3BDCFF_27.2%,#69B7FF_80.5%,#4759FF_100%)] opacity-[0.08] blur-3xl" />
          </span>
          <span className="absolute left-[-200px] top-[-150px] z-0 h-[505px] w-[656px] rotate-[-160deg] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#3BDCFF_27.2%,#69B7FF_80.5%,#4759FF_100%)] opacity-5 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default EmailEditor;

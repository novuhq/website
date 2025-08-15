import SHARED_DATA from '../shared';

const SECTION_WITH_FORM_RIGHT = {
  title: 'Ready to Get Started with Novu?',
  description:
    "Do either of these statements describe you? If so, please fill the form out, and we'll respond with next steps.",
  features: [
    {
      title: 'I am a non-technical user',
      description:
        "Novu's next-generation code-based workflows require access to an IDE, command line, and knowledge of Javascript.",
    },
    {
      title: "Our backend stack isn't Javascript-based",
      description:
        'Our code-first workflows work best with a Javascript (NodeJS, Next.Js, etc.) backend.',
    },
  ],
  formPosition: 'right',
  hubspotFormId: '6ec81561-2562-477e-92a3-dcb06c35f510',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'cta-gs-form1',
};

export default {
  sectionWithFormRight: SECTION_WITH_FORM_RIGHT,
  codeSection: SHARED_DATA.codeSection,
  cta: SHARED_DATA.cta,
  sectionWithVideo: SHARED_DATA.sectionWithVideo,
};

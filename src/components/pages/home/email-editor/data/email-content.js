// eslint-disable-next-line import/prefer-default-export
export const emailContents = [
  {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { textAlign: 'left', level: 3 },
        content: [
          {
            type: 'text',
            marks: [{ type: 'bold' }, { type: 'textStyle', attrs: { color: '#ffffff' } }],
            text: 'Review a recent login from a new device',
          },
        ],
      },
      {
        type: 'paragraph',
        attrs: { textAlign: 'left' },
        content: [
          {
            type: 'text',
            text: 'There was a recent login to your account. Please review the details:',
          },
        ],
      },
      {
        type: 'section',
        attrs: {
          borderRadius: 8,
          backgroundColor: '#1F2233',
          align: 'left',
          borderWidth: 0,
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          showIfKey: null,
        },
        content: [
          {
            type: 'paragraph',
            attrs: {
              textAlign: null,
              showIfKey: null,
            },
            content: [
              {
                type: 'text',
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'Account',
              },
              {
                type: 'hardBreak',
              },
              {
                type: 'text',
                marks: [
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'hello@maily.to',
              },
            ],
          },
          {
            type: 'paragraph',
            attrs: {
              textAlign: null,
              showIfKey: null,
            },
            content: [
              {
                type: 'text',
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'IP & Approximate location',
              },
              {
                type: 'hardBreak',
              },
              {
                type: 'text',
                marks: [
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'hello@maily.to',
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        attrs: { textAlign: 'left' },
        content: [
          {
            type: 'text',
            text: 'If this was not you, reset your password now to protect your account and enroll in multi-factor authentication in the "My Account" tab of "Settings". If this wasn\'t you or if you have additional questions, please see our support page.',
          },
        ],
      },
      {
        type: 'button',
        attrs: {
          text: 'GO TO MY ACCOUNT',
          url: '',
          alignment: 'left',
          variant: 'filled',
          borderRadius: 6,
          buttonColor: '#ffffff',
          textColor: '#000000',
        },
      },
      {
        type: 'image',
        attrs: {
          src: `${process.env.GATSBY_DEFAULT_SITE_URL}/images/logo.svg`,
          alt: null,
          title: null,
          width: 102,
          height: 32,
          alignment: 'left',
          externalLink: null,
          isExternalLinkVariable: false,
          isSrcVariable: false,
          showIfKey: null,
        },
      },
    ],
  },
  {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { textAlign: 'left', level: 3 },
        content: [
          {
            type: 'text',
            marks: [{ type: 'bold' }, { type: 'textStyle', attrs: { color: '#ffffff' } }],
            text: 'Review a recent login from a new device',
          },
        ],
      },
      {
        type: 'paragraph',
        attrs: { textAlign: 'left' },
        content: [
          {
            type: 'text',
            text: 'There was a recent login to your account. Please review the details:',
          },
        ],
      },
      {
        type: 'section',
        attrs: {
          borderRadius: 8,
          backgroundColor: '#1F2233',
          align: 'left',
          borderWidth: 0,
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          showIfKey: null,
        },
        content: [
          {
            type: 'paragraph',
            attrs: {
              textAlign: null,
              showIfKey: null,
            },
            content: [
              {
                type: 'text',
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'Account',
              },
              {
                type: 'hardBreak',
              },
              {
                type: 'text',
                marks: [
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'hello@maily.to',
              },
            ],
          },
          {
            type: 'paragraph',
            attrs: {
              textAlign: null,
              showIfKey: null,
            },
            content: [
              {
                type: 'text',
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'IP & Approximate location',
              },
              {
                type: 'hardBreak',
              },
              {
                type: 'text',
                marks: [
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'hello@maily.to',
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        attrs: { textAlign: 'left' },
        content: [
          {
            type: 'text',
            text: 'If this was not you, reset your password now to protect your account and enroll in multi-factor authentication in the "My Account" tab of "Settings". If this wasn\'t you or if you have additional questions, please see our support page.',
          },
        ],
      },
      {
        type: 'button',
        attrs: {
          text: 'GO TO MY ACCOUNT',
          url: '',
          alignment: 'left',
          variant: 'filled',
          borderRadius: 6,
          buttonColor: '#ffffff',
          textColor: '#000000',
        },
      },
      {
        type: 'image',
        attrs: {
          src: `${process.env.GATSBY_DEFAULT_SITE_URL}/images/logo.svg`,
          alt: null,
          title: null,
          width: 102,
          height: 32,
          alignment: 'left',
          externalLink: null,
          isExternalLinkVariable: false,
          isSrcVariable: false,
          showIfKey: null,
        },
      },
    ],
  },
  {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { textAlign: 'left', level: 3 },
        content: [
          {
            type: 'text',
            marks: [{ type: 'bold' }, { type: 'textStyle', attrs: { color: '#ffffff' } }],
            text: 'Review a recent login from a new device',
          },
        ],
      },
      {
        type: 'paragraph',
        attrs: { textAlign: 'left' },
        content: [
          {
            type: 'text',
            text: 'There was a recent login to your account. Please review the details:',
          },
        ],
      },
      {
        type: 'section',
        attrs: {
          borderRadius: 8,
          backgroundColor: '#1F2233',
          align: 'left',
          borderWidth: 0,
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          showIfKey: null,
        },
        content: [
          {
            type: 'paragraph',
            attrs: {
              textAlign: null,
              showIfKey: null,
            },
            content: [
              {
                type: 'text',
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'Account',
              },
              {
                type: 'hardBreak',
              },
              {
                type: 'text',
                marks: [
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'hello@maily.to',
              },
            ],
          },
          {
            type: 'paragraph',
            attrs: {
              textAlign: null,
              showIfKey: null,
            },
            content: [
              {
                type: 'text',
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'IP & Approximate location',
              },
              {
                type: 'hardBreak',
              },
              {
                type: 'text',
                marks: [
                  {
                    type: 'textStyle',
                    attrs: {
                      color: '#ffffff',
                    },
                  },
                ],
                text: 'hello@maily.to',
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        attrs: { textAlign: 'left' },
        content: [
          {
            type: 'text',
            text: 'If this was not you, reset your password now to protect your account and enroll in multi-factor authentication in the "My Account" tab of "Settings". If this wasn\'t you or if you have additional questions, please see our support page.',
          },
        ],
      },
      {
        type: 'button',
        attrs: {
          text: 'GO TO MY ACCOUNT',
          url: '',
          alignment: 'left',
          variant: 'filled',
          borderRadius: 6,
          buttonColor: '#ffffff',
          textColor: '#000000',
        },
      },
      {
        type: 'image',
        attrs: {
          src: `${process.env.GATSBY_DEFAULT_SITE_URL}/images/logo.svg`,
          alt: null,
          title: null,
          width: 102,
          height: 32,
          alignment: 'left',
          externalLink: null,
          isExternalLinkVariable: false,
          isSrcVariable: false,
          showIfKey: null,
        },
      },
    ],
  },
];

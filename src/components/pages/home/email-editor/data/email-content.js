// eslint-disable-next-line import/prefer-default-export
export const emailContents = [
  // One-Time Password
  {
    subject: 'Verify Your Email to Finish Signup',
    content: {
      type: 'doc',
      content: [
        {
          type: 'image',
          attrs: {
            src: `${process.env.GATSBY_DEFAULT_SITE_URL}/images/aws-logo.svg`,
            alt: null,
            title: null,
            width: 90,
            height: 90,
            alignment: 'center',
            externalLink: null,
            isExternalLinkVariable: false,
            isSrcVariable: false,
            showIfKey: null,
          },
        },
        {
          type: 'heading',
          attrs: {
            textAlign: null,
            level: 3,
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#ffffff',
                  },
                },
                {
                  type: 'bold',
                },
              ],
              text: 'Verify your email address',
            },
          ],
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'left',
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              text: 'Thanks for starting your AWS account setup. Enter this verification code when prompted. If you didn’t request this, ignore this message.',
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            textAlign: 'center',
            level: 1,
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#ffffff',
                  },
                },
                {
                  type: 'bold',
                },
              ],
              text: '596853',
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 8,
            showIfKey: null,
          },
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'center',
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#585858',
                  },
                },
              ],
              text: '(This code is valid for 10 minutes)',
            },
          ],
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'left',
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              text: 'Amazon Web Services will never email you and ask you to disclose or verify your password, credit card, or banking account number.',
            },
          ],
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'left',
            showIfKey: null,
          },
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'left',
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#585858',
                  },
                },
              ],
              text: 'Produced and distributed by AWS, Inc., 410 Terry Ave. N, Seattle, WA 98109. © 2022 AWS, Inc. All rights reserved. AWS is a registered trademark of ',
            },
            {
              type: 'text',
              marks: [
                {
                  type: 'link',
                  attrs: {
                    href: 'http://Amazon.com',
                    target: '_blank',
                    rel: 'noopener noreferrer nofollow',
                    class: 'mly-no-underline',
                    isUrlVariable: false,
                  },
                },
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#ffffff',
                  },
                },
              ],
              text: 'Amazon.com',
            },
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#585858',
                  },
                },
              ],
              text: ', Inc. ',
            },
            {
              type: 'text',
              marks: [
                {
                  type: 'link',
                  attrs: {
                    href: '#',
                    target: '_blank',
                    rel: 'noopener',
                    class: 'mly-no-underline',
                    isUrlVariable: false,
                  },
                },
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#ffffff',
                  },
                },
              ],
              text: 'Privacy Policy',
            },
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#585858',
                  },
                },
              ],
              text: '.',
            },
          ],
        },
      ],
    },
  },
  // Magic Link Login
  {
    subject: 'Secure Login Link – Sign In',
    content: {
      type: 'doc',
      content: [
        {
          type: 'image',
          attrs: {
            src: `${process.env.GATSBY_DEFAULT_SITE_URL}/images/linear-logo.png`,
            alt: null,
            title: null,
            width: 170,
            height: 42.28426395939086,
            alignment: 'left',
            externalLink: null,
            isExternalLinkVariable: false,
            isSrcVariable: false,
            showIfKey: null,
          },
        },
        {
          type: 'heading',
          attrs: {
            textAlign: 'left',
            level: 3,
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: 'rgb(255, 255, 255)',
                  },
                },
                {
                  type: 'bold',
                },
              ],
              text: 'Log in to your account',
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
              text: 'Click the button below to securely log in. This magic link will expire in 20 minutes.',
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
        {
          type: 'button',
          attrs: {
            text: 'LOG IN',
            isTextVariable: false,
            url: '',
            isUrlVariable: false,
            alignment: 'center',
            variant: 'filled',
            borderRadius: 6,
            buttonColor: '#ffffff',
            textColor: '#000000',
            showIfKey: null,
            paddingTop: 10,
            paddingRight: 32,
            paddingBottom: 10,
            paddingLeft: 32,
          },
        },
        {
          type: 'section',
          attrs: {
            borderRadius: 0,
            backgroundColor: '',
            align: 'left',
            borderWidth: 0,
            borderColor: '',
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
            showIfKey: null,
          },
          content: [
            {
              type: 'spacer',
              attrs: {
                height: 32,
                showIfKey: null,
              },
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
                      type: 'textStyle',
                      attrs: {
                        color: '#ffffff',
                      },
                    },
                  ],
                  text: 'Confirming this request',
                },
                {
                  type: 'text',
                  text: ' will securely log you in using hiro@magic.link',
                },
              ],
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
        {
          type: 'section',
          attrs: {
            borderRadius: 6,
            backgroundColor: '#1d1d1d',
            align: 'left',
            borderWidth: 0,
            borderColor: '#e2e2e2',
            paddingTop: 32,
            paddingRight: 32,
            paddingBottom: 32,
            paddingLeft: 32,
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
                  text: 'This login was requested using ',
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
                  text: 'Chrome',
                },
                {
                  type: 'text',
                  text: ' on ',
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
                  text: 'MacOS',
                },
                {
                  type: 'text',
                  text: ' at ',
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
                  text: '08:02:45 PDT on Dec 09, 2021',
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
                  text: 'Not you? ',
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
                  text: 'Report a suspicious login',
                },
              ],
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
      ],
    },
  },
  // Review
  {
    subject: 'Alex Reviewed You on Airbnb!',
    content: {
      type: 'doc',
      content: [
        {
          type: 'image',
          attrs: {
            src: `${process.env.GATSBY_DEFAULT_SITE_URL}/images/airbnb-logo.svg`,
            alt: null,
            title: null,
            width: 130,
            height: 65,
            alignment: 'left',
            externalLink: null,
            isExternalLinkVariable: false,
            isSrcVariable: false,
            showIfKey: null,
          },
        },
        {
          type: 'image',
          attrs: {
            src: `${process.env.GATSBY_DEFAULT_SITE_URL}/images/person.svg`,
            alt: null,
            title: null,
            width: 101,
            height: 101,
            alignment: 'center',
            externalLink: null,
            isExternalLinkVariable: false,
            isSrcVariable: false,
            showIfKey: null,
          },
        },
        {
          type: 'heading',
          attrs: {
            textAlign: 'left',
            level: 3,
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: 'rgb(255, 255, 255)',
                  },
                },
                {
                  type: 'bold',
                },
              ],
              text: "Here's what Alex wrote",
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 16,
            showIfKey: null,
          },
        },
        {
          type: 'section',
          attrs: {
            borderRadius: 6,
            backgroundColor: '#1d1d1d',
            align: 'left',
            borderWidth: 0,
            borderColor: '#e2e2e2',
            paddingTop: 32,
            paddingRight: 32,
            paddingBottom: 32,
            paddingLeft: 32,
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
                  text: '"Alan was a great guest! Easy communication, the apartment was left in great condition, very polite, and respectful of all house rules. He\'s welcome back anytime and would easily recommend him to any host!"',
                },
              ],
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
              text: 'Now that the review period is over, we’ve posted Alex’s review to your Airbnb profile.',
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
              text: 'While it’s too late to write a review of your own, you can send your feedback to Alex using your Airbnb message thread.',
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
        {
          type: 'button',
          attrs: {
            text: 'SEND MY FEEDBACK',
            isTextVariable: false,
            url: '',
            isUrlVariable: false,
            alignment: 'center',
            variant: 'filled',
            borderRadius: 'smooth',
            buttonColor: '#ffffff',
            textColor: '#000000',
            showIfKey: null,
            paddingTop: 10,
            paddingRight: 32,
            paddingBottom: 10,
            paddingLeft: 32,
          },
        },
        {
          type: 'section',
          attrs: {
            borderRadius: 0,
            backgroundColor: '',
            align: 'left',
            borderWidth: 0,
            borderColor: '',
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
            showIfKey: null,
          },
          content: [
            {
              type: 'spacer',
              attrs: {
                height: 32,
                showIfKey: null,
              },
            },
            {
              type: 'horizontalRule',
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
              text: 'Common questions',
            },
          ],
        },
        {
          type: 'bulletList',
          content: [
            {
              type: 'listItem',
              attrs: {
                color: null,
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
                          type: 'textStyle',
                          attrs: {
                            color: '#d6d6d6',
                          },
                        },
                      ],
                      text: 'How do reviews work?',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              attrs: {
                color: null,
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
                          type: 'textStyle',
                          attrs: {
                            color: '#d6d6d6',
                          },
                        },
                      ],
                      text: 'How do star ratings work?',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              attrs: {
                color: null,
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
                          type: 'textStyle',
                          attrs: {
                            color: '#d6d6d6',
                          },
                        },
                      ],
                      text: 'Can I leave a review after 14 days?',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'horizontalRule',
        },
        {
          type: 'spacer',
          attrs: {
            height: 8,
            showIfKey: null,
          },
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'center',
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#6e6e6e',
                  },
                },
              ],
              text: 'Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103',
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
      ],
    },
  },
  // Review a recent login from a new device
  {
    subject: 'Was This You? Recent Login',
    content: {
      type: 'doc',
      content: [
        {
          type: 'image',
          attrs: {
            src: 'http://localhost:8000/images/launchDarkly-logo.svg',
            alt: null,
            title: null,
            width: 215,
            height: 32.89179104477612,
            alignment: 'left',
            externalLink: null,
            isExternalLinkVariable: false,
            isSrcVariable: false,
            showIfKey: null,
          },
        },
        {
          type: 'heading',
          attrs: {
            textAlign: 'left',
            level: 2,
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              marks: [
                {
                  type: 'textStyle',
                  attrs: {
                    color: '#ffffff',
                  },
                },
                {
                  type: 'bold',
                },
              ],
              text: 'Review a recent login from a new device',
            },
          ],
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'left',
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              text: 'A recent login to your account was made. Please review the details:',
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
        {
          type: 'section',
          attrs: {
            borderRadius: 8,
            backgroundColor: '#202020',
            align: 'left',
            borderWidth: 0,
            borderColor: '#e2e2e2',
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
                      type: 'textStyle',
                      attrs: {
                        color: '#ffffff',
                      },
                    },
                    {
                      type: 'bold',
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
                      type: 'textStyle',
                      attrs: {
                        color: '#ffffff',
                      },
                    },
                    {
                      type: 'bold',
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
                  text: 'Upland, California, United States',
                },
              ],
            },
          ],
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
        {
          type: 'button',
          attrs: {
            text: 'GO TO MY ACCOUNT',
            isTextVariable: false,
            url: '',
            isUrlVariable: false,
            alignment: 'center',
            variant: 'filled',
            borderRadius: 6,
            buttonColor: '#ffffff',
            textColor: '#000000',
            showIfKey: null,
            paddingTop: 10,
            paddingRight: 32,
            paddingBottom: 10,
            paddingLeft: 32,
          },
        },
        {
          type: 'spacer',
          attrs: {
            height: 32,
            showIfKey: null,
          },
        },
        {
          type: 'paragraph',
          attrs: {
            textAlign: 'left',
            showIfKey: null,
          },
          content: [
            {
              type: 'text',
              text: "If this wasn't you, reset your password and enable multi-factor authentication in ",
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
              text: 'Settings',
            },
            {
              type: 'text',
              text: ' > ',
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
              text: 'My Account',
            },
            {
              type: 'text',
              text: '.  For help, visit our support page.',
            },
          ],
        },
      ],
    },
  },
];

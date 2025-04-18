import AddedIcon from './images/added.inline.svg';
import aliceAvatar from './images/alice.png';
import AssignedIcon from './images/assigned.inline.svg';
import completeIcon from './images/complete.svg';
import CompletedIcon from './images/completed.inline.svg';
import cubeIcon from './images/cube.svg';
import danielAvatar from './images/daniel.png';
import evanClarkAvatar from './images/evan-clark.jpg';
import joeAvatar from './images/joe-avatar.jpg';
import johnDoeAvatar from './images/john-doe.jpg';
import MentionedIcon from './images/mentioned.inline.svg';
import oliverJamesAvatar from './images/oliver-james.jpg';
import rayAvatar from './images/ray.png';
import RepliedIcon from './images/replied.inline.svg';
import rhombIcon from './images/rhomb.svg';
import yellowHalfCircleIcon from './images/yellow-half-circle.svg';

const inboxData = [
  {
    theme: 'novuDark',
    title: 'Novu dark',
    categories: ['All', 'Projects', 'Announcements'],
    messages: [
      {
        category: 'Projects',
        title: 'Your account is pending verification.',
        mail: 'steve@acme.co',
        text: 'is pending verification, please verify your account to protect against fraud and abuse.',
        date: 'Today at 7:41 AM',
        isRead: false,
        buttons: ['Verify now'],
      },
      {
        category: 'Announcements',
        title: 'Joe requested to view Q4 2024 report.',
        mail: 'joe@acme.co',
        text: 'requested view access to Q4 2024 report.',
        date: 'Last Friday at 8:40 PM',
        isRead: false,
        avatar: joeAvatar,
        buttons: ['Verify now', 'Deny'],
      },
      {
        category: 'Projects',
        title: '2 new comments from Radek and Dima.',
        text: 'You have 2 new comments on the Acme figma file.',
        date: 'Last Monday at 13:45 PM',
        isRead: false,
      },
      {
        category: 'Projects',
        title: 'Your account is pending verification.',
        mail: 'steve@acme.co',
        text: 'is pending verification, please verify your account to protect against fraud and abuse.',
        date: 'Today at 7:41 AM',
        isRead: false,
        buttons: ['Verify now'],
      },
      {
        category: 'Announcements',
        title: 'Joe requested to view Q4 2024 report.',
        mail: 'joe@acme.co',
        text: 'requested view access to Q4 2024 report.',
        date: 'Last Friday at 8:40 PM',
        isRead: false,
        avatar: joeAvatar,
        buttons: ['Verify now', 'Deny'],
      },
      {
        category: 'Projects',
        title: '2 new comments from Radek and Dima.',
        text: 'You have 2 new comments on the Acme figma file.',
        date: 'Last Monday at 13:45 PM',
        isRead: false,
      },
    ],
  },
  {
    theme: 'novuLight',
    title: 'Novu Light',
    categories: ['All', 'Projects', 'Announcements'],
    messages: [
      {
        category: 'Projects',
        title: 'Your account is pending verification.',
        mail: 'steve@acme.co',
        text: 'is pending verification, please verify your account to protect against fraud and abuse.',
        date: 'Today at 7:41 AM',
        isRead: false,
        buttons: ['Verify now'],
      },
      {
        category: 'Announcements',
        title: 'Joe requested to view Q4 2024 report.',
        mail: 'joe@acme.co',
        text: 'requested view access to Q4 2024 report.',
        date: 'Last Friday at 8:40 PM',
        isRead: false,
        avatar: joeAvatar,
        buttons: ['Verify now', 'Deny'],
      },
      {
        category: 'Projects',
        title: '2 new comments from Radek and Dima.',
        text: 'You have 2 new comments on the Acme figma file.',
        date: 'Last Monday at 13:45 PM',
        isRead: false,
      },
      {
        category: 'Projects',
        title: 'Your account is pending verification.',
        mail: 'steve@acme.co',
        text: 'is pending verification, please verify your account to protect against fraud and abuse.',
        date: 'Today at 7:41 AM',
        isRead: false,
        buttons: ['Verify now'],
      },
      {
        category: 'Announcements',
        title: 'Joe requested to view Q4 2024 report.',
        mail: 'joe@acme.co',
        text: 'requested view access to Q4 2024 report.',
        date: 'Last Friday at 8:40 PM',
        isRead: false,
        avatar: joeAvatar,
        buttons: ['Verify now', 'Deny'],
      },
      {
        category: 'Projects',
        title: '2 new comments from Radek and Dima.',
        text: 'You have 2 new comments on the Acme figma file.',
        date: 'Last Monday at 13:45 PM',
        isRead: false,
      },
    ],
  },
  {
    theme: 'notionDark',
    title: 'Notion dark',
    messages: [
      {
        title: 'Project Page',
        subtitle: 'commented in',
        text: 'Hey team! To improve clarity, I suggest adding priority labels, a recurring meeting schedule, and clearer task dependencies-thoughts',
        date: '1h',
        isRead: false,
        authors: [
          {
            name: 'John Doe',
            avatar: johnDoeAvatar,
          },
        ],
      },
      {
        title: 'Weekly plan',
        subtitle: 'mentioned you in',
        text: 'For this week’s plan, how about adding a quick progress tracker and a notes section for any blockers?',
        date: '2h',
        isRead: false,
        authors: [
          {
            name: 'Oliver James',
            avatar: oliverJamesAvatar,
          },
          {
            name: 'Evan Clark',
            avatar: evanClarkAvatar,
          },
        ],
      },
      {
        title: 'Project Page',
        subtitle: 'commented in',
        text: 'Hey team! To improve clarity, I suggest adding priority labels, a recurring meeting schedule, and clearer task dependencies-thoughts',
        date: '1h',
        isRead: false,
        authors: [
          {
            name: 'John Doe',
            avatar: johnDoeAvatar,
          },
        ],
      },
    ],
  },
  {
    theme: 'notionLight',
    title: 'Notion light',
    messages: [
      {
        title: 'Project Page',
        subtitle: 'commented in',
        text: 'Hey team! To improve clarity, I suggest adding priority labels, a recurring meeting schedule, and clearer task dependencies-thoughts',
        date: '1h',
        isRead: false,
        authors: [
          {
            name: 'John Doe',
            avatar: johnDoeAvatar,
          },
        ],
      },
      {
        title: 'Weekly plan',
        subtitle: 'mentioned you in',
        text: 'For this week’s plan, how about adding a quick progress tracker and a notes section for any blockers?',
        date: '2h',
        isRead: false,
        authors: [
          {
            name: 'Oliver James',
            avatar: oliverJamesAvatar,
          },
          {
            name: 'Evan Clark',
            avatar: evanClarkAvatar,
          },
        ],
      },
      {
        title: 'Project Page',
        subtitle: 'commented in',
        text: 'Hey team! To improve clarity, I suggest adding priority labels, a recurring meeting schedule, and clearer task dependencies-thoughts',
        date: '1h',
        isRead: false,
        authors: [
          {
            name: 'John Doe',
            avatar: johnDoeAvatar,
          },
        ],
      },
    ],
  },
  {
    theme: 'linearDark',
    title: 'Linear Dark',
    messages: [
      {
        title: 'Update youtube block preview',
        actionType: 'mentioned you in project',
        avatarIcon: MentionedIcon,
        additionalText: '',
        date: '38min',
        dateIcon: cubeIcon,
        isRead: false,
        authors: [
          {
            name: 'Daniel',
            avatar: danielAvatar,
          },
        ],
      },
      {
        title: 'Ensure compatibility with the mobile app and the web version.',
        actionType: 'assigned to you',
        avatarIcon: AssignedIcon,
        additionalText: '',
        date: '2h',
        dateIcon: yellowHalfCircleIcon,
        isRead: false,
        authors: [
          {
            name: 'Ray',
            avatar: rayAvatar,
          },
        ],
      },
      {
        title: 'Refactor user authentication flow',
        actionType: 'marked as completed',
        avatarIcon: CompletedIcon,
        additionalText: '',
        date: '1h',
        dateIcon: completeIcon,
        isRead: true,
        authors: [
          {
            name: 'Daniel',
            avatar: danielAvatar,
          },
        ],
      },
      {
        title: 'Create a new design for the hero section for i,mproving user engagement.',
        actionType: 'replied:',
        avatarIcon: RepliedIcon,
        additionalText: 'Love it!',
        date: '3h',
        dateIcon: completeIcon,
        isRead: true,
        authors: [
          {
            name: 'Alice',
            avatar: aliceAvatar,
          },
        ],
      },
      {
        title: 'Replace current cookie-based authentication with JWT tokens for enhanced security.',
        actionType: 'added you to project',
        avatarIcon: AddedIcon,
        additionalText: '',
        date: '13h',
        dateIcon: cubeIcon,
        isRead: false,
        authors: [
          {
            name: 'Daniel',
            avatar: danielAvatar,
          },
        ],
      },
      {
        title: 'User Testing Phase Start',
        actionType: 'mentioned you in project',
        avatarIcon: MentionedIcon,
        additionalText: 'milestone',
        date: '12h',
        dateIcon: rhombIcon,
        isRead: true,
        authors: [
          {
            name: 'Ray',
            avatar: rayAvatar,
          },
        ],
      },
    ],
  },
  {
    theme: 'linearLight',
    title: 'Linear Light',
    messages: [
      {
        title: 'Update youtube block preview',
        actionType: 'mentioned you in project',
        avatarIcon: MentionedIcon,
        additionalText: '',
        date: '38min',
        dateIcon: cubeIcon,
        isRead: false,
        authors: [
          {
            name: 'Daniel',
            avatar: danielAvatar,
          },
        ],
      },
      {
        title: 'Ensure compatibility with the mobile app and the web version.',
        actionType: 'assigned to you',
        avatarIcon: AssignedIcon,
        additionalText: '',
        date: '2h',
        dateIcon: yellowHalfCircleIcon,
        isRead: false,
        authors: [
          {
            name: 'Ray',
            avatar: rayAvatar,
          },
        ],
      },
      {
        title: 'Refactor user authentication flow',
        actionType: 'marked as completed',
        avatarIcon: CompletedIcon,
        additionalText: '',
        date: '1h',
        dateIcon: completeIcon,
        isRead: true,
        authors: [
          {
            name: 'Daniel',
            avatar: danielAvatar,
          },
        ],
      },
      {
        title: 'Create a new design for the hero section for i,mproving user engagement.',
        actionType: 'replied:',
        avatarIcon: RepliedIcon,
        additionalText: 'Love it!',
        date: '3h',
        dateIcon: completeIcon,
        isRead: true,
        authors: [
          {
            name: 'Alice',
            avatar: aliceAvatar,
          },
        ],
      },
      {
        title: 'Replace current cookie-based authentication with JWT tokens for enhanced security.',
        actionType: 'added you to project',
        avatarIcon: AddedIcon,
        additionalText: '',
        date: '13h',
        dateIcon: cubeIcon,
        isRead: false,
        authors: [
          {
            name: 'Daniel',
            avatar: danielAvatar,
          },
        ],
      },
      {
        title: 'User Testing Phase Start',
        actionType: 'mentioned you in project',
        avatarIcon: MentionedIcon,
        additionalText: 'milestone',
        date: '12h',
        dateIcon: rhombIcon,
        isRead: true,
        authors: [
          {
            name: 'Ray',
            avatar: rayAvatar,
          },
        ],
      },
    ],
  },
];

export default inboxData;

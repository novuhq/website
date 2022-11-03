import ainouzGali from '../images/ainouz-gali.jpg';
import davidSoderberg from '../images/david-soderberg.jpg';
import mrNewbie from '../images/mr-newbie.jpg';
import tylerDurden from '../images/tyler-durden.jpg';

const ACHIEVEMENT_PERSONAL = [
  {
    iconName: 'rockStar',
    title: 'Rock Star',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      {
        userName: 'davidsoderberg',
        avatar: davidSoderberg,
        url: '/',
        lastActivity: '1d ago',
      },
      {
        userName: 'mrnewbie',
        avatar: mrNewbie,
        url: '/',
        lastActivity: '2d ago',
      },
      {
        userName: 'tylerdurden',
        avatar: tylerDurden,
        url: '/',
        lastActivity: '3d ago',
      },
      {
        userName: 'ainouzgali',
        avatar: ainouzGali,
        url: '/',
        lastActivity: '4d ago',
      },
    ],
  },
  {
    iconName: 'contributorOfTheYear',
    title: 'Contributor of the year',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      {
        userName: 'davidsoderberg',
        avatar: davidSoderberg,
        url: '/',
        lastActivity: '1d ago',
      },
      {
        userName: 'mrnewbie',
        avatar: mrNewbie,
        url: '/',
        lastActivity: '2d ago',
      },
    ],
  },
  {
    iconName: 'contributorOfTheMonth',
    title: 'Contributor of the month',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      {
        userName: 'davidsoderberg',
        avatar: davidSoderberg,
        url: '/',
        lastActivity: '1d ago',
      },
      {
        userName: 'mrnewbie',
        avatar: mrNewbie,
        url: '/',
        lastActivity: '2d ago',
      },
      {
        userName: 'tylerdurden',
        avatar: tylerDurden,
        url: '/',
        lastActivity: '3d ago',
      },
    ],
  },
  {
    iconName: 'reporterStar',
    title: 'Star Reporter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      {
        userName: 'tylerdurden',
        avatar: tylerDurden,
        url: '/',
        lastActivity: '3d ago',
      },
    ],
  },
  {
    iconName: 'teamPlayer',
    title: 'Team Player',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    users: [
      {
        userName: 'davidsoderberg',
        avatar: davidSoderberg,
        url: '/',
        lastActivity: '1d ago',
      },
      {
        userName: 'mrnewbie',
        avatar: mrNewbie,
        url: '/',
        lastActivity: '2d ago',
      },
      {
        userName: 'tylerdurden',
        avatar: tylerDurden,
        url: '/',
        lastActivity: '3d ago',
      },
      {
        userName: 'ainouzgali',
        avatar: ainouzGali,
        url: '/',
        lastActivity: '4d ago',
      },
      {
        userName: 'mrnewbie',
        avatar: mrNewbie,
        url: '/',
        lastActivity: '2d ago',
      },
      {
        userName: 'tylerdurden',
        avatar: tylerDurden,
        url: '/',
        lastActivity: '3d ago',
      },
    ],
  },
];

const ACHIEVEMENT_MEDALS = [
  {
    iconName: 'goldMedal',
    title: 'Gold Medal',
    starsMax: 2000,
    starsMin: 7,
    description:
      'This medal is given to the experienced contributors only, with many thanks from the whole Novu team!',
    users: [
      {
        userName: 'davidsoderberg',
        avatar: davidSoderberg,
        url: '/',
        lastActivity: '1d ago',
      },
      {
        userName: 'mr-newbie',
        avatar: mrNewbie,
        url: '/',
        lastActivity: '2d ago',
      },
      {
        userName: 'tyler-durden',
        avatar: tylerDurden,
        url: '/',
        lastActivity: '3d ago',
      },
    ],
  },
  {
    iconName: 'silverMedal',
    title: 'Silver Medal',
    starsMin: 3,
    starsMax: 6,
    description:
      'This one is held by the people who made at least three PRs to make Novu better. Way to go!',
    users: [
      {
        userName: 'davidsoderberg',
        avatar: davidSoderberg,
        url: '/',
        lastActivity: '1d ago',
      },
      {
        userName: 'mr-newbie',
        avatar: mrNewbie,
        url: '/',
        lastActivity: '2d ago',
      },
    ],
  },
  {
    iconName: 'bronzeMedal',
    title: 'Bronze Medal',
    starsMin: 1,
    starsMax: 2,
    description: `This medal is a great start of your relationship with the Novu project. Don't stop there!`,
    users: [
      {
        userName: 'ainouzgali',
        avatar: ainouzGali,
        url: '/',
        lastActivity: '4d ago',
      },
    ],
  },
];

export { ACHIEVEMENT_PERSONAL, ACHIEVEMENT_MEDALS };

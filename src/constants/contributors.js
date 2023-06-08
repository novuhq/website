const ACHIEVEMENTS = [
  // {
  //   iconName: 'rockStar',
  //   title: 'Contributor of the month',
  //   date: 'Last: April 2022',
  //   count: 1,
  // },
  // {
  //   iconName: 'contributorOfTheYear',
  //   title: 'Contributor of the year',
  //   tooltip:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
  //   date: null,
  //   count: 0,
  // },
  // {
  //   iconName: 'contributorOfTheMonth',
  //   title: 'Contributor of the month',
  //   date: 'April 2022',
  //   count: 1,
  // },
  // {
  //   iconName: 'reporterStar',
  //   title: 'Star Reporter',
  //   tooltip:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
  //   date: null,
  //   count: 0,
  // },
  // {
  //   iconName: 'teamPlayer',
  //   title: 'Team Player',
  //   date: null,
  //   count: 1,
  // },
  {
    iconName: 'goldMedal',
    title: 'Gold Medal',
    image: 'https://novu.co/static/0fa29e2bd41d3e8a743850f444714461/b8d20/gold-medal.webp',
    tooltip:
      'This medal is given to the experienced contributors with many thanks from the Novu team.',
    date: null,
    count: 0,
    minStars: 7,
  },
  {
    iconName: 'silverMedal',
    title: 'Silver Medal',
    image: 'https://novu.co/static/6ed181b6a26c6559bba02be6bc4425ef/b8d20/silver-medal.webp',
    tooltip: 'This one is held by the people who made at least three PRs to make Novu better.',
    date: 'April 2022',
    count: 1,
    minStars: 3,
  },
  {
    iconName: 'bronzeMedal',
    title: 'Bronze Medal',
    image: 'https://novu.co/static/220891bac32daa9d1ba5206d31c969b0/b8d20/bronze-medal.webp',
    tooltip: 'This medal is a great start of your relationship with the Novu project.',
    date: 'April 2022',
    count: 1,
    minStars: 1,
  },
];

module.exports = {
  ACHIEVEMENTS,
};

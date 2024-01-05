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
    iconName: "goldMedal",
    title: "Gold Medal",
    image: "https://novu.co/images/gold-medal.png",
    tooltip:
      "This medal is given to the experienced contributors with many thanks from the Novu team.",
    date: null,
    count: 0,
    minStars: 7,
  },
  {
    iconName: "silverMedal",
    title: "Silver Medal",
    image: "https://novu.co/images/silver-medal.png",
    tooltip:
      "This one is held by the people who made at least three PRs to make Novu better.",
    date: "April 2022",
    count: 1,
    minStars: 3,
  },
  {
    iconName: "bronzeMedal",
    title: "Bronze Medal",
    image: "https://novu.co/images/bronze-medal.png",
    tooltip:
      "This medal is a great start of your relationship with the Novu project.",
    date: "April 2022",
    count: 1,
    minStars: 1,
  },
];

export default ACHIEVEMENTS;

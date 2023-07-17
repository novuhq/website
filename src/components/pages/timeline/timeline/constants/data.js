const data = [
  // Jan
  {
    date: '2022-01-01',
    title: 'Company officially started operation',
    description:
      'Our mission is to Simplify meaningful communication between companies and their customers. Our vision is to Build a community-driven open-source set of tools for developers to improve product-to-customer communication.',
    iconName: 'check',
  },
  {
    date: '2022-01-06',
  },
  {
    date: '2022-01-14',
  },
  {
    date: '2022-01-18',
    title: 'George and Gali Joined!',
    iconName: 'user',
  },
  {
    date: '2022-01-20',
  },
  {
    date: '2022-01-28',
  },
  // Feb
  {
    date: '2022-02-01',
    title: 'Seed funding finalized $6.6M',
    description:
      'Following the engineering community traction, Novu has secured a seed funding to further support our growth and build an amazing team of individuals to help us get there.',
    iconName: 'check',
  },
  {
    date: '2022-02-06',
    title: '3,246 Stars',
    iconName: 'github',
  },
  {
    date: '2022-02-14',
    title: 'Emil and Tamar Joined!',
    iconName: 'user',
  },
  {
    date: '2022-02-18',
  },
  {
    date: '2022-02-22',
  },
  {
    date: '2022-02-28',
  },
  // Mar
  {
    date: '2022-03-01',
    title: 'Novu is “The first Open-Source Notification Infrastructure”',
    iconName: 'check',
  },
  {
    date: '2022-03-06',
    title: 'Nevo Joined!',
    iconName: 'user',
  },
  {
    date: '2022-03-14',
  },
  {
    date: '2022-03-23',
    title: 'Silent product launch',
    iconName: 'mutted',
  },
  {
    date: '2022-03-25',
    title: '3,368 Stars',
    iconName: 'github',
  },
  {
    date: '2022-03-28',
    title: 'Nordle event',
    description:
      'We started as Noti-fire and soon decided to change our name. After a process of rebranding, we engaged our community in a Wordle type event with a competition to try and guess our new name! ended up sending cool swag to 70 happy winners!',
    iconName: 'lightning',
  },
  {
    date: '2022-03-31',
    title: 'David Joined!',
    iconName: 'user',
  },
  // Apr
  {
    date: '2022-04-05',
    title: 'Start working on Push and Direct',
    iconName: 'box',
  },
  {
    date: '2022-04-10',
    title: 'A live event got us new followers',
    iconName: 'twitter',
  },
  {
    date: '2022-04-16',
  },
  {
    date: '2022-04-25',
    title: 'Company Handbook released to public view',
    description:
      'One of our core values in Novu is transparency, that is why our handbook is public and contains a lot of information about who we are and how we operate. It is a living space for employees to get information, create different requests and share ideas.',
    iconName: 'bookmark',
  },
  {
    date: '2022-04-27',
    title: 'Working on the Workflow Editor',
    iconName: 'code',
  },
  {
    date: '2022-04-28',
    title: '3,531 Stars',
    iconName: 'github',
  },
  {
    date: '2022-04-30',
    title: 'Employee swag kit',
    iconName: 'swag',
  },
  {
    date: '2022-04-31',
    title: 'Omer Joined!',
    iconName: 'user',
  },
  // May
  {
    date: '2022-05-02',
    title: 'Released the first stable version (0.4.0)',
    description:
      'This is the first time we introduced the term Notification Infrastructure based on our community suggestion. This version included many items, all of them together is building the full infrastructure, that includes: Novu API, Notification management web interface, Notification Center API, Multi Environment Support, Integration Store, and many more.',
    iconName: 'shine',
  },
  {
    date: '2022-05-08',
  },
  {
    date: '2022-05-11',
    title: 'PR announcement of the Seed funding',
    iconName: 'speaker',
  },
  {
    date: '2022-05-16',
    title: 'Community Heroes Launched',
    description:
      'Novu is being built for developers using the incredible power of the community! With Community Heroes, contributors get badges and medals for taking part in making novu awesome. They can share their achivements in social media as they move up the ranks of the heroes program.',
    iconName: 'airplane',
  },
  {
    date: '2022-05-28',
  },
  {
    date: '2022-05-31',
  },
  // Jun
  {
    date: '2022-06-01',
    title: 'Publish our benefits plan',
    iconName: 'airplane',
  },
  {
    date: '2022-06-06',
  },
  {
    date: '2022-06-16',
    title: '3,839 Stars',
    iconName: 'github',
  },
  {
    date: '2022-06-27',
    title: 'Launch the first Shape Up cycle',
    iconName: 'airplane',
  },
  {
    date: '2022-06-28',
    title: 'V 0.5.0 release party',
    description:
      'We had a release party with our community celebrating a big release including first version of the newly designed Notification Template Editor allowing ease of use while crating notifications, fully refactored backend trigger engine with better scalability and more modularity for future updates.',
    iconName: 'ballon',
  },
  {
    date: '2022-06-30',
  },
  // Jul
  {
    date: '2022-07-01',
  },
  {
    date: '2022-07-10',
    title: 'Novu podcast',
    iconName: 'airplane',
  },
  {
    date: '2022-07-11',
    title: '130K Notification Sent',
    iconName: 'airplane',
  },
  {
    date: '2022-07-16',
    title: '4,756 Stars',
    iconName: 'github',
  },
  {
    date: '2022-07-25',
    title: 'Started working in Gather',
    iconName: 'box',
  },
  {
    date: '2022-07-30',
    title: '4,924 Stars',
    iconName: 'github',
  },
  // Aug
  {
    date: '2022-08-02',
  },
  {
    date: '2022-08-15',
    title: 'Started Compliance process',
    iconName: 'box',
  },
  {
    date: '2022-08-20',
    title: '8,652 Stars',
    iconName: 'github',
  },
  {
    date: '2022-08-24',
    title: 'First live release event v 0.7.0',
    iconName: 'bookmark',
  },
  {
    date: '2022-08-27',
    title: 'Released company-wide roadmap',
    description:
      'As part of establishing a process of goal setting and accountability in the company, and after a lot of work we released our company roadmap for the first time in August. This is a continious journy of planning ahead, learning, and improving as we go.',
    iconName: 'airplane',
  },
  {
    date: '2022-08-28',
    title: '9,548 Stars',
    iconName: 'github',
  },
  {
    date: '2022-08-30',
    title: 'Biswajeet Joined!',
    iconName: 'user',
  },
  // Sep
  {
    date: '2022-09-01',
  },
  {
    date: '2022-09-08',
    title: 'First Company Offsite',
    description:
      'As an all-remote global company, we decided to have a company offsite once a year somewhere in the world. The first offsite was a week long, in Cyprus, where we had the chance to connect as people, and work together on some broad and high level company topics.',
    iconName: 'lightning',
  },
  {
    date: '2022-09-12',
    title: 'Pablo Joined!',
    iconName: 'user',
  },
  {
    date: '2022-09-18',
  },
  {
    date: '2022-09-24',
  },
  {
    date: '2022-09-30',
  },
  // Oct
  {
    date: '2022-10-01',
    title: 'Hacktoberfest and Hacksquad events',
    description:
      'The greates annual event for the open source community, that we are proud to be part of! That was the first year we partecipated in Hacktoberfest and had a chance to grow our community and create some cool stuff. We also had our second year of Hacksquad, a friendly contribution competition hosted by Novu and sponsored by Medusa, Amplication, and ToolJet.',
    iconName: 'shine',
  },
  {
    date: '2022-10-03',
    title: '10K stars in GH',
    description:
      'Crushed our goal to reach 10K stars in GitHub 9 month ahead of deadline! since then we have adjusted our metrical goals, keeping them motivating and ambitious.',
    iconName: 'github',
  },
  {
    date: '2022-10-09',
  },
  {
    date: '2022-10-10',
    title: '11,881 Stars',
    iconName: 'github',
  },
  {
    date: '2022-10-16',
  },
  {
    date: '2022-10-26',
  },
  {
    date: '2022-10-31',
    title: 'Hacksquad signups +4000',
    iconName: 'check',
  },
  // Nov
  {
    date: '2022-11-01',
    title: 'Pawel Joined!',
    iconName: 'user',
  },
  {
    date: '2022-11-07',
    title: 'Start implementing Data analytics',
    iconName: 'box',
  },
  {
    date: '2022-11-15',
    title: 'Review Metric and Goals and create new Roadmap for 2023',
    iconName: 'shine',
  },
  {
    date: '2022-11-17',
    title: '13,740 Stars',
    iconName: 'github',
  },
  {
    date: '2022-11-22',
    title: 'Live release event v 0.9.0',
    iconName: 'bookmark',
  },
  {
    date: '2022-11-28',
  },
  {
    date: '2022-11-30',
  },
  // Dec
  {
    date: '2022-12-01',
  },
  {
    date: '2022-12-06',
    title: 'DevRevCon Prague',
    iconName: 'ballon',
  },
  {
    date: '2022-12-08',
    title: '14,739 Stars',
    iconName: 'github',
  },
  {
    date: '2022-12-12',
    title: 'Re-ignite work on the Notifications Directory',
    description:
      'Cool and big project to show uses cases on how to use Novu and let users implement it in the system. A joined effort of Marketing and product department.',
    iconName: 'box',
  },
  {
    date: '2022-12-18',
    title: 'Public Product Roadmap',
    iconName: 'airplane',
  },
  {
    date: '2022-12-22',
    title: '16,000 Stars',
    iconName: 'github',
  },
  {
    date: '2022-12-28',
  },
  {
    date: '2022-12-31',
  },
  // Jan
  {
    date: '2023-01-01',
    custom: true,
  },
  {
    date: '2023-01-04',
  },
  {
    date: '2023-01-12',
  },
  {
    date: '2023-01-20',
  },
  {
    date: '2023-01-24',
  },
  {
    date: '2023-01-31',
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TIMELINE_DATA = data.reduce((acc, item) => {
  const month = MONTHS[parseInt(item.date.split('-')[1]) - 1];
  const year = item.date.split('-')[0];
  const day =
    item.date.split('-')[2][0] === '0' ? item.date.split('-')[2][1] : item.date.split('-')[2];

  const dateIndex = acc.findIndex((m) => m.month === month && m.year === year);
  if (dateIndex === -1) {
    acc.push({
      month,
      year,
      custom: item?.custom || false,
      events: [
        {
          day,
          items: [item],
        },
      ],
    });
  } else {
    const dayIndex = acc[dateIndex].events.findIndex((d) => d.day === day);
    if (dayIndex === -1) {
      acc[dateIndex].events.push({
        day,
        items: [item],
      });
    } else {
      acc[dateIndex].events[dayIndex].items.push(item);
    }
  }
  return acc;
}, []);

const ACTIVE_DATE = TIMELINE_DATA[0].events[0].items[0].date;

export { TIMELINE_DATA, ACTIVE_DATE };

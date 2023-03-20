const data = [
  // Jan
  {
    date: '2019-01-01',
    title: 'Company officially started operation',
    description:
      'Our mission is to Simplify meaningful communication between companies and their customers. Our vision is to Build a community-driven open-source set of tools for developers to improve product-to-customer communication.',
    iconName: 'check',
  },
  {
    date: '2019-01-06',
  },
  {
    date: '2019-01-14',
  },
  {
    date: '2019-01-18',
    title: 'George and Gali Joined!',
    iconName: 'user',
  },
  {
    date: '2019-01-20',
  },
  {
    date: '2019-01-28',
  },
  // Feb
  {
    date: '2019-02-01',
    title: 'Seed funding finalized $6.6M',
    description:
      'Following the engineering community traction we had, Novu has secured our seed funding to further support our growth and build an amazing team of individuals to help us get there.',
    iconName: 'check',
  },
  {
    date: '2019-02-06',
    title: '3,246 Stars',
    iconName: 'github',
  },
  {
    date: '2019-02-14',
    title: 'Emil and Tamar Joined!',
    iconName: 'user',
  },
  {
    date: '2019-02-18',
  },
  {
    date: '2019-02-22',
  },
  {
    date: '2019-02-28',
  },
  // Mar
  {
    date: '2019-03-01',
    title: 'Novu is “The first Open-Source Notification Infrastructure”',
    iconName: 'check',
  },
  {
    date: '2019-03-06',
    title: 'Nevo Joined!',
    iconName: 'user',
  },
  {
    date: '2019-03-14',
    title: '3,368 Stars',
    iconName: 'github',
  },
  {
    date: '2019-03-18',
    title: 'David Joined!',
    iconName: 'user',
  },
  {
    date: '2019-03-23',
    title: 'Silent product launch',
    iconName: 'speaker',
  },
  {
    date: '2019-03-28',
    title: 'Nordle event',
    description:
      'We started as Noti-fire and soon decided to change our name. After a process of rebranding, we engaged our community in a Wordle type event with a competition to try and guess our new name! ended up sending cool swag to 70 happy winners!',
    iconName: 'lightning',
  },
  // Apr
  {
    date: '2019-04-05',
    title: 'Start working on Push and Direct',
    iconName: 'box',
  },
  {
    date: '2019-04-10',
    title: 'A live event got us new followers',
    iconName: 'twitter',
  },
  {
    date: '2019-04-16',
  },
  {
    date: '2019-04-25',
    title: 'Company Handbook released to public',
    description:
      'One of our core values in Novu is transparency, that is why our handbook is public and containd a lot of information about who we are and how we operate. It is a living space for employees to get information, create different requests and share ideas.',
    iconName: 'bookmark',
  },
  {
    date: '2019-04-26',
    title: '3,531 Stars',
    iconName: 'github',
  },
  {
    date: '2019-04-27',
    title: 'Working on the Workflow Editor',
    iconName: 'code',
  },
  {
    date: '2019-04-28',
    title: 'Omer Joined!',
    iconName: 'user',
  },
  {
    date: '2019-04-30',
    title: 'Employee swag kit',
    iconName: 'swag',
  },
  // May
  {
    date: '2019-05-02',
    title: 'Release the first stable version (0.4.0)',
    iconName: 'shine',
  },
  {
    date: '2019-05-08',
  },
  {
    date: '2019-05-11',
    title: 'PR announcement of the Seed funding',
    iconName: 'speaker',
  },
  {
    date: '2019-05-16',
    title: 'Community Heroes Launched',
    description:
      'Novu is being built for developers using the incredible power of the community! With Community Heroes, contributors get badges and medals for taking part in making novu awesome. They can share their achivements in social media as they move up thae ranks of the heroes program.',
    iconName: 'airplane',
  },
  {
    date: '2019-05-28',
  },
  {
    date: '2019-05-31',
  },
  // Jun
  {
    date: '2019-06-01',
    title: 'Publish our benefits plan',
    iconName: 'airplane',
  },
  {
    date: '2019-06-06',
  },
  {
    date: '2019-06-16',
    title: '3,839 Stars',
    iconName: 'github',
  },
  {
    date: '2019-06-27',
    title: 'Launch the first Shape Up cycle',
    iconName: 'airplane',
  },
  {
    date: '2019-06-28',
    title: 'V 0.5.0 release party',
    description:
      'As part of establishing a process of goal setting and accountability in the company, and after a lot of work we released our company roadmap for the first time in August. This is a continious journy of planning ahead, learning, and improving as we go.',
    iconName: 'ballon',
  },
  {
    date: '2019-06-30',
  },
  // Jul
  {
    date: '2019-07-01',
  },
  {
    date: '2019-07-10',
    title: 'Novu podcast',
    iconName: 'airplane',
  },
  {
    date: '2019-07-11',
    title: '130K Notification Sent',
    iconName: 'airplane',
  },
  {
    date: '2019-07-16',
    title: '4,756 Stars',
    iconName: 'github',
  },
  {
    date: '2019-07-25',
    title: 'Started working in Gather',
    iconName: 'box',
  },
  {
    date: '2019-07-30',
    title: '4,924 Stars',
    iconName: 'github',
  },
  // Aug
  {
    date: '2019-08-02',
  },
  {
    date: '2019-08-15',
    title: 'Started Compliance process',
    iconName: 'box',
  },
  {
    date: '2019-08-20',
    title: '8,652 Stars',
    iconName: 'github',
  },
  {
    date: '2019-08-24',
    title: 'First live release event v 0.7.0',
    iconName: 'bookmark',
  },
  {
    date: '2019-08-27',
    title: 'Released company-wide roadmap',
    description:
      'As part of establishing a process of goal setting and accountability in the company, and after a lot of work we released our company roadmap for the first time in August. This is a continious journy of planning ahead, learning, and improving as we go.',
    iconName: 'airplane',
  },
  {
    date: '2019-08-28',
    title: '9,548 Stars',
    iconName: 'github',
  },
  {
    date: '2019-08-30',
    title: 'Biswajeet Joined!',
    iconName: 'user',
  },
  // Sep
  {
    date: '2019-09-01',
  },
  {
    date: '2019-09-08',
    title: 'First Company Offsite',
    description:
      'As an all-remote global company, we decided to have a company offsite once a year somewhere in the world. The first offsite was a week long, in Cyprus, where we had the chance to connect as people, and work together on some broad and high level company topics.',
    iconName: 'lightning',
  },
  {
    date: '2019-09-12',
    title: 'Pablo Joined!',
    iconName: 'user',
  },
  {
    date: '2019-09-18',
    title: '10,000 Stars',
    iconName: 'github',
  },
  {
    date: '2019-09-24',
  },
  {
    date: '2019-09-30',
  },
  // Oct
  {
    date: '2019-10-01',
    title: 'Hacktoberfest and Hacksquad events',
    description:
      'The greates annual event for the open source community, that we are proud to be part of! That was the first year we partecipated in Hacktoberfest and had a chance to grow our community and create some cool stuff. We also had our second year of Hacksquad, a friendly contribution competition hosted by Novu and sponsored by Medusa, Amplication, and ToolJet.',
    iconName: 'shine',
  },
  {
    date: '2019-10-03',
    title: '10K GitHub stars',
    description:
      'Crushed our goal to reach 10K stars in GitHub 9 month ahead of deadline! since then we have adjusted our metrical goals, keeping them motivating and ambitious.',
    iconName: 'github',
  },
  {
    date: '2019-10-09',
  },
  {
    date: '2019-10-10',
    title: '11,881 Stars',
    iconName: 'github',
  },
  {
    date: '2019-10-16',
    title: 'Pawel Joined!',
    iconName: 'user',
  },
  {
    date: '2019-10-26',
  },
  {
    date: '2019-10-31',
    title: 'Hacksquad signups +4000',
    iconName: 'check',
  },
  // Nov
  {
    date: '2019-11-01',
  },
  {
    date: '2019-11-07',
    title: 'Start implementing Data analytics',
    iconName: 'box',
  },
  {
    date: '2019-11-15',
    title: 'Review Metric and Goals and create new Roadmap for 2023',
    iconName: 'shine',
  },
  {
    date: '2019-11-17',
    title: '13,740 Stars',
    iconName: 'github',
  },
  {
    date: '2019-11-22',
    title: 'Live release event v 0.9.0',
    iconName: 'bookmark',
  },
  {
    date: '2019-11-28',
  },
  {
    date: '2019-11-30',
  },
  // Dec
  {
    date: '2019-12-01',
  },
  {
    date: '2019-12-06',
    title: 'DevRevCon Prague',
    iconName: 'ballon',
  },
  {
    date: '2019-12-08',
    title: '14,739 Stars',
    iconName: 'github',
  },
  {
    date: '2019-12-12',
    title: 'Re-ignite work on the Notifications Directory',
    description:
      'Cool and big project to show uses cases on how to use Novu and let users implement it in the system. A joined effort of Marketing and product department.',
    iconName: 'box',
  },
  {
    date: '2019-12-18',
    title: 'Public Product Roadmap',
    iconName: 'airplane',
  },
  {
    date: '2019-12-22',
    title: '16,000 Stars',
    iconName: 'github',
  },
  {
    date: '2019-12-28',
  },
  {
    date: '2019-12-31',
  },
];

const TIMELINE_DATA = data.reduce((acc, item) => {
  const date = new Date(item.date);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const monthIndex = acc.findIndex((m) => m.month === month);
  if (monthIndex === -1) {
    acc.push({
      month,
      events: [
        {
          day,
          items: [item],
        },
      ],
    });
  } else {
    const dayIndex = acc[monthIndex].events.findIndex((d) => d.day === day);
    if (dayIndex === -1) {
      acc[monthIndex].events.push({
        day,
        items: [item],
      });
    } else {
      acc[monthIndex].events[dayIndex].items.push(item);
    }
  }
  return acc;
}, []);

export default TIMELINE_DATA;

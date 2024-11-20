import evanClarkAvatar from './images/evan-clark.jpg';
import johnDoeAvatar from './images/john-doe.jpg';
import oliverJamesAvatar from './images/oliver-james.jpg';

const inboxData = [
  {
    theme: 'novuDefault',
    title: 'Default',
    categories: ['All', "What's New", 'Alerts', 'Account'],
    messages: [
      {
        category: "What's New",
        title: 'Security Update: Token Management',
        text: 'Secure your integration with the new token management system to safeguard your API keys.',
        date: '4 Sep 2024',
        isRead: false,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'In-App Notification Center Released',
        text: 'Stay updated with the new in-app notification center for real-time alerts.',
        date: '2 Sep 2024',
        isRead: false,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'Improved SMS Delivery Reports',
        text: 'Get detailed delivery reports for SMS notifications for better tracking and analytics.',
        date: '2 Sep 2024',
        isRead: false,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'Personalized Notifications Available',
        text: 'You can now personalize notifications based on user preferences for a tailored experience.',
        date: '31 Aug 2024',
        isRead: false,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'New Webhook Support',
        text: 'Webhook support added for real-time tracking of notification delivery statuses.',
        date: '24 Aug 2024',
        isRead: true,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'New Integration Added!',
        text: 'You can now integrate with Amazon SES for sending emails seamlessly.',
        date: '21 Aug 2024',
        isRead: true,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'Multi-Provider Failover Enabled',
        text: 'Your notifications are now more reliable with automatic failover to secondary providers.',
        date: '17 Aug 2024',
        isRead: true,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'New UI for Notification Templates',
        text: 'Check out the updated, more intuitive UI for creating and managing notification templates.',
        date: '16 Aug 2024',
        isRead: true,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'Email Provider Health Status',
        text: 'Monitor the health status of your email providers directly from your dashboard.',
        date: '11 Aug 2024',
        isRead: true,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: "What's New",
        title: 'Performance Improvements',
        text: 'Your notifications now load faster with backend performance enhancements.',
        date: '11 Aug 2024',
        isRead: true,
        buttons: ['Try it now', 'Learn more'],
      },
      {
        category: 'Alerts',
        title: 'High Error Rate Detected in Workflow',
        text: 'Your workflow "Order Processing" experienced a high error rate in the past hour. Review the logs for more details.',
        date: '3 Sep 2024',
        isRead: false,
        buttons: ['Go'],
      },
      {
        category: 'Product',
        title: 'New Provider Added',
        text: 'You successfully added Twilio as a new SMS provider to your notification system.',
        date: '29 Aug 2024',
        isRead: false,
        buttons: ['Go'],
      },
      {
        category: 'Product',
        title: 'New Workflow Created',
        text: 'The "Customer Signup Notification" workflow was successfully created and is now live.',
        date: '27 Aug 2024',
        isRead: true,
        buttons: ['Go'],
      },
      {
        category: 'Product',
        title: 'Weekly Workflow Summary Available',
        text: 'Your weekly summary for the "Transaction Alerts" workflow is now available. View performance and insights in the dashboard.',
        date: '1 Sep 2024',
        isRead: true,
        buttons: ['Go'],
      },
      {
        category: 'Product',
        title: 'Provider Health Alert',
        text: 'The email provider SendGrid has reported intermittent delays in message delivery over the past 24 hours.',
        date: '31 Aug 2024',
        isRead: true,
        buttons: ['Go'],
      },
      {
        category: 'Account',
        title: 'New Account User Created',
        text: 'A new user "justnems" has been successfully added to your account.',
        date: '4 Sep 2024',
        isRead: false,
        buttons: ['Users'],
      },
      {
        category: 'Account',
        title: 'Payment Successful',
        text: 'Your payment of $299 for the Pro Plan has been successfully processed.',
        date: '2 Sep 2024',
        isRead: false,
        buttons: ['Billing'],
      },
      {
        category: 'Account',
        title: 'Subscription Renewal',
        text: 'Your subscription for the Pro Plan has been renewed. The next billing cycle starts on 01 Oct 2024.',
        date: '1 Sep 2024',
        isRead: false,
        buttons: ['My Subscription'],
      },
      {
        category: 'Account',
        title: 'Password Changed',
        text: 'The password for your account has been successfully updated.',
        date: '28 Aug 2024',
        isRead: true,
        buttons: ['My Account'],
      },
      {
        category: 'Account',
        title: 'Account Settings Updated',
        text: 'Your account settings were updated. If you did not make this change, please contact support immediately.',
        date: '25 Aug 2024',
        isRead: true,
        buttons: ['Preferences'],
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
];

export default inboxData;

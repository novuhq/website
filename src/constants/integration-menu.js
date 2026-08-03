const integrationItem = ([text, slug]) => ({
  text,
  to: `/integrations/${slug}`,
  integrationIcon: `integration-${slug}`,
});

const categoryItem = (text, to, totalCount, items) => ({
  text,
  to,
  children: items.map(integrationItem),
  remainingCount: Math.max(totalCount - items.length, 0),
});

// The first seven entries mirror the order of the integration catalog.
const INTEGRATION_MENU_ITEMS = [
  categoryItem('In-app', '/integrations/channels#integration-category-in-app', 1, [
    ['Novu Inbox', 'novu-inbox'],
  ]),
  categoryItem('Email', '/integrations/channels#integration-category-email', 18, [
    ['SendGrid', 'sendgrid'],
    ['Amazon SES', 'ses'],
    ['Postmark', 'postmark'],
    ['Resend', 'resend'],
    ['Brevo (Sendinblue)', 'brevo'],
    ['Mailgun', 'mailgun'],
    ['Mailjet', 'mailjet'],
  ]),
  categoryItem('SMS', '/integrations/channels#integration-category-sms', 23, [
    ['Twilio', 'twilio'],
    ['Plivo', 'plivo'],
    ['AWS SNS', 'aws-sns'],
    ['Nexmo (Vonage)', 'vonage'],
    ['SMS77 (seven.io)', 'sms77'],
    ['Telnyx', 'telnyx'],
    ['Termii', 'termii'],
  ]),
  categoryItem('Push', '/integrations/channels#integration-category-push', 7, [
    ['Firebase Cloud Messaging', 'fcm'],
    ['Apple Push Notification', 'apns'],
    ['Expo Push', 'expo-push'],
    ['OneSignal', 'onesignal'],
    ['Pushpad', 'pushpad'],
    ['Pusher Beams', 'pusher-beams'],
    ['Push Webhook', 'push-webhook'],
  ]),
  categoryItem('Chat', '/integrations/channels#integration-category-chat', 6, [
    ['Slack', 'slack'],
    ['Discord', 'discord'],
    ['Microsoft Teams', 'ms-teams'],
    ['Mattermost', 'mattermost'],
    ['WhatsApp Business', 'whatsapp'],
    ['Zulip', 'zulip'],
  ]),
  categoryItem(
    'Workflow integrations',
    '/integrations/sources#integration-category-email-frameworks',
    5,
    [
      ['React Email', 'react-email'],
      ['Vue Email', 'vue-email'],
      ['MJML', 'mjml'],
      ['Maizzle', 'maizzle'],
      ['Brail', 'brail'],
    ]
  ),
  categoryItem('AI SDKs', '/integrations/sources#integration-category-ai-sdks', 2, [
    ['LangChain', 'langchain'],
    ['Vercel AI SDK', 'vercel-ai-sdk'],
  ]),
  categoryItem('Feature Flags', '/integrations/sources#integration-category-feature-flags', 3, [
    ['LaunchDarkly', 'launchdarkly'],
    ['Flagsmith', 'flagsmith'],
    ['PostHog', 'posthog'],
  ]),
];

export default INTEGRATION_MENU_ITEMS;

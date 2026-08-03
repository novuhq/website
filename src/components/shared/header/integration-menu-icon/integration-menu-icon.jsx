/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

import ApnsIcon from 'icons/header/integrations/apns.inline.svg';
import AwsSnsIcon from 'icons/header/integrations/aws-sns.inline.svg';
import BrailIcon from 'icons/header/integrations/brail.inline.svg';
import BrevoIcon from 'icons/header/integrations/brevo.inline.svg';
import DiscordIcon from 'icons/header/integrations/discord.inline.svg';
import ExpoPushIcon from 'icons/header/integrations/expo-push.inline.svg';
import FcmIcon from 'icons/header/integrations/fcm.inline.svg';
import FlagsmithIcon from 'icons/header/integrations/flagsmith.inline.svg';
import LangchainIcon from 'icons/header/integrations/langchain.inline.svg';
import LaunchdarklyIcon from 'icons/header/integrations/launchdarkly.inline.svg';
import MailgunIcon from 'icons/header/integrations/mailgun.inline.svg';
import MailjetIcon from 'icons/header/integrations/mailjet.inline.svg';
import MaizzleIcon from 'icons/header/integrations/maizzle.inline.svg';
import MattermostIcon from 'icons/header/integrations/mattermost.inline.svg';
import MjmlIcon from 'icons/header/integrations/mjml.inline.svg';
import MsTeamsIcon from 'icons/header/integrations/ms-teams.inline.svg';
import NovuInboxIcon from 'icons/header/integrations/novu-inbox.inline.svg';
import OnesignalIcon from 'icons/header/integrations/onesignal.inline.svg';
import PlivoIcon from 'icons/header/integrations/plivo.inline.svg';
import PosthogIcon from 'icons/header/integrations/posthog.inline.svg';
import PostmarkIcon from 'icons/header/integrations/postmark.inline.svg';
import PushWebhookIcon from 'icons/header/integrations/push-webhook.inline.svg';
import PusherBeamsIcon from 'icons/header/integrations/pusher-beams.inline.svg';
import PushpadIcon from 'icons/header/integrations/pushpad.inline.svg';
import ReactEmailIcon from 'icons/header/integrations/react-email.inline.svg';
import ResendIcon from 'icons/header/integrations/resend.inline.svg';
import SendgridIcon from 'icons/header/integrations/sendgrid.inline.svg';
import SesIcon from 'icons/header/integrations/ses.inline.svg';
import SlackIcon from 'icons/header/integrations/slack.inline.svg';
import Sms77Icon from 'icons/header/integrations/sms77.inline.svg';
import TelnyxIcon from 'icons/header/integrations/telnyx.inline.svg';
import TermiiIcon from 'icons/header/integrations/termii.inline.svg';
import TwilioIcon from 'icons/header/integrations/twilio.inline.svg';
import VercelAiSdkIcon from 'icons/header/integrations/vercel-ai-sdk.inline.svg';
import VonageIcon from 'icons/header/integrations/vonage.inline.svg';
import VueEmailIcon from 'icons/header/integrations/vue-email.inline.svg';
import WhatsappIcon from 'icons/header/integrations/whatsapp.inline.svg';
import ZulipIcon from 'icons/header/integrations/zulip.inline.svg';

const ICONS = {
  'integration-novu-inbox': NovuInboxIcon,
  'integration-sendgrid': SendgridIcon,
  'integration-ses': SesIcon,
  'integration-postmark': PostmarkIcon,
  'integration-resend': ResendIcon,
  'integration-brevo': BrevoIcon,
  'integration-mailgun': MailgunIcon,
  'integration-mailjet': MailjetIcon,
  'integration-twilio': TwilioIcon,
  'integration-plivo': PlivoIcon,
  'integration-aws-sns': AwsSnsIcon,
  'integration-vonage': VonageIcon,
  'integration-sms77': Sms77Icon,
  'integration-telnyx': TelnyxIcon,
  'integration-termii': TermiiIcon,
  'integration-fcm': FcmIcon,
  'integration-apns': ApnsIcon,
  'integration-expo-push': ExpoPushIcon,
  'integration-onesignal': OnesignalIcon,
  'integration-pushpad': PushpadIcon,
  'integration-pusher-beams': PusherBeamsIcon,
  'integration-push-webhook': PushWebhookIcon,
  'integration-slack': SlackIcon,
  'integration-discord': DiscordIcon,
  'integration-ms-teams': MsTeamsIcon,
  'integration-mattermost': MattermostIcon,
  'integration-whatsapp': WhatsappIcon,
  'integration-zulip': ZulipIcon,
  'integration-react-email': ReactEmailIcon,
  'integration-vue-email': VueEmailIcon,
  'integration-mjml': MjmlIcon,
  'integration-maizzle': MaizzleIcon,
  'integration-brail': BrailIcon,
  'integration-langchain': LangchainIcon,
  'integration-vercel-ai-sdk': VercelAiSdkIcon,
  'integration-launchdarkly': LaunchdarklyIcon,
  'integration-flagsmith': FlagsmithIcon,
  'integration-posthog': PosthogIcon,
};

const IntegrationMenuIcon = ({ icon, className }) => {
  if (!icon) return null;

  const Icon = ICONS[icon];
  if (!Icon) return null;

  return <Icon className={clsx('size-4 shrink-0', className)} focusable="false" aria-hidden />;
};

export default IntegrationMenuIcon;

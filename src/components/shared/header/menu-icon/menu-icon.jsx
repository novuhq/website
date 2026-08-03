/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

import AiAciIcon from 'icons/header/menu/ai-aci.inline.svg';
import AiClaudeIcon from 'icons/header/menu/ai-claude.inline.svg';
import AiCodexIcon from 'icons/header/menu/ai-codex.inline.svg';
import AiConsoleIcon from 'icons/header/menu/ai-console.inline.svg';
import AiCopilotIcon from 'icons/header/menu/ai-copilot.inline.svg';
import AiCursorIcon from 'icons/header/menu/ai-cursor.inline.svg';
import AiCustomCodeIcon from 'icons/header/menu/ai-custom-code.inline.svg';
import AiMcpIcon from 'icons/header/menu/ai-mcp.inline.svg';
import AiSkillsIcon from 'icons/header/menu/ai-skills.inline.svg';
import ChannelsChatIcon from 'icons/header/menu/channels-chat.inline.svg';
import ChannelsEmailIcon from 'icons/header/menu/channels-email.inline.svg';
import ChannelsImessageIcon from 'icons/header/menu/channels-imessage.inline.svg';
import ChannelsInboxIcon from 'icons/header/menu/channels-inbox.inline.svg';
import ChannelsLangchainIcon from 'icons/header/menu/channels-langchain.inline.svg';
import ChannelsMsTeamsIcon from 'icons/header/menu/channels-ms-teams.inline.svg';
import ChannelsPushIcon from 'icons/header/menu/channels-push.inline.svg';
import ChannelsSlackIcon from 'icons/header/menu/channels-slack.inline.svg';
import ChannelsSmsIcon from 'icons/header/menu/channels-sms.inline.svg';
import ChannelsTelegramIcon from 'icons/header/menu/channels-telegram.inline.svg';
import ChannelsWhatsappIcon from 'icons/header/menu/channels-whatsapp.inline.svg';
import ResourcesAboutIcon from 'icons/header/menu/resources-about.inline.svg';
import ResourcesApiIcon from 'icons/header/menu/resources-api.inline.svg';
import ResourcesBlogIcon from 'icons/header/menu/resources-blog.inline.svg';
import ResourcesCareersIcon from 'icons/header/menu/resources-careers.inline.svg';
import ResourcesChangelogIcon from 'icons/header/menu/resources-changelog.inline.svg';
import ResourcesCommunityIcon from 'icons/header/menu/resources-community.inline.svg';
import ResourcesContactIcon from 'icons/header/menu/resources-contact.inline.svg';
import ResourcesCustomersIcon from 'icons/header/menu/resources-customers.inline.svg';
import ResourcesDocumentationIcon from 'icons/header/menu/resources-documentation.inline.svg';
import ResourcesGithubIcon from 'icons/header/menu/resources-github.inline.svg';
import ResourcesHistoryIcon from 'icons/header/menu/resources-history.inline.svg';
import ResourcesIntegrationsIcon from 'icons/header/menu/resources-integrations.inline.svg';
import ResourcesSdksIcon from 'icons/header/menu/resources-sdks.inline.svg';
import ResourcesStatusIcon from 'icons/header/menu/resources-status.inline.svg';
import SolutionsAgentsIcon from 'icons/header/menu/solutions-ai-agents.inline.svg';
import SolutionsNotificationsIcon from 'icons/header/menu/solutions-app-notifications.inline.svg';
import SolutionsBuildersIcon from 'icons/header/menu/solutions-builders.inline.svg';
import SolutionsEnterpriseIcon from 'icons/header/menu/solutions-enterprise.inline.svg';

const INLINE_ICONS = {
  agents: SolutionsAgentsIcon,
  notifications: SolutionsNotificationsIcon,
  builders: SolutionsBuildersIcon,
  enterprise: SolutionsEnterpriseIcon,
  mcp: AiMcpIcon,
  copilot: AiCopilotIcon,
  aci: AiAciIcon,
  prompt: AiConsoleIcon,
  skills: AiSkillsIcon,
  claude: AiClaudeIcon,
  codex: AiCodexIcon,
  cursor: AiCursorIcon,
  'custom-code': AiCustomCodeIcon,
  blog: ResourcesBlogIcon,
  customers: ResourcesCustomersIcon,
  community: ResourcesCommunityIcon,
  changelog: ResourcesChangelogIcon,
  history: ResourcesHistoryIcon,
  documentation: ResourcesDocumentationIcon,
  api: ResourcesApiIcon,
  sdks: ResourcesSdksIcon,
  integrations: ResourcesIntegrationsIcon,
  github: ResourcesGithubIcon,
  about: ResourcesAboutIcon,
  careers: ResourcesCareersIcon,
  brand: AiMcpIcon,
  status: ResourcesStatusIcon,
  contact: ResourcesContactIcon,
};

const COLOR_INLINE_ICONS = {
  slack: ChannelsSlackIcon,
  whatsapp: ChannelsWhatsappIcon,
  telegram: ChannelsTelegramIcon,
  teams: ChannelsMsTeamsIcon,
  imessage: ChannelsImessageIcon,
  email: ChannelsEmailIcon,
  inbox: ChannelsInboxIcon,
  push: ChannelsPushIcon,
  chat: ChannelsChatIcon,
  sms: ChannelsSmsIcon,
  langchain: ChannelsLangchainIcon,
};

const MenuIcon = ({ icon, className }) => {
  if (!icon) return null;

  const ColorIcon = COLOR_INLINE_ICONS[icon];
  if (ColorIcon) {
    return (
      <ColorIcon className={clsx('size-4 shrink-0', className)} focusable="false" aria-hidden />
    );
  }

  const Icon = INLINE_ICONS[icon];
  if (!Icon) return null;

  return (
    <Icon
      className={clsx(
        'size-4 shrink-0 text-[#A3A6B2] transition-colors group-hover:text-white group-focus-visible:text-white',
        className
      )}
      focusable="false"
      aria-hidden
    />
  );
};

export default MenuIcon;

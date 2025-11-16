import React from 'react';

const PLANS = {
  // FREE TIER
  free: {
    title: 'Free',
    linkText: 'GET STARTED',
    linkUrl: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing_table_free',
    linkTarget: '_blank',
    common: {},
    platform: {
      monthlyCost: '$0',
      workflowRuns: '10K',
      additionalWorkflowRuns: '—',
      workflows: '20',
      environments: '2',
      subscribers: 'Unlimited',
      throughput: '60',
      feedRetention: '24h',
    },
    apiRateLimits: {
      multiChannel: true,
      delay: '24h',
      digest: '24h',
      stepControl: true,
      topics: true,
      multiTenancy: true,
      throttle: true,
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      headlessComponents: true,
      inboxFeedRetention: '30 days',
      emailEditor: true,
      customLayouts: '1',
      removeNovuBranding: false,
      translations: false,
    },
    account: {
      teamMembers: '3',
      rbac: false,
      standardSSO: true,
      customSSO: false,
      auditLogs: 'Basic',
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: false,
      hipaa: false,
      customSOC: false,
      dpa: 'Standard',
      uptimeSLA: '99.9%',
    },
    dataResidency: {
      us: true,
      eu: true,
      singapore: false,
      unitedKingdom: false,
      australia: false,
      japan: false,
      southKorea: false,
      contactForOther: false,
    },
    hostingModels: {
      novuCloud: true,
      selfHostedOSS: true,
      selfHostedEnterpriseHelm: false,
      managedVPC: false,
    },
  },
  // PRO TIER
  pro: {
    title: 'Pro',
    linkText: 'GET STARTED',
    linkUrl: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing_table_pro',
    linkTarget: '_blank',
    common: {},
    platform: {
      monthlyCost: 'From $30',
      workflowRuns: '30K',
      additionalWorkflowRuns: '$1.20 per 1K',
      workflows: '20',
      environments: '2',
      subscribers: 'Unlimited',
      throughput: '240',
      feedRetention: '7 days',
    },
    apiRateLimits: {
      multiChannel: true,
      delay: '7 days',
      digest: '7 days',
      stepControl: true,
      topics: true,
      multiTenancy: true,
      throttle: true,
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      headlessComponents: true,
      inboxFeedRetention: '90 days',
      emailEditor: true,
      customLayouts: 'Unlimited',
      removeNovuBranding: true,
      translations: false,
    },
    account: {
      teamMembers: '3',
      rbac: false,
      standardSSO: true,
      customSSO: false,
      auditLogs: 'Basic',
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: false,
      hipaa: false,
      customSOC: false,
      dpa: 'Standard',
      uptimeSLA: '99.9%',
    },
    dataResidency: {
      us: true,
      eu: true,
      singapore: false,
      unitedKingdom: false,
      australia: false,
      japan: false,
      southKorea: false,
      contactForOther: false,
    },
    hostingModels: {
      novuCloud: true,
      selfHostedOSS: true,
      selfHostedEnterpriseHelm: false,
      managedVPC: false,
    },
  },
  // Team TIER
  team: {
    title: 'Team',
    linkText: 'GET STARTED',
    linkUrl: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing_table_team',
    linkTarget: '_blank',
    common: {},
    platform: {
      monthlyCost: 'From $250',
      workflowRuns: '250K',
      additionalWorkflowRuns: '$1.20 per 1K',
      workflows: 'Unlimited',
      environments: 'Up to 10',
      subscribers: 'Unlimited',
      throughput: '600',
      feedRetention: '90 days',
    },
    apiRateLimits: {
      multiChannel: true,
      delay: '90 days',
      digest: '90 days',
      stepControl: true,
      topics: true,
      multiTenancy: true,
      throttle: true,
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      headlessComponents: true,
      inboxFeedRetention: '90 days',
      emailEditor: true,
      customLayouts: 'Unlimited',
      removeNovuBranding: true,
      translations: true,
    },
    account: {
      teamMembers: 'Unlimited',
      rbac: true,
      standardSSO: true,
      customSSO: false,
      auditLogs: 'Enhanced',
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: true,
      hipaa: false,
      customSOC: false,
      dpa: 'Custom',
      uptimeSLA: '99.9%',
    },
    dataResidency: {
      us: true,
      eu: true,
      singapore: false,
      unitedKingdom: false,
      australia: false,
      japan: false,
      southKorea: false,
      contactForOther: false,
    },
    hostingModels: {
      novuCloud: true,
      selfHostedOSS: true,
      selfHostedEnterpriseHelm: false,
      managedVPC: false,
    },
  },
  // ENTERPRISE TIER
  enterprise: {
    title: 'Enterprise',
    linkText: 'Contact Us',
    linkUrl: 'https://novu.co/contact-us/?utm_campaign=ws_pricing_table_enterprise',
    linkTarget: '_blank',
    common: {},
    platform: {
      monthlyCost: 'Custom',
      workflowRuns: '5M+',
      additionalWorkflowRuns: 'Custom',
      workflows: 'Unlimited',
      environments: 'Unlimited',
      subscribers: 'Unlimited',
      throughput: 'Custom',
      feedRetention: 'Custom',
    },
    apiRateLimits: {
      multiChannel: true,
      delay: 'Custom',
      digest: 'Custom',
      stepControl: true,
      topics: true,
      multiTenancy: true,
      throttle: true,
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      headlessComponents: true,
      inboxFeedRetention: 'Custom',
      emailEditor: true,
      customLayouts: 'Unlimited',
      removeNovuBranding: true,
      translations: true,
    },
    account: {
      teamMembers: 'Unlimited',
      rbac: true,
      standardSSO: true,
      customSSO: true,
      auditLogs: 'Full',
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: true,
      hipaa: true,
      customSOC: true,
      dpa: 'Custom',
      uptimeSLA: 'Custom',
    },
    dataResidency: {
      us: true,
      eu: true,
      singapore: true,
      unitedKingdom: true,
      australia: true,
      japan: true,
      southKorea: true,
      contactForOther: 'Contact Us',
    },
    hostingModels: {
      novuCloud: true,
      selfHostedOSS: true,
      selfHostedEnterpriseHelm: true,
      managedVPC: true,
    },
  },
};

const LABELS = [
  {
    title: '',
    items: {},
  },
  {
    title: 'Platform & Scale',
    items: {
      monthlyCost: 'Monthly cost',
      workflowRuns: {
        label: 'Included workflow runs',
        tooltip: (
          <>
            A <strong>workflow run</strong> represents a <strong>single execution</strong> of a
            notification workflow.
            <br />
            <br />
            Each time you trigger a workflow to send notifications (across one or multiple channels)
            to a subscriber, it counts as <strong>one workflow run</strong>.
          </>
        ),
      },
      additionalWorkflowRuns: 'Additional workflow runs',
      workflows: 'Workflow limits',
      environments: {
        label: 'Environments',
        tooltip: (
          <>
            <strong>Environments</strong> allow you to separate your notification workflows across
            different stages of your development lifecycle.
            <br />
            <br />
            Create distinct environments like <strong>Development</strong>, <strong>Staging</strong>
            , and <strong>Production</strong> to test and manage your notifications safely before
            deploying to users.
          </>
        ),
      },
      subscribers: {
        label: 'Subscribers',
        tooltip: (
          <>
            <strong>End-users or recipients</strong> who receive notifications through your
            workflows. Each subscriber has a unique <code>subscriberId</code> and can include
            attributes like email, phone, name, locale, and custom data.
            <br />
            <br />
            Subscribers can be created via API, automatically when triggering workflows, or in bulk
            (up to 500 per request). They represent the "who" in your notification system—the
            individuals receiving notifications across all channels.
          </>
        ),
      },
      throughput: {
        label: 'Throughput (events RPS)',
        tooltip: (
          <>
            <strong>Throughput</strong> measures the maximum number of notification events you can
            trigger <strong>per second</strong> (RPS = Requests Per Second).
            <br />
            <br />
            Higher throughput allows you to send more notifications simultaneously, which is
            essential for <strong>high-volume applications</strong> and{' '}
            <strong>time-sensitive alerts</strong>.
          </>
        ),
      },
      feedRetention: {
        label: 'Activity feed retention',
        tooltip: (
          <>
            <strong>Activity feed retention</strong> determines how long notification data is stored
            and accessible in your activity feed.
            <br />
            <br />
            Longer retention periods allow you to <strong>
              review historical notifications
            </strong>, <strong>debug issues</strong>, and maintain <strong>audit trails</strong> for
            compliance purposes.
          </>
        ),
      },
    },
  },
  {
    title: 'Workflow Logic & Delivery',
    items: {
      multiChannel: {
        label: 'Multi-channel support',
        tooltip: (
          <>
            <strong>Unified API</strong> for sending notifications across five channels:{' '}
            <strong>Email</strong>, <strong>SMS</strong>, <strong>Push</strong>,{' '}
            <strong>Chat</strong>, and <strong>In-App/Inbox</strong>.
            <br />
            <br />
            Trigger all channels with a single API call while Novu handles provider routing,
            failover, and delivery tracking across all channels.
          </>
        ),
      },
      delay: {
        label: 'Delay windows',
        tooltip: (
          <>
            <strong>Pauses workflow execution</strong> for a specified duration before proceeding to
            the next step. Supports <strong>regular</strong> (fixed time),{' '}
            <strong>scheduled</strong> (specific date/time), and <strong>dynamic</strong>{' '}
            (payload-based) delays.
            <br />
            <br />
            Common use cases: send follow-up emails 24 hours after registration, trigger reminders,
            schedule notifications for specific dates, or allow users time to cancel actions.
          </>
        ),
      },
      digest: {
        label: 'Digest windows',
        tooltip: (
          <>
            <strong>Aggregates multiple trigger events</strong> into a single notification to
            prevent notification fatigue. Collects events during a time window, then sends one
            consolidated message.
            <br />
            <br />
            Supports <strong>regular digest</strong> (duration-based batching) and{' '}
            <strong>scheduled digest</strong> (repeating schedule with cron). Use{' '}
            <strong>digestKey</strong> to group events by specific payload fields. Access digested
            data via <code>step.events</code> in subsequent steps.
          </>
        ),
      },
      stepControl: {
        label: 'Code-first workflows',
        tooltip: (
          <>
            <strong>TypeScript SDK</strong> that allows you to define notification workflows as code
            in your application using <code>@novu/framework</code>. Define workflows
            programmatically with full type safety and version control.
            <br />
            <br />
            Benefits: <strong>Type safety</strong> with Zod schemas,{' '}
            <strong>version control</strong> in your codebase, <strong>unit testing</strong>, and{' '}
            <strong>collaboration</strong> where developers define structure and non-technical users
            modify content via Dashboard.
          </>
        ),
      },
      topics: {
        label: 'Topics',
        tooltip: (
          <>
            <strong>Grouping mechanism</strong> that works like mailing lists or broadcast
            groups—send notifications to multiple subscribers at once by targeting a topic instead
            of individual subscriber IDs.
            <br />
            <br />
            Create topics with unique keys, add/remove subscribers, and trigger workflows to entire
            topics. Perfect for <strong>announcements</strong>,{' '}
            <strong>region-based notifications</strong>, or <strong>role-based messaging</strong>{' '}
            (e.g., all admins).
          </>
        ),
      },
      multiTenancy: {
        label: 'Multi-tenancy support',
        tooltip: (
          <>
            <strong>Multi-tenancy</strong> enables you to manage notifications for{' '}
            <strong>multiple organizations or teams</strong> within a single Novu account.
            <br />
            <br />
            Isolate data and configurations per tenant while maintaining{' '}
            <strong>centralized management</strong> and <strong>shared infrastructure</strong>.
          </>
        ),
      },
      throttle: {
        label: 'Throttle step',
        tooltip: (
          <>
            The <strong>Throttle step</strong> limits the number of workflow executions within a
            specified time window to prevent <strong>duplicate</strong> or{' '}
            <strong>excessive notifications</strong>.
            <br />
            <br />
            Configure <strong>fixed</strong> or <strong>dynamic time windows</strong> to control
            notification frequency—perfect for limiting high-frequency alerts, preventing spam from
            cron jobs, or managing notifications across multiple projects or contexts.
          </>
        ),
      },
    },
  },
  {
    title: 'Components & End-User Features',
    items: {
      inboxComponent: {
        label: '<Inbox /> component',
        tooltip: (
          <>
            A <strong>pre-built, customizable in-app notification inbox</strong> that you can embed
            directly into your application.
            <br />
            <br />
            Provides a <strong>drop-in UI component</strong> with real-time notifications,
            read/unread states, and action handling—no need to build your own notification center
            from scratch.
          </>
        ),
      },
      preferencesComponent: {
        label: '<Preferences /> component',
        tooltip: (
          <>
            A <strong>pre-built UI component</strong> that allows end-users to manage notification
            preferences directly within your app.
            <br />
            <br />
            Displays <strong>global preferences</strong> (channel-level settings across all
            workflows) and <strong>workflow preferences</strong> (per-workflow settings), enabling
            users to opt in or out of specific notification types and channels.
          </>
        ),
      },
      headlessComponents: {
        label: 'Headless / "bring your own" components',
        tooltip: (
          <>
            <strong>Custom render props and hooks</strong> that let you replace default UI elements
            with your own React components while Novu handles the notification logic.
            <br />
            <br />
            Includes <strong>custom render props</strong> (renderNotification, renderAvatar,
            renderSubject, renderBody, etc.) and <strong>hooks-only access</strong> for React
            Native. Framework-agnostic support via the NovuUI class for Angular, Vue, and vanilla
            JS.
          </>
        ),
      },
      inboxFeedRetention: {
        label: 'Inbox feed retention',
        tooltip: (
          <>
            The time period that <strong>notification data is stored and accessible</strong> in the
            in-app inbox feed for your end-users.
            <br />
            <br />
            Longer retention periods allow users to <strong>review past notifications</strong> and
            maintain notification history within your application.
          </>
        ),
      },
      emailEditor: {
        label: 'Email editor (blocks)',
        tooltip: (
          <>
            A <strong>WYSIWYG visual editor</strong> for creating email templates using prebuilt
            content blocks like text, headings, images, buttons, and custom HTML.
            <br />
            <br />
            Best suited for{' '}
            <strong>quick prototyping and collaboration with non-technical stakeholders</strong>.
          </>
        ),
      },
      customLayouts: {
        label: 'Custom layouts',
        tooltip: (
          <>
            <strong>Reusable components</strong> used with email steps to bring consistency,
            maintainability, and efficiency to your email communications.
            <br />
            <br />
            Create layouts with <strong>headers, footers, and branding elements</strong> and reuse
            them across multiple email steps and workflows—such as transactional, marketing, or
            newsletter types.
          </>
        ),
      },
      removeNovuBranding: {
        label: 'Remove Novu branding',
        tooltip: (
          <>
            Remove <strong>"Powered by Novu"</strong> branding from your notification components and
            emails.
            <br />
            <br />
            Present a fully <strong>white-labeled experience</strong> to your end-users with no
            third-party branding visible in your notification interfaces.
          </>
        ),
      },
      translations: {
        label: 'Translations (i18n)',
        tooltip: (
          <>
            <strong>Multi-language support for workflows</strong> that automatically adapts
            notifications to each subscriber's preferred language.
            <br />
            <br />
            Use <strong>JSON-based translation files</strong> and <code>{'{{t.key}}'}</code> syntax
            in Email or In-App editors. Customize content per workflow or layout to improve
            communication across geographies.
          </>
        ),
      },
    },
  },
  {
    title: 'Administration & Security',
    items: {
      teamMembers: 'Team members',
      rbac: {
        label: 'RBAC',
        tooltip: (
          <>
            <strong>Role-Based Access Control</strong> allows organizations to manage user
            permissions and restrict access to system resources based on assigned roles.
            <br />
            <br />
            Supports <strong>Admin</strong> (full access) and <strong>Member</strong> (limited
            permissions) roles. When disabled, all authenticated users have full access. Securely
            control who can manage environments, API keys, integrations, and other resources.
          </>
        ),
      },
      standardSSO: 'Standard SSO (Google/GitHub)',
      customSSO: {
        label: 'Custom SSO / OIDC',
        tooltip: (
          <>
            <strong>Enterprise authentication</strong> that allows organizations to integrate their
            own identity providers (Okta, Azure AD, Auth0, etc.) for user authentication.
            <br />
            <br />
            Supports <strong>SAML SSO and OIDC</strong> protocols. Enables centralized user
            management, enforcement of corporate security policies, and compliance with enterprise
            authentication requirements—distinct from standard built-in authentication
            (Google/GitHub).
          </>
        ),
      },
      auditLogs: 'Audit logs',
      mfa: 'MFA',
    },
  },
  {
    title: 'Compliance & SLA',
    items: {
      gdpr: {
        label: 'GDPR',
        tooltip: (
          <>
            <strong>General Data Protection Regulation</strong> compliance ensures Novu meets
            European data protection requirements for handling user data.
            <br />
            <br />
            Available on all tiers as a baseline requirement. Includes support for data deletion,
            user privacy controls, and proper data handling. Enterprise deployments may have
            additional GDPR compliance configurations based on specific deployment needs.
          </>
        ),
      },
      soc2: {
        label: 'SOC 2 / ISO 27001 Report',
        tooltip: (
          <>
            <strong>Formal security compliance reports</strong> that demonstrate Novu's commitment
            to information security through independent audits and certifications.
            <br />
            <br />
            <strong>SOC 2</strong>: Independent CPA audit against AICPA Trust Services Criteria
            (security, availability, confidentiality). <strong>ISO 27001</strong>: International
            standard for Information Security Management Systems (ISMS). Both validate robust
            security practices and build trust with enterprise customers.
          </>
        ),
      },
      hipaa: {
        label: 'HIPAA BAA',
        tooltip: (
          <>
            <strong>Business Associate Agreement</strong> - A legally binding contract required for
            healthcare organizations to ensure Protected Health Information (PHI) is protected
            according to HIPAA regulations.
            <br />
            <br />
            Specifies how PHI can be used, requires implementation of safeguards, mandates breach
            reporting, and ensures secure data handling. Essential for healthcare providers,
            insurers, and any organization handling patient data.
          </>
        ),
      },
      customSOC: 'Custom security reviews',
      dpa: {
        label: 'Data Processing Agreements (DPA)',
        tooltip: (
          <>
            <strong>Legally binding contract</strong> between data controller and processor that
            defines how personal data will be handled, protected, and processed. Required under GDPR
            and privacy regulations.
            <br />
            <br />
            Specifies security measures, breach notification procedures, data deletion/return terms,
            subprocessor management, and ensures compliance responsibilities. Standard DPAs
            available on all tiers; Enterprise offers custom terms.
          </>
        ),
      },
      uptimeSLA: 'Uptime SLA',
    },
  },
  {
    title: 'Data Residency',
    items: {
      us: '🇺🇸 United States',
      eu: '🇪🇺 European Union',
      singapore: '🇸🇬 Singapore',
      unitedKingdom: '🇬🇧 United Kingdom',
      australia: '🇦🇺 Australia',
      japan: '🇯🇵 Japan',
      southKorea: '🇰🇷 South Korea',
      contactForOther: 'Other',
    },
  },
  {
    title: 'Hosting Models',
    items: {
      novuCloud: {
        label: 'Novu Cloud',
        tooltip: (
          <>
            <strong>Cloud-managed SaaS service</strong> with zero infrastructure management,
            automatic updates, and enterprise-grade capabilities built for high-volume notification
            delivery.
            <br />
            <br />
            Includes <strong>advanced security</strong> (SAML SSO, MFA), <strong>compliance</strong>{' '}
            (SOC 2, ISO 27001, HIPAA BAA), unlimited provider integrations, custom environments,
            branding removal, and priority support. Extends open-source capabilities with
            consumable, scalable infrastructure.
          </>
        ),
      },
      selfHostedOSS: {
        label: 'Self-hosted (OSS)',
        tooltip: (
          <>
            <strong>Open-source, self-deployable version</strong> (MIT licensed) that runs on your
            own infrastructure, giving you complete control over your notification system and data.
            <br />
            <br />
            Deploy via <strong>Docker Compose, Kubernetes/Helm, or manual installation</strong>.
            Ideal for organizations with strict data residency requirements, compliance needs, or
            avoiding vendor lock-in. Includes unlimited retention and community-driven support.
          </>
        ),
      },
      selfHostedEnterpriseHelm: {
        label: 'Self-hosted Enterprise Helm chart',
        tooltip: (
          <>
            <strong>Kubernetes deployment</strong> for Enterprise self-hosted using Helm package
            manager. Combines self-hosting control with Enterprise features like auto-translations,
            unlimited service level, and advanced Redis architecture.
            <br />
            <br />
            Optimized for K8s with <strong>single-process mode</strong> for horizontal scaling.
            Ideal for large enterprises requiring both infrastructure control and premium features,
            with compliance certifications and professional services.
          </>
        ),
      },
      managedVPC: {
        label: 'Managed VPC hosting',
        tooltip: (
          <>
            <strong>Dedicated Virtual Private Cloud</strong> deployment where Novu hosts your
            infrastructure in an isolated VPC environment, managed by Novu. Combines isolation
            benefits of self-hosting with operational simplicity of managed services.
            <br />
            <br />
            Provides <strong>
              enhanced security, compliance guarantees, and performance SLAs
            </strong>{' '}
            compared to multi-tenant cloud. Includes multi-region support for data residency
            requirements. Ideal for enterprises needing isolation without managing infrastructure.
          </>
        ),
      },
    },
  },
];

export { LABELS, PLANS };

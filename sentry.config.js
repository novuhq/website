import * as Sentry from '@sentry/gatsby';

Sentry.init({
  dsn: process.env.GATSBY_SENTRY_DSN,
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/gatsby/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [
    //  performance
    Sentry.browserTracingIntegration(),
    //  session-replay
    Sentry.replayIntegration(),
  ],

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampler: ({ name }) => {
    if (name.includes('changelog')) {
      return 1.0;
    }

    return 0.1;
  },
  // tracesSampleRate: 0.1,
  // Capture Replay for 100% of sessions with an error
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
  replaysOnErrorSampleRate: 1.0,
});

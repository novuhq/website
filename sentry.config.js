import * as Sentry from '@sentry/gatsby';

Sentry.init({
  dsn: process.env.GATSBY_SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/gatsby/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  integrations: [
    // Performance monitoring
    Sentry.browserTracingIntegration({
      tracePropagationTargets: [
        'localhost',
        /^https:\/\/(www\.)?novu\.co\//,
        /^https:\/\/website-new-novuhq\.vercel\.app\/changelog/i,
      ],
      instrumentPageLoad: true,
      instrumentNavigation: true,
      instrumentHistory: true,
    }),
    Sentry.replayIntegration(),
    Sentry.httpIntegration({
      breadcrumbs: true,
      instrumentOutgoingRequests: true,
    }),
  ],

  // Enable logs to be sent to Sentry
  enableLogs: true,

  tracesSampler: ({ name, location }) => {
    if (name && name.includes('/changelog')) return 1.0;
    if (location && location.pathname && location.pathname.includes('/changelog')) return 1.0;

    return 0;
  },

  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
});

if (typeof window !== 'undefined') {
  const origFetch = window.fetch;

  window.fetch = async (...args) => {
    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
    const isChangelogRequest = /\/changelog(\/|$)/.test(url);
    const startTime = Date.now();

    try {
      const res = await origFetch(...args);
      const duration = Date.now() - startTime;

      if (isChangelogRequest) {
        const responseData = {
          url: res.url || url,
          status: res.status,
          statusText: res.statusText,
          duration,
          timestamp: new Date().toISOString(),
          x_nf_request_id: res.headers.get('x-nf-request-id'),
          x_vercel_id: res.headers.get('x-vercel-id'),
          x_vercel_cache: res.headers.get('x-vercel-cache'),
          x_vercel_edge: res.headers.get('x-vercel-edge'),
          server: res.headers.get('server'),
          x_nf_trace_id: res.headers.get('x-nf-trace-id'),
        };

        if (!res.ok) {
          const message = `Changelog fetch failed: ${res.status} on ${res.url}`;

          Sentry.captureMessage(message, {
            level: 'error',
            tags: {
              error_type: res.status === 504 ? 'gateway_timeout' : 'changelog_fetch_error',
              status_code: res.status.toString(),
              proxy_layer: url.includes('vercel.app') ? 'vercel' : 'netlify',
            },
            extra: responseData,
          });

          if (res.status === 504) {
            Sentry.addBreadcrumb({
              message: '504 Gateway Timeout detected',
              category: 'error',
              data: responseData,
              level: 'error',
            });
          }
        }
      }

      return res;
    } catch (error) {
      const duration = Date.now() - startTime;

      if (isChangelogRequest) {
        const errorData = {
          url,
          duration,
          error_name: error.name,
          error_message: error.message,
          timestamp: new Date().toISOString(),
          network_state: navigator.onLine ? 'online' : 'offline',
          connection_type: navigator.connection?.effectiveType,
        };

        Sentry.captureException(error, {
          level: 'error',
          tags: {
            error_type: 'changelog_network_error',
            network_state: navigator.onLine ? 'online' : 'offline',
          },
          extra: errorData,
        });
      }

      throw error;
    }
  };
}

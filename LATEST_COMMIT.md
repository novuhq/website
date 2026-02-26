# PR: Fix canonical URLs for SEO

## Summary

- Fix broken canonical URLs that rendered as `https://novu.coundefined/` due to `useLocation()` returning `undefined` during SSR
- Add explicit `slug` props to all pages missing them, ensuring correct self-referencing canonicals
- Fix incorrect slugs on usecase subpages (missing `/usecases/` prefix)
- Add trailing slashes to all Netlify proxy targets for URL consistency
- Lowercase contributor page paths and canonical URLs

## Problem

SEO Spider detected multiple pages with a canonical link of `https://novu.coundefined/`. This was caused by the `SEO` component using `useLocation()` from `react-use`, which returns `undefined` for `pathname` during Gatsby's SSR/build. JavaScript string concatenation (`"https://novu.co" + undefined`) produced the malformed URL.

Additionally, several usecase subpages had slugs missing the `/usecases/` prefix (e.g. `/multi-channel-notifications/` instead of `/usecases/multi-channel-notifications/`), and Netlify proxy targets were missing trailing slashes.

## Changes

### `src/components/shared/seo/seo.jsx`

- Guard against `undefined` pathname with fallback chain: `slug || location.pathname || '/'`

### Pages with added `slug` prop

| File                     | Added slug   |
| ------------------------ | ------------ |
| `src/pages/index.jsx`    | `/`          |
| `src/pages/usecases.jsx` | `/usecases/` |
| `src/pages/security.jsx` | `/security/` |
| `src/pages/inbox.jsx`    | `/inbox/`    |
| `src/pages/digest.jsx`   | `/digest/`   |

### Usecase subpages with corrected `slug` prefix

| File                                            | Before                                    | After                                         |
| ----------------------------------------------- | ----------------------------------------- | --------------------------------------------- |
| `usecases/multi-channel-notifications.jsx`      | `/multi-channel-notifications/`           | `/usecases/multi-channel-notifications/`      |
| `usecases/add-notifications.jsx`                | `/add-notifications/`                     | `/usecases/add-notifications/`                |
| `usecases/improve-communication-experience.jsx` | `/improve-user-communication-experience/` | `/usecases/improve-communication-experience/` |
| `usecases/content-management.jsx`               | `/content-management/`                    | `/usecases/content-management/`               |
| `usecases/unified-platform.jsx`                 | `/unified-platform/`                      | `/usecases/unified-platform/`                 |

### `netlify.toml`

- Added trailing slashes to all proxy targets (`/studio`, `/changelog`, `/customers`, `/blog`, `/dpa`, `/privacy`, `/terms`, `/pricing`)

### `gatsby-node.js` & `src/templates/contributor.jsx`

- Lowercased contributor GitHub usernames in page paths and canonical slugs

## Test plan

- [ ] Build the site (`gatsby build`) and verify no build errors
- [ ] Check generated HTML for canonical tags on affected pages
- [ ] Verify canonical URLs are self-referencing, lowercase, with trailing slashes
- [ ] Confirm Netlify proxy routes still work with trailing-slash targets
- [ ] Re-run SEO Spider and confirm no `undefined` canonical URLs remain

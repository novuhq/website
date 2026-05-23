# auth.md

You are an agent that wants to call the Novu API on a user's behalf. This file describes how to obtain credentials today and how to handle them safely.

Several hosts are relevant:

- **API (US)** — `https://api.novu.co` — REST API base path is `/v1` (for example, `https://api.novu.co/v1/tenants/{identifier}`).
- **API (EU)** — `https://eu.api.novu.co` — same paths under `/v1` for EU Cloud accounts.
- **Dashboard (US)** — `https://dashboard.novu.co` — where the user manages environments, workflows, and keys.
- **Dashboard (EU)** — `https://eu.dashboard.novu.co` — EU Cloud dashboard.
- **MCP (US)** — `https://mcp.novu.co/` — Novu MCP server for agent tooling.
- **MCP (EU)** — `https://mcp.novu.co/?region=eu` — EU MCP endpoint.
- **Documentation** — `https://docs.novu.co` — guides, API reference, and MCP setup.

Match the user's region across API, dashboard, and MCP. If their dashboard is `eu.dashboard.novu.co`, use the EU API and EU MCP URLs.

## Current state

Novu does not support agentic registration today. Credentials are issued by the user out of band; this file tells you how to pick them up and use them without putting them at risk.

Novu keys are **environment-specific** (Development vs Production). Always use the secret key for the environment the user intends you to work in.

## Use the existing tooling first

Before you do anything credential-shaped, check whether the user has already wired Novu into your environment.

1. **Novu MCP server** — if you are an MCP client (Claude, Cursor, Codex, etc.), Novu ships a remote MCP server that exposes subscribers, preferences, workflows, triggers, notifications, integrations, and environments as tools. The user configures it once with their secret key; you call the tools without ever seeing the key. Setup: `https://docs.novu.co/platform/build-with-ai/mcp`. Product page: `https://novu.co/mcp/`.
2. **Novu documentation** — server-side API usage, workflow design, channel providers, and Framework patterns live at `https://docs.novu.co`. Read the relevant guide before calling the API directly (especially authentication, triggers, and subscriber management).
3. **Novu CLI** — for Framework workflows, Local Studio, and syncing workflows to Novu Cloud, prefer `npx novu@latest` over hand-rolled `curl`. It accepts `--secret-key`, `--api-url`, and region-aware `--dashboard-url`. Package: `https://www.npmjs.com/package/novu`. Docs: `https://docs.novu.co/framework/studio` and `https://docs.novu.co/framework/deployment/cli`.

If any of these is already configured, use it and stop. Do not ask the user for a secret key you do not need.

## Supported login option: secret key, supplied out of band

The credential for server-side API access is a **Secret Key** from the Novu dashboard. It grants administrative access to the linked environment. The user issues it from **Developer → API Keys** (`https://dashboard.novu.co/settings/api-keys` or `https://eu.dashboard.novu.co/settings/api-keys`) and supplies it through a secure channel — never by pasting it into chat.

Novu also exposes an **Application Identifier**, which is public and used only to initialize the Inbox and other client-side SDKs. It is **not** a substitute for the secret key on server-side or MCP-authenticated calls.

### How to pick the secret key up

Look for it in this order. Stop at the first one that exists:

1. `--secret-key` on `npx novu@latest` commands (`dev`, `sync`, `init`), if the user passed one for this invocation.
2. `NOVU_SECRET_KEY` in your process environment (common in SDK and backend apps).
3. `NOVU_API_KEY` in your process environment (common in MCP client config; same secret key value).
4. A project `.env` file the user has told you to read.
5. `secretKey` (or equivalent) in an initialized `@novu/api` / `@novu/node` client config.
6. The Novu MCP server's environment or headers, if you are calling through it (`Authorization: Bearer …`).

If none of the above is set and you genuinely need a key, do not ask the user to paste it into the conversation. Instead, tell them to:

- Open **API Keys** in the dashboard for the correct environment (Development or Production).
- Copy the **Secret Key** for that environment.
- Put it in `NOVU_SECRET_KEY` or `NOVU_API_KEY` in their shell, `.env`, MCP client config, or pass it to the Novu CLI via `--secret-key` — whichever matches how they invoke you.
- Resume the task once it is set.

This keeps the key out of your transcript, out of any logs the user shares, and out of the model provider's training data.

### How to use the secret key

**REST API and server SDKs** — present it as an API key in the `Authorization` header:

```http
POST /v1/events/trigger HTTP/1.1
Host: api.novu.co
Authorization: ApiKey $NOVU_SECRET_KEY
Content-Type: application/json
```

For EU Cloud, use host `eu.api.novu.co` instead of `api.novu.co`.

With the Node SDK:

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: process.env.NOVU_SECRET_KEY,
});
```

Read the key from the environment at the moment of the call. Do not copy it into variables you log, do not echo it back to the user, and do not include it in commit messages, PR descriptions, error reports, or screenshots. If you are running a shell command, never interpolate the key inline — reference the environment variable so it does not appear in command history.

The Novu API and backend SDKs are **server-side only**. Using the secret key in browser code will fail with CORS errors and exposes the key publicly.

**Novu MCP** — use the same secret key value with a Bearer token (not the `ApiKey` prefix):

```http
Authorization: Bearer $NOVU_API_KEY
```

Point the MCP client at `https://mcp.novu.co/` (US) or `https://mcp.novu.co/?region=eu` (EU). See `https://docs.novu.co/platform/build-with-ai/mcp` for Cursor, Codex, Claude Code, and Claude Desktop examples.

Regenerating the secret key in the dashboard invalidates the previous value. Treat a `401` on a previously-working key as revocation: drop it from memory and ask the user to refresh whichever source you read it from.

### Application identifier (public, client-side only)

The Application Identifier is safe to use in frontend code (for example, `NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER`). Use it only to initialize the Inbox or other client SDKs. Never send it as the sole credential for workflow triggers, subscriber management, or other administrative API calls.

## Errors

| Status | Meaning | What to do |
| --- | --- | --- |
| `401` on first use | Key is malformed, revoked, or for a different environment or region. | Ask the user to confirm the secret key in their dashboard matches the environment and region (US vs EU) you are calling. |
| `401` on a previously-working key | Revoked or rotated. | Drop the cached value and ask the user to refresh it from their secret store, not from chat. |
| `403` | Authenticated but not allowed for this resource or environment. | Confirm you are using the correct environment key and that the user's role permits the operation. |
| `429` | Rate limited. | Back off and retry. Honor `Retry-After` if present. |

## Revocation

The user regenerates secret keys under **Developer → API Keys** in the dashboard. You will discover revocation as a `401` on a previously-working credential — drop it and re-read from the same source you loaded it from.

## Related files

- Product and doc index for agents: `https://novu.co/llms.txt`
- MCP setup and tool list: `https://docs.novu.co/platform/build-with-ai/mcp`
- API keys reference: `https://docs.novu.co/platform/developer/api-keys`

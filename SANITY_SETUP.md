# Sanity setup

Everything on the code side is done. This is the part that needs a human with a
browser — about ten minutes.

**Do you need the Sanity MCP server?** No. It would let Claude read and write your
content directly, which is handy for ongoing content work. For getting set up,
`npm run seed:import` does the job in one command with nothing extra to install.

---

## What is secret and what is not

| Value | Secret? | Why |
|---|---|---|
| Project ID | **No** | It ships in the browser bundle. Safe to paste anywhere. |
| Dataset name | **No** | Same. |
| API read token | **Yes** | Put it in `.env.local` yourself. Never paste it into chat, a commit, or a screenshot. |
| Revalidate secret | **Yes** | Same. You generate it. |

`.env.local` is already gitignored.

---

## Step 1 — Log in to the CLI

```bash
cd kuvar-technologies
npx sanity login
```

A browser opens. Pick whichever provider you want to sign in with.

---

## Step 2 — Create the project

Go to **[sanity.io/manage](https://sanity.io/manage)** → **Create new project**.

- **Name:** KuvarTech
- **Dataset:** `production` (accept the default; keep it *public* — the site reads it
  anonymously, and nothing sensitive lives here)

When it is created, copy the **Project ID** from the project's page. It looks like
`abc12xyz`.

---

## Step 3 — Fill in the environment file

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<the project id from step 2>
NEXT_PUBLIC_SANITY_DATASET=production
```

Leave the two secrets blank for now — the next steps fill them.

---

## Step 4 — Create a read token

In **sanity.io/manage** → your project → **API** → **Tokens** → **Add API token**.

- **Name:** `kuvartech-website`
- **Permissions:** **Viewer** (read-only — the site never writes)

Copy the token immediately; it is shown once. Paste it into `.env.local`:

```
SANITY_API_READ_TOKEN=<the token>
```

This is only used for previewing unpublished drafts. Published content reads fine
without it.

---

## Step 5 — Allow the browser to talk to Sanity

Still under **API** → **CORS origins** → **Add CORS origin**:

- **Origin:** `http://localhost:3000`
- **Allow credentials:** yes

This is for the Studio at `/studio`, which runs in your browser. The website's own
data fetching happens on the server and does not need CORS.

Add your production domain here too once the site is deployed.

---

## Step 6 — Generate the revalidate secret

```bash
openssl rand -base64 32
```

Paste the result into `.env.local`:

```
SANITY_REVALIDATE_SECRET=<the generated string>
```

Nothing uses this until the site is deployed and the webhook is configured
(step 9), but setting it now means the file is complete.

---

## Step 7 — Import the starting content

```bash
npm run seed:import
```

This generates `sanity/seed/seed.ndjson` from the same data the site currently
renders, then imports it. **16 documents:**

| Type | Count |
|---|---|
| service | 6 |
| caseStudy | 2 (KuvarPay, KuvarSend) |
| capability | 6 |
| industry | 1 |
| siteSettings | 1 |

It is safe to re-run — `--replace` overwrites documents with the same id rather than
duplicating them.

> **Document ids use hyphens, never dots.** Sanity reads the segment before a dot as a
> path prefix — the same mechanism behind `drafts.` — and path-prefixed documents are
> **not readable anonymously**. An import of `service.payments` succeeds, reports success,
> and then returns nothing to the website. If you ever hand-write ids, keep them flat.

---

## Step 8 — Check it worked

```bash
npm run dev
```

- **<http://localhost:3000/studio>** — the Studio, with all your content types in the
  sidebar and the imported documents inside them.
- **<http://localhost:3000/services>** and **<http://localhost:3000/work>** — these
  should look exactly as they did before. That is the point: they were rendering the
  same data from the fallback, and now it comes from the CMS.

**How to prove the CMS is actually live:** edit a service summary in the Studio, hit
Publish, then restart `npm run dev`. The change appears. (In development the page is
rebuilt on request; in production the webhook in step 9 handles it instantly.)

---

## Step 9 — The webhook (at deploy time, not before)

Once the site has a public URL:

**sanity.io/manage** → **API** → **Webhooks** → **Create webhook**

| Field | Value |
|---|---|
| Name | Revalidate website |
| URL | `https://<your-domain>/api/revalidate` |
| Dataset | production |
| Trigger on | Create, Update, Delete |
| Filter | `_type in ["caseStudy","article","service","role","person","testimonial","siteSettings"]` |
| Projection | `{_type, slug}` |
| HTTP method | POST |
| Secret | the same `SANITY_REVALIDATE_SECRET` from step 6 |

Set the same secret as an environment variable on the host.

After this, publishing in the Studio regenerates only the affected pages, within
seconds, and the site stays statically served.

---

## Optional — host the Studio separately

The Studio currently lives at `/studio` inside the app, which adds ~1.85 MB to that
route. It is code-split, so visitors who never open the Studio never download it.

If you would rather keep it off the website entirely:

```bash
npm run studio:deploy
```

That hosts it at `<yourproject>.sanity.studio`. The `app/studio` route can then be
deleted and the heavy dependencies dropped.

---

## When you are done

Tell me the **project ID** (not the token) and I will verify the connection, confirm
the queries return what the pages expect, and switch the pages off their fallbacks.

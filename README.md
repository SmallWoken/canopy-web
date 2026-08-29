# canopy-web

The public site for **Canopy** at `canopy.smallwoken.world` — privacy policy,
terms of use, and support. Static Next.js, no database, no analytics, no
cookies.

## Editing

Every fact quoted in the documents — app name, entity, contact email, prices,
jurisdiction, effective date — lives in [`lib/site.ts`](lib/site.ts). Change it
there, not in the prose.

Two flags in that file matter:

| Field | What it does |
| --- | --- |
| `appName` | Rename the app in all three documents with one edit. |
| `analyticsEnabled` | `false` says the app collects no analytics. **Flip to `true` in the same commit that ships the PostHog SDK** — the privacy policy swaps to the PostHog disclosure automatically. |
| `jurisdiction` | **Unconfirmed.** Currently Ontario, Canada. Must match where Smallwoken Labs is actually registered. |

## Local

```sh
npm run dev     # http://localhost:3000
npm run build   # all routes prerender as static HTML
```

## Deploying to Vercel

```sh
npm i -g vercel
vercel            # first run links the project
vercel --prod
```

Or push this repo to GitHub and import it at vercel.com/new — the defaults are
correct for Next.js, and no environment variables are needed.

## Pointing the subdomain (DNS on Cloudflare)

1. In the Vercel project: **Settings → Domains → Add** →
   `canopy.smallwoken.world`. Vercel will show the record it wants.
2. In Cloudflare, on the `smallwoken.world` zone: **DNS → Add record**

   | Field | Value |
   | --- | --- |
   | Type | `CNAME` |
   | Name | `canopy` |
   | Target | `cname.vercel-dns.com` |
   | Proxy status | **DNS only** (grey cloud) |
   | TTL | Auto |

   The grey cloud matters. With Cloudflare's proxy on (orange cloud) you get
   two CDNs in series and Vercel's certificate issuance can fail; if you do
   want the orange cloud, set Cloudflare SSL/TLS mode to **Full (strict)**
   first.
3. Back in Vercel, wait for the domain to verify and the certificate to issue —
   usually a minute or two.

## URLs for App Store Connect

| Field | URL |
| --- | --- |
| Privacy Policy URL | `https://canopy.smallwoken.world/privacy` |
| License Agreement (EULA) | `https://canopy.smallwoken.world/terms` |
| Support URL | `https://canopy.smallwoken.world/support` |
| Marketing URL (optional) | `https://canopy.smallwoken.world` |

The EULA URL goes in **App Information → License Agreement → Custom**, and the
same link should be reachable from the subscription screen in the app, next to
the price, along with the privacy policy link. App Review checks for that.

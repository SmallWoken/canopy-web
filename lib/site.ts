/**
 * Every fact that appears in the legal documents lives here.
 *
 * The app name, the entity, the prices and the jurisdiction are quoted in
 * several places across three documents; changing one of them should be a
 * one-line edit here, never a search-and-replace through prose.
 */

export const site = {
  /** Change this one string if the app ships under a different name. */
  appName: "Canopy",
  bundleId: "world.smallwoken.canopy",

  entity: "Smallwoken Labs",
  contactEmail: "contact@smallwoken.world",
  domain: "canopy.smallwoken.world",
  baseUrl: "https://canopy.smallwoken.world",

  /**
   * CONFIRM BEFORE LAUNCH — assumed from the entity name and the CAD price
   * tier, not verified. This must be where Smallwoken Labs is registered.
   */
  jurisdiction: {
    province: "Ontario",
    country: "Canada",
    /** How the governing-law clause reads in full. */
    phrase: "the Province of Ontario and the federal laws of Canada applicable therein",
    courts: "the courts of the Province of Ontario",
  },

  /**
   * The Terms require this age. It is deliberately higher than the App Store
   * content rating: a 4+ rating says the app holds nothing objectionable,
   * while this says who may enter a contract and keeps Canopy outside the
   * scope of children's-privacy law.
   */
  minimumAge: 13,

  /** Displayed on each document and used for the dateModified metadata. */
  effectiveDate: "August 29, 2026",
  effectiveDateISO: "2026-08-29",

  /**
   * Flip to true in the same change that ships the PostHog SDK, never before
   * it. A privacy policy that describes collection the app is not yet doing
   * is as wrong as one that omits collection it is.
   */
  analyticsEnabled: false,

  plans: [
    { name: "Monthly", usd: "$4.99 USD", cad: "$4.99 CAD", period: "month", renews: true },
    { name: "Annual", usd: "$49.99 USD", cad: "$49.99 CAD", period: "year", renews: true },
    { name: "Lifetime", usd: "$99.99 USD", cad: "$99.99 CAD", period: null, renews: false },
  ],

  freeTrialDays: 7,
} as const;

export const pages = [
  { href: "/privacy", title: "Privacy Policy", blurb: "What Canopy stores, what leaves your device, and what we can and cannot see." },
  { href: "/terms", title: "Terms of Use", blurb: "The agreement covering your use of Canopy, including subscriptions and billing." },
  { href: "/support", title: "Support", blurb: "How to get help, manage a subscription, or export and delete your journals." },
] as const;

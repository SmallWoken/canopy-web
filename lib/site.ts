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
  appStoreId: "6768835882",
  appStoreUrl: "https://apps.apple.com/app/id6768835882",

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
   * Two different numbers that are often confused, and both are correct:
   * Canopy's App Store content rating is 4+, which says the app contains
   * nothing objectionable. This is the contractual minimum age, which says
   * who may agree to the Terms, and keeps Canopy outside the scope of
   * children's-privacy law. Nearly every 4+ app sets it at 13.
   */
  minimumAge: 13,
  contentRating: "4+",

  /** Displayed on each document and used for the dateModified metadata. */
  effectiveDate: "August 29, 2026",
  effectiveDateISO: "2026-08-29",

  /**
   * True once the PostHog SDK ships. The policy's analytics section makes two
   * promises the app has to keep: journal content never leaves in an event,
   * and there is an off switch in Settings.
   */
  analyticsEnabled: true,

  plans: [
    { name: "Monthly", usd: "$4.99 USD", cad: "$4.99 CAD", period: "month", renews: true },
    { name: "Annual", usd: "$49.99 USD", cad: "$49.99 CAD", period: "year", renews: true },
    { name: "Lifetime", usd: "$99.99 USD", cad: "$99.99 CAD", period: null, renews: false },
  ],

  freeTrialDays: 7,
} as const;

export const pages = [
  { href: "/privacy", title: "Privacy Policy", blurb: "What Canopy stores, what leaves your device, and what we can and cannot see." },
  { href: "/terms", title: "Terms of Service", blurb: "The agreement covering your use of Canopy, including subscriptions and billing." },
  { href: "/support", title: "Support", blurb: "How to get help, manage a subscription, or export and delete your journals." },
] as const;

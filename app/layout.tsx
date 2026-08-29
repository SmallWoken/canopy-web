import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Newsreader } from "next/font/google";
import { site, pages } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.appName} — Legal & Support`,
    template: `%s · ${site.appName}`,
  },
  description: `Privacy policy, terms of use, and support for ${site.appName}, a journal that keeps your writing on your device.`,
  openGraph: {
    siteName: site.appName,
    type: "website",
    url: site.baseUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${newsreader.variable} min-h-dvh flex flex-col`}
      >
        <header className="border-b border-rule">
          <div className="mx-auto w-full max-w-2xl px-6 py-5 flex items-baseline justify-between gap-4">
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight italic"
            >
              {site.appName}
            </Link>
            <nav className="flex gap-5 text-sm text-ink-soft">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="hover:text-ink transition-colors"
                >
                  {page.title === "Privacy Policy" ? "Privacy" : page.title === "Terms of Use" ? "Terms" : page.title}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-rule mt-20">
          <div className="mx-auto w-full max-w-2xl px-6 py-8 text-sm text-ink-soft flex flex-wrap items-center justify-between gap-3">
            <span>
              © {new Date().getFullYear()} {site.entity}
            </span>
            <a href={`mailto:${site.contactEmail}`} className="hover:text-ink transition-colors">
              {site.contactEmail}
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

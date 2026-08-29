import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: site.appName,
    template: `%s · ${site.appName}`,
  },
  description: `Privacy policy, terms of service, and download for ${site.appName}.`,
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
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}

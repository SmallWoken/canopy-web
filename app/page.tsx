import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The whole landing page: three links on a white field. The App Store link
 * sits between the two documents because that is the one people came for.
 */
export default function Home() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-6 text-center">
      <nav className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
        <Link href="/privacy" className="hover:text-ink-soft transition-colors">
          Privacy Policy
        </Link>
        <a
          href={site.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-ink-soft transition-colors"
        >
          Download
        </a>
        <Link href="/terms" className="hover:text-ink-soft transition-colors">
          Terms of Service
        </Link>
      </nav>
    </main>
  );
}

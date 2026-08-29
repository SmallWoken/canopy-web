import Link from "next/link";
import { site, pages } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
      <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight italic">
        {site.appName}
      </h1>
      <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-lg">
        A journal that keeps your writing on your device. These are the legal
        documents and the support desk.
      </p>

      <nav className="mt-12 grid gap-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group rounded-lg border border-rule bg-card px-5 py-4 transition-colors hover:border-accent"
          >
            <span className="font-display text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
              {page.title}
            </span>
            <span className="mt-1 block text-[0.9375rem] text-ink-soft leading-relaxed">
              {page.blurb}
            </span>
          </Link>
        ))}
      </nav>

      <p className="mt-12 text-sm text-ink-soft">
        Questions?{" "}
        <a
          href={`mailto:${site.contactEmail}`}
          className="underline decoration-accent underline-offset-2 hover:text-ink"
        >
          {site.contactEmail}
        </a>
      </p>
    </div>
  );
}

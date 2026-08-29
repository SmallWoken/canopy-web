import Link from "next/link";
import { site } from "@/lib/site";

export type Section = { id: string; title: string };

/**
 * The shell the legal documents share: title, effective date, a contents
 * list, and the reading column. The contents list is not decoration — a
 * policy people are expected to read needs a way into its middle, and
 * regulators and app reviewers both look for one.
 */
export function Doc({
  title,
  sections,
  summary,
  dated = true,
  children,
}: {
  title: string;
  /** Rendered as the contents list; ids must match the h2 ids below. */
  sections?: Section[];
  summary?: React.ReactNode;
  /** Support is a help page, not a document that takes effect on a date. */
  dated?: boolean;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14 sm:py-20">
      <Link
        href="/"
        className="text-sm text-ink-soft underline underline-offset-2 hover:text-ink"
      >
        {site.appName}
      </Link>

      <h1 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-ink-soft">
        {site.appName} for iOS · {site.entity}
        {dated ? (
          <>
            <br />
            Effective{" "}
            <time dateTime={site.effectiveDateISO}>{site.effectiveDate}</time>
          </>
        ) : null}
      </p>

      {summary ? (
        <div className="doc mt-8 border-l-2 border-rule pl-4 text-[0.9375rem]">
          {summary}
        </div>
      ) : null}

      {sections ? (
        <nav aria-label="Contents" className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
            Contents
          </h2>
          <ol className="mt-3 space-y-1 text-[0.9375rem]">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="underline underline-offset-2 decoration-rule hover:decoration-ink"
                >
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="doc mt-10">{children}</div>
    </main>
  );
}

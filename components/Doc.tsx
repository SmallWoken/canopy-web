import { site } from "@/lib/site";

/**
 * The shell every legal document shares: title, effective date, and the
 * reading column. Kept narrow on purpose — these are documents people are
 * asked to actually read.
 */
export function Doc({
  title,
  intro,
  dated = true,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  /** Support is a help page, not a document that takes effect on a date. */
  dated?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-soft">
        {dated ? (
          <>
            Effective{" "}
            <time dateTime={site.effectiveDateISO}>{site.effectiveDate}</time> ·{" "}
          </>
        ) : null}
        {site.appName} for iOS, by {site.entity}
      </p>
      {intro ? (
        <div className="mt-8 rounded-lg border border-rule bg-card px-5 py-4 text-[0.9375rem] leading-relaxed">
          {intro}
        </div>
      ) : null}
      <div className="prose-doc mt-8">{children}</div>
    </article>
  );
}

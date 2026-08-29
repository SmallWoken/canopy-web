import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-24">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Nothing on this page
      </h1>
      <p className="mt-3 text-ink-soft">
        The link may be out of date.{" "}
        <Link
          href="/"
          className="underline decoration-accent underline-offset-2 hover:text-ink"
        >
          Start from the top
        </Link>
        .
      </p>
    </div>
  );
}

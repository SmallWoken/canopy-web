import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-6 text-center">
      <p>
        Nothing here.{" "}
        <Link href="/" className="underline underline-offset-2">
          Go back
        </Link>
        .
      </p>
    </main>
  );
}

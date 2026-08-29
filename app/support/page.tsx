import type { Metadata } from "next";
import { Doc } from "@/components/Doc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${site.appName} — subscriptions, refunds, backups, and reporting a problem.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <Doc
      title="Support"
      dated={false}
      summary={
        <>
          Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>{" "}
          and a person will read it. Include your device model and iOS version,
          the {site.appName} version from the app&rsquo;s settings screen, and
          what you expected to happen — it usually saves a round trip.
        </>
      }
    >
      <h2 id="subscription">Managing your subscription</h2>
      <p>
        Subscriptions live in your Apple Account, not in a {site.appName}{" "}
        account. To change or cancel one, open{" "}
        <strong>
          iOS Settings → your name → Subscriptions → {site.appName}
        </strong>
        .
      </p>
      <ul>
        <li>
          <strong>Cancelling</strong> stops the next charge. You keep access
          until the end of the period you have already paid for.
        </li>
        <li>
          <strong>A free trial</strong> becomes a paid subscription unless you
          cancel at least 24 hours before it ends.
        </li>
        <li>
          <strong>Deleting the app does not cancel a subscription.</strong>{" "}
          Cancel first, then delete.
        </li>
        <li>
          <strong>Restoring a purchase</strong> after reinstalling or moving to
          a new device: open {site.appName} and tap{" "}
          <em>Restore purchases</em> on the subscription screen, signed into the
          same Apple Account you bought with.
        </li>
      </ul>

      <h2 id="refunds">Refunds</h2>
      <p>
        Apple processes every purchase, so Apple issues refunds — we have no
        ability to do it from our side. Request one at{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>
        . If Apple declines and you think the circumstances warrant another
        look, write to us and we will help you make the case.
      </p>

      <h2 id="backups">Backing up and moving your journals</h2>
      <p>
        {site.appName} keeps your writing on your device and we hold no copy, so
        a lost device means lost journals unless you have a backup. Two things
        protect you:
      </p>
      <ul>
        <li>
          <strong>iOS backup</strong> — keep iCloud Backup on in{" "}
          <strong>Settings → your name → iCloud → iCloud Backup</strong>, or
          back up to a computer. Restoring a device restores {site.appName} with
          it.
        </li>
        <li>
          <strong>Export</strong> — use the export option inside the app to save
          a journal out as a file you keep yourself.
        </li>
      </ul>

      <h2 id="deleting">Deleting your data</h2>
      <p>
        Deleting a journal or entry in the app removes it from your device,
        passing through Recently Deleted first so an accident is recoverable.
        Deleting the app removes everything it stored. Because none of it ever
        reaches us, there is nothing to ask us to erase — see the{" "}
        <a href="/privacy">Privacy Policy</a> for the small amount of purchase
        information our payment provider holds, and how to ask about it.
      </p>

      <h2 id="permissions">Permissions</h2>
      <p>
        If the camera, microphone, dictation, or place names are not working,
        check <strong>Settings → {site.appName}</strong> on your device. Every
        permission is optional; refusing one only disables the feature that
        needs it.
      </p>

      <h2 id="bugs">Reporting a bug or asking for a feature</h2>
      <p>
        Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        Screenshots help. So does telling us the exact steps that produce the
        problem — {site.appName} holds no logs we can inspect from here, so your
        description is all we have to go on.
      </p>

      <h2 id="privacy-questions">Privacy questions</h2>
      <p>
        Same address. See the <a href="/privacy">Privacy Policy</a> for what is
        collected and your rights over it.
      </p>
    </Doc>
  );
}

import type { Metadata } from "next";
import { Doc } from "@/components/Doc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.appName} handles your journals, photos, audio and purchases. Your writing stays on your device.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Doc
      title="Privacy Policy"
      intro={
        <>
          <strong>The short version.</strong> {site.appName} is a journal that
          keeps your writing on your device. We do not have a server that holds
          your entries, we have no account to sign into, and we cannot read what
          you write. The only information that reaches anyone else is what is
          needed to sell you a subscription and, where you ask for them, a few
          features that call Apple&rsquo;s own services.
        </>
      }
    >
      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        {site.appName} is made by {site.entity} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;). This policy covers the {site.appName} iOS app (bundle
        identifier <code>{site.bundleId}</code>) and this website. You can reach
        us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> about
        anything in this document. For the purposes of the UK and EU GDPR,{" "}
        {site.entity} is the data controller for the limited personal
        information described below.
      </p>

      <h2 id="on-device">2. What stays on your device</h2>
      <p>
        Everything you make in {site.appName} is written to storage on your
        iPhone or iPad and stays there. That includes:
      </p>
      <ul>
        <li>your journals, entries, and the text you write in them;</li>
        <li>photos, stickers, drawings, and signatures you place on a page;</li>
        <li>audio you record and any text transcribed from it;</li>
        <li>tags, covers, prompts, reflections, and the place names attached to entries;</li>
        <li>your settings, including which paper, typeface, and reminders you have chosen.</li>
      </ul>
      <p>
        None of it is sent to us. We operate no server that receives journal
        content, and there is no account system, so there is nothing for us to
        log into and read. If you delete the app, that content is deleted with
        it unless you have a backup, and we have no copy to restore.
      </p>

      <h2 id="permissions">3. Device permissions, and what each one is for</h2>
      <p>
        iOS asks your permission before {site.appName} can use any of the
        following. You can refuse any of them and keep using the app; the
        feature that needs it is simply unavailable. All of them can be changed
        later in <strong>Settings → {site.appName}</strong>.
      </p>

      <h3>Camera and photo library</h3>
      <p>
        Used to put a photo on a page. Images are read into the entry and stored
        on your device. {site.appName} does not upload them, and does not scan
        your library beyond the items you pick.
      </p>

      <h3>Microphone and speech recognition</h3>
      <p>
        Used for voice notes and dictation. Recording is local.{" "}
        <strong>Transcription is not always local:</strong> {site.appName} uses
        Apple&rsquo;s Speech framework, and depending on your device, language,
        and iOS version, Apple may process the audio on its servers to produce
        the text. That processing is governed by{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&rsquo;s Privacy Policy
        </a>
        , not this one. If you would rather no audio ever leave the device, do
        not use dictation — type the entry instead.
      </p>

      <h3>Location</h3>
      <p>
        Used only when you ask an entry to record where it was written.{" "}
        {site.appName} requests a coarse position (accurate to roughly a
        kilometre) and asks Apple&rsquo;s MapKit to turn it into a place name.
        That lookup sends the coarse coordinates to Apple, and is again covered
        by Apple&rsquo;s privacy policy. Only the resulting name — a city or
        district, never coordinates — is saved to your entry. Location is
        requested while you are using the app; {site.appName} does not track you
        in the background.
      </p>

      <h3>Notifications</h3>
      <p>
        Used for writing reminders you set and, if you start a free trial, for a
        reminder before it converts to a paid subscription. Notifications are
        scheduled on your device. There is no push server, so we do not learn
        whether you opened one.
      </p>

      <h2 id="purchases">4. Purchases and subscriptions</h2>
      <p>
        Subscriptions are sold through Apple&rsquo;s In-App Purchase system and
        managed for us by{" "}
        <a
          href="https://www.revenuecat.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat, Inc.
        </a>
        , which tells the app whether you have an active subscription.
      </p>
      <p>To do that, RevenueCat receives:</p>
      <ul>
        <li>
          a random identifier for your installation, generated by RevenueCat —
          not your name, your email, or your Apple Account;
        </li>
        <li>
          the purchase receipt Apple issues, and the resulting subscription
          status, product, price, currency, and renewal or expiry dates;
        </li>
        <li>
          basic technical details such as your platform, app version, device
          model, and country.
        </li>
      </ul>
      <p>
        We see this as aggregate revenue reporting and, for an individual
        installation, subscription status. We never receive your payment card or
        Apple Account credentials — Apple handles payment and does not share
        them with developers. Apple&rsquo;s own handling of your purchase is
        covered by Apple&rsquo;s privacy policy.
      </p>
      <p>
        We rely on this processing to perform our contract with you: without it
        we cannot tell whether you have paid for the features you are asking
        for.
      </p>

      <h2 id="analytics">5. Analytics</h2>
      {site.analyticsEnabled ? (
        <>
          <p>
            {site.appName} uses{" "}
            <a
              href="https://posthog.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              PostHog
            </a>{" "}
            to understand how the app is used — which screens are opened, which
            features are used, and where the app fails. Events are tied to a
            random identifier for your installation, not to your identity.
          </p>
          <p>
            <strong>Journal content is never sent as part of an event.</strong>{" "}
            We do not record entry text, photos, audio, or place names. You can
            turn analytics off in <strong>Settings → Privacy</strong> inside the
            app, and we ask for your consent before collecting anything where
            the law requires it.
          </p>
        </>
      ) : (
        <p>
          {site.appName} contains no third-party analytics, advertising, or
          crash-reporting SDK. We do not track your behaviour in the app. If
          that changes, we will update this policy and this page before the
          change ships, and any analytics we add will exclude journal content
          and be capable of being switched off. Separately, Apple may give us
          anonymised, aggregated statistics through App Analytics if you have
          left <strong>Share iPhone Analytics</strong> on in iOS Settings; that
          data comes from Apple, is not linked to you, and cannot be tied to a
          person by us.
        </p>
      )}

      <h2 id="backups">6. Backups and iCloud</h2>
      <p>
        If you have iCloud Backup or encrypted device backups turned on, iOS may
        include {site.appName}&rsquo;s data in those backups. That is a function
        of your device, under your control in iOS Settings, and governed by
        Apple&rsquo;s terms. We have no access to your backups.
      </p>

      <h2 id="website">7. This website</h2>
      <p>
        This site sets no cookies and runs no analytics or tracking scripts. It
        is hosted by Vercel Inc., which processes standard server logs
        (IP address, user agent, requested page) to serve the site and protect
        it from abuse. Fonts are served from Google Fonts, which may receive
        your IP address when a page loads.
      </p>

      <h2 id="children">8. Children</h2>
      <p>
        {site.appName} is not directed to children under {site.minimumAge}, and
        we do not knowingly collect personal information from them. If you
        believe a child under {site.minimumAge} has provided us with personal
        information, contact us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we
        will delete what we hold.
      </p>

      <h2 id="retention">9. How long anything is kept</h2>
      <p>
        Journal content is kept on your device for as long as you keep it —
        deleting an entry or the app removes it, subject to the Recently Deleted
        area inside the app and to any backups you have made. Subscription
        records held by RevenueCat and Apple are retained for as long as needed
        to service your purchase and to meet tax and accounting obligations.
        Email you send us is kept until the matter is resolved and then for a
        reasonable period afterwards.
      </p>

      <h2 id="rights">10. Your rights</h2>
      <p>
        Depending on where you live — including under the EU and UK GDPR, PIPEDA
        in Canada, and the CCPA/CPRA in California — you may have the right to
        access, correct, delete, or port personal information about you, to
        object to or restrict its processing, and to withdraw consent.
      </p>
      <p>
        Because your journals never leave your device, most of these rights are
        exercised directly in the app: your content is already in your hands,
        exportable from the app, and deletable by you at any time without asking
        us. For the limited purchase information described in section 4, write
        to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we
        will respond within the time the applicable law allows. We will need
        enough information to locate the record — usually your Apple
        transaction ID — and we may be unable to act on a request we cannot
        verify.
      </p>
      <p>
        <strong>We do not sell or share personal information</strong> as those
        terms are used in the CCPA/CPRA, and we do not use it for cross-context
        behavioural advertising. Exercising any of these rights will never cause
        us to treat you differently. If you are in the EEA or UK and are
        unsatisfied with our response, you may complain to your local
        supervisory authority; in Canada, to the Office of the Privacy
        Commissioner.
      </p>

      <h2 id="transfers">11. International transfers</h2>
      <p>
        {site.entity} operates from {site.jurisdiction.country}, and the service
        providers named above (Apple, RevenueCat, Vercel) operate
        internationally, including in the United States. Where personal
        information is transferred out of the EEA or UK, it is done under
        appropriate safeguards such as the European Commission&rsquo;s standard
        contractual clauses.
      </p>

      <h2 id="security">12. Security</h2>
      <p>
        On-device content is protected by iOS itself — the device passcode,
        file-level encryption, and the app sandbox — which is why keeping a
        passcode set matters more than anything we could do. Data in transit to
        Apple and RevenueCat is encrypted with TLS. No system is perfectly
        secure, and we cannot guarantee absolute security of information
        transmitted to or from the app.
      </p>

      <h2 id="changes">13. Changes to this policy</h2>
      <p>
        We may update this policy as the app changes. The effective date at the
        top always reflects the current version, and material changes will be
        announced in the app or by a notice on this page before they take
        effect. Continuing to use {site.appName} after a change takes effect
        means you accept the updated policy.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        {site.entity} — <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        . We answer privacy questions at the same address as everything else.
      </p>
    </Doc>
  );
}

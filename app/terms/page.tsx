import type { Metadata } from "next";
import { Doc, type Section } from "@/components/Doc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The agreement between you and ${site.entity} covering your use of ${site.appName}, including subscriptions, billing, and cancellation.`,
  alternates: { canonical: "/terms" },
};

const renewing = site.plans.filter((p) => p.renews);
const lifetime = site.plans.find((p) => !p.renews);

const sections: Section[] = [
  { id: "agreement", title: "This agreement" },
  { id: "license", title: "Licence" },
  { id: "your-content", title: "Your content stays yours" },
  { id: "subscriptions", title: "Subscriptions and payment" },
  { id: "availability", title: "Changes to the App" },
  { id: "support", title: "Maintenance and support" },
  { id: "warranty", title: "Warranty disclaimer" },
  { id: "not-medical", title: "Not medical or professional advice" },
  { id: "liability", title: "Limitation of liability" },
  { id: "claims", title: "Product claims" },
  { id: "ip", title: "Intellectual property" },
  { id: "legal-compliance", title: "Legal compliance" },
  { id: "apple", title: "Apple as third-party beneficiary" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing law" },
  { id: "general", title: "General" },
  { id: "contact", title: "Contact" },
];

export default function TermsPage() {
  return (
    <Doc
      title="Terms of Service"
      sections={sections}
      summary={
        <>
          <strong>Read this first.</strong> This is the End User License
          Agreement between you and {site.entity} for {site.appName}. It is an
          agreement with us, not with Apple. By downloading or using{" "}
          {site.appName} you accept it. If you do not accept it, do not use the
          app.
        </>
      }
    >
      <h2 id="agreement">1. This agreement</h2>
      <p>
        These Terms of Service (the &ldquo;Terms&rdquo;) are a binding agreement
        between you and {site.entity} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
        governing your use of the {site.appName} application for iOS and any
        updates to it (the &ldquo;App&rdquo;). They incorporate our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
      <p>
        You must be at least {site.minimumAge} years old to use the App. If you
        are under the age of majority where you live, you may use the App only
        with the involvement of a parent or guardian who agrees to these Terms
        on your behalf.
      </p>

      <h2 id="license">2. Licence</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable
        licence to use the App on any Apple-branded device that you own or
        control, as permitted by the Usage Rules in the{" "}
        <a
          href="https://www.apple.com/legal/internet-services/terms/site.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Media Services Terms and Conditions
        </a>
        . The App is licensed to you, not sold.
      </p>
      <p>You may not:</p>
      <ul>
        <li>copy, modify, or create derivative works of the App;</li>
        <li>
          reverse engineer, decompile, or disassemble it, except to the extent
          that applicable law expressly permits despite this limitation;
        </li>
        <li>rent, lease, lend, sell, sublicense, or redistribute it;</li>
        <li>remove or obscure any proprietary notice;</li>
        <li>use it to break the law, or to infringe anyone&rsquo;s rights.</li>
      </ul>

      <h2 id="your-content">3. Your content stays yours</h2>
      <p>
        Everything you write, record, photograph, or draw in {site.appName}{" "}
        remains entirely yours. We claim no ownership of it and no licence to
        it. As described in the <a href="/privacy">Privacy Policy</a>, your
        content is stored on your device and we do not receive it — which also
        means we cannot recover it for you.
      </p>
      <p>
        <strong>You are responsible for your own backups.</strong> Keep iOS
        backups turned on, or export your journals from within the App. If you
        lose your device, delete the App, or delete an entry, we have no copy.
      </p>

      <h2 id="subscriptions">4. Subscriptions and payment</h2>
      <p>
        Some features require {site.appName} Pro, sold as an auto-renewing
        subscription or as a one-time purchase, through Apple&rsquo;s In-App
        Purchase system. Current pricing:
      </p>
      <ul>
        {renewing.map((plan) => (
          <li key={plan.name}>
            <strong>{plan.name}</strong> — {plan.usd} ({plan.cad}) per{" "}
            {plan.period}, renewing automatically.
          </li>
        ))}
        {lifetime ? (
          <li key={lifetime.name}>
            <strong>{lifetime.name}</strong> — {lifetime.usd} ({lifetime.cad}),
            a one-time purchase that does not renew.
          </li>
        ) : null}
      </ul>
      <p>
        Prices are shown in your local currency in the App before you buy, and
        the price displayed at the time of purchase is the price that governs.
        Prices exclude taxes, which Apple adds where applicable. We may change
        prices for future billing periods; for an existing subscription, Apple
        will notify you and ask for your consent where its rules require it.
      </p>

      <h3>Free trial</h3>
      <p>
        New subscribers may be offered a {site.freeTrialDays}-day free trial.{" "}
        <strong>
          Unless you cancel at least 24 hours before the trial ends, it converts
          automatically into a paid subscription
        </strong>{" "}
        and your Apple Account is charged the price above. Any unused portion of
        a free trial is forfeited if you buy a subscription during the trial.
        Free trials are limited to one per user or Apple Account, at
        Apple&rsquo;s discretion.
      </p>

      <h3>Automatic renewal</h3>
      <p>
        Subscriptions renew automatically at the end of each billing period
        unless cancelled. Your Apple Account is charged for renewal within 24
        hours before the current period ends, at the then-current price.
      </p>

      <h3>Cancelling</h3>
      <p>
        Cancel at any time in{" "}
        <strong>
          iOS Settings → your name → Subscriptions → {site.appName}
        </strong>
        , at least 24 hours before the period ends. Cancellation stops the next
        charge; it does not end the period you have already paid for, and you
        keep access until that period expires. Deleting the App does not cancel
        a subscription.
      </p>

      <h3>Refunds</h3>
      <p>
        Purchases are processed by Apple, so refunds are handled by Apple and
        governed by Apple&rsquo;s policies, not ours. Request one at{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>
        . We cannot issue refunds directly. This does not affect any statutory
        right of withdrawal or refund you may have under consumer law where you
        live.
      </p>

      <h3>&ldquo;Lifetime&rdquo;</h3>
      <p>
        A lifetime purchase means access for as long as we continue to offer{" "}
        {site.appName} on the App Store and it remains supported on your
        platform. It is not a promise that the App will run forever, and it does
        not entitle you to a different product if {site.appName} is
        discontinued.
      </p>

      <h2 id="availability">5. Changes to the App</h2>
      <p>
        We may add, change, or remove features, and we may stop offering the App
        altogether. We will not deliberately disable a feature you have already
        paid for during a period you have paid for. Nothing here obliges us to
        maintain the App indefinitely.
      </p>

      <h2 id="support">6. Maintenance and support</h2>
      <p>
        {site.entity} is solely responsible for support and maintenance of the
        App. <strong>Apple has no obligation whatsoever</strong> to furnish any
        maintenance or support services for it. Reach us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or see
        the <a href="/support">Support</a> page.
      </p>

      <h2 id="warranty">7. Warranty disclaimer</h2>
      <p>
        To the maximum extent permitted by law, the App is provided{" "}
        <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>,
        without warranty of any kind, express or implied, including the implied
        warranties of merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the App will be uninterrupted,
        error-free, or that it will not lose data.
      </p>
      <p>
        In the event of any failure of the App to conform to any applicable
        warranty, you may notify Apple, and Apple will refund the purchase price
        of the App to you if applicable. To the maximum extent permitted by law,
        Apple has no other warranty obligation whatsoever with respect to the
        App, and any other claims, losses, liabilities, damages, costs, or
        expenses attributable to any failure to conform to any warranty are{" "}
        {site.entity}&rsquo;s sole responsibility.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of implied warranties, so
        some of these exclusions may not apply to you. Nothing in these Terms
        limits rights you have under mandatory consumer protection law,
        including Canada&rsquo;s consumer protection legislation and equivalent
        laws in the EU and UK.
      </p>

      <h2 id="not-medical">8. {site.appName} is not medical or professional advice</h2>
      <p>
        Journalling prompts, reflections, and insights in the App are there to
        support your own writing. They are not medical, psychological, legal, or
        financial advice, and are not a substitute for care from a qualified
        professional. If you are in crisis, contact your local emergency
        services or a crisis line.
      </p>

      <h2 id="liability">9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {site.entity} will not be liable
        for any indirect, incidental, special, consequential, or exemplary
        damages, or for any loss of data, profits, or goodwill, arising out of
        or relating to the App, even if advised of the possibility. Our total
        aggregate liability arising out of or relating to the App and these
        Terms will not exceed the greater of the amount you paid us for the App
        in the twelve months before the event giving rise to the claim, or
        CA$100.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion or limitation of certain
        damages, so parts of this section may not apply to you.
      </p>

      <h2 id="claims">10. Product claims</h2>
      <p>
        {site.entity}, not Apple, is responsible for addressing any claims by
        you or any third party relating to the App or your possession and use of
        it, including product liability claims, any claim that the App fails to
        conform to any applicable legal or regulatory requirement, and claims
        arising under consumer protection, privacy, or similar legislation.
      </p>

      <h2 id="ip">11. Intellectual property</h2>
      <p>
        The App, its name, design, and all content we supply with it are owned
        by {site.entity} and protected by intellectual property law. In the
        event of any third-party claim that the App or your possession and use
        of it infringes that third party&rsquo;s intellectual property rights,{" "}
        {site.entity}, not Apple, will be solely responsible for the
        investigation, defence, settlement, and discharge of that claim.
      </p>

      <h2 id="legal-compliance">12. Legal compliance</h2>
      <p>
        You represent and warrant that you are not located in a country subject
        to a U.S. Government embargo or designated as a
        &ldquo;terrorist supporting&rdquo; country, and that you are not listed
        on any U.S. Government list of prohibited or restricted parties. You
        agree to comply with all applicable third-party terms when using the
        App.
      </p>

      <h2 id="apple">13. Apple as third-party beneficiary</h2>
      <p>
        You acknowledge and agree that Apple, and Apple&rsquo;s subsidiaries,
        are third-party beneficiaries of these Terms, and that upon your
        acceptance of them Apple will have the right — and will be deemed to
        have accepted the right — to enforce these Terms against you as a
        third-party beneficiary. This agreement is concluded between you and{" "}
        {site.entity} only, and not with Apple.
      </p>

      <h2 id="termination">14. Termination</h2>
      <p>
        These Terms apply until terminated. Your licence ends automatically if
        you breach them, and you may end it at any time by deleting the App.
        Sections 3, 7, 9, 10, 11, 13, and 15 survive termination.
      </p>

      <h2 id="governing-law">15. Governing law</h2>
      <p>
        These Terms are governed by the laws of {site.jurisdiction.phrase},
        without regard to conflict-of-laws rules, and you agree to the exclusive
        jurisdiction of {site.jurisdiction.courts}. If you are a consumer, this
        does not deprive you of the protection of the mandatory laws of the
        country where you live, or of the right to bring proceedings in your
        local courts where that right cannot be excluded.
      </p>

      <h2 id="general">16. General</h2>
      <p>
        If any provision of these Terms is held unenforceable, the rest remain
        in force. Our failure to enforce a provision is not a waiver of it. You
        may not assign these Terms; we may assign them in connection with a
        merger, acquisition, or sale of assets. These Terms, together with the
        Privacy Policy, are the entire agreement between you and us about the
        App.
      </p>
      <p>
        We may update these Terms as the App changes. The effective date at the
        top reflects the current version, and material changes will be notified
        in the App or on this page before they take effect.
      </p>

      <h2 id="contact">17. Contact</h2>
      <p>
        {site.entity} — <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </p>
    </Doc>
  );
}

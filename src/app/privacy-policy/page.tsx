import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { PHONE_DISPLAY, PHONE_TEL, SCHOOL_ADDRESS, SCHOOL_EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | SKS World School",
  description:
    "Read the SKS World School privacy policy to learn what information we collect through our website and admission enquiry forms, how we use it, and your rights.",
};

const LAST_UPDATED = "September 18, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-brand-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="font-heading text-4xl font-extrabold text-brand-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm font-bold text-brand-ink/60">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="mt-8 text-lg leading-relaxed text-brand-ink/80">
            SKS World School is committed to
            protecting the privacy of every parent, guardian, student, and visitor who
            interacts with this website. This Privacy Policy explains what information
            we collect, how we use it, and the choices you have.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                Information We Collect
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/80">
                <li>
                  Information you provide directly through enquiry and admission forms,
                  such as your name, your child&apos;s name, email address, phone number,
                  and the class/grade you are enquiring about.
                </li>
                <li>
                  Information collected automatically as you browse, such as IP address,
                  browser type, pages visited, and time spent on the site, gathered
                  through cookies and analytics tools.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                How We Use Your Information
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/80">
                <li>
                  To respond to your admission enquiries and communicate with you about
                  the admission process.
                </li>
                <li>To share relevant school and admission-related updates you have requested.</li>
                <li>To improve our website and understand how visitors use it.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">Cookies</h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                This website uses cookies and similar technologies to keep the site
                functioning and to understand usage. You can disable cookies in your
                browser settings, though some features may not work as intended.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                How We Share Information
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                We do not sell or rent your personal information. We may share it only
                with trusted service providers (such as hosting, email, or analytics
                partners) who help us operate the site, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                Data Security
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                We take reasonable technical and organisational measures to protect your
                information against unauthorised access, loss, or misuse. However, no
                method of transmission over the internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                Data Retention
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                We retain enquiry and admission information only for as long as
                necessary to serve the purpose it was collected for, or as required by
                applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                Children&apos;s Privacy
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                Admission enquiries for children are expected to be submitted by a
                parent or legal guardian. We do not knowingly collect information
                directly from children.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                Your Rights
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                You may request access to, correction of, or deletion of the personal
                information we hold about you, subject to legal obligations. To do so,
                contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                Changes to This Policy
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                We may update this Privacy Policy from time to time. The latest version
                will always be posted on this page with a revised &ldquo;Last updated&rdquo;
                date.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-extrabold text-brand-ink">
                Contact Us
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/80">
                If you have any questions about this Privacy Policy, contact us at:
              </p>
              <p className="mt-4 font-bold text-brand-ink">SKS World School</p>
              <p className="text-brand-ink/80">{SCHOOL_ADDRESS}</p>
              <p className="text-brand-ink/80">
                Email:{" "}
                <a href={`mailto:${SCHOOL_EMAIL}`} className="font-semibold text-brand-orange hover:underline">
                  {SCHOOL_EMAIL}
                </a>
              </p>
              <p className="text-brand-ink/80">
                Phone:{" "}
                <a href={`tel:${PHONE_TEL}`} className="font-semibold text-brand-orange hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

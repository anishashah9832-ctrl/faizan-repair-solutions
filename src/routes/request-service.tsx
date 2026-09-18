import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, heroAlt } from "@/lib/hero-content";
import { business, applianceOptions, waLink } from "@/lib/business";

const title = "Request Service | Appliance & AC Repair Rawalpindi";
const description =
  "Send your appliance repair request to Faizan Repairing Centre. Share your name, phone, appliance and problem and continue the conversation on WhatsApp.";

export const Route = createFileRoute("/request-service")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/request-service" },
    ],
    links: [{ rel: "canonical", href: "/request-service" }],
  }),
  component: RequestServicePage,
});

const field =
  "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const label = "block text-sm font-semibold text-navy";

function RequestServicePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [appliance, setAppliance] = useState("");
  const [problem, setProblem] = useState("");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [
      "Hello Faizan Repairing Centre, I would like to request repair service.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Appliance: ${appliance}`,
      `Problem: ${problem.trim()}`,
      `Preferred Contact: ${contactMethod}`,
    ].join("\n");
    setSent(true);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Request Service"
        title="Tell Us What Needs Repair"
        description="Send us your appliance details and describe the problem."
        image={heroImages.requestService}
        imageAlt={heroAlt.requestService}
        breadcrumb={{ label: "Request Service", to: "/request-service" }}
        priority
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className={field}
                />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="03xx xxxxxxx"
                  className={field}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={label} htmlFor="appliance">
                Appliance
              </label>
              <select
                id="appliance"
                name="appliance"
                required
                value={appliance}
                onChange={(e) => setAppliance(e.target.value)}
                className={field}
              >
                <option value="" disabled>
                  Select an appliance
                </option>
                {applianceOptions.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className={label} htmlFor="problem">
                Problem Description
              </label>
              <textarea
                id="problem"
                name="problem"
                required
                rows={5}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Briefly describe the issue you are facing"
                className={field}
              />
            </div>

            <fieldset className="mt-5">
              <legend className={label}>Preferred Contact Method (optional)</legend>
              <div className="mt-3 flex flex-wrap gap-4">
                {["WhatsApp", "Phone Call"].map((m) => (
                  <label key={m} className="inline-flex items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={m}
                      checked={contactMethod === m}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="h-4 w-4 accent-[var(--color-primary)]"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send Request on WhatsApp
            </button>

            <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
              {sent
                ? "Your request has been prepared in WhatsApp. If it did not open, please call us directly."
                : "Your details are used only to prepare your WhatsApp message."}
            </p>
          </form>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-bold text-navy">Prefer to call?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Speak to us directly about your repair requirement.
              </p>
              <a
                href={business.phoneHref}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {business.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-6 shadow-card">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-sm font-bold text-navy">Availability</h2>
                <p className="mt-1 text-sm text-muted-foreground">{business.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-6 shadow-card">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-sm font-bold text-navy">Location</h2>
                <p className="mt-1 text-sm text-muted-foreground">{business.address}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  Wallet,
  Layers,
  Smile,
  PhoneCall,
  Navigation,
  ClipboardList,
  CalendarCheck,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.png.asset.json";
import ownerImg from "@/assets/owner.png.asset.json";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { heroImages, heroAlt } from "@/lib/hero-content";
import { business, services, faqs, waGeneral, waLink, type Service } from "@/lib/business";

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <PageHero
      variant="home"
      priority
      eyebrow="Professional Appliance & Electronics Repair"
      title="Reliable Repair for the Appliances You Depend On."
      description="Professional appliance, AC and electronics repair services in Rawalpindi & Islamabad."
      image={heroImages.home}
      imageAlt={heroAlt.home}
      scrollHint="Explore Services"
      actions={
        <>
          <Link
            to="/request-service"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Request Repair <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
          </a>
        </>
      }
      meta={
        <>
          <a href={business.phoneHref} className="inline-flex items-center gap-2 font-display font-bold">
            <Phone className="h-4 w-4 text-cyan" aria-hidden="true" /> {business.phoneDisplay}
          </a>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-cyan" aria-hidden="true" /> {business.hours}
          </span>
        </>
      }
    />
  );
}

/* ------------------------------- Trust strip ------------------------------ */

const trust = [
  { icon: ShieldCheck, title: "Professional Repair", text: "Professional appliance and electronics service." },
  { icon: Layers, title: "Multiple Appliance Services", text: "Repair support across multiple household appliance categories." },
  { icon: Wallet, title: "Reasonable Charges", text: "Focused on practical and reasonable service charges." },
  { icon: Clock, title: "24/7 Availability", text: "Available 24/7." },
  { icon: MapPin, title: "Rawalpindi & Islamabad", text: "Serving customers in the local area." },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-card">
      <div className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-5">
        {trust.map((t) => (
          <div key={t.title} className="flex gap-3">
            <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="font-display text-sm font-bold text-navy">{t.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Service cards ----------------------------- */

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article
      id={service.slug}
      className="group flex scroll-mt-28 flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-navy">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <a
        href={service.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        {service.cta}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}

export function ServicesGrid({
  heading = "What We Repair",
  subheading = "Professional repair and maintenance services for the appliances and electronics you use every day.",
  items = services,
}: {
  heading?: string;
  subheading?: string;
  items?: Service[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <h2 className="font-display text-2xl font-extrabold text-navy md:text-4xl">{heading}</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subheading}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Featured AC ------------------------------ */

export function FeaturedAC() {
  const ac = services.find((s) => s.slug === "ac-repair-installation")!;
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-lift">
          <img
            src={heroImg.url}
            alt="Home appliances including air conditioning, refrigerator and washing machine in a modern kitchen"
            className="h-full w-full object-cover"
            width={1680}
            height={945}
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Featured Service
          </p>
          <h2 className="mt-4 font-display text-2xl font-extrabold md:text-4xl">
            AC Repair, Installation &amp; Maintenance
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/75">
            From AC repair and maintenance to new AC installation, we provide professional service
            for your cooling needs.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Repair", "Installation", "Maintenance"].map((t) => (
              <li
                key={t}
                className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={ac.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Request AC Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- How it works ----------------------------- */

const steps = [
  { n: "01", icon: PhoneCall, title: "Contact Us", text: "Call or message us on WhatsApp." },
  {
    n: "02",
    icon: ClipboardList,
    title: "Tell Us the Problem",
    text: "Tell us which appliance needs attention and describe the issue.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Arrange Your Service",
    text: "Discuss the repair requirement and arrange the service with the business.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-y bg-card">
      <div className="container-page">
        <h2 className="font-display text-2xl font-extrabold text-navy md:text-4xl">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-primary/20 pt-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-extrabold text-primary/25">{s.n}</span>
                <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Why choose us ----------------------------- */

const reasons = [
  { icon: ShieldCheck, title: "Reliable Work", text: "We focus on dependable repair and maintenance service." },
  { icon: Wallet, title: "Reasonable Charges", text: "We aim to provide practical repair solutions at reasonable charges." },
  { icon: Wrench, title: "Multiple Services", text: "One service center for a wide range of household appliances and electronics." },
  { icon: Smile, title: "Customer Satisfaction", text: "Customer satisfaction is an important part of our service approach." },
  { icon: MessageCircle, title: "Convenient Communication", text: "Call directly or contact us through WhatsApp." },
  { icon: Clock, title: "24/7 Availability", text: "Business availability is provided 24/7." },
];

export function WhyChooseUs() {
  return (
    <section className="section-y">
      <div className="container-page">
        <h2 className="max-w-2xl font-display text-2xl font-extrabold text-navy md:text-4xl">
          A Straightforward Approach to Appliance Repair
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <r.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-bold text-navy">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- About ---------------------------------- */

export function AboutSection() {
  return (
    <section className="section-y bg-card">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-xl border border-border shadow-card">
          <img
            src={ownerImg.url}
            alt="Faizan, owner of Faizan Repairing Centre and Home Appliances, at the service centre in Rawalpindi"
            className="h-full w-full object-cover"
            width={1024}
            height={1536}
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About Us</p>
          <h2 className="mt-4 font-display text-2xl font-extrabold text-navy md:text-4xl">
            Professional Service Built Around Your Needs
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {business.name} provides professional home appliance repairing, AC repairing, new AC
            installation, maintenance and electronics repair services in Rawalpindi, backed by 12
            years of hands-on experience in this field.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our approach is simple: provide reliable work, reasonable charges and customer-focused
            service while making it easy for customers to get the help they need.
          </p>
          <Link
            to="/request-service"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Request Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Service areas ----------------------------- */

export function ServiceAreasSection() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-navy md:text-4xl">
            Serving Rawalpindi &amp; Islamabad
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Located at Al-Noor Plaza, Chandani Chowk, {business.name} provides appliance, AC and
            electronics repair services for customers in Rawalpindi and Islamabad.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {business.address}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {business.hours}
            </li>
          </ul>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
          </a>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-bold text-navy">Find Us</h3>
          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <iframe
              title="Map showing Noor Plaza, Chandani Chowk, Rawalpindi"
              src={business.mapEmbedUrl}
              className="h-[320px] w-full border-0 md:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-card">
      <div className="container-page max-w-3xl">
        <h2 className="font-display text-2xl font-extrabold text-navy md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-bold text-navy"
                  >
                    {f.q}
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                {isOpen && (
                  <p className="-mt-1 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact -------------------------------- */

export function ContactSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <h2 className="font-display text-2xl font-extrabold text-navy md:text-4xl">
          Need Appliance Repair?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Call us or send a WhatsApp message to discuss your repair requirement.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Call
            </h3>
            <p className="mt-1 font-display text-xl font-bold text-navy">
              {business.phoneDisplay}
            </p>
            <a
              href={business.phoneHref}
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Call Now
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              WhatsApp
            </h3>
            <p className="mt-1 font-display text-xl font-bold text-navy">Chat with us directly</p>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Email
            </h3>
            <p className="mt-1 break-all font-display text-base font-bold text-navy">
              {business.email}
            </p>
            <a
              href={business.emailHref}
              className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h3 className="font-display text-sm font-bold text-navy">Location</h3>
              <p className="mt-1 text-sm text-muted-foreground">{business.addressShort}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h3 className="font-display text-sm font-bold text-navy">Availability</h3>
              <p className="mt-1 text-sm text-muted-foreground">24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------- */

export function FinalCTA() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 className="font-display text-2xl font-extrabold md:text-3xl">Need Appliance Repair?</h2>
          <p className="mt-2 text-navy-foreground/75">
            Call {business.phoneDisplay} or message us on WhatsApp.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call {business.phoneDisplay}
          </a>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export { waLink };

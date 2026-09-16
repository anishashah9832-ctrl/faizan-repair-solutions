import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { business, services, waGeneral } from "@/lib/business";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
  { to: "/request-service", label: "Request Service" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-lg bg-white p-3">
            <img
              src={logo.url}
              alt={`${business.name} logo`}
              className="h-12 w-auto"
              width={240}
              height={48}
              loading="lazy"
            />
          </div>
          <h2 className="mt-5 font-display text-lg font-bold">{business.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
            Professional appliance, AC and electronics repair services in Rawalpindi and Islamabad.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-cyan">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-cyan">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-cyan">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li>
              <a href={business.phoneHref} className="inline-flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="inline-flex items-start gap-2.5 break-all">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
              {business.addressShort}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
              {business.hours}
            </li>
            <li>
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                Chat With Us
              </a>
            </li>
            <li>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5"
              >
                <Navigation className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} {business.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

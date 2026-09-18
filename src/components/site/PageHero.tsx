import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** "home" = tall cinematic hero, "page" = shorter internal page hero */
  variant?: "home" | "page";
  objectPosition?: string;
  breadcrumb?: { label: string; to: "/services" | "/about" | "/service-areas" | "/contact" | "/request-service" };
  actions?: ReactNode;
  meta?: ReactNode;
  scrollHint?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  variant = "page",
  objectPosition = "center",
  breadcrumb,
  actions,
  meta,
  scrollHint,
  priority = false,
}: PageHeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className={`relative isolate flex w-full items-center justify-center overflow-hidden bg-navy text-navy-foreground ${
        isHome
          ? "min-h-[85svh] md:min-h-[80vh] lg:min-h-[82vh]"
          : "min-h-[46svh] md:min-h-[50vh] lg:min-h-[55vh]"
      }`}
    >
      <img
        src={image}
        alt={imageAlt}
        style={{ objectPosition }}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
      <div className="hero-overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page flex w-full flex-col items-center py-20 text-center md:py-24">
        {breadcrumb && (
          <Reveal
            as="nav"
            className="mb-5 text-xs text-navy-foreground/70"
            delay={40}
          >
            <Link to="/" className="transition-colors hover:text-navy-foreground">
              Home
            </Link>
            <span className="px-1.5" aria-hidden="true">
              /
            </span>
            <Link to={breadcrumb.to} className="text-cyan">
              {breadcrumb.label}
            </Link>
          </Reveal>
        )}

        <Reveal as="p" delay={100} className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan sm:text-xs">
          {eyebrow}
        </Reveal>

        <Reveal
          as="h1"
          delay={200}
          className="mt-4 max-w-[680px] text-balance font-display font-extrabold leading-[1.04]"
        >
          <span style={{ fontSize: isHome ? "clamp(2.2rem, 8.5vw, 4rem)" : "clamp(1.9rem, 7vw, 3.1rem)" }}>
            {title}
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={300}
          className="mt-5 max-w-[46ch] text-pretty text-base leading-relaxed text-navy-foreground/85 sm:text-lg"
        >
          {description}
        </Reveal>

        {actions && (
          <Reveal delay={400} className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            {actions}
          </Reveal>
        )}

        {meta && (
          <Reveal
            delay={500}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-navy-foreground/85"
          >
            {meta}
          </Reveal>
        )}

        {scrollHint && (
          <Reveal delay={600} className="mt-12 hidden sm:block">
            <span className="inline-flex flex-col items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-foreground/70">
              {scrollHint}
              <ChevronDown className="scroll-hint h-4 w-4 text-cyan" aria-hidden="true" />
            </span>
          </Reveal>
        )}
      </div>
    </section>
  );
}

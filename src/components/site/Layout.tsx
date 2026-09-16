import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
          {description}
        </p>
      </div>
    </section>
  );
}

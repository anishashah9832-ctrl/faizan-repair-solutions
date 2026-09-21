import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, heroAlt } from "@/lib/hero-content";
import { ContactSection, FAQ, FinalCTA } from "@/components/site/sections";
import { business, waGeneral } from "@/lib/business";

const title = "Contact | Faizan Repairing Centre, Rawalpindi";
const description =
  "Call 0333 5551142 or message us on WhatsApp for appliance, AC and electronics repair in Rawalpindi & Islamabad. Available 24/7.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Get in Touch"
        title="Need Appliance Repair?"
        description="Call or message us to discuss your appliance repair requirement."
        image={heroImages.contact}
        imageAlt={heroAlt.contact}
        breadcrumb={{ label: "Contact", to: "/contact" }}
        priority
        actions={
          <>
            <a
              href={business.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
            </a>
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
      />
      <Reveal>
        <ContactSection />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
    </Layout>
  );
}

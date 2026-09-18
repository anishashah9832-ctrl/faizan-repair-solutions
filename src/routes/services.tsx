import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, heroAlt } from "@/lib/hero-content";
import { ServicesGrid, FeaturedAC, HowItWorks, FinalCTA } from "@/components/site/sections";

const title = "Our Services | AC, Refrigerator & Appliance Repair Rawalpindi";
const description =
  "AC repair & installation, refrigerator, washing machine, oven, microwave, LED/LCD, geyser, stove and kitchen appliance repair services in Rawalpindi & Islamabad.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Services"
        title="Expert Care for Your Essential Appliances"
        description="Repair, installation and maintenance services for ACs, home appliances and electronics."
        image={heroImages.services}
        imageAlt={heroAlt.services}
        breadcrumb={{ label: "Services", to: "/services" }}
        priority
        actions={
          <Link
            to="/request-service"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Request Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        }
      />
      <ServicesGrid
        heading="What We Repair"
        subheading="Choose a service below and send us the details directly on WhatsApp."
      />
      <FeaturedAC />
      <HowItWorks />
      <FinalCTA />
    </Layout>
  );
}

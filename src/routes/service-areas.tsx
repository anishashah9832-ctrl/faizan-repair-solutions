import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, heroAlt } from "@/lib/hero-content";
import { ServiceAreasSection, FinalCTA } from "@/components/site/sections";
import { business } from "@/lib/business";

const title = "Service Areas | Appliance Repair Rawalpindi & Islamabad";
const description =
  "Located at Noor Plaza, Chandani Chowk, Rawalpindi. We provide appliance, AC and electronics repair services for customers across Rawalpindi and Islamabad.";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Local Service"
        title="Serving Rawalpindi & Islamabad"
        description="Find our location at Noor Plaza, Chandani Chowk, Rawalpindi."
        image={heroImages.serviceAreas}
        imageAlt={heroAlt.serviceAreas}
        breadcrumb={{ label: "Service Areas", to: "/service-areas" }}
        priority
        actions={
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
          </a>
        }
      />
      <ServiceAreasSection />
      <FinalCTA />
    </Layout>
  );
}

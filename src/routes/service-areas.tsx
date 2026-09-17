import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { ServiceAreasSection, FinalCTA } from "@/components/site/sections";

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
      <PageHeader
        eyebrow="Service Areas"
        title="Serving Rawalpindi & Islamabad"
        description="Find our location, get directions and contact us for appliance repair support in your area."
      />
      <ServiceAreasSection />
      <FinalCTA />
    </Layout>
  );
}

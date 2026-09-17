import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
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
      <PageHeader
        eyebrow="Services"
        title="Appliance, AC & Electronics Repair Services"
        description="Professional repair, installation and maintenance services for the home appliances and electronics you rely on every day."
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

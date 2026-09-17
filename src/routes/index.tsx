import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Hero,
  TrustBar,
  ServicesGrid,
  FeaturedAC,
  HowItWorks,
  WhyChooseUs,
  AboutSection,
  ServiceAreasSection,
  FAQ,
  FinalCTA,
} from "@/components/site/sections";

const title = "Appliance Repair Rawalpindi | Faizan Repairing Centre & Home Appliances";
const description =
  "Professional appliance, AC and electronics repair in Rawalpindi & Islamabad. AC repair & installation, refrigerator, washing machine, LED/LCD, geyser and kitchen appliance repair. Available 24/7.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <FeaturedAC />
      <HowItWorks />
      <WhyChooseUs />
      <AboutSection />
      <ServiceAreasSection />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
}

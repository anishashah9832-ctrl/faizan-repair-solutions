import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { homeServices } from "@/lib/business";
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
  "Professional appliance, AC and electronics repair in Rawalpindi & Islamabad. Auto washing machine, AC repair & installation, refrigerator, geyser and kitchen appliance repair. Available 24/7.";

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
      <Reveal>
        <TrustBar />
      </Reveal>
      <Reveal>
        <ServicesGrid items={homeServices} showMore />
      </Reveal>
      <Reveal>
        <FeaturedAC />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <ServiceAreasSection />
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

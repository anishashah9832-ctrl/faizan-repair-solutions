import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { AboutSection, WhyChooseUs, FinalCTA } from "@/components/site/sections";

const title = "About Us | Faizan Repairing Centre and Home Appliances";
const description =
  "Faizan Repairing Centre and Home Appliances provides professional home appliance, AC and electronics repair in Rawalpindi, backed by 12 years of hands-on experience.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About"
        title="Professional Service Built Around Your Needs"
        description="A local repair centre in Rawalpindi focused on reliable work, reasonable charges and easy communication."
      />
      <AboutSection />
      <WhyChooseUs />
      <FinalCTA />
    </Layout>
  );
}

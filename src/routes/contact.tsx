import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { ContactSection, FAQ, FinalCTA } from "@/components/site/sections";

const title = "Contact | Faizan Repairing Centre, Rawalpindi";
const description =
  "Call 0311 6568906 or message us on WhatsApp for appliance, AC and electronics repair in Rawalpindi & Islamabad. Available 24/7.";

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
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Call, WhatsApp or email us with your appliance repair requirement."
      />
      <ContactSection />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
}

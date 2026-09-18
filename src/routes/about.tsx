import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, heroAlt } from "@/lib/hero-content";
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
      <PageHero
        eyebrow="About Faizan Repairing Centre"
        title="Professional Service. Straightforward Solutions."
        description="Providing appliance, AC and electronics repair services in Rawalpindi and Islamabad."
        image={heroImages.about}
        imageAlt={heroAlt.about}
        breadcrumb={{ label: "About", to: "/about" }}
        priority
        actions={
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Contact Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        }
      />
      <AboutSection />
      <WhyChooseUs />
      <FinalCTA />
    </Layout>
  );
}

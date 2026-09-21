import {
  AirVent,
  Refrigerator,
  WashingMachine,
  CookingPot,
  Microwave,
  Droplets,
  Flame,
  Fan,
  type LucideIcon,
} from "lucide-react";

export const business = {
  name: "Faizan Repairing Centre and Home Appliances",
  shortName: "Faizan Repairing Centre",
  phoneDisplay: "0333 5551142",
  phoneIntl: "+92 333 5551142",
  phoneHref: "tel:+923335551142",
  email: "faizanwatto302@gmail.com",
  emailHref: "mailto:faizanwatto302@gmail.com",
  whatsappNumber: "923335551142",
  address: "Shop No.120, 1st Floor Al-Noor Plaza Chandani Chowk Rawalpindi",
  addressShort: "Shop No.120, 1st Floor Al-Noor Plaza Chandani Chowk Rawalpindi",
  hours: "Available 24/7",
  mapsUrl:
    "https://www.google.com/maps/place/Noor+Plaza/@33.5987506,73.0442271,13z/data=!4m10!1m2!2m1!1sNoor+Plaza+Chandani+Chowk+Rawalpindi!3m6!1s0x38df94dbbfdfd173:0x4d06a8901446c3f6!8m2!3d33.6312326!4d73.0714716!15sCiROb29yIFBsYXphIENoYW5kYW5pIENob3drIFJhd2FscGluZGlaJiIkbm9vciBwbGF6YSBjaGFuZGFuaSBjaG93ayByYXdhbHBpbmRpYQ%3D%3D?entry=ttu",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Noor%20Plaza%20Chandani%20Chowk%20Rawalpindi&z=15&output=embed",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waGeneral = waLink(
  "Hello Faizan Repairing Centre, I need appliance repair service. Please guide me.",
);

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  includes: string[];
  icon: LucideIcon;
  cta: string;
  whatsapp: string;
};

const s = (
  slug: string,
  name: string,
  short: string,
  description: string,
  includes: string[],
  icon: LucideIcon,
  cta: string,
  waText: string,
): Service => ({
  slug,
  name,
  short,
  description,
  includes,
  icon,
  cta,
  whatsapp: waLink(waText),
});

export const services: Service[] = [
  s(
    "washing-machine-repair",
    "Auto Washing Machine Repair",
    "Repair, troubleshooting and maintenance for automatic washing machines.",
    "Auto washing machine repair, fault troubleshooting and general maintenance service.",
    ["Washing Machine Repair", "Troubleshooting", "General Maintenance"],
    WashingMachine,
    "Request Washing Machine Service",
    "Hello Faizan Repairing Centre, I need auto washing machine repair service. Please guide me.",
  ),
  s(
    "ac-repair-installation",
    "AC Repair & Installation",
    "Professional AC repair, installation and maintenance services.",
    "AC repair, troubleshooting, general service, maintenance and new AC installation for homes and offices in Rawalpindi and Islamabad.",
    [
      "AC Repair",
      "AC Maintenance",
      "AC Troubleshooting",
      "New AC Installation",
      "Cooling-related service",
      "General AC service",
    ],
    AirVent,
    "Request AC Service",
    "Hello Faizan Repairing Centre, I need AC repair/service. Please guide me.",
  ),
  s(
    "refrigerator-repair",
    "Refrigerator Repair",
    "Repair, cooling diagnosis and maintenance for refrigerators.",
    "Refrigerator repair with cooling problem diagnosis, troubleshooting and general maintenance.",
    ["Refrigerator Repair", "Cooling Problem Diagnosis", "General Maintenance", "Troubleshooting"],
    Refrigerator,
    "Request Refrigerator Service",
    "Hello Faizan Repairing Centre, I need refrigerator repair service. Please guide me.",
  ),
  s(
    "oven-repair",
    "Oven Repair",
    "Oven repair, troubleshooting and maintenance.",
    "Oven repair service including troubleshooting and routine maintenance.",
    ["Oven Repair", "Troubleshooting", "Maintenance"],
    CookingPot,
    "Request Oven Service",
    "Hello Faizan Repairing Centre, I need oven repair service. Please guide me.",
  ),
  s(
    "microwave-repair",
    "Microwave Repair",
    "Microwave repair, troubleshooting and maintenance.",
    "Microwave oven repair service including troubleshooting and maintenance.",
    ["Microwave Repair", "Troubleshooting", "Maintenance"],
    Microwave,
    "Request Microwave Service",
    "Hello Faizan Repairing Centre, I need microwave repair service. Please guide me.",
  ),
  s(
    "geyser-repair",
    "Geyser Repair",
    "Geyser repair, troubleshooting and maintenance.",
    "Geyser repair service with troubleshooting and general maintenance.",
    ["Geyser Repair", "Troubleshooting", "Maintenance"],
    Droplets,
    "Request Geyser Service",
    "Hello Faizan Repairing Centre, I need geyser repair service. Please guide me.",
  ),
  s(
    "stove-cooking-range",
    "Stove & Cooking Range",
    "Stove and cooking range repair and maintenance.",
    "Stove repair, cooking range repair, troubleshooting and maintenance.",
    ["Stove Repair", "Cooking Range Repair", "Troubleshooting", "Maintenance"],
    Flame,
    "Request Stove Service",
    "Hello Faizan Repairing Centre, I need stove / cooking range repair service. Please guide me.",
  ),
  s(
    "kitchen-hood-appliances",
    "Kitchen Hood & Appliances",
    "Kitchen hood and kitchen appliance repair services.",
    "Kitchen hood repair, kitchen appliance repair, troubleshooting and maintenance.",
    ["Kitchen Hood Repair", "Kitchen Appliance Repair", "Troubleshooting", "Maintenance"],
    Fan,
    "Request Kitchen Service",
    "Hello Faizan Repairing Centre, I need kitchen hood / kitchen appliance repair service. Please guide me.",
  ),
];

/** Services featured on the home page, in display order. */
export const homeServiceSlugs = [
  "washing-machine-repair",
  "ac-repair-installation",
  "refrigerator-repair",
  "stove-cooking-range",
] as const;

export const homeServices: Service[] = homeServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is Service => Boolean(s));

export const applianceOptions = [
  "Auto Washing Machine",
  "AC",
  "Refrigerator",
  "Oven",
  "Microwave",
  "Geyser",
  "Stove / Cooking Range",
  "Kitchen Hood",
  "Other",
];

export const faqs = [
  {
    q: "What appliances do you repair?",
    a: "We provide repair services for automatic washing machines, ACs, refrigerators, ovens, microwaves, geysers, stoves, cooking ranges, kitchen hoods and other kitchen appliances.",
  },
  {
    q: "Do you provide AC installation?",
    a: "Yes. AC repair, new AC installation and maintenance services are offered.",
  },
  {
    q: "How can I request a repair?",
    a: "You can call 0333 5551142 or contact us through WhatsApp.",
  },
  { q: "Are you available 24/7?", a: "The business is available 24/7." },
  {
    q: "Where are you located?",
    a: "We are located at Shop No.120, 1st Floor Al-Noor Plaza Chandani Chowk Rawalpindi.",
  },
  {
    q: "Can I contact you through WhatsApp?",
    a: "Yes. Customers can contact the business directly through WhatsApp.",
  },
];

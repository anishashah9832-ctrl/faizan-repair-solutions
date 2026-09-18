import heroHome from "@/assets/hero.png.asset.json";
import heroServices from "@/assets/hero-services.jpg";
import heroAbout from "@/assets/hero-about.jpg";
import heroAreas from "@/assets/hero-areas.jpg";
import heroContact from "@/assets/hero-contact.jpg";

export const heroImages = {
  home: heroHome.url,
  services: heroServices,
  about: heroAbout,
  serviceAreas: heroAreas,
  contact: heroContact,
  requestService: heroAbout,
} as const;

export const heroAlt = {
  home: "Modern home appliances including refrigerator, washing machine, oven and microwave in a bright kitchen",
  services:
    "Appliance technician servicing a split air conditioner with a refrigerator and washing machine in a service centre",
  about: "Appliance technician repairing a washing machine in a modern home utility room",
  serviceAreas: "Aerial view of Rawalpindi and Islamabad at golden hour with the Margalla hills",
  contact: "Appliance service technician taking a customer call in an appliance service centre",
  requestService: "Appliance technician with a toolbox repairing a washing machine at a customer's home",
} as const;

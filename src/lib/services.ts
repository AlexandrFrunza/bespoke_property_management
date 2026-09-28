import serviceKey from "@/assets/service-key.png";
import serviceInspections from "@/assets/service-inspections.png";
import servicePool from "@/assets/service-pool.png";
import serviceCleaning from "@/assets/service-cleaning.png";
import serviceGardening from "@/assets/service-gardening.png";
import serviceRepairs from "@/assets/service-repairs.png";
import serviceCommunal from "@/assets/service-communal.png";
import serviceManagement from "@/assets/service-management.png";
import serviceRenovation from "@/assets/service-renovation.png";
import serviceRental from "@/assets/service-rental.png";
import serviceAdditional from "@/assets/service-additional.png";
import serviceHeroCommunal from "@/assets/service-hero-communal.jpg";
import serviceHeroManagement from "@/assets/service-hero-management.jpg";
import serviceHeroRenovation from "@/assets/service-hero-renovation.jpg";
import serviceHeroPool from "@/assets/service-hero-pool.jpg";
import serviceHeroKey from "@/assets/service-hero-key.jpg";
import serviceHeroInspections from "@/assets/service-hero-inspections.jpg";
import serviceHeroCleaning from "@/assets/service-hero-cleaning.jpg";
import serviceHeroGardening from "@/assets/service-hero-gardening.jpg";
import serviceHeroRepairs from "@/assets/service-hero-repairs.jpg";
import serviceHeroRental from "@/assets/service-hero-rental.jpg";
import serviceHeroAdditional from "@/assets/service-hero-additional.jpg";
import servicePhotoCommunal from "@/assets/service-photo-communal.jpg";
import servicePhotoManagement from "@/assets/service-photo-management.jpg";
import servicePhotoRenovation from "@/assets/service-photo-renovation.jpg";
import servicePhotoPool from "@/assets/service-photo-pool.jpg";
import servicePhotoKey from "@/assets/service-photo-key.jpg";
import servicePhotoInspections from "@/assets/service-photo-inspections.jpg";
import servicePhotoCleaning from "@/assets/service-photo-cleaning.jpg";
import servicePhotoGardening from "@/assets/service-photo-gardening.jpg";
import servicePhotoRepairs from "@/assets/service-photo-repairs.jpg";
import servicePhotoRental from "@/assets/service-photo-rental.jpg";
import servicePhotoAdditional from "@/assets/service-photo-additional.jpg";

export type Service = {
  number: string;
  image: string;
  imageClass?: string;
  slug?: string;
  heroImage?: string;
  photo?: string;
};

// Titles and descriptions are translated per language in src/lib/i18n.tsx;
// entries here are index-aligned with t.services in the dictionaries.
export const services: Service[] = [
  { number: "01", image: serviceKey, slug: "key-holding", heroImage: serviceHeroKey, photo: servicePhotoKey },
  { number: "02", image: serviceInspections, slug: "property-inspections", heroImage: serviceHeroInspections, photo: servicePhotoInspections },
  { number: "03", image: servicePool, slug: "pool-maintenance", heroImage: serviceHeroPool, photo: servicePhotoPool },
  { number: "04", image: serviceCleaning, slug: "cleaning", heroImage: serviceHeroCleaning, photo: servicePhotoCleaning },
  { number: "05", image: serviceGardening, slug: "gardening", heroImage: serviceHeroGardening, photo: servicePhotoGardening },
  { number: "06", image: serviceRepairs, slug: "repairs-maintenance", heroImage: serviceHeroRepairs, photo: servicePhotoRepairs },
  { number: "07", image: serviceCommunal, imageClass: "h-36 w-36 -translate-x-4", slug: "communal-complex-management", heroImage: serviceHeroCommunal, photo: servicePhotoCommunal },
  { number: "08", image: serviceManagement, slug: "property-management-care", heroImage: serviceHeroManagement, photo: servicePhotoManagement },
  { number: "09", image: serviceRenovation, slug: "renovation-construction", heroImage: serviceHeroRenovation, photo: servicePhotoRenovation },
  { number: "10", image: serviceRental, imageClass: "h-40 w-40 -translate-x-4", slug: "rental-guest-services", heroImage: serviceHeroRental, photo: servicePhotoRental },
  { number: "11", image: serviceAdditional, slug: "additional-property-services", heroImage: serviceHeroAdditional, photo: servicePhotoAdditional },
];

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/services";

const detailMeta: Record<string, { title: string; description: string }> = {
  "communal-complex-management": {
    title: "Communal & Complex Management | Bespoke Property Management Cyprus",
    description: "Complete administration of residential complexes in Cyprus — communal accounts, fee collection, credit control and support for owners' committees.",
  },
  "property-management-care": {
    title: "Property Management & Care | Bespoke Property Management Cyprus",
    description: "Professional management and ongoing care for villas, apartments and holiday homes in Cyprus — key holding, inspections, cleaning and administration.",
  },
  "renovation-construction": {
    title: "Renovation & Construction | Bespoke Property Management Cyprus",
    description: "From kitchens and bathrooms to full refurbishments — quality renovation and construction work across Cyprus, managed end to end.",
  },
  "pool-maintenance": {
    title: "Pool Maintenance | Bespoke Property Management Cyprus",
    description: "Regular pool cleaning, water balancing, equipment checks and repairs — keeping your Cyprus pool ready to enjoy all year round.",
  },
  "key-holding": {
    title: "Key Holding | Bespoke Property Management Cyprus",
    description: "A trusted local key holding service for your Cyprus property — secure storage, access for guests and contractors, and peace of mind abroad.",
  },
  "property-inspections": {
    title: "Property Inspections | Bespoke Property Management Cyprus",
    description: "Regular inspections of your Cyprus home with photo reports — spotting maintenance needs early and keeping your property secure.",
  },
  cleaning: {
    title: "Cleaning Services | Bespoke Property Management Cyprus",
    description: "Reliable cleaning for villas, apartments and holiday homes in Cyprus — regular cleans, deep cleans and changeover preparation.",
  },
  gardening: {
    title: "Gardening | Bespoke Property Management Cyprus",
    description: "Year-round care for gardens and outdoor spaces in Cyprus — pruning, lawn care, irrigation checks and seasonal tidy-ups.",
  },
  "repairs-maintenance": {
    title: "Repairs & Maintenance | Bespoke Property Management Cyprus",
    description: "Help with repairs and ongoing upkeep for Cyprus properties — from small fixes to larger maintenance projects.",
  },
  "rental-guest-services": {
    title: "Rental & Guest Services | Bespoke Property Management Cyprus",
    description: "Guest check-in and check-out, welcome packs, bookings, tenant screening and rent collection for Cyprus holiday homes and rentals.",
  },
  "additional-property-services": {
    title: "Additional Property Services | Bespoke Property Management Cyprus",
    description: "Alarm and security systems, solar energy solutions, furniture packages, insurance assistance and committee management in Cyprus.",
  },
};

export const Route = createFileRoute("/{-$lang}/services/$slug")({
  loader: ({ params }) => {
    if (!detailMeta[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const meta = detailMeta[params.slug] ?? {
      title: "Service | Bespoke Property Management Cyprus",
      description: "Property management and maintenance services in Cyprus.",
    };
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const { t, langParam } = useLang();
  const detail = t.serviceDetails[slug];
  const service = services.find((s) => s.slug === slug);

  if (!detail) return <ServiceNotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative isolate flex min-h-[440px] items-end overflow-hidden px-6 pb-12 pt-32 text-primary-foreground md:min-h-[500px] md:px-10 md:pb-16 md:pt-40">
          {service?.heroImage && (
            <>
              <img src={service.heroImage} alt="" aria-hidden="true" width={1920} height={800} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
            </>
          )}
          {!service?.heroImage && <div className="absolute inset-0 -z-10 bg-primary" />}
          <div className="mx-auto w-full max-w-[1216px]">
            <Link to="/{-$lang}/services" params={{ lang: langParam }} className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase text-primary-foreground/70 transition-colors hover:text-secondary">
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> {t.serviceDetailPage.backToServices}
            </Link>
            <h1 className="max-w-[720px] text-balance font-heading text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-5xl">{detail.title}</h1>
            <p className="mt-6 max-w-[600px] text-base leading-relaxed text-primary-foreground/90 md:text-lg">{detail.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1216px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_360px] md:gap-16">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase text-sea">{t.serviceDetailPage.includesLabel}</p>
              <ul className="space-y-4">
                {detail.items.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-border pb-4 text-base leading-relaxed text-foreground">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-sea">
                      <Check aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-[560px] text-base leading-relaxed text-muted-foreground">{detail.closing}</p>
            </div>

            {service?.photo && (
              <aside className="hidden md:block">
                <img src={service.photo} alt={detail.title} width={720} height={960} loading="lazy" className="h-full max-h-[560px] w-full rounded-md object-cover" />
              </aside>
            )}
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <h2 className="text-balance text-2xl font-semibold leading-tight md:text-3xl">{t.serviceDetailPage.ctaTitle}</h2>
            <Button asChild variant="inquiry" className="mt-6 h-12 rounded-sm px-6 text-sm">
              <Link to="/{-$lang}/contact" params={{ lang: langParam }}>{t.common.startConversation} <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function ServiceNotFound() {
  const { t, langParam } = useLang();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[1216px] px-6 py-32 md:px-10">
        <h1 className="text-3xl font-semibold">404</h1>
        <Button asChild variant="inquiry" className="mt-8 h-12 rounded-sm px-6 text-sm">
          <Link to="/{-$lang}/services" params={{ lang: langParam }}>{t.serviceDetailPage.backToServices}</Link>
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}

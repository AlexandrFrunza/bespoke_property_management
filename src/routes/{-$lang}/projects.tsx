import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BeforeAfter } from "@/components/before-after";
import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/{-$lang}/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Bespoke Property Management Cyprus" },
      { name: "description", content: "Before and after examples of our property work across Cyprus — villa renovations, pool recovery and bathroom renovations." },
      { property: "og:title", content: "Our Projects | Bespoke Property Management Cyprus" },
      { property: "og:description", content: "Before and after examples of our property work across Cyprus — renovations, pool care and ongoing maintenance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t, langParam } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1216px] px-6 py-16 md:px-10 md:py-24">
          <p className="mb-4 text-xs font-semibold uppercase text-sea">{t.projectsPage.eyebrow}</p>
          <h1 className="max-w-[700px] text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">{t.projectsPage.title}</h1>
          <p className="mt-5 max-w-[620px] text-base leading-relaxed text-muted-foreground">{t.projectsPage.intro}</p>

          <div className="mt-14 space-y-16">
            {projects.map((project, i) => {
              const text = t.projects[i]!;
              return (
                <article key={project.id} className="grid gap-6 md:grid-cols-2 md:items-center md:gap-12">
                  <BeforeAfter before={project.before} after={project.after} className="aspect-[4/3]" />
                  <div>
                    <h2 className="text-balance text-xl font-semibold text-card-foreground md:text-2xl">{text.title}</h2>
                    <p className="mt-3 max-w-[480px] text-sm leading-relaxed text-muted-foreground">{text.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <p className="max-w-[560px] text-base leading-relaxed text-muted-foreground">{t.servicesPage.closingText}</p>
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

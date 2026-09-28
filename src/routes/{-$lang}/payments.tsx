import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/{-$lang}/payments")({
  head: () => ({
    meta: [
      { title: "Payments | Bespoke Property Management Cyprus" },
      { name: "description", content: "Pay your Bespoke Property Management account securely online with PayPal — or contact us during office hours with any questions." },
      { property: "og:title", content: "Payments | Bespoke Property Management Cyprus" },
      { property: "og:description", content: "Pay your account quickly and securely online using PayPal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaymentsPage,
});

function PaymentsPage() {
  const { t } = useLang();
  const p = t.paymentsPage;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1216px] px-6 py-16 md:px-10 md:py-24">
          <p className="mb-4 text-xs font-semibold uppercase text-sea">{p.eyebrow}</p>
          <h1 className="max-w-[700px] text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">{p.title}</h1>
          <p className="mt-5 max-w-[620px] text-base leading-relaxed text-muted-foreground">{p.intro}</p>

          <div className="mt-14 max-w-[560px] rounded-md border border-border bg-card p-8 md:p-10">
            <h2 className="text-lg font-semibold text-card-foreground">{p.payTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.payText}</p>

            <form className="mt-7" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="3XCDZHU6G8LF8" />
              <Button type="submit" variant="inquiry" className="h-12 w-full rounded-sm px-6 text-sm sm:w-auto">
                {p.payButton}
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">{p.payNote}</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

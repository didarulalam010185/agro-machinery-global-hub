import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { getEquipment } from "@/data/solutions";

export const Route = createFileRoute("/solutions/$category/$equipment")({
  loader: ({ params }) => {
    const { cat, item } = getEquipment(params.category, params.equipment);
    if (!cat || !item) throw notFound();
    return { cat, item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Equipment not found — AgroMachGlobal" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.item.title} — AgroMachGlobal`;
    return {
      meta: [
        { title: t.slice(0, 70) },
        { name: "description", content: loaderData.item.summary },
        { property: "og:title", content: t.slice(0, 70) },
        { property: "og:description", content: loaderData.item.summary },
      ],
    };
  },
  component: EquipmentPage,
});

function EquipmentPage() {
  const { cat, item } = Route.useLoaderData();
  const others = cat.items.filter((i) => i.slug !== item.slug).slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link to="/solutions" className="hover:text-primary">
          Solutions
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/solutions/$category" params={{ category: cat.slug }} className="hover:text-primary">
          {cat.letter}. {cat.title}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{item.no}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-accent">
            {cat.letter}.{item.no} · {cat.title.replace(" Solution", "")}
          </p>
          <h1 className="rule-brand mt-3 text-3xl leading-tight md:text-4xl">{item.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{item.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <span key={h} className="bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground">
                {h}
              </span>
            ))}
          </div>

          <h2 className="mt-12 text-xl">Scope of supply & technical detail</h2>
          <ul className="mt-5 space-y-4">
            {item.details.map((d) => (
              <li key={d} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-l-4 border-accent bg-surface p-6">
            <h3 className="text-lg">Need a quotation for this equipment?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us your required capacity, site condition and budget range. We will propose the most
              cost-effective machine from our global source network.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase hover:bg-accent hover:text-accent-foreground"
            >
              Request Quotation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <aside>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            width={1280}
            height={720}
            className="w-full object-cover ring-1 ring-border"
          />

          <div className="mt-8 bg-card p-6 ring-1 ring-border">
            <h2 className="eyebrow text-accent">More in {cat.letter}. {cat.title.replace(" Solution", "")}</h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/solutions/$category/$equipment"
                    params={{ category: cat.slug, equipment: o.slug }}
                    className="flex gap-3 text-sm hover:text-primary"
                  >
                    <span className="font-display font-bold text-accent">{o.no}.</span>
                    <span>{o.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/solutions/$category"
              params={{ category: cat.slug }}
              className="mt-5 inline-block text-sm font-semibold text-primary hover:text-accent"
            >
              View all {cat.items.length} lines →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

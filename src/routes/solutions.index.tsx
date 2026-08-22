import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/solutions";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — AgroMachGlobal Agro Industry Machinery" },
      {
        name: "description",
        content:
          "Thirteen solution areas covering grain storage, poultry keeping, hatchery, processing, feed, flour and rice milling, seed crushing, aquaculture, renewable energy and steel buildings.",
      },
      { property: "og:title", content: "Solutions — AgroMachGlobal" },
      {
        property: "og:description",
        content: "Turnkey agro-industrial machinery solutions engineered for Bangladesh.",
      },
    ],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="eyebrow text-accent">Solutions</p>
      <h1 className="rule-brand mt-3 max-w-3xl text-4xl md:text-5xl">
        Complete machinery solutions for every stage of the agro industry
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Select a solution area to see the equipment lines we deliver, then open any equipment for
        technical detail, scope of supply and typical capacities.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/solutions/$category"
            params={{ category: c.slug }}
            className="group flex flex-col bg-card ring-1 ring-border transition-shadow hover:shadow-xl"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-0 left-0 bg-primary px-3 py-2 font-display font-bold text-primary-foreground">
                {c.letter}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-lg leading-snug group-hover:text-primary">{c.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.tagline}</p>
              <p className="mt-4 text-sm font-semibold text-accent">
                {c.items.length} equipment lines →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

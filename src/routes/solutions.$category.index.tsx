import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { getCategory } from "@/data/solutions";

export const Route = createFileRoute("/solutions/$category/")({
  loader: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Solution not found — AgroMachGlobal" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.cat.title} — AgroMachGlobal`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.cat.tagline },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.cat.tagline },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();

  return (
    <div>
      <section className="relative isolate">
        <img
          src={cat.image}
          alt={cat.title}
          className="absolute inset-0 h-full w-full object-cover"
          width={1280}
          height={720}
        />
        <div className="hero-mask absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-20">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-foreground/70">
            <Link to="/solutions" className="hover:text-accent">
              Solutions
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-ink-foreground">{cat.letter}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground md:text-5xl">
            <span className="text-accent">{cat.letter}.</span> {cat.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-foreground/80">{cat.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="eyebrow text-accent">Equipment & Sub-solutions</p>
        <h2 className="rule-brand mt-3 text-3xl">{cat.items.length} lines under this solution</h2>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {cat.items.map((item) => (
            <li key={item.slug}>
              <Link
                to="/solutions/$category/$equipment"
                params={{ category: cat.slug, equipment: item.slug }}
                className="group flex flex-wrap items-center gap-5 py-6 transition-colors hover:bg-surface"
              >
                <span className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center bg-secondary font-display font-bold text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                  {item.no}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-bold group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.summary}</span>
                </span>
                <ChevronRight className="mr-2 h-5 w-5 text-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

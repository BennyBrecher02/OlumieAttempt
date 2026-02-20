import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_NAME } from "../../consts";

export async function GET(context: { site?: URL }) {
  const entries = (await getCollection("updates", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: `${SITE_NAME} — Updates`,
    description: SITE_DESCRIPTION,
    site: context.site ?? new URL("https://olumiecapital.com"),
    items: entries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description,
      link: `/updates/${entry.slug}`,
      categories: [
        entry.data.type === "insight" ? "Insights" : "Firm updates",
        ...(entry.data.series ? [entry.data.series] : []),
        ...(entry.data.tags ?? []),
      ],
    })),
  });
}


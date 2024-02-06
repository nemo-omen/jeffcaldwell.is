import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection('blog');
  const published = blog.filter((entry) => !entry.data.draft);

  return rss({
    title: "Jeff Caldwell's Blog",
    description: "Writing about web development and pretty much whatever I'm thinking about.",
    site: context.site,
    items: published.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.summary,
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    // TODO: Create markup and styles for feed page
    // stylesheet: '/rss/styles.xsl'
  });
}
import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'Jeff Caldwell — Writing',
    description: 'Blog posts and (sometimes) drawings, mostly about web development.',
    site: 'https://jeffcaldwell.is',
    items: import.meta.glob('./writing/**/*.md'),
    customData: `<language>en-us</language>`,
    // stylesheet: '/rss/styles.xsl'
  });
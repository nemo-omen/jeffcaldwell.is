import { defineConfig } from 'astro/config';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import rehypeMathjaxChtml from 'rehype-mathjax/chtml.js'
import vercel from '@astrojs/vercel';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
   // adapter: vercel(),
   integrations: [svelte()],
   site: 'https://jeffcaldwell.is',
   markdown: {
      remarkPlugins: [
         'remark-math',
         'remark-smartypants',
         'remark-gfm',
      ],
      rehypePlugins: [[rehypeMathjaxChtml, {
         chtml: {
            fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
          }
      }]],
      drafts: true,
      shikiConfig: {
         // theme: 'monokai',
         wrap: true
      }
   }
});

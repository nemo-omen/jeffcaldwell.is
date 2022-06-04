import { defineConfig } from 'astro/config';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vercel from '@astrojs/vercel';
import svelte from '@astrojs/svelte';
import { getHighlighter } from 'shiki';


const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

// https://astro.build/config
export default defineConfig({
   // adapter: vercel(),
   integrations: [svelte()],
   site: 'https://jeffcaldwell.is',
   markdown: {
      remarkPlugins: [
         'remark-smartypants',
         'remark-gfm',
         'remark-math',
      ],
      rehypePlugins: [
         'rehype-autolink-headings',
         'rehype-slug',
         ['rehype-toc', {
            nav: false,
            position: 'afterbegin',
            customizeTOC: (toc) => {
               const tocSection = {
                  type: 'element',
                  tagName: 'div',
                  properties: {className: 'toc-section flow'},
                  children: [
                     {
                        type: 'element',
                        tagName: 'h2',
                        children: [
                           {
                              type: 'text',
                              value: 'Contents',
                           }
                        ]
                     },
                     toc
                  ]
               }

               if (toc.children.length < 1) {
                  return null;
               }

               return tocSection;
            }
         }],
         ['rehype-katex', {output: 'mathml'}],
         // 'rehype-mathjax',
      ],
      drafts: true,
      shikiConfig: {
         // theme: 'monokai',
         wrap: true
      },
   },
   vite: {
      resolve: {
         alias: {
            '$layouts': resolve(__dirname, './src/layouts'),
            '$components': resolve(__dirname, './src/components'),
         }
      }
   },
});

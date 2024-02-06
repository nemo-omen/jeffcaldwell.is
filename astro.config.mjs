import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffcaldwell.is',
  integrations: [mdx(), lit()]
});
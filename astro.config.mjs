import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import svelte from '@astrojs/svelte';
// https://astro.build/config
export default defineConfig({
   adapter: vercel(),
   integrations: [svelte()],
   site: 'https://trainingmontage.dev'
});

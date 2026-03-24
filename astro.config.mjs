import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://briggs-electric.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-display',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['Impact', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'DM Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});

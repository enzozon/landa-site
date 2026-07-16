import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL pública do deploy (GitHub Pages); trocar quando houver domínio próprio
  site: 'https://enzozon.github.io',
  integrations: [sitemap()],
});

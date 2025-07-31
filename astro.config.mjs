// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    tunnel({
      url: 'http://localhost:4321',
      port: 4321,
      acceptCloudflareNotice: true,
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
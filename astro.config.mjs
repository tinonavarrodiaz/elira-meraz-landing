import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import { qrcode } from 'vite-plugin-qrcode';
import removeConsole from 'vite-plugin-remove-console';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [removeConsole(), qrcode()],
  },
});

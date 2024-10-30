import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // No need for rollupOptions.external unless specific use case
    rollupOptions: {
      // Only include external if you're loading specific libraries from a CDN or another source
    }
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/wafi-portfolio/",
  server: {
    historyApiFallback: true, // Allows SPA to handle routing properly
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite config for the Lakbay CamSur public landing page
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});


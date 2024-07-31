import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tp-final-2-react-utn/',
  build: {
    outDir: 'dist', // Asegúrate de que esto apunte a 'dist'
  },
});

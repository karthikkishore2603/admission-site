import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from "path"; // Add this line
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // Update this line

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        form1: resolve(__dirname, "form1/index.html"),
        form2: resolve(__dirname, "form2/index.html"),
        },
    },
  },
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        form_one: resolve(__dirname, "formone/index.html"),
        form_two: resolve(__dirname, "form_two/index.html"),
       
        
      },
    },
  },
  plugins: [react()],
})



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // Koi tailwind plugin import nahi hota yahaan
// // Tailwind config alag file mein hota hai: `tailwind.config.js`

// export default defineConfig({
//   plugins: [react(),tailwindcss(),],
// });



import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://akshay-patil-dav.github.io/Akshay-Patil-dev/',
  plugins: [react()],
})

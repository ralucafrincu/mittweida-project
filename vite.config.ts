import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mittweida-project/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  }
})

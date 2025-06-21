import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/client/',
  plugins: [react()],
  server: {
    allowedHosts: ['https://spikyblooms.rf.gd'],
  },
})

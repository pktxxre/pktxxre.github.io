import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pktxxre/',
  build: {
    outDir: 'dist'
  }
})

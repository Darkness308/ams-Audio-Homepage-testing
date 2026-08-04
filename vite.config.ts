import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || '/ams-Audio-Homepage-testing/',
    server: {
        proxy: {
            '/api': {
                target: process.env.VITE_CHROMA_API_TARGET || 'http://127.0.0.1:8000',
                changeOrigin: true,
            },
        },
    },
    build: {
          outDir: 'dist',
          // Source maps disabled in production (security: no internal code exposure).
          // ADR-0005, Sprint 1 governance hardening.
          sourcemap: process.env.NODE_ENV !== 'production',
    },
})

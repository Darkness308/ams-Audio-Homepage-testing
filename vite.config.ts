import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// Content-Security-Policy for production builds only: the dev server injects
// inline scripts (React Refresh) that this policy would block.
const CSP = [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "img-src 'self' data:",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
].join('; ')

const cspPlugin = (): Plugin => ({
    name: 'ams-csp',
    apply: 'build',
    transformIndexHtml: {
        order: 'pre',
        handler: () => [
            { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' },
        ],
    },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [cspPlugin(), react()],
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
          sourcemap: mode !== 'production',
    },
}))

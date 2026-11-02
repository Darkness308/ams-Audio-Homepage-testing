import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

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

// Setzt {{schluessel.pfad}} in allen HTML-Seiten (Startseite, Impressum, Datenschutz) aus
// src/content/site.json ein. Unbekannte Schlüssel brechen den Build ab, damit keine Lücke
// unbemerkt online geht.
const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const sitePlugin = (): Plugin => ({
    name: 'ams-site-content',
    transformIndexHtml: {
        order: 'pre',
        handler: (html, ctx) => {
            const site = JSON.parse(readFileSync(`${root}src/content/site.json`, 'utf8'))
            return html.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, key: string) => {
                const value = key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], site)
                if (typeof value !== 'string') throw new Error(`site.json: Schlüssel „${key}“ fehlt oder ist kein Text (${ctx.path})`)
                return escapeHtml(value)
            })
        },
    },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [cspPlugin(), sitePlugin(), react()],
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
          // Mehrere Seiten: Impressum und Datenschutz sind statisches HTML ohne JavaScript,
          // damit sie auch ohne funktionierendes Skript erreichbar sind (ADR-0009).
          rolldownOptions: {
              input: {
                  main: `${root}index.html`,
                  impressum: `${root}impressum/index.html`,
                  datenschutz: `${root}datenschutz/index.html`,
              },
          },
    },
}))

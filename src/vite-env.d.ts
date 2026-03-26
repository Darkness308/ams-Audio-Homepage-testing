/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHROMA_QUERY_PATH?: string
  readonly VITE_BASE_PATH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

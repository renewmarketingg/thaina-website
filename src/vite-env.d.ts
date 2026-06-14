/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly WHATSAPP_NUMBER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
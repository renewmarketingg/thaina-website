/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
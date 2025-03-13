// Important referencing the Vite client types in this way
/// <reference types="vite/client" />

// Now, we can use the ImportMetaEnv vite interface to create environment variables and export them sanitized from config.ts.
interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_API_ORGANIZATION: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
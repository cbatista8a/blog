/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_CAPTCHA: string;
    // más variables de entorno...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
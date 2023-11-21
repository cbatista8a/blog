/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_SENDGRID_KEY: string;
    readonly PUBLIC_SENDGRID_LIST: string;
    readonly PUBLIC_CAPTCHA: string;
    // más variables de entorno...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
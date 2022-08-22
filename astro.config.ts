import { defineConfig } from "astro/config" ;
import prefetch from "@astrojs/prefetch" ;
import compress from "astro-compress" ;

export default defineConfig({ integrations: [prefetch(), compress()] }) ;
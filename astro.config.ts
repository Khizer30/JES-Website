import { defineConfig } from "astro/config" ;
import prefetch from "@astrojs/prefetch" ;

export default defineConfig({ integrations: [prefetch()] }) ;
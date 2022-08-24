import { defineConfig } from "astro/config" ;
import prefetch from "@astrojs/prefetch" ;
import compress from "astro-compress" ;
import react from "@astrojs/react" ;

export default defineConfig({ integrations: [prefetch(), compress(), react()] }) ;
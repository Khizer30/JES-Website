import { defineConfig } from "astro/config" ;
import prefetch from "@astrojs/prefetch" ;
import compress from "astro-compress" ;
import react from "@astrojs/react" ;
import sitemap from "@astrojs/sitemap" ;

export default defineConfig({ site: "https://jes-website-786.web.app", integrations: [prefetch(), compress(), react(), sitemap()] }) ;
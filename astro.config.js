import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch" ;

export default defineConfig({ integrations: [react(), image(), prefetch()] }) ;
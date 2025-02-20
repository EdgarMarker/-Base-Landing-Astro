// @ts-check
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

const { VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET } = import.meta.env;

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: VITE_SANITY_PROJECT_ID,
      dataset: VITE_SANITY_DATASET,
      useCdn: false,
    }),
    react(),
  ],
});

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const config = defineConfig({
  projectId,
  dataset,
  title: "Zaborav.icu",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: false,
});

export default config;

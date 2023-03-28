import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
  },
});

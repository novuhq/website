import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media, mediaAssetSource } from 'sanity-plugin-media';

import { schemaTypes } from './schemas';
import { deskStructure } from './structure/deskStructure';

export default defineConfig({
  title: 'Novu',
  basePath: '/studio',
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    media(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource),
    },
  },
});

import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: process.env.SANITY_API_PROJECT_ID || 'xw4ww4mz',
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [deskTool()],
  // plugins: [deskTool(), visionTool()],
  // plugins: isDev
  //   ? [deskTool(), visionTool()]
  //   : [deskTool()],

  schema: {
    types: schemaTypes,
  },
})

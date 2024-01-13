import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({ 
  name: 'default',
  title: 'Portfolio-App Sanity Studio',

  projectId: 'v4ufi909',
  dataset: 'production',

  BasePath: "/studio",
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})

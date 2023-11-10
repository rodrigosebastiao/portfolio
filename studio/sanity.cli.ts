import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_API_PROJECT_ID || 'xw4ww4mz',
    dataset: 'production'
  }
})

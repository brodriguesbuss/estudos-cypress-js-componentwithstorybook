import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'tqwu3z',
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
})
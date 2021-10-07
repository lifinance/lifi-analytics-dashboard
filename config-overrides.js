const { resolve } = require('path')
const { alias, configPaths } = require('react-app-rewire-alias')

module.exports = {
  webpack(config) {
    alias(configPaths('./tsconfig.paths.json'))(config)

    return config
  },

  paths(paths) {
    paths.appIndexJs = resolve('./src/main.tsx')

    return paths
  },
}

const path = require("path")
const fs = require("fs-extra")
const webpack = require("webpack")
const pkg = require("./package.json")

const isProd = process.env.NODE_ENV === "production"

const fetchFiles = async filePath => {
  const files = await fs.readdir(filePath)

  return files.reduce((acc, file) => {
    const elName = path.basename(file, ".js")
    return {
      ...acc,
      [elName]: [`${filePath}/${file}`, "default"]
    }
  }, {})
}

module.exports = {
  assetPrefix: isProd ? `https://cloudflare-design.github.io/${pkg.name}` : "",
  exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
    if (dev) {
      return defaultPathMap
    }

    await fs.copyFile(
      path.join(dir, ".nojekyll"),
      path.join(outDir, ".nojekyll")
    )
    return defaultPathMap
  },
  webpack: async (config, {}) => {
    const elements = await fetchFiles(path.join(__dirname, "elements"))
    const components = await fetchFiles(path.join(__dirname, "components"))
    config.plugins.push(
      new webpack.ProvidePlugin(elements),
      new webpack.ProvidePlugin(components)
    )
    config.resolve = {
      alias: {
        elements: path.resolve(__dirname, "elements/"),
        components: path.resolve(__dirname, "components/")
      }
    }
    return config
  }
}

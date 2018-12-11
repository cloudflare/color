const path = require("path")
const fs = require("fs-extra")
const webpack = require("webpack")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")

const debug = process.env.NODE_ENV !== "production";

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

module.exports = withBundleAnalyzer({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/color/' : '',
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "./bundles/client.html"
    }
  },
  webpack: async (config, {dev}) => {
     config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
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
})

const uniq = (items = []) => [...new Set(items)]

export default data => {
  const { properties } = data.stats.declarations

  const color = properties.color || []
  const backgroundColor = properties["background-color"] || []

  const colors = uniq(color.concat(backgroundColor))

  return { colors }
}

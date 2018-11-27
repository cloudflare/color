const uniq = (items = []) => [...new Set(items)]

export default stats => {
  const { properties } = stats.declarations

  const color = properties.color || []
  const backgroundColor = properties['background-color'] || []

  const colors = uniq(color.concat(backgroundColor))

  return { colors }
}


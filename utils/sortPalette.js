import Color from "color"

const sortPalette = palette => {
  // Create objects out of initial colors to make it easier when calculating
  const mapped = palette.map(c => ({
    original: c,
    hsl: Color(c)
      .hsl()
      .array()
  }))

  // Sort by hue and floor the numbers into groups of 12
  const sortByHue = (a, b) => {
    const hueA = Math.floor(a.hsl[0] / 30)
    const hueB = Math.floor(b.hsl[0] / 30)
    // If both hues are in the same "group" sort by lightness
    if (hueA === hueB) {
      return sortByLightness(a, b)
    }
    // Otherwise sort by hue
    return hueA - hueB
  }

  // Sort by lightness dark -> light
  const sortByLightness = (a, b) => a.hsl[2] - b.hsl[2]

  // Check if a colour is logically a gray by not having a hue or if the saturation is less than 10%
  const isGray = c => {
    return isNaN(c.hsl[0]) ? false : c.hsl[1] > 10
  }

  // Removes all grays first
  // then sort by hue or lightness
  // Then add back in the grays at the end of the array mapped by lightness
  // then spit out the original colour again
  const grays = mapped.filter(c => !isGray(c)).sort(sortByLightness)
  const restOfPalette = mapped.filter(isGray).sort(sortByHue)

  return [...grays, ...restOfPalette].map(c => c.original)
}

export default sortPalette

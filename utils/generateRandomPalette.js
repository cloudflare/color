import Color from "color"

const getRandomColor = palette =>
  palette[Math.round(Math.random() * (palette.length - 1))]

const getAccessibleColors = (palette, comparisonColor) =>
  palette.filter(p => Color(p).contrast(Color(comparisonColor)) > 4.5)

const generateRandomPalette = palette => {
  const randomMainColor = getRandomColor(palette)
  const accessibleBgColor = getRandomColor(
    getAccessibleColors(palette, randomMainColor)
  )
  const randomParentBg = getRandomColor(palette)
  const randomBorderColor = getRandomColor(palette)

  return {
    color: randomMainColor,
    bg: accessibleBgColor,
    borderColor: randomBorderColor,
    parentBg: randomParentBg
  }
}

export default generateRandomPalette

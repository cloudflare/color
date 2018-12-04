import Color from "color"

const getRandomColor = palette =>
  palette[Math.round(Math.random() * (palette.length - 1))]

const getAccessibleColors = (palette, comparisonColor) =>
  palette.filter(p => Color(p).contrast(Color(comparisonColor)) > 4.5)

const randMainAndComplementaryColors = (
  palette,
  pinnedColors,
  currentCombination
) => {
  if (!pinnedColors.color && !pinnedColors.bg) {
    const mainColor = getRandomColor(palette)
    const bgColor = getRandomColor(getAccessibleColors(palette, mainColor))
    return {
      mainColor,
      bgColor
    }
  }

  if (pinnedColors.color && pinnedColors.bg) {
    const mainColor = currentCombination.color
    const bgColor = currentCombination.bg
    return { mainColor, bgColor }
  }

  if (pinnedColors.color) {
    const mainColor = currentCombination.color
    const bgColor = getRandomColor(getAccessibleColors(palette, mainColor))
    return { mainColor, bgColor }
  }

  if (pinnedColors.bg) {
    const bgColor = currentCombination.bg
    const mainColor = getRandomColor(getAccessibleColors(palette, bgColor))
    return { mainColor, bgColor }
  }
}

const generateRandomPalette = (
  palette,
  pinnedColors,
  currentCombination = null
) => {
  const { mainColor, bgColor } = randMainAndComplementaryColors(
    palette,
    pinnedColors,
    currentCombination
  )

  const randomParentBg = pinnedColors.parentBg
    ? currentCombination.parentBg
    : getRandomColor(palette)

  const randomBorderColor = pinnedColors.borderColor
    ? currentCombination.borderColor
    : getRandomColor(palette)

  return {
    color: mainColor,
    bg: bgColor,
    borderColor: randomBorderColor,
    parentBg: randomParentBg
  }
}

export default generateRandomPalette

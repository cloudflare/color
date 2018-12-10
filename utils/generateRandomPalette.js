import Color from "color"

const getRandomColor = palette =>
  palette[Math.round(Math.random() * (palette.length - 1))]

const getAccessibleColors = (palette, comparisonColor, contrastRatio) =>
  palette.filter(p => Color(p).contrast(Color(comparisonColor)) > contrastRatio)

const randMainAndComplementaryColors = (
  palette,
  pinnedColors,
  currentCombination,
  contrastRatio
) => {
  if (!pinnedColors.color && !pinnedColors.bg) {
    const mainColor = getRandomColor(palette)
    const bgColor = getRandomColor(
      getAccessibleColors(palette, mainColor, contrastRatio)
    )
    if (bgColor) {
      return {
        mainColor,
        bgColor
      }
    }

    return randMainAndComplementaryColors(
      palette,
      pinnedColors,
      currentCombination,
      contrastRatio
    )
  }

  if (pinnedColors.color && pinnedColors.bg) {
    const mainColor = currentCombination.color
    const bgColor = currentCombination.bg
    return { mainColor, bgColor }
  }

  if (pinnedColors.color) {
    const mainColor = currentCombination.color
    const bgColor = getRandomColor(
      getAccessibleColors(palette, mainColor, contrastRatio)
    )
    if (bgColor) {
      return { mainColor, bgColor }
    }
    return randMainAndComplementaryColors(
      palette,
      pinnedColors,
      currentCombination,
      contrastRatio
    )
  }

  if (pinnedColors.bg) {
    const bgColor = currentCombination.bg
    const mainColor = getRandomColor(
      getAccessibleColors(palette, bgColor, contrastRatio)
    )
    if (mainColor) {
      return { mainColor, bgColor }
    }
    return randMainAndComplementaryColors(
      palette,
      pinnedColors,
      currentCombination,
      contrastRatio
    )
  }
}

const generateRandomPalette = (
  palette,
  pinnedColors,
  currentCombination = null,
  contrastRatio
) => {
  const { mainColor, bgColor } = randMainAndComplementaryColors(
    palette,
    pinnedColors,
    currentCombination,
    contrastRatio
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

import sample from "lodash/sample"
import shuffle from "lodash/shuffle"
import without from "lodash/without"

const getRandomColor = palette =>
  palette[Math.round(Math.random() * (palette.length - 1))]

const randMainAndComplementaryColors = (
  allCombos,
  pinnedColors,
  currentCombination
) => {
  if (!pinnedColors.color && !pinnedColors.bg) {
    const [mainColor, bgColor] = shuffle(sample(allCombos))
    return { mainColor, bgColor }
  }

  if (pinnedColors.color && pinnedColors.bg) {
    const mainColor = currentCombination.color
    const bgColor = currentCombination.bg
    return { mainColor, bgColor }
  }

  if (pinnedColors.color) {
    const mainColor = currentCombination.color
    const bgColorArray = allCombos.reduce((acc, curr) => {
      if (curr.includes(mainColor)) {
        const withoutMain = without(curr, mainColor)
        return [...acc, ...withoutMain]
      }
      return acc
    }, [])
    const bgColor = sample(bgColorArray)
    return {
      mainColor,
      bgColor
    }
  }

  if (pinnedColors.bg) {
    const bgColor = currentCombination.bg
    const mainColorArray = allCombos.reduce((acc, curr) => {
      if (curr.includes(bgColor)) {
        const withoutMain = without(curr, bgColor)
        return [...acc, ...withoutMain]
      }
      return acc
    }, [])
    const mainColor = sample(mainColorArray)
    return {
      mainColor,
      bgColor
    }
  }
}

const generateRandomPalette = (
  palette,
  pinnedColors,
  currentCombination = null,
  allCombos
) => {
  const { mainColor, bgColor } = randMainAndComplementaryColors(
    allCombos,
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

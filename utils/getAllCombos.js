import Color from "color"
import uniqWith from "lodash/uniqWith"
import isEqual from "lodash/isEqual"

const getAllCombos = (palette, targetContrast) => {
  console.log("fired")
  const allCombos = palette.reduce((acc, parentCurr, _, orig) => {
    const colorCombos = orig.reduce((acc, curr) => {
      const hasContrast =
        Color(parentCurr).contrast(Color(curr)) > targetContrast
      if (hasContrast) {
        const combo = [parentCurr, curr].sort()
        return [...acc, combo]
      }
      return acc
    }, [])
    return [...acc, ...colorCombos]
  }, [])

  return uniqWith(allCombos, isEqual)
}

export default getAllCombos

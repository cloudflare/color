import Color from "color"
import range from "lodash/range"
import inRange from "lodash/inRange"
import uniq from "lodash/uniq"

const calcDarkest = (hue, sat) => {
  const doesColorContrastWithWhite = color => {
    const contrastScore = color.contrast(Color("white"))
    return inRange(contrastScore, 16.13, 16.56)
  }

  const doesColorMergeWithBlack = color => {
    const contrastScore = color.contrast(Color("black"))
    return inRange(contrastScore, 1.27, 1.31)
  }

  const light = range(101).filter(light => {
    const C = Color.hsl(hue, sat, light)
    return doesColorMergeWithBlack(C) && doesColorContrastWithWhite(C)
  })
  return Color.hsl(hue, sat, light[0])
}

const calcLightest = (hue, sat) => {
  const doesColorMergeWithWhite = color => {
    const contrastScore = color.contrast(Color("white"))
    return inRange(contrastScore, 1.07, 1.13)
  }

  const doesColorContrastWithBlack = color => {
    const contrastScore = color.contrast(Color("black"))
    return inRange(contrastScore, 18.85, 19.62)
  }

  const light = range(101).filter(light => {
    const C = Color.hsl(hue, sat, light)
    return doesColorMergeWithWhite(C) && doesColorContrastWithBlack(C)
  })
  return Color.hsl(hue, sat, light[0])
}

const calcMiddle = (hue, sat) => {
  const doesContrastWithWhite = color => {
    const contrastScore = color.contrast(Color("white"))
    console.log(contrastScore, color)
    return inRange(contrastScore, 4.48, 4.8)
  }

  const doesContrastWithBlack = color => {
    const contrastScore = color.contrast(Color("black"))
    console.log(contrastScore)
    return inRange(contrastScore, 4.48, 4.8)
  }

  const light = range(101).filter(light => {
    const C = Color.hsl(hue, sat, light)
    console.log(doesContrastWithWhite(C) && doesContrastWithBlack(C))
    return doesContrastWithWhite(C) && doesContrastWithBlack(C)
  })

  return Color.hsl(hue, sat, light[0])
}

const calcStepValues = (dark, light, steps) => {
  const darkLum = dark.lightness()
  const lightLum = light.lightness()
  const stepDiff = (lightLum - darkLum) / (steps - 1)
  return range(steps).map(step =>
    Color.hsl(dark).lightness(darkLum + step * stepDiff)
  )
}

const createPalette = (hueVal, satVal, lgtVal) => {
  const starter = Color.hsl(hueVal, satVal, lgtVal)
  const steps = 10
  const [hue, sat] = starter.hsl().array()

  const darkest = calcDarkest(hue, sat)
  const middle = calcMiddle(hue, sat)
  const lightest = calcLightest(hue, sat)

  console.log(darkest, middle)

  const darkestToMiddle = calcStepValues(darkest, middle, steps / 2)
  const middleToLightest = calcStepValues(middle, lightest, steps / 2)

  const hslArray = [...darkestToMiddle, ...middleToLightest]

  return uniq(
    hslArray.map(hsl =>
      Color(hsl)
        .hsl()
        .string()
    )
  )
}

export default createPalette

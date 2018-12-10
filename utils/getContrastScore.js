import Color from "color"

const getContrastScore = (colorOne, colorTwo) =>
  Color(colorOne).contrast(Color(colorTwo))

export default getContrastScore

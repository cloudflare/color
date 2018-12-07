import React, { useState, useEffect } from "react"
import Color from "color"
import generativePalette from "../utils/generativePalette"

const GenerativePalette = ({ colorValue }) => {
  const [hueValue, satValue, lightValue] = Color(colorValue)
    .hsl()
    .array()

  const [hue, setHue] = useState(hueValue)
  const [palette, setPalette] = useState([])

  const handleHue = e => {
    setHue(parseInt(e.target.value))
  }

  useEffect(
    () => {
      const palette = generativePalette(hue, satValue, lightValue)
      setPalette(palette)
    },
    [hue]
  )

  return (
    <Div>
      <Input type="number" value={hue} onChange={handleHue} />
      {palette.map(c => (
        <Div
          bg={Color(c)
            .hsl()
            .string()}
        >
          {Color(c)
            .contrast(Color("black"))
            .toFixed(2)}
          ,
          {Color(c)
            .contrast(Color("white"))
            .toFixed(2)}
          {Color(c).hex()}
        </Div>
      ))}
    </Div>
  )
}

export default GenerativePalette

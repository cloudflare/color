import React, { useState, useEffect } from "react"
import Color from "color"

const newRGB = (currentColor, prevColor) => {
  try {
    return Color(currentColor)
      .rgb()
      .object()
  } catch (error) {
    return prevColor
  }
}

const newHSL = (currentColor, prevColor) => {
  try {
    return Color(currentColor)
      .hsl()
      .object()
  } catch (error) {
    return prevColor
  }
}

const ColorPicker = ({ currentColor, onChange }) => {
  const [RGBValue, setRGBValue] = useState(() => newRGB(currentColor))
  const [HSLValue, setHSLValue] = useState(() => newHSL(currentColor))

  useEffect(() => {
    setRGBValue(prevColor => newRGB(currentColor, prevColor))
    setHSLValue(prevColor => newHSL(currentColor, prevColor))
  })

  const handleRGBColorChange = e => {
    const name = e.target.name
    const value = e.target.value === "" ? 0 : parseInt(e.target.value)
    const newRGB = { ...RGBValue, [name]: value }
    const newHex = Color(newRGB).hex()
    onChange(newHex)
  }

  const handleHSLColorChange = e => {
    const name = e.target.name
    const value = e.target.value === "" ? 0 : parseInt(e.target.value)
    const newHSL = { ...HSLValue, [name]: value }

    const newHex = Color(newHSL).hex()
    onChange(newHex)
  }

  const handleHexColorChange = e => {
    const value = e.target.value
    const newHex = value
    try {
      onChange(newHex)
    } catch (error) {
      onChange(newHex)
    }
  }

  return (
    <Div py={3}>
      <Div css={{ transition: "none" }} mb={2} height={24} bg={currentColor} />
      <TextInput
        width={1 / 2}
        value={currentColor}
        onChange={handleHexColorChange}
      />
      <Flex>
        <Span>R</Span>
        <TextInput
          type="number"
          min="0"
          max="255"
          name="r"
          value={Math.floor(RGBValue.r)}
          onChange={handleRGBColorChange}
        />
        <Input
          name="r"
          type="range"
          min="0"
          max="255"
          value={Math.floor(RGBValue.r)}
          onChange={handleRGBColorChange}
        />
      </Flex>
      <Flex>
        <Span>G</Span>
        <TextInput
          name="g"
          type="number"
          min="0"
          max="255"
          value={Math.floor(RGBValue.g)}
          onChange={handleRGBColorChange}
        />
        <Input
          name="g"
          type="range"
          min="0"
          max="255"
          value={Math.floor(RGBValue.g)}
          onChange={handleRGBColorChange}
        />
      </Flex>
      <Flex>
        <Span>B</Span>
        <TextInput
          name="b"
          type="number"
          min="0"
          max="255"
          value={Math.floor(RGBValue.b)}
          onChange={handleRGBColorChange}
        />
        <Input
          name="b"
          type="range"
          min="0"
          max="255"
          value={Math.floor(RGBValue.b)}
          onChange={handleRGBColorChange}
        />
      </Flex>
      <Flex>
        <Span>H</Span>
        <TextInput
          name="h"
          type="number"
          min="0"
          max="360"
          onChange={handleHSLColorChange}
          value={Math.floor(HSLValue.h)}
        />
        <Input
          name="h"
          type="range"
          min="0"
          max="360"
          value={Math.floor(HSLValue.h)}
          onChange={handleHSLColorChange}
        />
      </Flex>
      <Flex>
        <Span>S</Span>
        <TextInput
          name="s"
          type="number"
          min="0"
          max="100"
          onChange={handleHSLColorChange}
          value={Math.floor(HSLValue.s)}
        />
        <Input
          name="s"
          type="range"
          min="0"
          max="100"
          value={Math.floor(HSLValue.s)}
          onChange={handleHSLColorChange}
        />
      </Flex>
      <Flex>
        <Span>L</Span>
        <TextInput
          name="l"
          type="number"
          min="0"
          max="100"
          value={Math.floor(HSLValue.l)}
          onChange={handleHSLColorChange}
        />
        <Input
          name="l"
          type="range"
          min="0"
          max="100"
          value={Math.floor(HSLValue.l)}
          onChange={handleHSLColorChange}
        />
      </Flex>
    </Div>
  )
}

export default ColorPicker

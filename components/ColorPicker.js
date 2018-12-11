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
    <Div px={4} pt={4} pb={5}
        color={Color(currentColor).isLight()? 'rbga(0,0,0,.75)': 'rgba(255,255,255,.85)'}
      bg={currentColor} mt={3} display='flex' flexWrap='wrap'>
      <TextInput
        width={1}
        color={Color(currentColor).isLight()? 'rbga(0,0,0,.75)': 'rgba(255,255,255,.85)'}
        bg='transparent'
        border={0}
        fontSize={5} fontWeight={800}
        value={currentColor}
        onChange={handleHexColorChange}
        px={0}
      />
      <Flex
        width={1/5}
        flexWrap='wrap'
      >
        <Label color='inherit' fontWeight={700}>R</Label>
        <TextInput
          type="number"
          border={0}
          color='inherit'
          bg='transparent'
          width='auto'
          min="0"
          max="255"
          fontSize={3}
          name="r"
          value={Math.floor(RGBValue.r)}
          onChange={handleRGBColorChange}
        />
      <Div width={1}>
        <Input
          name="r"
          type="range"
          min="0"
          max="255"
          width={64}
          value={Math.floor(RGBValue.r)}
          onChange={handleRGBColorChange}
        />
      </Div>
      </Flex>
      <Flex width={1/5} flexWrap='wrap'>
        <Label fontWeight={700} color='inherit'>G</Label>
        <TextInput
          name="g"
          type="number"
          color='inherit'
          fontSize={3}
          bg='transparent'
          border={0}
          width='auto'
          min="0"
          max="255"
          value={Math.floor(RGBValue.g)}
          onChange={handleRGBColorChange}
        />
        <Div width={1}>
        <Input
          name="g"
          type="range"
          width={64}
          min="0"
          max="255"
          value={Math.floor(RGBValue.g)}
          onChange={handleRGBColorChange}
        />
      </Div>
      </Flex>
      <Flex width={1/5} flexWrap='wrap'>
        <Label color='inherit' fontWeight={700}>B</Label>
        <TextInput
          name="b"
          type="number"
          border={0}
          fontSize={3}
          bg='transparent'
          width='auto'
          color='inherit'
          min="0"
          max="255"
          value={Math.floor(RGBValue.b)}
          onChange={handleRGBColorChange}
        />
        <Div width={1}>
        <Input
          name="b"
          type="range"
          min="0"
          max="255"
          width={64}
          value={Math.floor(RGBValue.b)}
          onChange={handleRGBColorChange}
        />
      </Div>
      </Flex>
      <Flex flexWrap='wrap'>
        <Flex width={1/5} flexWrap='wrap'>
        <Label fontWeight={700} color='inherit'>H </Label>
        <TextInput
          name="h"
          type="number"
          width='auto'
          bg='transparent'
          color='inherit'
          border={0}
          fontSize={3}
          min="0"
          max="360"
          onChange={handleHSLColorChange}
          value={Math.floor(HSLValue.h)}
        />
        <Div width={1}>
        <Input
          name="h"
          type="range"
          width={64}
          min="0"
          max="360"
          value={Math.floor(HSLValue.h)}
          onChange={handleHSLColorChange}
        />
      </Div>
      </Flex>
      <Flex width={1/5} flexWrap='wrap'>
        <Label fontWeight={700} color='inherit'>S</Label>
        <TextInput
          name="s"
          type="number"
          width='auto'
          bg='transparent'
          color='inherit'
          border={0}
          fontSize={3}
          min="0"
          max="100"
          onChange={handleHSLColorChange}
          value={Math.floor(HSLValue.s)}
        />
        <Div width={1}>
        <Input
          name="s"
          type="range"
          width={64}
          min="0"
          max="100"
          value={Math.floor(HSLValue.s)}
          onChange={handleHSLColorChange}
        />
      </Div>
      </Flex>
      <Flex flexWrap='wrap' width={1/5}>
        <Label fontWeight={700} color='inherit'>L</Label>
        <TextInput
          name="l"
          type="number"
          width='auto'
          bg='transparent'
          color='inherit'
          border={0}
          fontSize={3}
          min="0"
          max="100"
          value={Math.floor(HSLValue.l)}
          onChange={handleHSLColorChange}
        />
        <Div width={1}>
        <Input
          name="l"
          type="range"
          width={64}
          min="0"
          max="100"
          value={Math.floor(HSLValue.l)}
          onChange={handleHSLColorChange}
        />
      </Div>
      </Flex>
    </Flex>
    </Div>
  )
}

export default ColorPicker

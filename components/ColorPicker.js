import React, { useState, useEffect } from "react"
import Color from "color"

const getHex = val => {
  try {
    return Color(val).hex()
  } catch (e) {
    return null
  }
}

const getRGB = val => {
  try {
    return Color(val)
      .rgb()
      .object()
  } catch (e) {
    return {}
  }
}

const getHSL = val => {
  try {
    return Color(val)
      .hsl()
      .object()
  } catch (e) {
    return {}
  }
}

const getColorValues = val => {
  const hex = getHex(val)
  const rgb = getRGB(val)
  const hsl = getHSL(val)
  return {
    hex,
    rgb,
    hsl
  }
}

const ColorPicker = ({ currentColor, onChange, onRemoveColor }) => {
  const [colorValues, setColorValues] = useState(() =>
    getColorValues(currentColor)
  )

  useEffect(
    () => {
      const next = Color(currentColor)
      const newState = {
        hex: next.hex(),
        rgb: next.rgb().object(),
        hsl: next.hsl().object()
      }
      setColorValues(newState)
    },
    [currentColor]
  )

  const handleHexChange = e => {
    const val = e.target.value
    setColorValues(prevValue => ({ ...prevValue, hex: val }))
    try {
      const next = Color(val).hex()
      onChange(next)
    } catch (e) {
      return
    }
  }

  const handleRGBChange = e => {
    const val = e.target.value
    const name = e.target.name

    const rgbValue = { ...colorValues.rgb, [name]: val }
    setColorValues(prevValue => ({
      ...prevValue,
      rgb: rgbValue
    }))

    try {
      const next = Color(rgbValue).hex()
      onChange(next)
    } catch (e) {
      return
    }
  }

  const handleHSLChange = e => {
    const val = e.target.value
    const name = e.target.name

    const hslValue = { ...colorValues.hsl, [name]: val }
    setColorValues(prevValue => ({
      ...prevValue,
      hsl: hslValue
    }))

    try {
      const next = Color(hslValue).hex()
      onChange(next)
    } catch (e) {
      return
    }
  }

  const getContrastRatio = (currentColor, otherColor) => {
    return Color(currentColor)
      .contrast(Color(otherColor))
      .toFixed(2)
  }

  const contrastForBlack = currentColor => {
    return getContrastRatio(currentColor, "black")
  }

  const contrastForWhite = currentColor => {
    return getContrastRatio(currentColor, "white")
  }

  const showContrastLevel = ratio => {
    if (ratio < 3) {
      return "Fail"
    } else if (ratio > 3 && ratio < 4.5) {
      return "AA large"
    } else if (ratio >= 4.5 && ratio < 7) {
      return "AA"
    } else if (ratio >= 7) {
      return "AAA"
    }
    return ""
  }

  return (
    <Div
      px={4}
      py={4}
      color={
        Color(currentColor).isLight()
          ? "rbga(0,0,0,.75)"
          : "rgba(255,255,255,.85)"
      }
      bg={currentColor}
      mt={3}
      display="flex"
      flexWrap="wrap"
    >
      <Flex width={1} mb={4}>
          <TextInput
            color="inherit"
            bg="transparent"
            border={0}
            fontSize={4}
            fontWeight={800}
            value={colorValues.hex}
            onChange={handleHexChange}
            px={0}
            css={{ transition: "none" }}
          />
          <P
            ml='auto'
            mr={3}
            display='inline-block'
            fontSize={1}
            px={2}
            py={1}
            borderRadius={9999}
            my={0}
            bg='black'
            color={currentColor}
            css={{ transition: "none", whiteSpace: 'nowrap' }}
          >
            <Span>{contrastForBlack(currentColor)} </Span>

            <Span>{showContrastLevel(contrastForBlack(currentColor))}</Span>
          </P>
          <P
            display='inline-block'
            fontSize={1}
            px={2}
            py={1}
            borderRadius={9999}
            m={0}
            bg='white'
            color={currentColor}
            css={{ transition: "none", whiteSpace: 'nowrap' }}
          >
            <Span>{contrastForWhite(currentColor)}</Span>
            <Span>{showContrastLevel(contrastForWhite(currentColor))}</Span>
          </P>
        </Flex> 
      <Flex width={1}>
        <Flex width={1/3}>
          <Label color="inherit" fontWeight={700} css={{ transition: "none" }}>
            Red
          </Label>
          <TextInput
            type="number"
            border={0}
            color="inherit"
            bg="transparent"
            width="auto"
            min="0"
            max="255"
            fontSize={3}
            name="r"
            value={Math.floor(colorValues.rgb.r)}
            onChange={handleRGBChange}
            css={{ transition: "none" }}
          />
        </Flex>
        <Div width={1}>
          <Input
            name="r"
            type="range"
            min="0"
            max="255"
            step="1"
            value={colorValues.rgb.r}
            onChange={handleRGBChange}
            width={1}
          />
        </Div>
      </Flex>
      <Flex width={1}>
        <Flex width={1/3}>
        <Label fontWeight={700} color="inherit" css={{ transition: "none" }}>
          Green
        </Label>
        <TextInput
          name="g"
          type="number"
          color="inherit"
          fontSize={3}
          bg="transparent"
          border={0}
          width="auto"
          min="0"
          max="255"
          value={Math.floor(colorValues.rgb.g)}
          onChange={handleRGBChange}
          css={{ transition: "none" }}
        />
        </Flex>
        <Div width={2/3}>
          <Input
            name="g"
            type="range"
            width={1}
            min="0"
            max="255"
            step="1"
            value={colorValues.rgb.g}
            onChange={handleRGBChange}
          />
        </Div>
      </Flex>
      <Flex width={1}>
        <Flex width={1/3}>
          <Label color="inherit" fontWeight={700} css={{ transition: "none" }}>
            Blue
          </Label>
          <TextInput
            name="b"
            type="number"
            border={0}
            fontSize={3}
            bg="transparent"
            width="auto"
            color="inherit"
            min="0"
            max="255"
            value={Math.floor(colorValues.rgb.b)}
            onChange={handleRGBChange}
            css={{ transition: "none" }}
          />
        </Flex>
        <Div width={1}>
          <Input
            name="b"
            type="range"
            min="0"
            max="255"
            step="1"
            width={1}
            value={colorValues.rgb.b}
            onChange={handleRGBChange}
          />
        </Div>
      </Flex>
      <Flex flexWrap="wrap" mt={3}>
        <Flex width={1}>
          <Flex width={1/3} justifyContent='right'>
            <Label fontWeight={700} color="inherit" css={{ transition: "none" }}>
              Hue
            </Label>
            <TextInput
              name="h"
              type="number"
              bg="transparent"
              color="inherit"
              border={0}
              fontSize={3}
              width='auto'
              min="0"
              max="360"
              onChange={handleHSLChange}
              value={Math.floor(colorValues.hsl.h)}
              css={{ transition: "none" }}
            />
          </Flex>
          <Div width={2/3}>
          <Input
            width={1}
            display='block'
            name="h"
            type="range"
            min="0"
            max="360"
            step="1"
            value={colorValues.hsl.h}
            onChange={handleHSLChange} />
        </Div>
        </Flex>
        <Flex width={1}>
          <Flex width={1/3}>
          <Label fontWeight={700} color="inherit" css={{ transition: "none" }}>
            Saturation
          </Label>
          <TextInput
            name="s"
            type="number"
            width="auto"
            bg="transparent"
            color="inherit"
            border={0}
            fontSize={3}
            min="0"
            max="100"
            onChange={handleHSLChange}
            value={Math.floor(colorValues.hsl.s)}
            css={{ transition: "none" }}
          />
        </Flex>
        <Div width={2/3}>
            <Input
              name="s"
              type="range"
              width={1}
              min="0"
              max="100"
              step="1"
              value={colorValues.hsl.s}
              onChange={handleHSLChange}
            />
          </Div>
        </Flex>
        <Flex width={1}>
          <Flex width={1/3}>
            <Label fontWeight={700} color="inherit" css={{ transition: "none" }}>
              Lightness
            </Label>
            <TextInput
              name="l"
              type="number"
              width="auto"
              bg="transparent"
              color="inherit"
              border={0}
              fontSize={3}
              min="0"
              max="100"
              value={Math.floor(colorValues.hsl.l)}
              onChange={handleHSLChange}
              css={{ transition: "none" }}
            />
          </Flex>
          <Div width={2/3}>
            <Input
              name="l"
              type="range"
              width={1}
              min="0"
              max="100"
              step="1"
              value={colorValues.hsl.l}
              onChange={handleHSLChange}
            />
          </Div>
        </Flex>
      </Flex>
      <Div textAlign='center' mt={3}>
        <TextButton bg='transparent' color='inherit' onClick={() => onRemoveColor(currentColor)}>
          Remove
        </TextButton>
      </Div>
    </Div>
  )
}

export default React.memo(ColorPicker)

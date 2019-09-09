import React, { useState, useEffect } from "react"
import Color from "color"
import theme from "../theme"

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

const RangeSlider = ({
  name,
  min,
  max,
  onChange,
  value,
  thumbColor,
  trackColor
}) => {
  return (
    <Input
      name={name}
      type="range"
      min={min}
      max={max}
      step="1"
      value={value}
      onChange={onChange}
      width={1}
      css={{
        appearance: "none",
        borderRadius: "999px",
        height: "6px",
        outline: "none",
        backgroundColor: trackColor,
        "&::-webkit-slider-thumb": {
          backgroundColor: thumbColor,
          appearance: "none",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          cursor: "pointer"
        }
      }}
    />
  )
}

const ColorPicker = ({ currentColor, onChange, onRemoveColor }) => {
  const [colorValues, setColorValues] = useState(() =>
    getColorValues(currentColor)
  )

  useEffect(() => {
    const next = Color(currentColor)
    const newState = {
      hex: next.hex(),
      rgb: next.rgb().object(),
      hsl: next.hsl().object()
    }
    setColorValues(newState)
  }, [currentColor])

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

  const getColor = currentColor =>
    Color(currentColor).isLight()
      ? "rgba(0,0,0,0.75)"
      : "rgba(255,255,255,0.85)"

  return (
    <Article
      px={4}
      py={4}
      color={getColor(currentColor)}
      bg={currentColor}
      mt={3}
    >
      <Div maxWidth="48rem" mx="auto">
        <Flex display="flex" flexWrap="wrap" alignItems="flex-start" mx={-3}>
          <Flex width={1} mb={4} px={3}>
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
              ml="auto"
              mr={3}
              display="inline-block"
              fontSize={1}
              px={2}
              py={1}
              borderRadius={9999}
              my={0}
              bg="black"
              color={currentColor}
              css={{ transition: "none", whiteSpace: "nowrap" }}
            >
              <Span fontWeight={800}>{contrastForBlack(currentColor)} </Span>

              <Span>{showContrastLevel(contrastForBlack(currentColor))}</Span>
            </P>
            <P
              display="inline-block"
              fontSize={1}
              px={2}
              py={1}
              borderRadius={9999}
              m={0}
              bg="white"
              color={currentColor}
              css={{ transition: "none", whiteSpace: "nowrap" }}
            >
              <Span fontWeight={800}>{contrastForWhite(currentColor)} </Span>
              <Span>{showContrastLevel(contrastForWhite(currentColor))}</Span>
            </P>
          </Flex>
          <Flex width={[1, 1 / 2]} flexWrap="wrap" px={3}>
            <Label
              fontSize={[1, 2]}
              display="block"
              width={1}
              color="inherit"
              fontWeight={700}
              css={{ transition: "none" }}
            >
              Red
            </Label>
            <Flex width={1} mb={1}>
              <Div width={1}>
                <RangeSlider
                  name="r"
                  min="0"
                  max="255"
                  value={colorValues.rgb.r}
                  onChange={handleRGBChange}
                  trackColor={Color(currentColor).isLight() ? "#000" : "#fff"}
                  thumbColor={Color(currentColor).isLight() ? "#fff" : "#000"}
                />
              </Div>
              <Div width={64} justifyContent="right">
                <TextInput
                  px={0}
                  py={0}
                  type="number"
                  border={0}
                  color="inherit"
                  bg="transparent"
                  textAlign="right"
                  width={1}
                  min="0"
                  max="255"
                  fontSize={[2, 3]}
                  name="r"
                  value={Math.floor(colorValues.rgb.r)}
                  onChange={handleRGBChange}
                  css={{ transition: "none" }}
                />
              </Div>
            </Flex>
            <Label
              width={1}
              fontSize={[1, 2]}
              fontWeight={700}
              color="inherit"
              css={{ transition: "none" }}
            >
              Green
            </Label>
            <Flex width={1} mb={1}>
              <Div width={1}>
                <RangeSlider
                  name="g"
                  min="0"
                  max="255"
                  value={colorValues.rgb.g}
                  onChange={handleRGBChange}
                  trackColor={Color(currentColor).isLight() ? "#000" : "#fff"}
                  thumbColor={Color(currentColor).isLight() ? "#fff" : "#000"}
                />
              </Div>
              <Div width={64} justifyContent="right">
                <TextInput
                  px={0}
                  py={0}
                  name="g"
                  type="number"
                  color="inherit"
                  fontSize={[2, 3]}
                  bg="transparent"
                  border={0}
                  width={1}
                  textAlign="right"
                  min="0"
                  max="255"
                  value={Math.floor(colorValues.rgb.g)}
                  onChange={handleRGBChange}
                  css={{ transition: "none" }}
                />
              </Div>
            </Flex>
            <Label
              fontSize={[1, 2]}
              width={1}
              color="inherit"
              fontWeight={700}
              css={{ transition: "none" }}
            >
              Blue
            </Label>
            <Flex width={1}>
              <Div width={1}>
                <RangeSlider
                  name="b"
                  min="0"
                  max="255"
                  value={colorValues.rgb.b}
                  onChange={handleRGBChange}
                  trackColor={Color(currentColor).isLight() ? "#000" : "#fff"}
                  thumbColor={Color(currentColor).isLight() ? "#fff" : "#000"}
                />
              </Div>
              <Div width={64} justifyContent="right">
                <TextInput
                  px={0}
                  py={0}
                  name="b"
                  type="number"
                  border={0}
                  fontSize={[2, 3]}
                  bg="transparent"
                  textAlign="right"
                  width={1}
                  color="inherit"
                  min="0"
                  max="255"
                  value={Math.floor(colorValues.rgb.b)}
                  onChange={handleRGBChange}
                  css={{ transition: "none" }}
                />
              </Div>
            </Flex>
          </Flex>
          <Flex width={[1, 1 / 2]} flexWrap="wrap" mt={[3, 0]} px={3}>
            <Label
              width={1}
              fontSize={[1, 2]}
              width={1}
              fontWeight={700}
              color="inherit"
              css={{ transition: "none" }}
            >
              Hue
            </Label>
            <Flex width={1} mb={1}>
              <Div width={1}>
                <RangeSlider
                  name="h"
                  min="0"
                  max="360"
                  value={colorValues.hsl.h}
                  onChange={handleHSLChange}
                  trackColor={Color(currentColor).isLight() ? "#000" : "#fff"}
                  thumbColor={Color(currentColor).isLight() ? "#fff" : "#000"}
                />
              </Div>
              <Div width={64} justifyContent="right">
                <TextInput
                  px={0}
                  py={0}
                  name="h"
                  type="number"
                  bg="transparent"
                  color="inherit"
                  border={0}
                  fontSize={[2, 3]}
                  width={1}
                  textAlign="right"
                  min="0"
                  max="360"
                  onChange={handleHSLChange}
                  value={Math.floor(colorValues.hsl.h)}
                  css={{ transition: "none" }}
                />
              </Div>
            </Flex>
            <Label
              width={1}
              fontSize={[1, 2]}
              fontWeight={700}
              color="inherit"
              css={{ transition: "none" }}
            >
              Saturation
            </Label>
            <Flex width={1} mb={1}>
              <Div width={1}>
                <RangeSlider
                  name="s"
                  min="0"
                  max="100"
                  value={colorValues.hsl.s}
                  onChange={handleHSLChange}
                  trackColor={Color(currentColor).isLight() ? "#000" : "#fff"}
                  thumbColor={Color(currentColor).isLight() ? "#fff" : "#000"}
                />
              </Div>
              <Div width={64}>
                <TextInput
                  px={0}
                  py={0}
                  name="s"
                  type="number"
                  width={1}
                  textAlign="right"
                  bg="transparent"
                  color="inherit"
                  border={0}
                  fontSize={[2, 3]}
                  min="0"
                  max="100"
                  onChange={handleHSLChange}
                  value={Math.floor(colorValues.hsl.s)}
                  css={{ transition: "none" }}
                />
              </Div>
            </Flex>
            <Label
              width={1}
              fontSize={[1, 2]}
              fontWeight={700}
              color="inherit"
              css={{ transition: "none" }}
            >
              Lightness
            </Label>
            <Flex width={1}>
              <Div>
                <RangeSlider
                  name="l"
                  min="0"
                  max="100"
                  value={colorValues.hsl.l}
                  onChange={handleHSLChange}
                  trackColor={Color(currentColor).isLight() ? "#000" : "#fff"}
                  thumbColor={Color(currentColor).isLight() ? "#fff" : "#000"}
                />
              </Div>
              <Div width={64} justifyContent="right">
                <TextInput
                  px={0}
                  py={0}
                  name="l"
                  type="number"
                  width={1}
                  bg="transparent"
                  color="inherit"
                  border={0}
                  textAlign="right"
                  fontSize={[2, 3]}
                  min="0"
                  max="100"
                  value={Math.floor(colorValues.hsl.l)}
                  onChange={handleHSLChange}
                  css={{ transition: "none" }}
                />
              </Div>
            </Flex>
          </Flex>
          <Div textAlign="center" mt={3} width={1}>
            <TextButton
              bg="transparent"
              color="inherit"
              onClick={() => onRemoveColor(currentColor)}
            >
              Remove
            </TextButton>
          </Div>
        </Flex>
      </Div>
    </Article>
  )
}

export default React.memo(ColorPicker)

import React, { useState } from "react"
import Color from "color"
import getContrastScore from "../utils/getContrastScore"

const ComboColor = ({
  name,
  comboProperty,
  currentCombination,
  pinnedColors,
  onPinColor,
  onClick
}) => {
  const contrastScore = getContrastScore(
    currentCombination[comboProperty],
    "#ffffff"
  )

  let lockColor =
    contrastScore < 4.5
      ? Color(currentCombination[comboProperty]).darken(0.75).hex()
      : Color(currentCombination[comboProperty]).lighten(1.5).hex()
  let outlineColor =
    contrastScore < 1.5
      ? Color(currentCombination[comboProperty]).lighten(0.125).hex()
      : Color(currentCombination[comboProperty]).darken(0.125).hex()

  const onColorClick = () =>
    onClick(currentCombination[comboProperty], comboProperty)

  return (
    <Div
      py={1}
      alignItems="center"
      display="flex"
      css={{ position: "relative" }}
      bg='white'
    >
      <Div
        width={32}
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={1}
        css={{
          cursor: "pointer",
          ":hover > svg": { opacity: 1 }
        }}
        onClick={onPinColor(comboProperty)}
      >
        <Icon
          type="lock"
          color='gray.0'
          size={16}
          mx="auto"
          css={{
            opacity: pinnedColors[comboProperty] ? 1 : .25,
            ":hover": { opacity: 1 }
          }}
        />
      </Div>
      <Div mr={2} width={64} bg={currentCombination[comboProperty]} css={{ cursor: "pointer", outline: '1px solid ' + outlineColor  }} onClick={onColorClick} py={3} 
      />
        <Span fontSize={1} display={['block', 'inline-block']} fontWeight={500} pr={1}>
          {name}
        </Span>
    </Div>
  )
}

const CombinationTools = ({
  currentCombination,
  pinnedColors,
  onPrevious,
  onNext,
  onPinColor,
  onLike,
  onAutoCycling,
  isRunning,
  onColorClick,
  ...props
}) => {
  return (
      <Flex fontSize={1} justifyContent="center" mb={2} {...props}>
          <ComboColor
            name="Parent Bg"
            comboProperty="parentBg"
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            onPinColor={onPinColor}
            onClick={onColorClick}
          />
          <ComboColor
            name="Color"
            comboProperty="color"
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            onPinColor={onPinColor}
            onClick={onColorClick}
          />

          <ComboColor
            name="Bg"
            comboProperty="bg"
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            onPinColor={onPinColor}
            onClick={onColorClick}
          />

          <ComboColor
            name="Border"
            comboProperty="borderColor"
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            onPinColor={onPinColor}
            onClick={onColorClick}
          />
      </Flex>
  )
}

export default CombinationTools

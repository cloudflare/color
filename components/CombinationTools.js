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
      ? Color(currentCombination[comboProperty]).darken(0.75)
      : Color(currentCombination[comboProperty]).lighten(1.5)
  let outlineColor =
    contrastScore < 1.5
      ? Color(currentCombination[comboProperty]).darken(0.125)
      : "white"

  const onColorClick = () =>
    onClick(currentCombination[comboProperty], comboProperty)

  return (
    <Div
      alignItems="center"
      display="flex"
      width="auto"
      css={{ position: "relative" }}
    >
      <Div
        width={64}
        bg={currentCombination[comboProperty]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={1}
        mr={2}
        css={{
          cursor: "pointer",
          ":hover > svg": { opacity: 1 }
        }}
        style={{ outline: "1px solid " + outlineColor }}
        onClick={onPinColor(comboProperty)}
      >
        <Icon
          type="lock"
          color={lockColor}
          size={16}
          mx="auto"
          css={{
            opacity: pinnedColors[comboProperty] ? 1 : 0,
            ":hover": { opacity: 1 }
          }}
        />
      </Div>
      <Div>
        <Span display="block" fontWeight={700}>
          {name}:
        </Span>
        <Code css={{ cursor: "pointer" }} onClick={onColorClick}>
          {currentCombination[comboProperty]}
        </Code>
      </Div>
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
  onColorClick
}) => {
  return (
    <Div width={3 / 4}>
      <Flex fontSize={1} justifyContent="center" bg="white">
        <ButtonPrimary
          mx={1}
          alignItems="center"
          onClick={onPrevious}
          button="left"
          bg="transparent"
          color="black"
          children="Previous"
        />
        <Flex>
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

          <ButtonIcon
            alignItems="center"
            onClick={onLike}
            icon="like"
            bg="transparent"
            color="black"
            iconSize={16}
          />
          <ButtonIcon
            alignItems="center"
            onClick={onAutoCycling}
            button={null}
            color="#000000"
            icon={isRunning ? "pause" : "play"}
            iconSize={16}
          />
        </Flex>

        <ButtonPrimary
          mx={1}
          alignItems="center"
          onClick={onNext}
          button="right"
          align="right"
          children="Next"
          bg="transparent"
          color="black"
        />
      </Flex>
    </Div>
  )
}

export default CombinationTools

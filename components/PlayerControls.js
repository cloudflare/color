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

const PlayerControls = ({
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
      <Flex fontSize={1} justifyContent="center" py={3} {...props}>
        <ButtonIcon
          alignItems="center"
          onClick={onPrevious}
          icon="previous"
          bg="transparent"
          color="black"
        />
          <ButtonIcon
            alignItems="center"
            onClick={onAutoCycling}
            button={null}
            color="#000000"
            icon={isRunning ? "pause" : "play"}
            iconSize={16}
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
          onClick={onNext}
          icon="next"
          align="right"
          children=''
          bg="transparent"
          color="black"
        />
      </Flex>
  )
}

export default PlayerControls

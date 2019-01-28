import React from "react"
import getContrastScore from "../utils/getContrastScore"

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
  const colorParentBgContrastValue = getContrastScore(
    currentCombination.color,
    currentCombination.parentBg
  )

  const controlColor =
    colorParentBgContrastValue < 4.5
      ? currentCombination.bg
      : currentCombination.color

  return (
    <Flex fontSize={1} justifyContent="center" py={3} {...props}>
      <ButtonIcon
        alignItems="center"
        onClick={onPrevious}
        icon="previous"
        bg="transparent"
        color={controlColor}
        aria-label="previous combination"
      />
      <ButtonIcon
        alignItems="center"
        onClick={onAutoCycling}
        button={null}
        color={controlColor}
        icon={isRunning ? "pause" : "play"}
        iconSize={16}
        aria-label="play/pause"
      />
      <ButtonIcon
        alignItems="center"
        onClick={onLike}
        icon="like"
        bg="transparent"
        color={controlColor}
        iconSize={16}
        aria-label="like current combination"
      />

      <ButtonIcon
        alignItems="center"
        onClick={onNext}
        icon="next"
        align="right"
        children=""
        bg="transparent"
        color={controlColor}
        aria-label="next combination"
      />
    </Flex>
  )
}

export default PlayerControls

import React, { useState } from "react"

const ComboColor = ({
  name,
  comboProperty,
  currentCombination,
  pinnedColors,
  activeComboColor,
  onComboColorUpdate,
  onPinColor,
  handleActiveComboProp
}) => (
  <Div
    alignItems="center"
    display="flex"
    width="auto"
    css={{ position: "relative" }}
  >
    <Div
      width={64}
      bg={currentCombination[comboProperty]}
      py={1}
      mr={2}
      css={{ cursor: "pointer" }}
      onClick={onPinColor(comboProperty)}
    >
      <Icon
        type="lock"
        color="white"
        css={{
          opacity: pinnedColors[comboProperty] ? 1 : 0,
          marginLeft: "auto",
          marginRight: "auto",
          ":hover": { opacity: 1 }
        }}
      />
    </Div>
    <Div>
      <Span display="block" fontWeight={700}>
        {name}:
      </Span>
      <Code
        css={{ cursor: "pointer" }}
        onClick={handleActiveComboProp(comboProperty)}
      >
        {currentCombination[comboProperty]}
      </Code>
    </Div>
    {activeComboColor === comboProperty && (
      <EditColorTooltip
        tooltipKey={comboProperty}
        color={currentCombination[comboProperty]}
        onClick={handleActiveComboProp}
        onSubmit={onComboColorUpdate}
      />
    )}
  </Div>
)

const CombinationTools = ({
  currentCombination,
  pinnedColors,
  onPrevious,
  onNext,
  onPinColor,
  onShowEditTooltip,
  onLike,
  onAutoCycling,
  isRunning,
  onComboColorUpdate
}) => {
  const [activeComboColor, setActiveComboColor] = useState(null)

  const handleActiveColor = activeColor => () => {
    onShowEditTooltip()
    setActiveComboColor(activeColor)
  }

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
            activeComboColor={activeComboColor}
            onPinColor={onPinColor}
            onComboColorUpdate={onComboColorUpdate}
            handleActiveComboProp={handleActiveColor}
          />

          <ComboColor
            name="Color"
            comboProperty="color"
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            activeComboColor={activeComboColor}
            onPinColor={onPinColor}
            onComboColorUpdate={onComboColorUpdate}
            handleActiveComboProp={handleActiveColor}
          />

          <ComboColor
            name="Bg"
            comboProperty="bg"
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            activeComboColor={activeComboColor}
            onPinColor={onPinColor}
            onComboColorUpdate={onComboColorUpdate}
            handleActiveComboProp={handleActiveColor}
          />

          <ComboColor
            name="Border"
            comboProperty="borderColor"
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            activeComboColor={activeComboColor}
            onPinColor={onPinColor}
            onComboColorUpdate={onComboColorUpdate}
            handleActiveComboProp={handleActiveColor}
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

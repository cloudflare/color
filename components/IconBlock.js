import React from "react"
import Color from "color"

const IconBlock = ({ boxPadding, currentCombination, borderWidth }) => {
  return (
    <Div
      p={boxPadding}
      bg={currentCombination.bg}
      display="grid"
      style={{
        justifyItems: "center",
        justifyContent: "space-around",
        gridTemplateColumns: "repeat(auto-fill, minmax(32px,64px))",
        rowGap: '16px'
      }}
      borderColor={currentCombination.borderColor}
      border={`${borderWidth}px solid`}
    >
      <Icon size={24} color={currentCombination.color} type="remove" />
      <Icon size={24} color={currentCombination.color} type="caretDown" />
      <Icon size={24} color={currentCombination.color} type="caretRight" />
      <Icon size={24} color={currentCombination.color} type="caretLeft" />
      <Icon size={24} color={currentCombination.color} type="caretUp" />
      <Icon size={24} color={currentCombination.color} type="pop" />
      <Icon size={24} color={currentCombination.color} type="cost" />
      <Icon size={24} color={currentCombination.color} type="creditCard" />
      <Icon size={24} color={currentCombination.color} type="upload" />
      <Icon size={24} color={currentCombination.color} type="exclamationOutline" />
      <Icon size={24} color={currentCombination.color} type="exclamation" />
      <Icon size={24} color={currentCombination.color} type="collapse" />
      <Icon size={24} color={currentCombination.color} type="expand" />
      <Icon size={24} color={currentCombination.color} type="file" />
      <Icon size={24} color={currentCombination.color} type="forward" />
      <Icon size={24} color={currentCombination.color} type="left" />
      <Icon size={24} color={currentCombination.color} type="right" />
      <Icon size={24} color={currentCombination.color} type="down" />
      <Icon size={24} color={currentCombination.color} type="gear" />
      <Icon size={24} color={currentCombination.color} type="generalInfo" />
      <Icon size={24} color={currentCombination.color} type="hamburger" />
      <Icon size={24} color={currentCombination.color} type="info" />
      <Icon size={24} color={currentCombination.color} type="help" />
      <Icon size={24} color={currentCombination.color} type="list" />
      <Icon size={24} color={currentCombination.color} type="mail" />
      <Icon size={24} color={currentCombination.color} type="refresh" />
      <Icon size={24} color={currentCombination.color} type="reorder" />
      <Icon size={24} color={currentCombination.color} type="resizeHorizontal" />
      <Icon size={24} color={currentCombination.color} type="minus" />
      <Icon size={24} color={currentCombination.color} type="plus" />
      <Icon size={24} color={currentCombination.color} type="okSign" />
      <Icon size={24} color={currentCombination.color} type="activation" />
      <Icon size={24} color={currentCombination.color} type="validator" />
      <Icon size={24} color={currentCombination.color} type="safeOutline" />
      <Icon size={24} color={currentCombination.color} type="safe" />
      <Icon size={24} color={currentCombination.color} type="warningOutline" />
      <Icon size={24} color={currentCombination.color} type="warning" />
      <Icon size={24} color={currentCombination.color} type="stopOutline" />
      <Icon size={24} color={currentCombination.color} type="stop" />
      <Icon size={24} color={currentCombination.color} type="lock" />
      <Icon size={24} color={currentCombination.color} type="time" />
      <Icon size={24} color={currentCombination.color} type="quotes" />
      <Icon size={24} color={currentCombination.color} type="signup" />
      <Icon size={24} color={currentCombination.color} type="facebook" />
      <Icon size={24} color={currentCombination.color} type="google" />
      <Icon size={24} color={currentCombination.color} type="linkedin" />
      <Icon size={24} color={currentCombination.color} type="download" />
      <Icon size={24} color={currentCombination.color} type="wrench" />
    </Div>
  )
}

export default IconBlock

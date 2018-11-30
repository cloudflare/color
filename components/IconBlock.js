import React from "react"
import Div from "../elements/Div"
import Icon from "./Icon"

const IconBlock = ({ currentCombination }) => {
  return (
    <Div
      mt={5}
      py={[4, 5]}
      px={[3, 4, 5]}
      bg={currentCombination.bg}
      display="grid"
      style={{ gridTemplateColumns: "repeat(12, 1fr)", rowGap: "2em" }}
    >
      <Icon color={currentCombination.color} type="remove" />
      <Icon color={currentCombination.color} type="caretDown" />
      <Icon color={currentCombination.color} type="caretRight" />
      <Icon color={currentCombination.color} type="caretLeft" />
      <Icon color={currentCombination.color} type="caretUp" />
      <Icon color={currentCombination.color} type="pop" />
      <Icon color={currentCombination.color} type="cost" />
      <Icon color={currentCombination.color} type="creditCard" />
      <Icon color={currentCombination.color} type="upload" />
      <Icon color={currentCombination.color} type="exclamationOutline" />
      <Icon color={currentCombination.color} type="exclamation" />
      <Icon color={currentCombination.color} type="collapse" />
      <Icon color={currentCombination.color} type="expand" />
      <Icon color={currentCombination.color} type="file" />
      <Icon color={currentCombination.color} type="forward" />
      <Icon color={currentCombination.color} type="left" />
      <Icon color={currentCombination.color} type="right" />
      <Icon color={currentCombination.color} type="down" />
      <Icon color={currentCombination.color} type="gear" />
      <Icon color={currentCombination.color} type="generalInfo" />
      <Icon color={currentCombination.color} type="hamburger" />
      <Icon color={currentCombination.color} type="info" />
      <Icon color={currentCombination.color} type="help" />
      <Icon color={currentCombination.color} type="list" />
      <Icon color={currentCombination.color} type="mail" />
      <Icon color={currentCombination.color} type="refresh" />
      <Icon color={currentCombination.color} type="reorder" />
      <Icon color={currentCombination.color} type="resizeHorizontal" />
      <Icon color={currentCombination.color} type="minus" />
      <Icon color={currentCombination.color} type="plus" />
      <Icon color={currentCombination.color} type="okSign" />
      <Icon color={currentCombination.color} type="activation" />
      <Icon color={currentCombination.color} type="validator" />
      <Icon color={currentCombination.color} type="safeOutline" />
      <Icon color={currentCombination.color} type="safe" />
      <Icon color={currentCombination.color} type="warningOutline" />
      <Icon color={currentCombination.color} type="warning" />
      <Icon color={currentCombination.color} type="stopOutline" />
      <Icon color={currentCombination.color} type="stop" />
      <Icon color={currentCombination.color} type="lock" />
      <Icon color={currentCombination.color} type="time" />
      <Icon color={currentCombination.color} type="quotes" />
      <Icon color={currentCombination.color} type="signup" />
      <Icon color={currentCombination.color} type="facebook" />
      <Icon color={currentCombination.color} type="google" />
      <Icon color={currentCombination.color} type="linkedin" />
      <Icon color={currentCombination.color} type="download" />
      <Icon color={currentCombination.color} type="wrench" />
    </Div>
  )
}

export default IconBlock

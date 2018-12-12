import React from "react"
import styled from "react-emotion"
import getContrastScore from "../utils/getContrastScore"

import {
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flexWrap,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const IconSolid = styled.div(
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    transition: "all .25s ease-in"
  }
)

IconSolid.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 48,
  width: 48,
  borderRadius: "100%"
}

const IconOutline = styled.div(
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    transition: "all .25s ease-in"
  }
)

IconOutline.defaultProps = {
  border: "2px solid currentColor",
  borderRadius: "100%",
  height: 48,
  width: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const IconOutlineBlock = ({ currentCombination, borderWidth }) => {
  const colorParentBgContrastValue = getContrastScore(
    currentCombination.color,
    currentCombination.parentBg
  )

  const iconOutlineColor =
    colorParentBgContrastValue < 4.5
      ? currentCombination.bg
      : currentCombination.color
  return (
    <Div mt={5} mb={5}>
      <Div
        display="grid"
        style={{
          justifyItems: "center",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: "1em"
        }}
      >
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="remove" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="caretDown" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="caretRight" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="caretLeft" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="caretUp" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="pop" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="cost" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="creditCard" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="upload" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="exclamationOutline" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="exclamation" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="collapse" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="expand" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="file" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="forward" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="left" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="right" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="down" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="gear" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="generalInfo" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="hamburger" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="info" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="help" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon color={currentCombination.color} type="list" />
        </IconSolid>
      </Div>
      <Div
        mt={4}
        display="grid"
        style={{
          justifyItems: "center",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: "1em"
        }}
      >
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="mail" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="refresh" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="reorder" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="resizeHorizontal" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="minus" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="plus" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="okSign" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="activation" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="validator" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="safeOutline" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="safe" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="warningOutline" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="warning" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="stopOutline" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="stop" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="lock" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="time" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="quotes" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="signup" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="facebook" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="google" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="linkedin" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="download" />
        </IconOutline>
        <IconOutline color={iconOutlineColor}>
          <Icon color={iconOutlineColor} type="wrench" />
        </IconOutline>
      </Div>
    </Div>
  )
}

export default IconOutlineBlock

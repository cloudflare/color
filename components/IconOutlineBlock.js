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
    transition: "all .25s ease-in"
  }
)

IconSolid.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
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
    transition: "all .25s ease-in"
  }
)

IconOutline.defaultProps = {
  border: "1px solid currentColor",
  borderRadius: "100%",
  height: 32,
  width: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const IconOutlineBlock = ({ boxPadding, currentCombination, borderWidth }) => {
  const colorParentBgContrastValue = getContrastScore(
    currentCombination.color,
    currentCombination.parentBg
  )

  const iconOutlineColor =
    colorParentBgContrastValue < 4.5
      ? currentCombination.bg
      : currentCombination.color
  return (
    <Div p={boxPadding}>
      <Div
        display="grid"
        style={{
          justifyContent: 'space-around',
          justifyItems: "center",
          gridTemplateColumns: "repeat(auto-fill, minmax(32px,64px))",
          rowGap: '16px'
        }}
      >
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="down caret" size={16} color={currentCombination.color} type="caretDown" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="right caret" size={16} color={currentCombination.color} type="caretRight" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="left caret" size={16} color={currentCombination.color} type="caretLeft" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="up caret" size={16} color={currentCombination.color} type="caretUp" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="backward" size={16} color={currentCombination.color} type="backward" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="forward" size={16} color={currentCombination.color} type="forward" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="left" size={16} color={currentCombination.color} type="left" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="right" size={16} color={currentCombination.color} type="right" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="reorder" size={16} color={currentCombination.color} type="reorder" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="horizontal resize" size={16} color={currentCombination.color} type="resizeHorizontal" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="minus" size={16} color={currentCombination.color} type="minus" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="plus" size={16} color={currentCombination.color} type="plus" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="remove" size={16} color={currentCombination.color} type="remove" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="hamburger menu" size={16} color={currentCombination.color} type="hamburger" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="refresh" size={16} color={currentCombination.color} type="refresh" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="checkmark" size={16} color={currentCombination.color} type="ok" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="server rack" size={16} color={currentCombination.color} type="drive" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="download" size={16} color={currentCombination.color} type="download" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="wrench" size={16} color={currentCombination.color} type="wrench" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="location pin" size={16} color={currentCombination.color} type="network" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="speech bubble" size={16} color={currentCombination.color} type="speech" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="credit card" size={16} color={currentCombination.color} type="creditCard" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="upload" size={16} color={currentCombination.color} type="upload" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="pie chart" size={16} color={currentCombination.color} type="chart" />
        </IconSolid>
        <IconSolid
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          border={`${borderWidth}px solid`}
        >
          <Icon title="collapse arrows" size={16} color={currentCombination.color} type="collapse" />
        </IconSolid>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="expand arrows" size={16} color={iconOutlineColor} type="expand" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="file" size={16} color={iconOutlineColor} type="file" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="filter" size={16} color={iconOutlineColor} type="filter" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="gear" size={16} color={iconOutlineColor} type="gear" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="shield" size={16} color={iconOutlineColor} type="shield" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="info" size={16} color={iconOutlineColor} type="info" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="mail" size={16} color={iconOutlineColor} type="mail" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="list" size={16} color={iconOutlineColor} type="list" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="ok sign" size={16} color={iconOutlineColor} type="okSign" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="pause" size={16} color={iconOutlineColor} type="pause" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="retarget" size={16} color={iconOutlineColor} type="retarget" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="lightning bolt" size={16} color={iconOutlineColor} type="bolt" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="flow chart" size={16} color={iconOutlineColor} type="flowchart" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="clipboard" size={16} color={iconOutlineColor} type="clipboard" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="lock" size={16} color={iconOutlineColor} type="lock" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="help" size={16} color={iconOutlineColor} type="help" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="time" size={16} color={iconOutlineColor} type="time" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="door" size={16} color={iconOutlineColor} type="door" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="user" size={16} color={iconOutlineColor} type="user" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="quotes" size={16} color={iconOutlineColor} type="quotes" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="linkedin" size={16} color={iconOutlineColor} type="linkedin" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="facebook" size={16} color={iconOutlineColor} type="facebook" />
        </IconOutline>
        <IconOutline 
          border={`${borderWidth + 2}px solid`}
          color={iconOutlineColor}>
          <Icon title="twitter" size={16} color={iconOutlineColor} type="twitter" />
        </IconOutline>
      </Div>
    </Div>
  )
}

export default IconOutlineBlock

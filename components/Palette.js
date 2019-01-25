import React from "react"
import styled from "react-emotion"

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

const ClearFix = styled.div(
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
    boxSizing: 'border-box',
    width: 'auto',
    '::after': {
      content: "' '",
      display: 'table',
      clear: 'both',
      overflow: 'hidden',
    }
  }
)

const SingleColor = ({ color, onClick, isActive, isVisible, index }) => {
  const handleActiveUI = () => onClick(color, index)

  return (
    <Div
      border="2px solid"
      borderColor={isActive ? "black" : "transparent"}
      bg={color}
      height={32}
      width={[1/16,1/32]}
      style={{
        float: 'left',
        cursor: "pointer",
        position: "relative",
        boxShadow: isVisible ? " 0 0 12px rgba(0,0,0,0.5)" : "none",
        transform: isVisible ? "scale(1.25)" : "none",
        zIndex: isVisible ? 4 : 1,
        transition: "transform 125ms ease-in-out",
      }}
      onClick={handleActiveUI}
    />
  )
}

const Palette = ({
  palette,
  onClick,
  activeColors,
  onAddColor,
  pickerColor
}) => {
  return (
    <ClearFix>
      {palette.map((color, i) => (
        <SingleColor
          isActive={i === pickerColor.index}
          isVisible={activeColors.includes(color)}
          key={i}
          index={i}
          color={color}
          onClick={onClick}
        />
        
      ))}
      <AddColor style={{float: 'left' }} mt={2} ml={2} onAddColor={onAddColor} />
    </ClearFix>
  )
}

export default Palette

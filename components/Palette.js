import React, { useState } from "react"

const SingleColor = ({
  color,
  index,
  onClick,
  isActive,
  isVisible,
  ...props
}) => {
  const handleActiveUI = () => onClick(index, color)

  return (
    <Div
      m={1}
      border="2px solid"
      borderColor={isActive ? "black" : "transparent"}
      borderRadius="100%"
      bg={color}
      height={24}
      width={24}
      style={{
        cursor: "pointer",
        position: "relative",
        boxShadow: isVisible ? " 0 0 10px rgba(0,0,0,0.3)" : "none",
        transform: isVisible ? "scale(1.5)" : "none",
        transition: "transform 200ms ease-in"
      }}
      onClick={handleActiveUI}
      {...props}
    />
  )
}

const Palette = ({ palette, onClick, activeColors, onAddColor }) => {
  const [activeColor, updateActiveColor] = useState(null)

  const handleClick = (index, color) => {
    updateActiveColor(index)
    onClick(index, color)
  }

  return (
    <Div
      display="flex"
      mx={-1}
      css={{
        flexWrap: "wrap",
        justifyContent: "space-between",
        "&:after": {
          content: '""',
          flex: "auto"
        }
      }}
    >
      {palette.map((color, i) => (
        <SingleColor
          isActive={i === activeColor}
          isVisible={activeColors.includes(color)}
          key={i}
          color={color}
          index={i}
          onClick={handleClick}
        />
      ))}
      <AddColor onAddColor={onAddColor} />
    </Div>
  )
}

export default Palette

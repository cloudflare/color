import React from "react"

const SingleColor = ({ color, onClick, isActive, isVisible, index }) => {
  const handleActiveUI = () => onClick(color, index)

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
          isActive={i === pickerColor.index}
          isVisible={activeColors.includes(color)}
          key={i}
          index={i}
          color={color}
          onClick={onClick}
        />
      ))}
      <AddColor onAddColor={onAddColor} />
    </Div>
  )
}

export default Palette

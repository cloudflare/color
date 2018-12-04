import React, { useState } from "react"
import Color from "color"
import OutsideClickHandler from "react-outside-click-handler"

const SingleColor = ({
  color,
  index,
  onRemove,
  onUpdate,
  onClick,
  isActive,
  isVisible,
  ...props
}) => {
  const handleRemove = () => onRemove(index)
  const handleUpdate = e => onUpdate(e, index)
  const handleActiveUI = () => onClick(index)

  const isDark = Color(color).isDark()

  return (
    <Div
      py={2}
      m={1}
      borderRadius="9999px"
      bg={color}
      style={{
        cursor: "pointer",
        position: "relative",
        boxShadow: isVisible ? " 0 0 10px rgba(0,0,0,0.3)" : "",
        transform: isVisible ? "scale(1.5)" : "",
        transition: "transform 200ms ease-in"
      }}
      onClick={handleActiveUI}
      {...props}
    >
      {isActive && (
        <OutsideClickHandler onOutsideClick={() => onClick(null)}>
          <Div
            px={2}
            py={2}
            bg={color}
            borderRadius={2}
            width="auto"
            style={{
              position: "absolute",
              transform: "translate(-50%, -100%)",
              top: "-10px",
              left: "50%",
              "&:before": {
                content: "''",
                height: 0,
                width: 0,
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%, 100%)",
                border: "10px solid transparent",
                "border-top-color": `${color}`,
                zIndex: 2
              }
            }}
          >
            <TextInput
              borderRadius={1}
              type="text"
              border="0"
              value={color}
              onChange={handleUpdate}
              width={96}
              mb={2}
            />
            <TextButton
              onClick={handleRemove}
              display="block"
              width={1}
              textAlign="center"
              children="Delete"
              bg="transparent"
              color={isDark ? "white" : "black"}
            />
          </Div>
        </OutsideClickHandler>
      )}
    </Div>
  )
}

const Palette = ({ palette, onUpdate, onRemove, onAdd, activeColors }) => {
  const [activeColor, updateActiveColor] = useState(null)

  return (
    <Flex flexWrap="wrap">
      {palette.map((color, i) => (
        <SingleColor
          isActive={i === activeColor}
          isVisible={activeColors.includes(color)}
          key={i}
          color={color}
          index={i}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onClick={updateActiveColor}
          width={1 / 16}
        />
      ))}
    </Flex>
  )
}

export default Palette

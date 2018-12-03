import React, { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"
import Flex from "../components/Flex"
import Div from "../elements/Div"

const SingleColor = ({
  color,
  index,
  onRemove,
  onUpdate,
  onClick,
  isActive,
  ...props
}) => {
  const handleRemove = () => onRemove(index)
  const handleUpdate = e => onUpdate(e, index)
  const handleActiveUI = () => onClick(index)

  return (
    <Div
      py={3}
      bg={color}
      css={{ cursor: "pointer", position: "relative" }}
      onClick={handleActiveUI}
      {...props}
    >
      {isActive && (
        <OutsideClickHandler onOutsideClick={() => onClick(null)}>
          <Div
            px={2}
            py={2}
            bg={color}
            width="auto"
            css={{
              position: "absolute",
              transform: "translate(-50%, -100%)",
              top: "-10px",
              left: "50%",
              borderRadius: "5px",
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
              type="text"
              value={color}
              onChange={handleUpdate}
              mb={2}
            />
            <ButtonPrimary
              onClick={handleRemove}
              children="Remove"
              button="remove"
            />
          </Div>
        </OutsideClickHandler>
      )}
    </Div>
  )
}

const Palette = ({ palette, onUpdate, onRemove, onAdd }) => {
  const [activeColor, updateActiveColor] = useState(null)

  return (
    <Flex flexWrap='wrap'>
      {palette.map((color, i) => (
        <SingleColor
          isActive={i === activeColor}
          key={i}
          color={color}
          index={i}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onClick={updateActiveColor}
          width={1/16}
        />
      ))}
    </Flex>
  )
}

export default Palette

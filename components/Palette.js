import React, { useState, useEffect } from "react"
import { active } from "glamor"

const SingleColor = ({
  color,
  index,
  onRemove,
  onUpdate,
  onClick,
  isActive
}) => {
  const handleRemove = () => onRemove(index)
  const handleUpdate = e => onUpdate(e, index)
  const handleActiveUI = () => {
    onClick(index)
  }

  return (
    <Div py={3} bg={color} css={{ cursor: "pointer" }} onClick={handleActiveUI}>
      {isActive && (
        <>
          <Input type="text" value={color} onChange={handleUpdate} />
          <Button onClick={handleRemove}>Remove</Button>
        </>
      )}
    </Div>
  )
}

const Palette = ({ palette, onUpdate, onRemove, onAdd }) => {
  const [activeColor, updateActiveColor] = useState(null)

  return (
    <Flex>
      {palette.map((color, i) => (
        <SingleColor
          isActive={i === activeColor}
          key={i}
          color={color}
          index={i}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onClick={updateActiveColor}
        />
      ))}
    </Flex>
  )
}

export default Palette

import React from "react"

const AddColor = ({ onAddColor }) => {
  return (
    <Div
      borderRadius="100%"
      m={1}
      height={24}
      width={24}
      border="1px solid"
      css={{ cursor: "pointer", display: "flex", position: "relative" }}
      onClick={onAddColor}
    >
      <Icon width="12px" height="12px" type="plus" css={{ margin: "auto" }} />
    </Div>
  )
}

export default AddColor

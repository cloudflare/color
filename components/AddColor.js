import React from "react"

const AddColor = ({ onAddColor, ...props }) => {
  return (
    <Div
      fontSize={1}
      width={24}
      mt={1}
      ml={2}
      css={{ whiteSpace: 'nowrap', cursor: "pointer", display: "float", position: "relative" }}
      onClick={onAddColor}
      {...props}
    >
      + Add color
    </Div>
  )
}

export default AddColor

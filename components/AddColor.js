import React from "react"

const AddColor = ({ onAddColor, ...props }) => {
  return (
    <Div
      css={{
        float: "left",
        whiteSpace: "nowrap",
        cursor: "pointer",
        position: "relative"
      }}
      fontSize={1}
      width={24}
      mt={1}
      ml={2}
      onClick={onAddColor}
      {...props}
    >
      + Add color
    </Div>
  )
}

export default AddColor

import React, { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"

const EditColorTooltip = ({ color, onClick, onSubmit, tooltipKey }) => {
  const [newColor, setColor] = useState(color)
  const handleSetColor = e => setColor(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(newColor, tooltipKey)
  }

  return (
    <OutsideClickHandler onOutsideClick={onClick(null)}>
      <Div
        px={2}
        py={2}
        bg={color}
        width="auto"
        css={{
          position: "absolute",
          transform: "translate(0, 100%)",
          bottom: "-10px",
          left: "0",
          "&:before": {
            content: "''",
            height: 0,
            width: 0,
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(12px, -100%)",
            border: "10px solid transparent",
            "border-bottom-color": `${color}`,
            zIndex: 2
          }
        }}
      >
        <Form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            border="0"
            value={newColor}
            onChange={handleSetColor}
            width={96}
            mb={2}
          />
        </Form>
      </Div>
    </OutsideClickHandler>
  )
}

export default EditColorTooltip

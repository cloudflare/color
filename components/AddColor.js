import React, { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"

const AddColor = ({ onAddColor }) => {
  const [newColor, setNewColor] = useState("")
  const [isActive, setIsActive] = useState(false)

  const handleIsActiveButton = () => {
    setIsActive(true)
  }
  const handleNewColor = e => setNewColor(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    onAddColor(newColor)
    setNewColor("")
    setIsActive(false)
  }

  return (
    <Div
      borderRadius="100%"
      height={24}
      width={24}
      border="1px solid"
      css={{ cursor: "pointer", display: "flex", position: "relative" }}
      onClick={handleIsActiveButton}
    >
      <Icon width="12px" height="12px" type="plus" css={{ margin: "auto" }} />

      {isActive && (
        <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
          <Div
            px={2}
            py={2}
            bg="black"
            borderRadius={2}
            width="auto"
            css={{
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
                "border-top-color": "black",
                zIndex: 2
              }
            }}
          >
            <Form onSubmit={handleOnSubmit}>
              <TextInput
                borderRadius={1}
                type="text"
                border="0"
                value={newColor}
                onChange={handleNewColor}
                width={96}
              />
            </Form>
          </Div>
        </OutsideClickHandler>
      )}
    </Div>
  )
}

export default AddColor

import React from "react"

import Div from "../elements/Div"
import Span from "../elements/Span"

const RadioButton = ({ color, ...props }) => {
  return (
    <Div {...props}>
      <Div
        display="flex"
        color={color}
        alignItems="center"
        justifyContent="center"
        height={16}
        width={16}
        borderRadius={9999}
        border="2px solid currentColor"
      >
        {props.checked && (
          <Div height={8} width={8} bg={color} borderRadius={9999}>
            {" "}
          </Div>
        )}
      </Div>
      <Span fontSize={2} lineHeight={1} ml={1} color={color}>
        {props.children}
      </Span>
    </Div>
  )
}

RadioButton.defaultProps = {
  display: "flex",
  alignItems: "center",
  width: "auto"
}

export default RadioButton

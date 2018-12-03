import React from "react"
import Button from "../elements/Button"

// This file can be copied to start new components
// You'll want to replace ButtonOutline with the component name which should
// also be the name of the file

const ButtonOutline = ({ ...props }) => {
  return <Button {...props}>{props.children}</Button>
}

ButtonOutline.defaultProps = {
  color: "blue.4",
  bg: "white",
  borderColor: "blue.4",
  borderRadius: 2,
  px: 3,
  py: 2,
  fontSize: 2,
  fontWeight: 600,
  lineHeight: 1,
  mt: "-1px",
  mb: "-1px"
}

export default ButtonOutline

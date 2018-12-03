import React from "react"
import glamorous from "glamorous"
import theme from "../theme"

import {
  style,
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  boxShadow
} from "styled-system"

const textShadow = style({
  prop: "textShadow",
  cssProperty: "textShadow",
  key: "textShadow",
  scale: ["1px 1px 2px pink ", "#f30 1px 0 10px", "red 2px 5px"]
})

const Card = ({ ...props }) => {
  return (
    <Article {...props}>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </P>
    </Article>
  )
}

Card.defaultProps = {
  textAlign: "left"
}

export default Card

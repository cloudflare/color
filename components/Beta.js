import React from "react"

const Beta = ({ ...props }) => {
  return <Sup {...props}>{props.children}</Sup>
}

Beta.defaultProps = {
  children: "Beta",
  bg: "transparent",
  color: "marketing.orange",
  fontWeight: 600,
  fontSize: 1
}

export default Beta

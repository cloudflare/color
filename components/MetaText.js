import React from "react"

const MetaText = ({ ...props }) => {
  return <P {...props}>{props.children}</P>
}

MetaText.defaultProps = {
  color: "gray.4",
  fontSize: 2
}

export default MetaText

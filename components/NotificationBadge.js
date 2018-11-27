import React from "react"

const NotificationBadge = ({ count, ...props }) => {
  return <Div {...props}>{count}</Div>
}

NotificationBadge.defaultProps = {
  bg: "red.4",
  color: "white",
  borderRadius: "9999px"
}

export default NotificationBadge

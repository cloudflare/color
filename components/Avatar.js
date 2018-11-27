import React from "react"

const Avatar = ({ image, size, badge, count, ...props }) => {
  return (
    <Div position="relative" {...props}>
      <Icon size={24} type="user" color="gray.4" />
      {badge && <NotificationBadge count={count} />}
    </Div>
  )
}

Avatar.defaultProps = {}

export default Avatar

import React from "react"

const HorizontalSubNav = ({ ...props }) => {
  return (
    <Flex {...props}>
      <A
        fontSize={2}
        py={3}
        mx={3}
        borderBottom="2px solid"
        borderColor="blue.4"
      >
        Overview
      </A>
      <A fontSize={2} py={3} mx={3}>
        Firewall Tools
      </A>
      <A fontSize={2} py={3} mx={3}>
        Managed Rules
      </A>
      <A fontSize={2} py={3} mx={3}>
        Custom Rules
      </A>
      <A fontSize={2} py={3} ml="auto">
        Settings
      </A>
    </Flex>
  )
}

HorizontalSubNav.defaultProps = {}

export default HorizontalSubNav

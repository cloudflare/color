import React from "react"

const NavIcon = ({ icon, type, text, ...props }) => {
  return (
    <A display="block" textAlign="center" width={64} {...props}>
      <Flex mx="auto" borderRadius={1} justifyContent="center">
        <Icon display={["none", "inline-block"]} type={type} width={24} />
      </Flex>
      <Span
        mt={2}
        display="block"
        width={1}
        lineHeight={1}
        textAlign="center"
        fontSize={1}
        style={{ whiteSpace: "nowrap" }}
        color="inherit"
      >
        {text}
      </Span>
    </A>
  )
}

NavIcon.defaultProps = {}

export default NavIcon

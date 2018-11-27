import React from "react"

const SiteHeader = ({ showNav, activeLink, ...props }) => {
  return (
    <Header {...props}>
      <Flex>
        <Div>
          <A href="/" py={2} px={4} display="block">
            <Logo />
          </A>
        </Div>
        <Flex ml="auto" textAlign="right" px={4}>
          <A px={3} fontSize={2}>
            Help
          </A>
          <A px={3} fontSize={2}>
            Community
          </A>
          <A
            px={3}
            fontWeight={600}
            fontSize={2}
            style={{ whiteSpace: "nowrap" }}
            mr={3}
            ml={4}
          >
            + Add Site
          </A>
          <A display="flex" alignItems="center">
            <Avatar />
            <Icon size={16} color="gray.4" type="caretDown" />
          </A>
        </Flex>
      </Flex>
      <Hr color="gray.8" my={0} />
      {showNav && <DashboardNav activeLink={activeLink} />}
    </Header>
  )
}

SiteHeader.defaultProps = {
  showNav: true,
  bg: "white",
  borderTop: "4px solid",
  borderColor: "marketing.orange"
}

export default SiteHeader

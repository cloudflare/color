import React from "react"
import MDXWrapper from "../components/MDXWrapper"
import Post from "../about.mdx"
import Logo from "../components/Logo"
import Div from "../elements/Div"
import Flex from "../components/Flex"
import BlockLink from "../components/BlockLink"

const About = () => {
  return (
    <MDXWrapper>
      <Flex borderBottom="1px solid" borderColor="gray.8">
        <BlockLink
          px={4}
          py={3}
          href="https://cloudflare.design/color/"
          title="Color by Cloudflare"
          display="flex"
          alignItems="center"
        >
          <Logo variant="mark" width="3em" />
        </BlockLink>
        <BlockLink px={4} href="about" ml="auto">
          About
        </BlockLink>
      </Flex>
      <Div px={3}>
        <Post />
      </Div>
      <SiteFooter />
    </MDXWrapper>
  )
}

export default About

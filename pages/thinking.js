import React from "react"
import MDXWrapper from "../components/MDXWrapper"
import Link from "next/link"
import Post from "../thinking.mdx"
import Logo from "../components/Logo"
import Div from "../elements/Div"
import Flex from "../components/Flex"
import BlockLink from "../components/BlockLink"

const Thinking = () => {
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
        <Link passHref href="about">
          <BlockLink px={4} ml="auto">
            About
          </BlockLink>
        </Link>
      </Flex>
      <Div px={3}>
        <Post />
      </Div>
      <SiteFooter />
    </MDXWrapper>
  )
}

export default Thinking

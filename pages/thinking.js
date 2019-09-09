import React from "react"
import MDXWrapper from "../components/MDXWrapper"
import Post from "../thinking.mdx"

const Thinking = () => {
  return (
    <MDXWrapper>
      <Post />
      <SiteFooter />
    </MDXWrapper>
  )
}

export default Thinking

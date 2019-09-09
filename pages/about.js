import React from "react"
import MDXWrapper from "../components/MDXWrapper"
import Post from "../about.mdx"

const About = () => {
  return (
    <MDXWrapper>
      <Post />
      <SiteFooter />
    </MDXWrapper>
  )
}

export default About

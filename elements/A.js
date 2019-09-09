import styled from "@emotion/styled"
import Router from "next/router"
import { connect } from "unistore/react"

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const A = styled.a(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "underline",
    transition: "opacity .25s ease-in-out",
    opacity: 1,
    ":hover": {
      cursor: "pointer",
      opacity: 0.75,
      transition: "opacity .25s ease-in-out"
    }
  }
)

A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
  color: "gray.2"
}

const actions = () => ({
  setPageData: ({}, pageData) => ({ pageData })
})

export default connect(
  [],
  actions
)(({ children, href, pageData, setPageData, ...props }) => {
  const handleLinkClick = () => () => {
    setPageData(pageData)
    Router.push(href)
  }

  return (
    <A onClick={handleLinkClick({ href, pageData })} {...props}>
      {children}
    </A>
  )
})

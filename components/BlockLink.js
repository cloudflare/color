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
    textDecoration: "none",
    transition: "opacity .25s ease-in-out",
    opacity: 1,
    ":hover": {
      cursor: "pointer",
      opacity: 0.8,
      transition: "opacity .25s ease-in-out"
    }
  }
)

A.defaultProps = {
  display: "block",
  lineHeight: "1.5",
  bg: "transparent",
  color: "gray.2",
  fontWeight: 700
}

const actions = () => ({
  setPageData: ({}, pageData) => ({ pageData })
})

export default connect(
  [],
  actions
)(({ children, href, pageData, setPageData, ...props }) => {
  const handleLinkClick = () => () => {
    const re = new RegExp("^(http|https)://", "i")
    const match = re.test(href)

    if (match) {
      return (window.location.href = href)
    } else {
      setPageData(pageData)
      Router.push(href)
    }
  }

  return (
    <A passHref onClick={handleLinkClick({ href, pageData })} {...props}>
      {children}
    </A>
  )
})

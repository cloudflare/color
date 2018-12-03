import styled from "@emotion/styled"
import Icon from "../components/Icon"
import Span from "../elements/Span"

import {
  style,
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const textShadow = style({
  prop: "textShadow",
  cssBadgeroperty: "textShadow",
  key: "textShadow",
  scale: ["1px 1px 2px pink ", "#f30 1px 0 10px", "red 2px 5px"]
})

const BadgeWrapper = styled.span(
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  textShadow,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    transition: "all .25s ease-in",
    alignItems: "center"
  }
)

const Badge = ({ ...props }) => {
  return (
    <BadgeWrapper {...props}>
      <Icon color={props.color} type="lock" size={12} />
      <Span pl={1}>{props.children}</Span>
    </BadgeWrapper>
  )
}

Badge.defaultProps = {
  display: "inline-flex",
  borderRadius: 1,
  px: 2,
  py: 1,
  fontSize: 1,
  fontWeight: 600,
  children: "Badge"
}

export default Badge

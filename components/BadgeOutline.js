import styled from "@emotion/styled"

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
  cssBadgeOutlineroperty: "textShadow",
  key: "textShadow",
  scale: ["1px 1px 2px pink ", "#f30 1px 0 10px", "red 2px 5px"]
})

const BadgeOutlineWrapper = styled.span(
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

const BadgeOutline = ({ ...props }) => {
  return (
    <BadgeOutlineWrapper {...props}>
      <Icon color={props.color} type="gear" size={12} />
      <Span pl={1} style={{ whiteSpace: "nowrap" }}>
        {props.children}
      </Span>
    </BadgeOutlineWrapper>
  )
}

BadgeOutline.defaultProps = {
  display: "flex",
  borderRadius: 1,
  px: 2,
  py: 1,
  my: "-1px",
  mx: "-1px",
  fontSize: 1,
  fontWeight: 600,
  bg: "transparent",
  border: "1px solid",
  children: "Badge Outline"
}

export default BadgeOutline

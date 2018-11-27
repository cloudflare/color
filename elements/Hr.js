import styled from "react-emotion"
import { space, width, color, borders, borderColor } from "styled-system"

const Hr = styled.hr(space, width, color, borders, borderColor, {
  boxSizing: "border-box",
  height: 0,
  overflow: "visible"
})

Hr.defaultProps = {
  borderTop: "1px solid currentColor",
  borderBottom: "0px solid transparent"
}

export default Hr

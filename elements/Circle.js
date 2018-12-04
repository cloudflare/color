import styled from 'react-emotion'
import { color } from "styled-system"

const Circle = styled.circle(color, {
  boxSizing: "border-box",
  transition: "color .25s ease-in, background-color .25s ease-in"
})

Circle.defaultProps = {
  fill: "currentColor"
}

export default Circle

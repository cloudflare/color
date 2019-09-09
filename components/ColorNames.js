import React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import css from "@styled-system/css"

const exampleColorNames = [
  "dawn",
  "sunset",
  "april",
  "coral",
  "orangepink",
  "froly",
  "sunrise",
  "candy"
]

const trickle = keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(40px);
    opacity: 1;
  }
  100% {
    transform: translateY(80px);
    opacity: 0;
  }
`
const ColorName = styled(Div)`
  opacity: 0;
  left: ${p => p.left}px;
  transform: translateY(-10px);
  position: absolute;
  animation: ${trickle} ${exampleColorNames.length / 3}s ${p => p.index / 3}s
    linear infinite;
`

const ColorNames = ({ color }) => {
  return (
    <Div
      width={1 / 4}
      css={css({
        overflow: "hidden",
        position: "relative"
      })}
    >
      {exampleColorNames.map((name, i) => (
        <ColorName
          fontSize={4}
          color={color}
          key={i}
          index={i}
          left={Math.random() * 150}
        >
          {name}
        </ColorName>
      ))}
    </Div>
  )
}
export default ColorNames

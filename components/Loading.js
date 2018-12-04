import styled from "react-emotion"
import { keyframes } from "react-emotion"

const keyframe = keyframes`
0%,
80%,
100% {
  box-shadow: 0 0;
  height: 4em;
}
40% {
  box-shadow: 0 -2em;
  height: 5em;
}
`

const Loading = styled.div({
  "&, &:before, &:after": {
    background: "#000000",
    width: "5px",
    height: "10px",
    animation: `${keyframe} 1s infinite ease-in-out`
  },
  "&": {
    color: "#000",
    margin: "20px auto",
    position: "relative",
    fontSize: "5px",
    transform: "translateZ(0)",
    animationDelay: "-0.16s"
  },
  "&:before, &:after": {
    position: "absolute",
    top: 0,
    content: '""'
  },
  "&:before": {
    left: "-1.5em",
    animationDelay: "-0.32s"
  },
  "&:after": {
    left: "1.5em"
  }
})

export default Loading

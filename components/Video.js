import React from "react"
import Div from "../elements/Div"

const Video = ({ src }) => {
  return (
    <Div px={[4, 6]}>
      <video style={{ maxWidth: "100%" }} autoPlay loop muted playsInline>
        <source src={`${process.env.assetPrefix}${src}`} type="video/mp4" />
      </video>
    </Div>
  )
}

export default Video

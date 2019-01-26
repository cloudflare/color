import React from "react"

import Progress from '../elements/Progress'
import Dl from '../elements/Dl'
import Dt from '../elements/Dt'
import Dd from '../elements/Dd'

const ProgressItem = ({ label, value, max, ...props }) => {
  return (
    <Div {...props}>
      <Dl display='flex' width={1}  mt={0} mb={1} fontSize={2}>
        <Dt mb={0} pb={0}>{label}</Dt>
        <Dd ml='auto' mb={0} pb={0}>{value}</Dd>
      </Dl>
      <Progress value={value} max={max} />
    </Div>
  )
}

ProgressItem.defaultProps = {
  mb: 1
}

export default ProgressItem

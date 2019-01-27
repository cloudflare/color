import React from "react"
import PropTypes from "prop-types"

const SlabStat = ({ term, description, ...props }) => {
  return (
    <Dl {...props}>
      <Dt fontSize={2} mb={1} children={term} />
      <Dd
        ml={0}
        fontSize={[2, 3, 4]}
        fontWeight={700}
        maxWidth="34em"
        children={description}
      />
    </Dl>
  )
}

SlabStat.propTypes = {
  term: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

SlabStat.defaultProps = {
  term: "This is a label",
  description: "A short description"
}

export default SlabStat

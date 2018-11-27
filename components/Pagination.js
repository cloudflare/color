import React from "react"

const Pagination = ({ minCount, maxCount, ...props }) => {
  return (
    <Flex {...props}>
      <A
        mr={2}
        p={2}
        borderRadius={2}
        border="1px solid"
        borderColor="gray.7"
        color="gray.4"
      >
        <Icon type="left" size={16} />
      </A>
      <A
        mr={3}
        p={2}
        borderRadius={2}
        border="1px solid"
        borderColor="gray.7"
        color="gray.4"
      >
        <Icon type="right" size={16} />
      </A>
      <Span fontWeight={700} color="gray.2">
        {" "}
        {minCount}–{maxCount}{" "}
      </Span>
      <Span color="gray.2">&nbsp;records </Span>
    </Flex>
  )
}

Pagination.defaultProps = {
  minCount: 15,
  maxCount: 25,
  py: 2,
  px: 4,
  width: 1
}

export default Pagination

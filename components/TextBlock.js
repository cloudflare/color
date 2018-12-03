import React from "react"

const TextBlock = ({ currentCombination }) => {
  return (
    <Text
      py={[4, 5]}
      px={[3, 4, 5]}
      color={currentCombination.color}
      bg={currentCombination.bg}
      textAlign="left"
    >
      <Span fontWeight={800} fontSize={[5, 6]}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Span>
      <Span fontWeight={600} fontSize={5} display="block" lineHeight={1.5}>
        abcdefghijklmnopqrstuvwxyz 1234567890!@#$%^&*()
      </Span>
      <Span lineHeight={1.5} display="block" mt={3}>
        Every perception of colour is an illusion.. ..we do not see colours as
        they really are. In our perception they alter one another. In order to
        use color effectively it is necessary to recognize that color deceives
        continually. In visual perception a color is almost never seen as it
        really is — as it physically is. This fact makes color the most relative
        medium in art.
      </Span>
    </Text>
  )
}

export default TextBlock

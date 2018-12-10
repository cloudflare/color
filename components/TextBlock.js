import React from "react"
import Color from 'color'

const TextBlock = ({ currentCombination, withBorders, borderWidth }) => {

  const contrast = Color(currentCombination.bg).contrast(Color(currentCombination.color)).toFixed(2)

  return (
    <Text
      borderColor={withBorders? currentCombination.borderColor: currentCombination.bg}
      border={withBorders ? `${borderWidth}px solid` : '2px solid'}
      py={[4, 5]}
      px={[3, 4, 5]}
      color={currentCombination.color}
      bg={currentCombination.bg}
      textAlign="left"
    >
      <Span fontSize={2} fontWeight={600}>Contrast</Span>
      <Span fontSize={7} fontWeight={800} display='block' mb={3}>
        {contrast}
      </Span>
      <Span fontWeight={800} fontSize={[5, 6]}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Span>
      <Span fontWeight={600} fontSize={5} display="block" lineHeight={1.5}>
        abcdefghijklmnopqrstuvwxyz 1234567890!@#$%^&*()
      </Span>
      <Span lineHeight={1.5} display="block" mt={3}>
        Every perception of color is an illusion.. ..we do not see colors as
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

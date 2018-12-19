import React from "react"
import Color from "color"

const TextBlock = ({ currentCombination, borderWidth, boxPadding }) => {
  const contrast = Color(currentCombination.bg)
    .contrast(Color(currentCombination.color))
    .toFixed(2)

  return (
    <Text
      borderColor={currentCombination.borderColor}
      border={`${borderWidth}px solid`}
      py={[4, 5]}
      px={boxPadding}
      color={currentCombination.color}
      bg={currentCombination.bg}
      textAlign="left"
    >
      <Span fontSize={2} fontWeight={600}>
        Contrast
      </Span>
      <Span fontSize={[5,6,7]} fontWeight={800} display="block" mb={3}>
        {contrast}
      </Span>
      <Span fontWeight={800} fontSize={[5, 6]} style={{ letterSpacing: '-.075em' }}>
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
      </Span>
      <Span fontWeight={600} fontSize={5} display="block" lineHeight={1.5} style={{letterSpacing: '-.1em'}}>
        a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ()
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

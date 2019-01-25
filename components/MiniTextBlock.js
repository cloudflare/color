import React from "react"
import Color from "color"

const MiniTextBlock = ({ currentCombination, borderWidth, boxPadding, ...props }) => {
  const contrast = Color(currentCombination.bg)
    .contrast(Color(currentCombination.color))
    .toFixed(2)

  return (
    <Div
      borderColor={currentCombination.borderColor}
      border={`${borderWidth}px solid`}
      p={boxPadding}
      color={currentCombination.color}
      bg={currentCombination.bg}
      textAlign="left"
      {...props}
    >
      <Div>
        Color: {currentCombination.color}<br />
        Background: {currentCombination.bg}
      </Div>
    <Text my={0}>
      <Span fontSize={2} fontWeight={600}>
        Contrast
      </Span>
      <Span fontSize={[5,6,7]} fontWeight={800} display="block" mb={3}>
        {contrast}
      </Span>
      <Span fontWeight={800} fontSize={[3,4,5]} style={{ letterSpacing: '-.075em' }}>
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
      </Span>
      <Span lineHeight={1.5} display="block" mt={3}>
        Every perception of color is an illusion.. ..we do not see colors as
        they really are. In our perception they alter one another. 
      </Span>
    </Text>
    </Div>
  )
}

export default MiniTextBlock

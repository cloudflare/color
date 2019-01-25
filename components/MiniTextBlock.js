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
      <Flex>
      <Div>
        <Span fontSize={2} fontWeight={600}>
         Color
        </Span>
        <Span fontSize={[3,4]} fontWeight={600} display="block" mb={2}>
          {currentCombination.color}
        </Span>
        <Span fontSize={2} fontWeight={600}>
         Background
        </Span>
        <Span fontSize={[3,4 ]} fontWeight={600} display="block">
          {currentCombination.bg}
        </Span>
      </Div>
    <Div my={0}>
      <Span fontSize={2} fontWeight={600}>
        Contrast
      </Span>
      <Span fontSize={[6,7,8]} fontWeight={800} display="block">
        {contrast}
      </Span>
    </Div>
    </Flex>
      <Span lineHeight={1.5} display="block" mt={3}>
        Every perception of color is an illusion.. ..we do not see colors as
        they really are. In our perception they alter one another. 
      </Span>
    </Div>
  )
}

export default MiniTextBlock

import React from "react"
import Color from "color"

const MiniTextBlock = ({ currentCombination, borderWidth, boxPadding, ...props }) => {
  const contrast = Color(currentCombination.bg)
    .contrast(Color(currentCombination.color))
    .toFixed(2)

  return (
    <Div
      border='1px solid #eee' 
      p={4}
      bg='white'
      color='gray.0'
      textAlign="left"
      {...props}
    >
      <Flex>
        <P my={0} px={4} fontWeight={700} fontSize={5} bg={currentCombination.bg} color={currentCombination.color}>
          Aa 
        </P>
        <P my={0} px={4} fontWeight={700} fontSize={5} bg={currentCombination.color} color={currentCombination.bg}>
          Aa
        </P>
        <Div>
        <Code ml={3} style={{ textTransform: 'uppercase' }} fontSize={[2]}>
          <Span display='inline-block' height={8} width={8} borderRadius={9999} bg={currentCombination.color}></Span> {currentCombination.color} <br /> 
<Span display='inline-block' height={8} width={8} borderRadius={9999} bg={currentCombination.bg}></Span> {currentCombination.bg}
        </Code>
        </Div>
        <Div my={0} ml='auto' width='auto'>
          <Span fontSize={2} fontWeight={600}>
            Contrast
          </Span>
          <Span fontSize={[5]} fontWeight={800} display="block">
            {contrast}
          </Span>
        </Div>
    </Flex>
    </Div>
  )
}

export default MiniTextBlock

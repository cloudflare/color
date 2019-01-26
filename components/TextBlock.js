import React from "react"
import Color from "color"
import Blockquote from '../elements/Blockquote'

const TextBlock = ({ currentCombination, borderWidth, boxPadding, ...props }) => {
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
    <Text my={0}>
      <Span fontSize={2} fontWeight={600}>
        Contrast
      </Span>
      <Span fontSize={[5,6,7]} fontWeight={800} display="block" mb={3}>
        {contrast}
      </Span>
      <H1 fontWeight={800} fontSize={[4, 4, 6]} mt={0} mb={2} borderBottom='4px solid currentColor' pb={2}>
        A Sample Title
      </H1>
      <Time display='block' fontSize={1}>
        <i>22 January 2012</i>
      </Time>
      <Span fontSize={3} lineHeight={1.5} display="block" mt={3} mb={4}>
        Every perception of color is an illusion.. ..we do not see colors as
        they really are. <b>In our perception they alter one another.</b> <Span display={['none', 'inline']}>In order to
          use color effectively it is <i>necessary to recognize that color deceives
            continually.</i> 
          
        </Span> 
        <Span>
          In visual perception a color is almost never seen as it
        really is — as it physically is. This fact makes color the most relative
        medium in art.</Span>
      </Span>
    </Text>
      <Code border='1px solid currentColor' borderRadius={3} p={3} mt={3}>

        // This is a code comment<br />
        /* Another type of code comment */<br /><br />
    &lt;article&gt;<br />
        &nbsp;&nbsp;&lt;h1&gt;A title example&lt;/h1&gt;<br />
        &nbsp;&nbsp;&lt;h2&gt;A subtitle example&lt;/h2&gt;<br />
        &nbsp;&nbsp;&lt;p&gt;And this would be some paragraph text.&lt;/p&gt;<br />
        &lt;/article&gt;

      </Code>
    <Blockquote borderLeft='4px solid currentColor' ml={0} pl={3} mt={4}>
        <P fontSize={[3,4]} mb={2} fontWeight={600}>Color is my day-long obsession, joy and torment.</P>
        <Footer fontSize={2}>
          <i>Claude Monet</i>
        </Footer>
    </Blockquote>
    </Div>
  )
}

export default TextBlock

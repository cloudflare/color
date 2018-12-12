import React from "react"

const About = props => (
  <Div>
    <Section height='80vh' color='gray.0' px={5} py={6} display='flex' flexWrap='wrap' alignItems='center' borderBottom='1px solid' borderColor='gray.8'>
      <Header width={1}>
        <H2 mt={0} fontSize={[5,6,9]} fontWeight={700} mb={3} >Thinking about color</H2>
        <P fontSize={[4,5]}>A documentation journey with the Product Design & Engineering teams at Cloudflare</P>
      </Header>
    </Section>
    <Section height='80vh' color='gray.0' px={5} py={6} display='flex' flexWrap='wrap' alignItems='center' borderBottom='1px solid' borderColor='gray.8'>
      <Div>
        <H3 fontSize={[6,7,8]} mb={2}>The Question</H3>
        <P fontSize={5}>
          What are all the possible things someone might want or need to know about a color?
        </P>
        <Ul display='none'>
          <Li>String Name</Li>
          <Li>Hue Name</Li>
          <Li>Saturation</Li>
          <Li>Alpha level</Li>
          <Li>
            Values 
            <Ul>
              <Li>LAB</Li>
              <Li>RGB(A)</Li>
              <Li>HSL(A)</Li>
              <Li>HSV</Li>
              <Li>uiColor</Li>
            </Ul>
          </Li>
          <Li>What will this look like?</Li>
          <Li>What will this look like as a button?</Li>
          <Li>What will this look like as a border?</Li>
          <Li>What will this look like as a background?</Li>
          <Li>What will this look like as text?</Li>
          <Li>What colors will look good with this that are also accessible?</Li>
          <Li>How should I use this color</Li>
          <Li>Is this color accessible with white?</Li>
          <Li>Is this color accessible with black?</Li>
          <Li>Where do we use this color?</Li>
          <Li>What's the next darkest?</Li>
          <Li>What's the next lightest?</Li>
        </Ul>
      </Div>
    </Section>
  </Div>
)

export default About

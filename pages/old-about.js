import React, { useState, useEffect } from "react"
import Color from "color"
import chroma from "chroma-js"
import HexVis from "../components/HexVis"
import ColorNames from "../components/ColorNames"
import MiniColorSwatch from "../components/MiniColorSwatch"

const getColorName = async hex => {
  const hexMinusHash = hex.replace("#", "")
  const res = await fetch(`https://api.color.pizza/v1/${hexMinusHash}`)
  const json = await res.json()
  return json.colors[0].name
}

const About = () => {
  const [theColor, setTheColor] = useState("#f16975")
  const [colorInput, setColorInput] = useState("#f16975")
  const [mouseX, setMouseX] = useState(null)
  const [colorName, setColorName] = useState("")

  const updateColorName = async () => {
    const colorName = await getColorName(theColor)
    setColorName(colorName)
  }

  useEffect(() => {
    updateColorName()
  }, [theColor])

  const handleTheColor = e => {
    const colorValue = e.target.value
    setColorInput(colorValue)

    try {
      Color(colorValue)
      setTheColor(Color(colorValue).hex())
    } catch (e) {}
  }

  const handleMouseMove = e => {
    setMouseX(e.pageX / e.target.clientWidth)
  }

  const theColorLight = Color(theColor)
    .lighten(0.3)
    .hex()

  const theColorRGB = Color(theColor)
    .rgb()
    .string()

  const theColorHSL = Color(theColor)
    .hsl()
    .round()
    .string()

  const theColorWACAGWhite = Color(theColor).contrast(Color("white"))
  const theColorWACAGBlack = Color(theColor).contrast(Color("black"))

  const theColorAccessibleWhite = theColorWACAGWhite > 4.49 ? "Pass" : "Fail"

  const theColorAccessibleBlack = theColorWACAGBlack > 4.49 ? "Pass" : "Fail"

  const theColorScaleTint = chroma
    .scale([theColor, "#ffffff"])
    .mode("hsl")
    .colors(8)
  const theColorScaleShade = chroma
    .scale([theColor, "#000000"])
    .mode("hsl")
    .colors(8)

  return (
    <Div>
      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Header width={1}>
          <H2 mt={0} fontSize={[5, 6, 9]} fontWeight={700} mb={3}>
            Thinking about color
          </H2>
          <P fontSize={[4, 5]}>
            A documentation journey with the Product Design & Engineering teams
            at Cloudflare
          </P>
        </Header>
      </Section>
      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            The Question
          </H3>
          <P fontSize={5}>
            What are all the possible things someone might want or need to know
            about a color?
          </P>
          <Ul display="none">
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
            <Li>
              What colors will look good with this that are also accessible?
            </Li>
            <Li>How should I use this color</Li>
            <Li>Is this color accessible with white?</Li>
            <Li>Is this color accessible with black?</Li>
            <Li>Where do we use this color?</Li>
            <Li>What's the next darkest?</Li>
            <Li>What's the next lightest?</Li>
          </Ul>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            The input
          </H3>
          <P fontSize={5}>This is a hex code</P>
          <Input
            fontSize={[6, 7, 8]}
            onChange={handleTheColor}
            value={colorInput}
            css={`
              background-color: transparent;
              border: none;
              appearance: none;
              outline: none;
            `}
            type="text"
          />
        </Div>
      </Section>
      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            What is a hex code?
          </H3>
          <P fontSize={5}>
            In mathematics and computing, hexadecimal (also base 16, or hex) is
            a positional numeral system with a radix, or base, of 16. It uses
            sixteen distinct symbols, most often the symbols 0–9 to represent
            values zero to nine, and A, B, C, D, E, F (or alternatively a, b, c,
            d, e, f) to represent values ten to fifteen.
          </P>

          <P fontSize={3}>
            Hexadecimal numerals are widely used by computer system designers
            and programmers. As each hexadecimal digit represents four binary
            digits (bits), it allows a more human-friendly representation of
            binary-coded values. One hexadecimal digit represents a nibble (4
            bits), which is half of an octet or byte (8 bits). For example, a
            single byte can have values ranging from 00000000 to 11111111 in
            binary form, but this may be more conveniently represented as 00 to
            FF in hexadecimal.
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            Wait what? What is a hex code? How does it relate to color?
          </H3>
          <P fontSize={5}>
            A color is specified according to the intensity of its red, green
            and blue components. The first two characters are the red channel,
            the second two characters are green , and the last two characters
            are blue.
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            Hex code math
          </H3>
          <P fontSize={5}>Translating a hex code into rgb</P>

          <Div>
            <HexVis hexCode={theColor} />
          </Div>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            What does this color look like as text?
          </H3>
          <P fontSize={5}>This is one way to visualize a color</P>

          <H3 fontSize={[7, 8]} mb={2} mt={2} color={theColor}>
            {theColor}
          </H3>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
        bg={theColor}
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            This is another way
          </H3>

          <H3 fontSize={[7, 8]} mb={2} mt={2}>
            {theColor}
          </H3>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            We probably want a way to visualize background colors that doesn't
            require the full screen. So we can visualize it as a swatch. Like
            when you go to pick out paint at the store.
          </H3>

          <Div
            width={160}
            bg={theColor}
            css={`
              height: 60px;
            `}
          />
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2}>
            We can visualize the value of the color as text and as a background.
          </H3>

          <Div
            width={160}
            bg={theColor}
            css={`
              height: 60px;
            `}
          />
          <P mt={0} fontWeight={700} fontSize={4} color={theColor}>
            {theColor}
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
        onMouseMove={handleMouseMove}
        bg={`hsl(0, 0%, ${mouseX * 100}%)`}
      >
        <Div>
          <P color={`hsl(0, 0%, ${(1 - mouseX) * 100}%)`} mb={0}>
            "...A color is almost never seen as it really is..." - Josef Albers
          </P>
          <H3
            color={`hsl(0, 0%, ${(1 - mouseX) * 100}%)`}
            fontSize={[6, 7, 8]}
            mb={2}
            mt={1}
          >
            We can visualize the value of the color as text and as a background.
          </H3>

          <Div
            width={160}
            bg={theColor}
            css={`
              height: 60px;
            `}
          />
          <P mt={0} fontWeight={700} fontSize={4} color={theColor}>
            {theColor}
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2} mt={1}>
            One problem with displaying the color value with the color itself,
            is that sometimes the contrast is too low, impeding readability.
          </H3>

          <Div
            width={160}
            bg={theColorLight}
            css={`
              height: 60px;
            `}
          />
          <P mt={0} fontWeight={700} fontSize={4} color={theColorLight}>
            {theColorLight}
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2} mt={1}>
            As one potential solution, we can always display the color value and
            the text example separately.
          </H3>

          <Flex>
            <Div
              width={160}
              bg={theColor}
              mr={2}
              css={`
                height: 60px;
              `}
            />
            <P
              css={`
                line-height: 1;
              `}
              color={theColor}
              m={0}
              fontSize={9}
              fontWeight={700}
            >
              Aa
            </P>
          </Flex>
          <P mt={1} mb={6}>
            <Code fontSize={4}>{theColor}</Code>
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2} mt={1}>
            Next, we might want to know what a color will look like if used as a
            border.
          </H3>

          <Flex
            border="1px solid"
            borderColor={theColor}
            px={2}
            py={3}
            borderRadius="5px"
          >
            <Div
              width={160}
              bg={theColor}
              mr={2}
              css={`
                height: 60px;
              `}
            />
            <P
              css={`
                line-height: 1;
              `}
              color={theColor}
              m={0}
              fontSize={9}
              fontWeight={700}
            >
              Aa
            </P>
          </Flex>
          <P mt={1} mb={6}>
            <Code fontSize={4}>{theColor}</Code>
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2} mt={1}>
            Naturally, we need a name for this color so that we can discuss it
            with fellow humans.
          </H3>

          <Flex alignItems="stretch" mb={5}>
            <P width={3 / 4} mr={3}>
              If you've ever spent time with a group of people trying to name a
              color you know that it's a task to be avoided if possible. With
              this in mind, we find ourselves in luck because there are entire
              services that will name a color for us.
            </P>
            <ColorNames color={theColor} />
          </Flex>

          <Flex
            border="1px solid"
            borderColor={theColor}
            px={2}
            py={3}
            borderRadius="5px"
          >
            <Div
              width={160}
              bg={theColor}
              mr={2}
              css={`
                height: 60px;
              `}
            />
            <P
              css={`
                line-height: 1;
              `}
              color={theColor}
              m={0}
              fontSize={9}
              fontWeight={700}
            >
              Aa
            </P>
          </Flex>
          <P mt={2} mb={0} fontWeight={700} fontSize={4}>
            {colorName}
          </P>
          <P mt={0} mb={6}>
            <Code fontSize={4}>{theColor}</Code>
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2} mt={1}>
            Depending on the context, a hex code might not be what you want to
            use.
          </H3>

          <P fontSize={5}>
            If we leave it up to humans, they might use a color picker on an
            image (or maybe a screenshot of an image!) which opens us up to
            potential subtle shifts in value, leading to unintended visual
            inconsistencies. Luckily we have javascript, so we can compute
            equivalent values from a central source of truth. This allows anyone
            to consume the proper color value, regardless of the medium and
            context they are designing for.
          </P>

          <Flex
            display="inline-flex"
            border="1px solid"
            borderColor={theColor}
            p={3}
            borderRadius={2}
          >
            <Div
              width={160}
              bg={theColor}
              mr={2}
              css={`
                height: 60px;
              `}
            />
            <P
              css={`
                line-height: 1;
              `}
              color={theColor}
              m={0}
              fontSize={9}
            >
              Aa
            </P>
          </Flex>
          <P mt={2} mb={2} fontWeight={700} fontSize={4}>
            {colorName}
          </P>
          <Code pb={1} display="block" fontSize={3}>
            {theColor}
          </Code>
          <Code pb={1} display="block" fontSize={3}>
            {theColorRGB}
          </Code>
          <Code display="block" fontSize={3}>
            {theColorHSL}
          </Code>
        </Div>
      </Section>

      <Section
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[5, 7, 8]} mb={2} mt={1}>
            Accessibility is important.
          </H3>
          <P fontSize={[4, 6]} fontWeight={600}>
            We can automate checking if the color is acessible with both black
            and white and simulating how a color will be percieved by people
            that experience various types of color blindness.
          </P>

          <Flex flexWrap="wrap">
            <ColorSwatch width={[1, 1 / 4, 1]} mb={2} color={theColor} />
            <Flex flexWrap="wrap" px={1} width={[1, 3 / 4, 1]} mt={[2, 0]}>
              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <P fontSize={1} my={0} fontWeight={700}></P>
                <Div
                  css={`
                    filter: url(/static/filters.svg#achromatopsia);
                  `}
                >
                  <MiniColorSwatch children="Achromatopsia" color={theColor} />
                </Div>
              </Div>
              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <Div
                  css={`
                    filter: url(/static/filters.svg#protanopia);
                  `}
                >
                  <MiniColorSwatch children="Protanopia" color={theColor} />
                </Div>
              </Div>

              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <Div
                  css={`
                    filter: url(/static/filters.svg#protanomaly);
                  `}
                >
                  <MiniColorSwatch children="Protanomaly" color={theColor} />
                </Div>
              </Div>

              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <Div
                  css={`
                    filter: url(/static/filters.svg#deuteranopia);
                  `}
                >
                  <MiniColorSwatch children="Deuteranopia" color={theColor} />
                </Div>
              </Div>
              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <Div
                  css={`
                    filter: url(/static/filters.svg#deuteranomaly);
                  `}
                >
                  <MiniColorSwatch children="Deuteranomaly" color={theColor} />
                </Div>
              </Div>
              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <Div
                  css={`
                    filter: url(/static/filters.svg#tritanopia);
                  `}
                >
                  <MiniColorSwatch children="Tritanopia" color={theColor} />
                </Div>
              </Div>
              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <Div
                  css={`
                    filter: url(/static/filters.svg#tritanomaly);
                  `}
                >
                  <MiniColorSwatch children="Tritanomaly" color={theColor} />
                </Div>
              </Div>
              <Div width={[1 / 2, 1 / 4]} px={1} pb={1}>
                <Div
                  css={`
                    filter: url(/static/filters.svg#achromatomaly);
                  `}
                >
                  <MiniColorSwatch children="Achromatomaly" color={theColor} />
                </Div>
              </Div>
            </Flex>
          </Flex>

          <P mt={2} mb={0} fontWeight={700} fontSize={4}>
            {colorName}
          </P>
          <Code
            lineHeight={1.5}
            pr={4}
            style={{ whiteSpace: "nowrap" }}
            fontSize={2}
          >
            {theColor}
          </Code>
          <Code
            lineHeight={1.5}
            pr={4}
            style={{ whiteSpace: "nowrap" }}
            fontSize={2}
          >
            {theColorRGB}
          </Code>
          <Code
            lineHeight={1.5}
            pr={4}
            style={{ whiteSpace: "nowrap" }}
            fontSize={2}
          >
            {theColorHSL}
          </Code>

          <H4 mb={2} mt={4}>
            Contrast ratio
          </H4>
          <P mt={0} mb={0} display="inline-block" mr={3}>
            <Code fontSize={3} px={2} py={1} mr={1} bg={theColor} color="white">
              {theColorWACAGWhite.toFixed(2)}
            </Code>
            <Span mt={0} mb={3} fontSize={3}>
              {theColorAccessibleWhite}
            </Span>
          </P>

          <P my={0} display="inline-block">
            <Code fontSize={3} mr={2} py={1} px={2} bg={theColor} color="black">
              {theColorWACAGBlack.toFixed(2)}
            </Code>
            <Span my={0} fontSize={3}>
              {theColorAccessibleBlack}
            </Span>
          </P>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2} mt={1}>
            So far, we have are visualizing 16 data points from 1 piece of
            input.
          </H3>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
        mx={-3}
      >
        <Div width={1 / 2} px={3}>
          <H3 fontSize={[5, 6, 7]} mb={4}>
            Adding white to a color creates a tint
          </H3>

          <Div>
            {theColorScaleTint.map(color => (
              <Div px={3} py={3} bg={color}>
                {color}
              </Div>
            ))}
          </Div>
          <Flex mt={3} display="none">
            {theColorScaleTint.map(color => (
              <Div
                mr={2}
                width="30px"
                css={`
                  height: 30px;
                `}
                borderRadius="50%"
                bg={color}
              />
            ))}
          </Flex>

          <Flex mt={3} display="none">
            {theColorScaleTint.map(color => (
              <Div
                mr={2}
                width="30px"
                css={`
                  height: 10px;
                `}
                borderRadius="20px"
                bg={color}
              />
            ))}
          </Flex>
        </Div>
        <Div width={1 / 2} px={3}>
          <H3 fontSize={[5, 6, 7]} mb={4}>
            Adding black to a color creates a shade
          </H3>

          <Div>
            {theColorScaleShade.map(color => (
              <Div px={3} py={3} bg={color}>
                {color}
              </Div>
            ))}
          </Div>
        </Div>
      </Section>

      <Section
        height="80vh"
        color="gray.0"
        px={5}
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.8"
      >
        <Div>
          <H3 fontSize={[6, 7, 8]} mb={2} mt={1}>
            Resources
          </H3>

          <P fontSize={5}>
            Excellent interactive sites and articles if you want to spend more
            time exploring the vast world of Color Theory.
          </P>

          <P fontWeight={700} mb={2}>
            Read
          </P>
          <P>
            <TextLink href="https://www.amazon.com/Interaction-Color-Anniversary-Josef-Albers/dp/0300179359/ref=sr_1_1?ie=UTF8&qid=1512473341&sr=8-1&keywords=interaction+of+color">
              Interaction of Color (Book)
            </TextLink>
          </P>
          <P>
            <TextLink href="https://en.wikipedia.org/wiki/X11_color_names">
              History of x11 color names
            </TextLink>
          </P>
          <P />
          <TextLink href="http://hextodecimal.com/index.php?hex=f1">
            Hex to Decimal
          </TextLink>
          <P>
            <TextLink href="http://printingcode.runemadsen.com/lecture-color/">
              Computational Color by Rune Madsen
            </TextLink>
          </P>
          <P fontWeight={700}>Interact</P>
          <P>
            <TextLink href="http://color.method.ac/">
              Color by Method of Action
            </TextLink>
          </P>
          <P />
          <TextLink href="http://yupnet.org/interactionofcolor/">
            Interaction of Color (iPad App)
          </TextLink>
          <P fontWeight={700}>Watch</P>
          <P>
            <TextLink href="https://www.youtube.com/watch?v=HmStJQzclHc">
              Alex Sexton: Peachpuffs and Lemonchiffons
            </TextLink>
          </P>
        </Div>
      </Section>
    </Div>
  )
}
export default About

import React from "react"

const ColorSwatch = ({ color }) => {
  return (
    <Flex
      border="1px solid"
      borderColor={color}
      px={2}
      py={3}
      borderRadius="5px"
    >
      <Div
        width={160}
        bg={color}
        mr={2}
        css={`
          height: 60px;
        `}
      />
      <P
        css={`
          line-height: 1;
        `}
        color={color}
        m={0}
        fontSize={9}
      >
        Aa
      </P>
    </Flex>
  )
}
export default ColorSwatch

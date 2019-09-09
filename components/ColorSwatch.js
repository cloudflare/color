import React from "react"

const ColorSwatch = ({ color, ...props }) => {
  return (
    <Flex
      display="inline-flex"
      border="1px solid"
      borderColor={color}
      p={3}
      borderRadius="5px"
      {...props}
    >
      <Div
        width={1}
        bg={color}
        mr={2}
        borderRadius={1}
        height={64}
        width={64}
      />
      <P
        css={{
          lineHeight: 1
        }}
        color={color}
        m={0}
        fontSize={8}
      >
        Aa
      </P>
    </Flex>
  )
}
export default ColorSwatch

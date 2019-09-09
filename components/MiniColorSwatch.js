import React from "react"

const MiniColorSwatch = ({ color, ...props }) => {
  return (
    <Flex
      display="flex"
      border="1px solid"
      borderColor={color}
      p={2}
      p={1}
      borderRadius="5px"
    >
      <Div
        width={32}
        bg={color}
        borderRadius="3px"
        mr={2}
        css={{
          height: "16px"
        }}
      />
      <P
        css={{
          lineHeight: 1
        }}
        color={color}
        m={0}
        fontSize={1}
      >
        {props.children}
      </P>
    </Flex>
  )
}

MiniColorSwatch.defaultProps = {
  children: "Aa"
}

export default MiniColorSwatch

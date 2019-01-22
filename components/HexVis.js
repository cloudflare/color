import React from "react"

export default ({ hexCode }) => {
  const hexPairs = [1, 3, 5].map(i => hexCode.slice(i, i + 2))

  return (
    <Table css={{ fontSize: 14 }}>
      <Tbody>
        <Tr>
          <Td style={{ textAlign: "center" }}>&nbsp;</Td>
          <Td style={{ textAlign: "center" }}>
            <Span color="apple">RED</Span>
          </Td>
          <Td style={{ textAlign: "center" }}>&nbsp;</Td>
          <Td style={{ textAlign: "center" }}>
            <Span color="grass">GREEN</Span>
          </Td>
          <Td style={{ textAlign: "center" }}>&nbsp;</Td>
          <Td style={{ textAlign: "center" }}>
            <Span color="marine">BLUE</Span>
          </Td>
          <Td style={{ textAlign: "center" }}>&nbsp;</Td>
        </Tr>
        <Tr style={{ fontSize: 128 }}>
          <Td>#&nbsp;</Td>
          <Td>
            <Code lineHeight={1}>{hexPairs[0]}</Code>{" "}
          </Td>
          <Td>
            <Code>&nbsp;</Code>
          </Td>
          <Td>
            <Code lineHeight={1}>{hexPairs[1]}</Code>
          </Td>
          <Td>
            <Code>&nbsp;</Code>
          </Td>
          <Td>
            <Code lineHeight={1}>{hexPairs[2]}</Code>
          </Td>
          <Td>
            <Code>&nbsp;</Code>
          </Td>
        </Tr>
        <Tr>
          {hexPairs.map((hexChannel, index) => {
            return [
              <Td style={{ textAlign: "center" }}>&nbsp;</Td>,
              <Td style={{ textAlign: "right" }}>
                <Code lineHeight={1.5}>
                  {parseInt(hexChannel[0], 16)} × 16<Sup>0</Sup>
                  <Br />+ {parseInt(hexChannel[1], 16)} × 16<Sup>1</Sup>
                  <Br />
                  <Div
                    css={`
                      height: 1px;
                    `}
                    bg="dust"
                    my={2}
                  />
                  {parseInt(hexChannel, 16)}
                </Code>
              </Td>
            ]
          })}
          <Td style={{ textAlign: "center" }}>&nbsp;</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

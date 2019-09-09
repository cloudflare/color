import React, { useState } from "react"

import Table from "elements/Table"
import Thead from "elements/Thead"
import Tbody from "elements/Tbody"
import Tr from "elements/Tr"
import TableHeaderCell from "components/TableHeaderCell"
import ColorTableRow from "./ColorTableRow"
import ContrastModal from "./ContrastModal"

const ColorTable = ({ colors }) => {
  const [selectedColor, setColor] = useState(null)
  return (
    <>
      <ContrastModal handleClose={setColor} color={selectedColor} />
      <Div css={{ overflowX: "scroll", "-webkit-overflow-scrolling": "touch" }}>
        <Table>
          <Thead>
            <Tr>
              <TableHeaderCell>
                <Span display="none">Swatch</Span>
              </TableHeaderCell>
              <TableHeaderCell>Hue</TableHeaderCell>
              <TableHeaderCell>Hex</TableHeaderCell>
              <TableHeaderCell>HSL</TableHeaderCell>
              <TableHeaderCell>RGB</TableHeaderCell>
              <TableHeaderCell px={2}>Contrast w/ Black</TableHeaderCell>
              <TableHeaderCell px={2}>White</TableHeaderCell>
            </Tr>
          </Thead>
          <Tbody>
            {colors.map(c => (
              <ColorTableRow onClick={setColor} key={c} color={c} />
            ))}
          </Tbody>
        </Table>
      </Div>
    </>
  )
}

export default ColorTable

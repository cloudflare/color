import React from "react"

const CardTable = ({
  title,
  text,
  meta,
  button,
  help,
  api,
  controls,
  ...props
}) => {
  return (
    <ModuleWrapper {...props}>
      <Div px={[3, 4]} py={3} color="gray.1">
        <H3 mb={0}>{title}</H3>
        <P mt={2}>{text}</P>
      </Div>
      {controls && { controls }}
      <Table color="gray.1">
        <Thead fontSize={2}>
          <Tr>
            <TableHeaderCell>Transaction date</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell textAlign="right">Amount</TableHeaderCell>
            <TableHeaderCell width={64}>
              <Span display="none">Download</Span>
            </TableHeaderCell>
          </Tr>
        </Thead>
        <Tfoot>
          <Pagination />
        </Tfoot>
        <Tbody>
          <Tr>
            <TableCell> Oct 8 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $17.88
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
          <Tr>
            <TableCell> Sep 8 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $172.98
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
          <Tr>
            <TableCell> Aug 8 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $14,720.00
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
          <Tr>
            <TableCell> Jul 8 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $10.98
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
          <Tr>
            <TableCell> Jun 8 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $33.14
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
          <Tr>
            <TableCell> May 8, 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $52.88
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
          <Tr>
            <TableCell> April 8, 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $79.11
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
          <Tr>
            <TableCell> March 8, 2018</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell textAlign="right" fontWeight={700}>
              $172.98
            </TableCell>
            <TableCell textAlign="right">
              <A>Download</A>
            </TableCell>
          </Tr>
        </Tbody>
      </Table>
    </ModuleWrapper>
  )
}

CardTable.defaultProps = {
  title: "Invoices",
  text:
    "For any historical invoices not listed, contact your Sales Account Manager."
}

export default CardTable

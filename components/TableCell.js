import styled from "@emotion/styled"
import {
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor
} from "styled-system"

const TableCell = styled.td(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  {
    ":last-of-type": {
      textAlign: "right"
    }
  }
)

TableCell.defaultProps = {
  fontSize: 3,
  textAlign: "left",
  borderBottom: "1px solid",
  borderColor: "gray.8",
  lineHeight: 1.5,
  py: 2,
  px: 4
}

export default TableCell

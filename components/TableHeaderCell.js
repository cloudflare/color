import styled from 'react-emotion'
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

const TableHeaderCell = styled.th(
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

TableHeaderCell.defaultProps = {
  fontWeight: "bold",
  fontSize: 2,
  textAlign: "left",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "gray.8",
  py: 2,
  px: 4,
  bg: "gray.9"
}

export default TableHeaderCell

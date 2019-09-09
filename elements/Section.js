import styled from '@emotion/styled'
import {
  space,
  width,
  height,
  maxWidth,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Section = styled.section(
  space,
  width,
  maxWidth,
  height,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Section.defaultProps = {
  width: 1,
}

export default Section

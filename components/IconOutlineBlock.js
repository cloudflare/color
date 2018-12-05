import React from "react"
import Color from "color"
import styled from 'react-emotion'

import {
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flexWrap,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const IconOutline = styled.div(
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    transition: "all .25s ease-in"
  }
)

IconOutline.defaultProps = {
  border: '2px solid currentColor',
  borderRadius: '100%',
  height: 48,
  width: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const IconOutlineBlock = ({ currentCombination }) => {
  const colorParentBgContrastValue = Color(currentCombination.color).contrast(
    Color(currentCombination.parentBg)
  )

  const iconOutlineColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color
  return (
    <Div mt={5} mb={5}>
    <Div
      display="grid"
      style={{ justifyItems: 'center', gridTemplateColumns: "repeat(12, 1fr)", rowGap: "1em" }}
    >
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="remove" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="caretDown" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="caretRight" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="caretLeft" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="caretUp" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="pop" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="cost" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="creditCard" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="upload" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="exclamationOutline" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="exclamation" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="collapse" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="expand" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="file" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="forward" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="left" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="right" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="down" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="gear" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="generalInfo" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="hamburger" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="info" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="help" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="list" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="mail" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="refresh" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="reorder" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="resizeHorizontal" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="minus" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="plus" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="okSign" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="activation" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="validator" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="safeOutline" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="safe" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="warningOutline" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="warning" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="stopOutline" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="stop" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="lock" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="time" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="quotes" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="signup" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="facebook" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="google" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="linkedin" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="download" /></Div>
      <Div display='flex' alignItems='center' justifyContent='center' height={48} width={48} borderRadius='100%' bg={currentCombination.bg}><Icon color={currentCombination.color} type="wrench" /></Div>

    </Div>
    <Div
      mt={4}
      display="grid"
      style={{ justifyItems: 'center', gridTemplateColumns: "repeat(12, 1fr)", rowGap: "1em" }}
    >
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="remove" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="caretDown" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="caretRight" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="caretLeft" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="caretUp" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="pop" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="cost" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="creditCard" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="upload" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="exclamationOutline" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="exclamation" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="collapse" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="expand" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="file" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="forward" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="left" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="right" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="down" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="gear" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="generalInfo" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="hamburger" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="info" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="help" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="list" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="mail" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="refresh" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="reorder" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="resizeHorizontal" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="minus" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="plus" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="okSign" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="activation" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="validator" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="safeOutline" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="safe" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="warningOutline" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="warning" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="stopOutline" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="stop" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="lock" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="time" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="quotes" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="signup" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="facebook" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="google" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="linkedin" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="download" /></IconOutline>
      <IconOutline color={iconOutlineColor} ><Icon color={iconOutlineColor} type="wrench" /></IconOutline>
    </Div>
  </Div>
  )
}

export default IconOutlineBlock

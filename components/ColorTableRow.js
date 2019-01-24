import React from "react"
import chroma from "chroma-js"
import isNaN from "lodash/isNaN"

import Tr from "elements/Tr"
import Div from "elements/Div"
import Flex from "components/Flex"
import P from "elements/P"
import TableCell from "components/TableCell"
import Code from "elements/Code"

const getHue = colorObj => {
  const hueVal = colorObj.get("hsl.h")

  if (isNaN(hueVal)) {
    return "Gray"
  }

  const names = [
    "Red", // 0
    "Orange", // 30
    "Yellow", // 60
    "Lime", // 90
    "Green", // 120
    "Teal", // 150
    "Cyan", // 180
    "Blue", // 210
    "Indigo", // 240
    "Violet", // 270
    "Fuschia", // 300
    "Pink", // 330
    "Red" // 360
  ]
  const hueIndex = Math.round((hueVal - 2) / 30)
  return names[hueIndex]
}

const useColorData = color => {
  const colorObj = chroma(color)
  const hue = getHue(colorObj)

  return {
    hex: colorObj.hex(),
    hsl: colorObj.css("hsl"),
    rgb: colorObj.css(),
    hue
  }
}

const Swatch = ({ color }) => (
  <Flex height='100%'>
    <Div borderColor={color} border='1px solid' p='4px' mr={2} display='flex' alignItems='center'>
      <Div height='100%' px={3} py={2} bg={color} mr={2} />
      <P my={0} fontWeight={2} color={color} py={0}>
        Aa
      </P>
    </Div>
  </Flex>
)

const ColorTableRow = ({ color, onClick }) => {
  const colorData = useColorData(color)
  const contrastBlack = chroma.contrast('black', colorData.hex).toFixed(2) 
  const contrastWhite = chroma.contrast('white', colorData.hex).toFixed(2) 

  return (
    <Tr>
      <TableCell py={2} px={0} pr={2}>
        <Swatch color={colorData.hex} />
      </TableCell>
      <TableCell fontSize={2}>{colorData.hue}</TableCell>
      <TableCell>
        <Code fontSize={1}>{colorData.hex}</Code>
      </TableCell>
      <TableCell>
        <Code fontSize={1}>{colorData.hsl}</Code>
      </TableCell>
      <TableCell>
        <Code fontSize={1}>{colorData.rgb}</Code>
      </TableCell>
      <TableCell textAlign='right' fontSize={2} fontWeight={contrastBlack >4.49? 600 : 400} px={2}>
        {contrastBlack}
      </TableCell>
      <TableCell fontSize={2} fontWeight={contrastWhite >4.49? 600 : 400} px={2}>
        {contrastWhite}
      </TableCell>
    </Tr>
  )
}

export default ColorTableRow

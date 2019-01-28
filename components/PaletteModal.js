import React, { useState, useEffect } from "react"
import OutsideClickHandler from "react-outside-click-handler"
import kebabCase from "lodash/kebabCase"
import camelCase from "lodash/camelCase"
import { js, css } from "js-beautify"
import isHex from "../utils/isHex"

const PaletteModal = ({ palette, togglePaletteModal }) => {
  const [data, setData] = useState([])
  const [activeTab, setActiveTab] = useState("json")

  useEffect(() => {
    fetchColorData(palette)
  }, [])

  const handleActiveTab = tabName => () => setActiveTab(tabName)

  const fetchColorData = async palette => {
    const validPalette = palette.filter(p => isHex(p))
    const paletteString = validPalette.map(p => p.substr(1)).join(",")

    const res = await fetch(`https://api.color.pizza/v1/${paletteString}`)
    const { colors } = await res.json()

    const newData = colors.map(c => ({ name: c.name, hex: c.requestedHex }))
    setData(newData)
  }

  const formatAsJson = () => {
    return JSON.stringify(data, null, "  ")
  }

  const formatAsCSS = () => {
    return `:root {
  ${data
    .map(d => `--${kebabCase(d.name)}: ${d.hex};\n`)
    .join("")
    .trim()}
}`
  }

  const formatAsSass = () =>
    data
      .map(d => `$${kebabCase(d.name)}: ${d.hex};\n`)
      .join("")
      .trim()

  const formatAsJS = () => `{
  ${data
    .map(d => `${camelCase(d.name)}: "${d.hex}"`)
    .join(",")
    .trim()}
}`

  const handleSelectAll = e => {
    e.target.select()
  }

  return (
    <Flex
      position="fixed"
      width={1}
      height="100vh"
      px={6}
      py={4}
      justifyContent="center"
      alignItems="center"
      css={{ backgroundColor: "rgba(0,0,0,0.4)", top: 0, left: 0, zIndex: 5 }}
    >
      <OutsideClickHandler onOutsideClick={() => togglePaletteModal(false)}>
        <Flex
          bg="white"
          flexWrap="wrap"
          p={4}
          borderRadius={2}
          maxWidth="60rem"
        >
          <Flex width={1} mx={-3} mb={3}>
            <TextButton px={3} onClick={handleActiveTab("json")}>
              JSON
            </TextButton>
            <TextButton px={3} onClick={handleActiveTab("css")}>
              CSS variables
            </TextButton>
            <TextButton px={3} onClick={handleActiveTab("sass")}>
              Sass variables
            </TextButton>
            <TextButton px={3} onClick={handleActiveTab("js")}>
              JS theme file
            </TextButton>
            <TextButton
              px={3}
              fontWeight={700}
              onClick={() => togglePaletteModal(false)}
              ml="auto"
            >
              Close
            </TextButton>
          </Flex>

          {activeTab === "json" && (
            <Div
              width={1}
              border="1px solid"
              borderColor="gray.7"
              borderRadius={2}
              style={{ overflow: "hidden" }}
            >
              <Textarea
                width={1}
                bg="gray.9"
                style={{ minHeight: "16rem", height: "75vh", border: 0 }}
                p={4}
                onClick={handleSelectAll}
                readOnly
                value={formatAsJson()}
              />
            </Div>
          )}

          {activeTab === "css" && (
            <Div
              width={1}
              border="1px solid"
              borderColor="gray.8"
              borderRadius={2}
              style={{ overflow: "hidden" }}
            >
              <Textarea
                width={1}
                bg="gray.9"
                style={{ minHeight: "16rem", height: "75vh", border: 0 }}
                p={4}
                onClick={handleSelectAll}
                readOnly
                value={css(formatAsCSS())}
              />
            </Div>
          )}

          {activeTab === "sass" && (
            <Div
              width={1}
              border="1px solid"
              borderColor="gray.8"
              borderRadius={2}
              style={{ overflow: "hidden" }}
            >
              <Textarea
                width={1}
                bg="gray.9"
                style={{ minHeight: "16rem", height: "75vh", border: 0 }}
                p={4}
                onClick={handleSelectAll}
                readOnly
                value={css(formatAsSass())}
              />
            </Div>
          )}

          {activeTab === "js" && (
            <Div
              width={1}
              border="1px solid"
              borderColor="gray.8"
              borderRadius={2}
              style={{ overflow: "hidden" }}
            >
              <Textarea
                width={1}
                bg="gray.9"
                style={{ minHeight: "16rem", height: "75vh", border: 0 }}
                p={4}
                onClick={handleSelectAll}
                readOnly
                value={js(formatAsJS())}
              />
            </Div>
          )}
        </Flex>
      </OutsideClickHandler>
    </Flex>
  )
}

export default PaletteModal

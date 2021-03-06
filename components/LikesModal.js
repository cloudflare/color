import React, { useState, useEffect } from "react"
import OutsideClickHandler from "react-outside-click-handler"
import flatMap from "lodash/flatMap"
import kebabCase from "lodash/kebabCase"
import camelCase from "lodash/camelCase"
import chunk from "lodash/chunk"
import { js, css } from "js-beautify"

const LikesModal = ({ likes, isOpen, toggleModal }) => {
  const [data, setData] = useState([])
  const [activeTab, setActiveTab] = useState("json")

  useEffect(() => {
    fetchColorData(likes)
  }, [])

  const handleActiveTab = tabName => () => setActiveTab(tabName)

  const fetchColorData = async likes => {
    const likesString = flatMap(likes, l =>
      Object.values(l)
        .map(l => l.substr(1))
        .join(",")
    )

    const res = await fetch(`https://api.color.pizza/v1/${likesString}`)
    const { colors } = await res.json()

    const newData = colors.map(c => ({ name: c.name, hex: c.requestedHex }))

    setData(chunk(newData, 4))
  }

  const formatAsJson = () => {
    return JSON.stringify(data, null, "  ")
  }

  const formatAsCSS = () => {
    return `:root {
    ${data
      .map(
        (d, i) => `// Like ${i + 1}
        ${d
          .map(d => `--${kebabCase(d.name)}: ${d.hex};`)
          .join("")
          .trim()}
      \n`
      )
      .join("")
      .trim()}
}`
  }

  const formatAsSass = () =>
    data
      .map(
        (d, i) => `// Like ${i + 1}
        ${d.map(d => `$${kebabCase(d.name)}: ${d.hex};`).join("")}\n`
      )
      .join("")
      .trim()

  const formatAsJS = () => `[
  ${data.map(d =>
    JSON.stringify(
      d.reduce((acc, curr) => {
        return { ...acc, [camelCase(curr.name)]: curr.hex }
      }, {})
    )
  )}
  ]`

  const handleSelectAll = e => {
    e.target.select()
  }

  return isOpen ? (
    <Div
      position="fixed"
      width={1}
      height="100vh"
      px={6}
      py={4}
      css={{ backgroundColor: "rgba(0,0,0,0.4)", top: 0, left: 0, zIndex: 5 }}
    >
      <OutsideClickHandler onOutsideClick={() => toggleModal(false)}>
        <Flex position="absolute" bg="white" flexWrap="wrap" p={4}>
          <Button onClick={() => toggleModal(false)}>Close</Button>
          <Div>
            <Button onClick={handleActiveTab("json")}>JSON</Button>
            <Button onClick={handleActiveTab("css")}>CSS variables</Button>
            <Button onClick={handleActiveTab("sass")}>SASS variables</Button>
            <Button onClick={handleActiveTab("js")}>JS theme file</Button>
          </Div>

          {activeTab === "json" && (
            <Div>
              <P>JSON format</P>
              <Textarea
                onClick={handleSelectAll}
                readOnly
                value={formatAsJson()}
              />
            </Div>
          )}

          {activeTab === "css" && (
            <Div>
              <P>CSS format</P>
              <Textarea
                onClick={handleSelectAll}
                readOnly
                value={css(formatAsCSS())}
              />
            </Div>
          )}

          {activeTab === "sass" && (
            <Div>
              <P>Sass format</P>
              <Textarea
                onClick={handleSelectAll}
                readOnly
                value={css(formatAsSass())}
              />
            </Div>
          )}

          {activeTab === "js" && (
            <Div>
              <P>JS format</P>
              <Textarea
                onClick={handleSelectAll}
                readOnly
                value={js(formatAsJS())}
              />
            </Div>
          )}
        </Flex>
      </OutsideClickHandler>
    </Div>
  ) : null
}

export default LikesModal

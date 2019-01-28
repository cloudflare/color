import React, { useState } from "react"
import extractSkins from "../utils/extract-skins"
import sortPalette from "../utils/sortPalette"
import LoadingBars from "./LoadingBars"

const SiteFetch = ({ onSubmit, ...props }) => {
  const [url, setUrl] = useState("https://cloudflare.com")
  const [isLoading, setLoading] = useState(false)

  const handleChange = e => setUrl(e.target.value)
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const fullUrl = `https://api.cssstats.com/stats/?url=${url}`

    const res = await fetch(fullUrl)

    if (res.ok) {
      const data = await res.json()
      const cssPalette = extractSkins(data).colors
      const newPalette = cssPalette.filter(str => {
        if (str.includes("rgba")) {
          return false
        } else if (str.includes("hsla")) {
          return false
        } else if (str.includes("inherit")) {
          return false
        } else if (str.includes("currentColor")) {
          return false
        } else if (str.includes("transparent")) {
          return false
        } else if (str.includes("none")) {
          return false
        } else if (str.includes("var(")) {
          return false
        } else {
          return str
        }
      })

      onSubmit(sortPalette(newPalette))
    }

    setLoading(false)
  }

  return (
    <Div {...props}>
      <Form
        onSubmit={handleSubmit}
        display="flex"
        width={1}
        style={{ overflow: "hidden" }}
        borderRadius={2}
        mb={0}
        bg='gray.8'
      >
        <Input
          fontSize={2}
          fontWeight={700}
          py={3}
          px={3}
          width={1}
          type="url"
          border="0 solid transparent"
          bg='gray.8'
          borderRadius={0}
          value={url}
          onChange={handleChange}
          style={{ flexGrow: 1 }}
        />
        <Button
          width="auto"
          py={3}
          px={4}
          fontSize={2}
          bg="gray.3"
          color="white"
          fontWeight={700}
          border="none"
          style={{ cursor: "pointer" }}
          disabled={isLoading}
        >
          Go
        </Button>
      </Form>
      {isLoading && (
        <Flex width={1}>
          <LoadingBars />
          <P ml={2}>Fetching Palette</P>
        </Flex>
      )}
    </Div>
  )
}

export default SiteFetch

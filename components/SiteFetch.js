import React, { useState } from "react"
import extractSkins from "../utils/extract-skins"
import sortPalette from "../utils/sortPalette"

const SiteFetch = ({ onSubmit }) => {
  const [url, setUrl] = useState("https://cloudflare.com")
  const handleChange = e => setUrl(e.target.value)
  const handleSubmit = async e => {
    e.preventDefault()
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
  }

  return (
    <Form
      onSubmit={handleSubmit}
      display="flex"
      width={1}
    >
      <Input
        fontSize={2}
        fontWeight={700}
        py={3}
        px={3}
        width={[3 / 4, 7 / 8]}
        type="url"
        border="none"
        bg="#eeeeee"
        borderRadius={0}
        value={url}
        onChange={handleChange}
      />
      <Button
        width={[1 / 4, 1 / 8]}
        py={3}
        fontSize={2}
        bg="black"
        color="white"
        fontWeight={700}
        border="none"
        style={{ cursor: "pointer" }}
      >
        Go
      </Button>
    </Form>
  )
}

export default SiteFetch

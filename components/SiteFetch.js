import React, { useState } from "react"
import extractSkins from "../utils/extract-skins"
import sortPalette from "../utils/sortPalette"

const SiteFetch = ({ onSubmit }) => {
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
    <Div>
    <Form onSubmit={handleSubmit} display="flex" width={1} style={{ overflow: 'hidden'}} borderRadius={2}>
      <Input
        fontSize={2}
        fontWeight={700}
        py={3}
        px={3}
        width={[3/4]}
        type="url"
        border="none"
        bg="#eeeeee"
        borderRadius={0}
        value={url}
        onChange={handleChange}
      />
      <Button
        width={[1 / 4]}
        py={3}
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
      {isLoading && <P width={1}>Fetching Palette</P>}
    </Div>
  )
}

export default SiteFetch

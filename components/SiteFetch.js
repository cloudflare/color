import React, { useState } from "react"

const SiteFetch = ({ onSubmit }) => {
  const [url, setUrl] = useState("https://cloudflare.com")
  const handleChange = e => setUrl(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(url)
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

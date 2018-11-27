import React from "react"

const Search = ({ ...props }) => {
  return (
    <Div {...props}>
      <Div
        position="absolute"
        width="auto"
        pl={2}
        style={{ zIndex: 2, transform: "translate(0%,55%)" }}
      >
        <Label>
          <Icon type="search" size={16} />
        </Label>
      </Div>
      <Div position="absolute" width={1} style={{ top: 0 }}>
        <TextInput type="search" width={1} px={4} />
      </Div>
    </Div>
  )
}

Search.defaultProps = {
  position: "relative"
}

export default Search

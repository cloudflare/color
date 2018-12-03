import React, { useState, useEffect } from "react"
import { withRouter } from "next/router"
import useHistory from "../utils/useHistory"
import extractSkins from "../utils/extract-skins"
import queryString from "query-string"
import isEmpty from "lodash/isEmpty"

import defaultPalette from "../utils/defaultPalette"
import generateRandomPalette from "../utils/generateRandomPalette"
import sortPalette from "../utils/sortPalette"

const encodeCombination = currentCombination => {
  return queryString.stringify(currentCombination)
}

const Index = ({ router }) => {
  const [palette, setPalette] = useState(sortPalette(defaultPalette))
  const [newColor, updateNewColor] = useState("")
  const [likes, updateLikes] = useState([])
  const [parentBg, updateParentBg] = useState("currentCombination")
  const [colorFilter, setColorFilter] = useState("none")
  const [currentState, { set, undo, redo, canRedo, canUndo }] = useHistory({})

  const { present: currentCombination } = currentState

  useEffect(() => {
    const starterCombination = isEmpty(router.query)
      ? generateRandomPalette(palette)
      : router.query
    set(starterCombination)
  }, [])

  useEffect(
    () => {
      router.push("/", `?${encodeCombination(currentCombination)}`)
    },
    [currentCombination]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  })

  const handleLike = () => {
    updateLikes([...likes, currentCombination])
  }

  const handleNext = () => {
    if (canRedo) {
      return redo()
    }

    const newCombo = generateRandomPalette(palette)
    set(newCombo)
  }

  const handlePrevious = () => {
    canUndo && undo()
  }

  const handleViewLike = index => set(likes[index])

  const handleRemove = index => {
    const alteredPalette = palette.filter((_, i) => index !== i)
    setPalette(alteredPalette)
  }

  const handleColorUpdate = (e, index) => {
    const updatedPalette = [...palette]
    updatedPalette[index] = e.target.value
    setPalette(updatedPalette)
  }

  const handleNewColorInput = e => updateNewColor(e.target.value)

  const handleAddColor = () =>
    newColor.length > 0 && setPalette([...palette, newColor])

  const handleKeyPress = ({ key }) => {
    switch (key) {
      case "ArrowUp":
        handleLike()
        break
      case "ArrowRight":
        handleNext()
        break
      case "ArrowLeft":
        handlePrevious()
        break
    }
  }

  const handleColorBlindFilter = e => {
    setColorFilter(e.target.value)
  }

  const handleSiteFetch = async url => {
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

      setPalette(sortPalette(newPalette))
    }
  }

  const handleUpdateParentBg = e => updateParentBg(e.target.value)

  const setParentBg = option => {
    switch (option) {
      case "white":
        return "#ffffff"
      case "black":
        return "#000000"
      case "currentCombination":
        return currentCombination.parentBg
    }
  }

  return (
    <Div
      display="flex"
      flexWrap="wrap"
      bg={setParentBg(parentBg)}
      width={1}
      position="relative"
      style={{
        overflow: "hidden",
        filter:
          colorFilter === "none"
            ? "none"
            : `url(/static/filters.svg#${colorFilter})`
      }}
    >

    <Div bg='white' display='flex' alignItems='center' width={1} >
      <Div width={1/4} py={2} pl={3}>
        <Logo />
      </Div>
      <Div width={3/4}>
          <Flex fontSize={1} justifyContent="center" bg="white">
            <ButtonPrimary
              mx={1}
              alignItems="center"
              onClick={handlePrevious}
              button="left"
              bg="transparent"
              color="black"
              children="Previous"
            />
            <Flex>
              <Div alignItems="center" display="flex" width="auto">
                <Div
                  width={64}
                  bg={currentCombination.parentBg}
                  py={3}
                  mr={2}
                />
                <Div>
                  <Span display="block" fontWeight={700}>
                    Parent Bg:{" "}
                  </Span>
                  <Code>{currentCombination.parentBg}</Code>
                </Div>
              </Div>
              <Div alignItems="center" display="flex" width="auto">
                <Div width={64} bg={currentCombination.color} py={3} mr={2} />
                <Div>
                  <Span display="block" fontWeight={700}>
                    Color:{" "}
                  </Span>
                  <Code>{currentCombination.color}</Code>
                </Div>
              </Div>
              <Div alignItems="center" display="flex" width="auto">
                <Div width={64} bg={currentCombination.bg} py={3} mr={2} />
                <Div>
                  <Span display="block" fontWeight={700}>
                    Bg:{" "}
                  </Span>
                  <Code>{currentCombination.bg}</Code>
                </Div>
              </Div>
              <Div alignItems="center" display="flex" width="auto">
                <Div
                  width={64}
                  bg={currentCombination.borderColor}
                  py={3}
                  mr={2}
                />
                <Div>
                  <Span display="block" fontWeight={700}>
                    Border:{" "}
                  </Span>
                  <Code>{currentCombination.borderColor}</Code>
                </Div>
              </Div>
              <ButtonPrimary
                mx={1}
                alignItems="center"
                onClick={handleLike}
                button="plus"
                bg="transparent"
                color="black"
                border="1px solid black"
                children="Save"
                iconSize={12}
              />
            </Flex>
            <ButtonPrimary
              mx={1}
              alignItems="center"
              onClick={handleNext}
              button="right"
              align="right"
              children="Next"
              bg="transparent"
              color="black"
            />
          </Flex>
        </Div>
        </Div>

      <Div
        width={[1, 1 / 4]}
        bg="rgba(255,255,255,1)"
        borderTop='1px solid rgba(0,0,0,.1)'
        color="black"
        pt={3}
        pb={4}
        px={[3,4]}
        style={{ minHeight: "100vh" }}
      >
        <SiteFetch onSubmit={handleSiteFetch} />

        <Div>
          <Label
            fontWeight={700}
            mt={4}
            mb={2}
            display="block"
            textAlign="left"
          >
            Palette
          </Label>
          <Palette
            palette={palette}
            onRemove={handleRemove}
            onUpdate={handleColorUpdate}
          />

          <Div display="flex" mt={2}>
            <Div
              display="flex"
              borderRadius={2}
              style={{ overflow: "hidden" }}
              width={1}
            >
              <Div>
                <TextInput
                  borderColor="transparent"
                  bg='gray.8'
                  value={newColor}
                  onChange={handleNewColorInput}
                />
              </Div>
              <Button
                fontWeight={700}
                fontSize={2}
                px={3}
                bg="black"
                color="white"
                border="1px solid black"
                width="auto"
                style={{ whiteSpace: "nowrap" }}
                onClick={handleAddColor}
              >
                Add Color
              </Button>
            </Div>
          </Div>
        </Div>

        <Div display="flex" flexWrap="wrap">
          <H4 width={1} mb={2} mt={4}>
            Background
          </H4>
          <Div display="flex" alignItems="center" width="auto" mr={3}>
            <Input
              type="radio"
              name="parentBg"
              value="currentCombination"
              checked={parentBg === "currentCombination"}
              onChange={handleUpdateParentBg}
            />
            <Label pl={1}>Palette</Label>
          </Div>
          <Div display="flex" alignItems="center" width="auto" mr={3}>
            <Input
              type="radio"
              name="parentBg"
              id="parentBgWhite"
              value="white"
              checked={parentBg === "white"}
              onChange={handleUpdateParentBg}
            />
            <Label pl={1} htmlFor="parentBgWhite">
              White
            </Label>
          </Div>

          <Div display="flex" alignItems="center" width="auto" mr={3}>
            <Input
              type="radio"
              name="parentBg"
              id="parentBgBlack"
              value="black"
              checked={parentBg === "black"}
              onChange={handleUpdateParentBg}
            />
            <Label pl={1} htmlFor="parentBgBlack">
              Black
            </Label>
          </Div>
        </Div>

        <ColorBlindFilter
          onChange={handleColorBlindFilter}
          currentValue={colorFilter}
        />

        <Likes likes={likes} onSelectLike={handleViewLike} />
      </Div>

      {!isEmpty(currentCombination) && (
        <Div width={3 / 4} pb={5} pt={4} borderTop='1px solid rgba(0,0,0,.1)'>
          <Div maxWidth="48em" mx="auto">
            <TextBlock currentCombination={currentCombination} />
            <IconBlock currentCombination={currentCombination} />

            <FormBlock currentCombination={currentCombination} />

            <ChartsBlock currentCombination={currentCombination} />
          </Div>
        </Div>
      )}
    </Div>
  )
}

export default withRouter(Index)

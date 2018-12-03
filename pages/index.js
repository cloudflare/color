import React, { useState, useEffect } from "react"
import { withRouter } from "next/router"
import useHistory from "../utils/useHistory"
import extractSkins from "../utils/extract-skins"
import queryString from "query-string"
import isEmpty from "lodash/isEmpty"
import chroma from "chroma-js"

import defaultPalette from "../utils/defaultPalette"
import generateRandomPalette from "../utils/generateRandomPalette"

import IconBlock from "../components/IconBlock"
import ChartsBlock from "../components/ChartsBlock"
import FormBlock from "../components/FormBlock"
import TextBlock from "../components/TextBlock"
import ColorBlindFilter from "../components/ColorBlindFilter"

import Div from "../elements/Div"
import Code from "../elements/Code"
import Span from "../elements/Span"
import Flex from "../components/Flex"
import Form from "../elements/Form"
import Input from "../elements/Input"
import Button from "../elements/Button"
import Label from "../elements/Label"

import TextInput from "../components/TextInput"

import ButtonOutline from "../components/ButtonOutline"
import H4 from "../elements/H4"
import Palette from "../components/Palette"
import ButtonPrimary from "../components/ButtonPrimary"

const encodeCombination = currentCombination => {
  return queryString.stringify(currentCombination)
}

const Index = ({ router }) => {
  const [url, setUrl] = useState("https://cloudflare.com")
  const [palette, setPalette] = useState(defaultPalette)
  const [likes, updateLikes] = useState([])
  const [newColor, updateNewColor] = useState("")
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

  const handleViewLike = index => () => {
    set(likes[index])
  }

  const handleChange = e => {
    setUrl(e.target.value)
  }

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

  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(likes)
  )}`

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

      setPalette(newPalette)
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
      <Div
        width={[1, 1 / 4]}
        bg="rgba(0,0,0,.7)"
        color="white"
        py={4}
        px={[3, 4]}
        style={{ minHeight: "100vh" }}
      >
        <Form
          onSubmit={handleSubmit}
          display="flex"
          width={1}
          borderRadius={[0, 2]}
          style={{ overflow: "hidden" }}
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

        {likes.length > 0 && (
          <>
            <Div width={1}>
              <H4 mt={5} mb={2}>
                Collection
              </H4>

              <Div>
                {likes.map((like, i) => {
                  const colors = Object.values(like)
                  return (
                    <Flex key={i} onClick={handleViewLike(i)} width={1} mb={1}>
                      {colors.map(color => (
                        <Div width={1 / 4} key={color} py={3} bg={color} />
                      ))}
                    </Flex>
                  )
                })}
              </Div>
            </Div>

            <ButtonOutline
              mt={3}
              width={1}
              bg="transparent"
              color="white"
              borderColor="white"
              download="likes.json"
              href={dataStr}
            >
              Export Likes as JSON
            </ButtonOutline>
          </>
        )}
      </Div>
        </Div>

      {!isEmpty(currentCombination) && (
        <Div width={3/4} pb={5}>
          <Flex fontSize={1} mb={4} justifyContent='center' bg='white' py={2}>
            <ButtonPrimary
              mx={1}
              alignItems="center"
              onClick={handlePrevious}
              button="left"
              bg='transparent'
              color='black'
              children="Previous"
            />
            <Flex>
              <Div alignItems='center' display='flex' width='auto'>
                <Div width={64} bg={currentCombination.parentBg} py={3} mr={2} />
                <Div>
                  <Span display='block' fontWeight={700}>Parent Bg: </Span>
                  <Code>{currentCombination.parentBg}</Code>
                </Div>
              </Div>
              <Div alignItems='center' display='flex' width='auto'>
                <Div width={64} bg={currentCombination.color} py={3} mr={2} />
                <Div>
                  <Span display='block' fontWeight={700}>Color: </Span>
                  <Code>{currentCombination.color}</Code>
                </Div>
              </Div>
              <Div alignItems='center' display='flex' width='auto'>
                <Div width={64} bg={currentCombination.bg} py={3} mr={2} />
                <Div>
                  <Span display='block' fontWeight={700}>Bg: </Span>
                  <Code>{currentCombination.bg}</Code>
                </Div>
              </Div>
              <Div alignItems='center' display='flex' width='auto'>
                <Div width={64} bg={currentCombination.borderColor} py={3} mr={2} />
                <Div>
                  <Span display='block' fontWeight={700}>Border: </Span>
                  <Code>{currentCombination.borderColor}</Code>
                </Div>
              </Div>
              <ButtonPrimary
                mx={1}
                alignItems="center"
                onClick={handleLike}
                button="plus"
                bg='transparent'
                color='black'
                border='1px solid black'
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
              bg='transparent'
              color='black'
            />
          </Flex>
          <Div maxWidth='48em' mx='auto'>
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

import React, { useState, useEffect } from "react"
import { withRouter } from "next/router"
import chroma from "chroma-js"
import extractSkins from "../utils/extract-skins"
import queryString from "query-string"
import isEmpty from "lodash/isEmpty"

import defaultPalette from "../utils/defaultPalette"

import IconBlock from "../components/IconBlock"
import ChartsBlock from "../components/ChartsBlock"

import ButtonPrimary from "../components/ButtonPrimary"
import RadioButton from "../components/RadioButton"
import Div from "../elements/Div"
import Flex from "../components/Flex"
import Form from "../elements/Form"
import Input from "../elements/Input"
import Button from "../elements/Button"
import Label from "../elements/Label"
import Span from "../elements/Span"
import Text from "../components/Text"
import TextInput from "../components/TextInput"
import SingleComponent from "../components/SingleComponent"
import Badge from "../components/Badge"
import BadgeOutline from "../components/BadgeOutline"
import H4 from "../elements/H4"
import Palette from "../components/Palette"
import ButtonLink from "../components/ButtonLink"

const getRandomColor = palette =>
  palette[Math.round(Math.random() * (palette.length - 1))]

const getAccessibleColors = (palette, comparisonColor) =>
  palette.filter(p => chroma.contrast(p, comparisonColor) > 4.5)

const generateRandomPalette = palette => {
  const randomMainColor = getRandomColor(palette)
  const accessibleBgColor = getRandomColor(
    getAccessibleColors(palette, randomMainColor)
  )
  const randomParentBg = getRandomColor(palette)
  const randomBorderColor = getRandomColor(palette)

  return {
    color: randomMainColor,
    bg: accessibleBgColor,
    borderColor: randomBorderColor,
    parentBg: randomParentBg
  }
}

const addLike = ({
  updateLikes,
  currentCombination,
  likes,
  updateHistory,
  history,
  palette,
  updateCombination,
  updateHistoryIndex,
  historyIndex
}) => {
  const newCombination = generateRandomPalette(palette)
  updateLikes([currentCombination, ...likes])
  updateCombination(newCombination)
  updateHistory([...history.slice(-9, 10), newCombination])
  history.length < 10 && updateHistoryIndex(historyIndex + 1)
}

const encodeCombination = currentCombination => {
  return queryString.stringify(currentCombination)
}

const Index = ({ router }) => {
  const [url, setUrl] = useState("https://cloudflare.com")
  const [palette, setPalette] = useState(defaultPalette)
  const [currentCombination, updateCombination] = useState({})
  const [history, updateHistory] = useState([])
  const [likes, updateLikes] = useState([])
  const [historyIndex, updateHistoryIndex] = useState(0)
  const [newColor, updateNewColor] = useState("")
  const [parentBg, updateParentBg] = useState("white")

  useEffect(() => {
    const starterCombination = isEmpty(router.query)
      ? generateRandomPalette(palette)
      : router.query
    updateCombination(starterCombination)
    updateHistory([starterCombination])
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

  const handleLike = () =>
    addLike({
      updateLikes,
      currentCombination,
      likes,
      updateHistory,
      history,
      palette,
      updateCombination,
      updateHistoryIndex,
      historyIndex
    })

  const handleNext = () => {
    if (historyIndex < history.length - 1) {
      updateCombination(history[historyIndex + 1])
      return updateHistoryIndex(historyIndex + 1)
    }
    const newCombination = generateRandomPalette(palette)
    updateCombination(newCombination)
    updateHistory([...history.slice(-9, 10), newCombination])
    history.length < 10 && updateHistoryIndex(historyIndex + 1)
  }

  const handlePrevious = () => {
    if (historyIndex <= 0) return
    updateCombination(history[historyIndex - 1])
    updateHistoryIndex(historyIndex - 1)
  }

  const handleSetLike = index => () => {
    updateCombination(likes[index])
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
      display='flex'
      flexWrap='wrap'
      bg={setParentBg(parentBg)}
      width={1}
      position="relative"
      style={{ overflow: "hidden" }}
    >
      <Div width={[1, 1/4]} bg='rgba(0,0,0,.7)' color='white' py={4} px={[3,4]} style={{minHeight: '100vh'}}>
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
          css={{ cursor: "pointer" }}
        >
          Go
        </Button>
      </Form>
        <Div>
          <Label fontWeight={700} mt={4} mb={2} display='block' textAlign='left'>Palette</Label>
          <Palette
            palette={palette}
            onRemove={handleRemove}
            onUpdate={handleColorUpdate}
          />

          <Div display='flex' mt={2}>
            <Div display='flex' borderRadius={2} style={{ overflow: 'hidden' }} width={1}>
              <Div>
                <TextInput  borderColor='transparent' value={newColor} onChange={handleNewColorInput} />
              </Div>
              <Button fontWeight={700} fontSize={2} px={3} bg='black' color='white'  border='1px solid black' width='auto' style={{ whiteSpace: 'nowrap' }} onClick={handleAddColor}>Add Color</Button>
            </Div>
          </Div>
        </Div>
        <Div display='flex' flexWrap='wrap'>
          <H4 width={1} mb={2} mt={4}>Background</H4>
          <Div display='flex' alignItems='center' width='auto' mr={3}>
          <Input
            type="radio"
            name="parentBg"
            id="parentBgWhite"
            value="white"
            checked={parentBg === "white"}
            onChange={handleUpdateParentBg}
          />
            <Label pl={1} for='parentBgWhite'>
              White
            </Label>
        </Div>

        <Div display='flex' alignItems='center' width='auto' mr={3}>
          <Input
            type="radio"
            name="parentBg"
            id='parentBgBlack'
            value="black"
            checked={parentBg === "black"}
            onChange={handleUpdateParentBg}
          />
          <Label pl={1} for='parentBgBlack'>Black</Label>
        </Div>

        <Div display='flex' alignItems='center' width='auto'>
          <Input
            type="radio"
            name="parentBg"
            value="currentCombination"
            checked={parentBg === "currentCombination"}
            onChange={handleUpdateParentBg}
          />
          <Label pl={1}>Palette</Label>
        </Div>
        </Div>

      <Div width={1}>
        {likes.length > 0 &&
          <H4 mt={5} mb={2}>Collection</H4>
        }
        <Div>
          {likes.map((like, i) => {
            const colors = Object.values(like)
            return (
              <Flex key={i} onClick={handleSetLike(i)} width={1}>
                {colors.map(color => (
                  <Div width={1/4} key={color} py={3} bg={color} />
                ))}
              </Flex>
            )
          })}
        </Div>
      </Div>

      {likes.length > 0 &&
      <ButtonOutline mt={3} width={1} bg='transparent' color='white' borderColor='white' download="likes.json" href={dataStr}>
        Export Likes as JSON
      </ButtonOutline>
      }
    </Div>
      <Div maxWidth="48em" mx="auto" pt={3} pb={5}>
      <Flex mx="auto" justifyContent="center">
        <ButtonPrimary
          mx={1}
          disabled={historyIndex <= 0}
          alignItems="center"
          onClick={handlePrevious}
          button="left"
          children="Previous"
        />

        <ButtonPrimary
          mx={1}
          alignItems="center"
          onClick={handleLike}
          button="plus"
          children="Add to collection"
        />
        <ButtonPrimary
          mx={1}
          alignItems="center"
          onClick={handleNext}
          button="right"
          align="right"
          children="Next"
        />
      </Flex>
        <Text
          py={[4, 5]}
          px={[3, 4, 5]}
          color={currentCombination.color}
          bg={currentCombination.bg}
          textAlign="left"
        >
          <Span fontWeight={800} fontSize={[5, 6]}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </Span>
          <Span fontWeight={600} fontSize={5} display="block" lineHeight={1.5}>
            abcdefghijklmnopqrstuvwxyz 1234567890!@#$%^&*()
          </Span>
          <Span lineHeight={1.5} display="block" mt={3}>
            Every perception of colour is an illusion.. ..we do not see colours
            as they really are. In our perception they alter one another. In
            order to use color effectively it is necessary to recognize that
            color deceives continually. In visual perception a color is almost
            never seen as it really is — as it physically is. This fact makes
            color the most relative medium in art.
          </Span>
        </Text>
        <IconBlock currentCombination={currentCombination} />
        <Flex mt={2} px={[3, 4]} display="none">
          <TextInput
            py={3}
            px={4}
            mr={1}
            border="1px solid"
            borderRadius={1}
            color={currentCombination.bg}
            bg={currentCombination.color}
            borderColor={currentCombination.borderColor}
            defaultValue="email@example.com"
          />
          <SingleComponent
            py={3}
            px={4}
            border="1px solid"
            borderRadius={1}
            color={currentCombination.color}
            bg={currentCombination.bg}
            borderColor={currentCombination.borderColor}
            children="Click Here"
          />
        </Flex>
        <Div mt={4} textAlign="left" px={[3, 4]}>
          <Div display="flex" alignItems="center">
            <SingleComponent
              py={2}
              px={4}
              mr={3}
              borderRadius={1}
              color={currentCombination.color}
              bg={currentCombination.bg}
              children="Primary Click"
            />
            <Badge
              bg={currentCombination.bg}
              color={currentCombination.color}
              mr={3}
            />
            <Div display="flex" alignItems="center" borderRadius={2} pl={3}>
              <RadioButton
                name="group 1"
                color={currentCombination.color}
                mr={3}
              >
                Yes
              </RadioButton>
              <RadioButton
                name="group 1"
                color={currentCombination.color}
                checked={true}
              >
                No
              </RadioButton>
            </Div>
          </Div>
          <Div alignItems="center" display="flex" mt={3}>
            <SingleComponent
              py={2}
              px={4}
              mr={3}
              border="1px solid"
              borderRadius={1}
              color={currentCombination.bg}
              bg="transparent"
              borderColor={currentCombination.bg}
              children="Secondary Click"
              width="auto"
            />
            <BadgeOutline
              borderColor={currentCombination.bg}
              color={currentCombination.bg}
              width="auto"
            />
            <Div display="flex" alignItems="center" borderRadius={2} pl={3}>
              <RadioButton name="group 1" color={currentCombination.bg} mr={3}>
                Yes
              </RadioButton>
              <RadioButton
                name="group 1"
                color={currentCombination.bg}
                checked={true}
              >
                No
              </RadioButton>
            </Div>
          </Div>
          <ChartsBlock currentCombination={currentCombination} />
        </Div>
      </Div>
    
    </Div>
  )
}

export default withRouter(Index)

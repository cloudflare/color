import React, { useState, useEffect } from "react"
import { withRouter } from "next/router"
import useHistory from "../utils/useHistory"
import useInterval from "../utils/useInterval"
import queryString from "query-string"
import isEmpty from "lodash/isEmpty"
import uniqWith from "lodash/uniqWith"
import isEqual from "lodash/isEqual"

import defaultPalette from "../utils/defaultPalette"
import generateRandomPalette from "../utils/generateRandomPalette"
import sortPalette from "../utils/sortPalette"
import TextButton from "../components/TextButton"
import ButtonIcon from "../components/ButtonIcon"

const encodeCombination = currentCombination => {
  return queryString.stringify(currentCombination)
}

const resetPinned = {
  color: false,
  bg: false,
  borderColor: false,
  parentBg: false
}

const Index = ({ router }) => {
  const [palette, setPalette] = useState(sortPalette(defaultPalette))
  const [newColor, updateNewColor] = useState("")
  const [likes, updateLikes] = useState([])
  const [colorFilter, setColorFilter] = useState("none")
  const [currentState, { set, undo, redo, canRedo, canUndo }] = useHistory({})
  const { present: currentCombination } = currentState
  const [pinnedColors, setPinnedColors] = useState(resetPinned)
  const { start, stop, isRunning } = useInterval({
    duration: 2000,
    callback: () => {
      const newCombo = generateRandomPalette(
        palette,
        pinnedColors,
        currentCombination
      )
      set(newCombo)
    }
  })

  useEffect(() => {
    const starterCombination = isEmpty(router.query)
      ? generateRandomPalette(palette, pinnedColors, currentCombination)
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

  const handleAutoCycling = () => {
    isRunning ? stop() : start()
  }

  const handleLike = () => {
    const deDuped = uniqWith([...likes, currentCombination], isEqual)
    updateLikes(deDuped)
  }

  const handleRemoveLike = index => {
    const newLikes = likes.filter((_, i) => index !== i)
    updateLikes(newLikes)
  }

  const handleNext = () => {
    if (canRedo) {
      return redo()
    }
    stop()
    const newCombo = generateRandomPalette(
      palette,
      pinnedColors,
      currentCombination
    )
    set(newCombo)
  }

  const handlePrevious = () => {
    if (canUndo) {
      stop()
      undo()
    }
  }

  const handleViewLike = index => {
    stop()
    set(likes[index])
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

  const handleColorBlindFilter = e => setColorFilter(e.target.value)

  const handleSiteFetch = async palette => {
    setPalette(palette)
    setPinnedColors(resetPinned)
    const newCombo = generateRandomPalette(palette, resetPinned)
    set(newCombo)
  }

  const handleClearPalette = () => {
    const clearedPalette = ["#000000", "#FFFFFF", "#2c7cb0", "#757575"]
    setPalette(clearedPalette)
    const newCombo = generateRandomPalette(clearedPalette, resetPinned)
    set(newCombo)
  }

  const handlePinColor = key => () => {
    setPinnedColors(prevState => ({ ...prevState, [key]: !prevState[key] }))
  }

  return (
    <Div
      display="flex"
      flexWrap="wrap"
      bg={currentCombination.parentBg}
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
      <Div bg="white" display="flex" alignItems="center" width={1}>
        <Div width={1 / 4} py={2} pl={3}>
          <Logo />
        </Div>
        <Div width={3 / 4}>
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
                  py={1}
                  mr={2}
                  css={{ cursor: "pointer" }}
                  onClick={handlePinColor("parentBg")}
                >
                  <Icon
                    type="lock"
                    color="white"
                    css={{
                      opacity: pinnedColors.parentBg ? 1 : 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      ":hover": { opacity: 1 }
                    }}
                  />
                </Div>
                <Div>
                  <Span display="block" fontWeight={700}>
                    Parent Bg:
                  </Span>
                  <Code>{currentCombination.parentBg}</Code>
                </Div>
              </Div>
              <Div alignItems="center" display="flex" width="auto">
                <Div
                  width={64}
                  bg={currentCombination.color}
                  py={1}
                  mr={2}
                  css={{ cursor: "pointer" }}
                  onClick={handlePinColor("color")}
                >
                  <Icon
                    type="lock"
                    color="white"
                    css={{
                      opacity: pinnedColors.color ? 1 : 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      ":hover": { opacity: 1 }
                    }}
                  />
                </Div>
                <Div>
                  <Span display="block" fontWeight={700}>
                    Color:
                  </Span>
                  <Code>{currentCombination.color}</Code>
                </Div>
              </Div>
              <Div alignItems="center" display="flex" width="auto">
                <Div
                  width={64}
                  bg={currentCombination.bg}
                  py={1}
                  mr={2}
                  css={{ cursor: "pointer" }}
                  onClick={handlePinColor("bg")}
                >
                  <Icon
                    type="lock"
                    color="white"
                    css={{
                      opacity: pinnedColors.bg ? 1 : 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      ":hover": { opacity: 1 }
                    }}
                  />
                </Div>
                <Div>
                  <Span display="block" fontWeight={700}>
                    Bg:
                  </Span>
                  <Code>{currentCombination.bg}</Code>
                </Div>
              </Div>
              <Div alignItems="center" display="flex" width="auto">
                <Div
                  width={64}
                  bg={currentCombination.borderColor}
                  py={1}
                  mr={2}
                  css={{ cursor: "pointer" }}
                  onClick={handlePinColor("borderColor")}
                >
                  <Icon
                    type="lock"
                    color="white"
                    css={{
                      opacity: pinnedColors.borderColor ? 1 : 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      ":hover": { opacity: 1 }
                    }}
                  />
                </Div>
                <Div>
                  <Span display="block" fontWeight={700}>
                    Border:
                  </Span>
                  <Code>{currentCombination.borderColor}</Code>
                </Div>
              </Div>
              <ButtonPrimary
                alignItems="center"
                onClick={handleLike}
                button="plus"
                bg="transparent"
                color="black"
                children="Save"
                iconSize={12}
              />
              <ButtonIcon
                alignItems="center"
                onClick={handleAutoCycling}
                button={null}
                color="#000000"
                icon={isRunning ? "pause" : "play"}
                iconSize={16}
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
        borderTop="1px solid rgba(0,0,0,.1)"
        borderRight="1px solid rgba(0,0,0,.1)"
        color="black"
        pt={3}
        pb={4}
        px={[3, 4]}
        style={{ minHeight: "100vh" }}
      >
        <SiteFetch onSubmit={handleSiteFetch} />

        <Div>
          <Div
            fontWeight={700}
            mt={4}
            mb={2}
            display="flex"
            alignItems="center"
          >
            <Label fontWeight={700}>Palette</Label>
            <TextButton ml="auto" onClick={handleClearPalette}>
              Clear
            </TextButton>
          </Div>
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
                  bg="gray.8"
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

        <ColorBlindFilter
          onChange={handleColorBlindFilter}
          currentValue={colorFilter}
        />

        <Likes
          likes={likes}
          onSelectLike={handleViewLike}
          onRemoveLike={handleRemoveLike}
        />
      </Div>

      {!isEmpty(currentCombination) && (
        <Div width={3 / 4} pb={5} pt={4} borderTop="1px solid rgba(0,0,0,.1)">
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

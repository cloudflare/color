import React, { useState, useEffect } from "react"
import { withRouter } from "next/router"
import useHistory from "../utils/useHistory"
import useInterval from "../utils/useInterval"
import queryString from "query-string"
import isEmpty from "lodash/isEmpty"
import uniqWith from "lodash/uniqWith"
import isEqual from "lodash/isEqual"
import IconOutlineBlock from "../components/IconOutlineBlock"

import defaultPalette from "../utils/defaultPalette"
import generateRandomPalette from "../utils/generateRandomPalette"
import sortPalette from "../utils/sortPalette"

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
  const [likes, updateLikes] = useState([])
  const [colorFilter, setColorFilter] = useState("none")
  const [paletteImage, setPaletteImage] = useState(null)
  const [imageName, setImageName] = useState("")
  const [currentState, { set, undo, redo, canRedo, canUndo }] = useHistory({})
  const { present: currentCombination } = currentState
  const [pinnedColors, setPinnedColors] = useState(resetPinned)
  const { start, stop, isRunning } = useInterval({
    duration: 2000,
    startImmediate: true,
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

  const handleAddColor = newColor =>
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
    setImageName(new Date())
    setPaletteImage("")
  }

  const handlePinColor = key => () => {
    setPinnedColors(prevState => ({ ...prevState, [key]: !prevState[key] }))
  }

  const handleShowEditTooltip = () => {
    stop()
  }

  const handleComboColorUpdate = (newColor, tooltipKey) => {
    const newCombo = { ...currentCombination, [tooltipKey]: newColor }
    set(newCombo)
  }

  const handleImageUpload = async e => {
    setPaletteImage(e.target.files[0])

    const res = await fetch("https://palette-image-xdihrlacdc.now.sh", {
      method: "POST",
      body: e.target.files[0]
    })
    const palette = await res.json()

    setPalette(palette)
    setPinnedColors(resetPinned)
    const newCombo = generateRandomPalette(palette, resetPinned)
    set(newCombo)
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
        <CombinationTools
          currentCombination={currentCombination}
          pinnedColors={pinnedColors}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onPinColor={handlePinColor}
          onLike={handleLike}
          onShowEditTooltip={handleShowEditTooltip}
          onAutoCycling={handleAutoCycling}
          isRunning={isRunning}
          onComboColorUpdate={handleComboColorUpdate}
        />
      </Div>

      <Div
        width={[1, 1 / 4]}
        bg="rgba(255,255,255,1)"
        borderTop="1px solid rgba(0,0,0,.1)"
        borderRight="1px solid rgba(0,0,0,.1)"
        color="black"
        pt={3}
        pb={4}
        px={3}
        style={{ minHeight: "100vh" }}
      >
        <SiteFetch onSubmit={handleSiteFetch} />

        <Div>
          <Input
            key={imageName}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {paletteImage && <Img src={URL.createObjectURL(paletteImage)} />}
        </Div>

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
            activeColors={Object.values(currentCombination)}
            onRemove={handleRemove}
            onUpdate={handleColorUpdate}
            onAddColor={handleAddColor}
          />

          <Div display="flex" mt={2}>
            <Div
              display="flex"
              borderRadius={2}
              style={{ overflow: "hidden" }}
              width={1}
            />
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
            <IconOutlineBlock currentCombination={currentCombination} />
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

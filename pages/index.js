import React, { useState, useEffect } from "react"
import { withRouter } from "next/router"
import { get as getIdb, set as setIdb } from "idb-keyval"
import palx from "palx"
import useHistory from "../utils/useHistory"
import useInterval from "../utils/useInterval"
import queryString from "query-string"
import isEmpty from "lodash/isEmpty"
import isArray from "lodash/isArray"
import uniqWith from "lodash/uniqWith"
import isEqual from "lodash/isEqual"
import reduce from "lodash/reduce"
import IconOutlineBlock from "../components/IconOutlineBlock"
import theme from '../theme'

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
  const [withBorders, setWithBorders] = useState(true)
  const [borderWidth, setBorderWidth] = useState(2)
  const [palxColor, setPalxColor] = useState("#07c")
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
    getIdb("likes").then(likes => {
      likes && updateLikes(likes)
    })
  }, [])

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

  const handleLike = async () => {
    const currentLikes = await likes

    const deDuped = uniqWith([...currentLikes, currentCombination], isEqual)
    updateLikes(deDuped)
    await setIdb("likes", deDuped)
  }

  const handleRemoveLike = async index => {
    const newLikes = likes.filter((_, i) => index !== i)
    updateLikes(newLikes)
    await setIdb("likes", newLikes)
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
    setPaletteImage(URL.createObjectURL(e.target.files[0]))

    const res = await fetch("https://palette-image-erabnzvsxv.now.sh", {
      method: "POST",
      body: e.target.files[0]
    })
    const palette = await res.json()

    setPalette(palette)
    setPinnedColors(resetPinned)
    const newCombo = generateRandomPalette(palette, resetPinned)
    set(newCombo)
  }

  const handleBorderToggle = () => setWithBorders(value => !value)

  const handleBorderWidthChange = e => setBorderWidth(parseInt(e.target.value))

  const handleFetchFromUnsplash = async () => {
    const res = await fetch("http://localhost:63137")
    const { colors, url } = await res.json()
    setPalette(colors)
    setPinnedColors(resetPinned)
    const newCombo = generateRandomPalette(palette, resetPinned)
    set(newCombo)
    setPaletteImage(url)
  }

  const handlePalxColor = e => {
    setPalxColor(e.target.value)
  }

  const handleUsePalx = () => {
    const newPaletteObj = palx(palxColor)

    const newPalette = reduce(
      newPaletteObj,
      (acc, curr) => {
        return isArray(curr) ? [...acc, ...curr] : acc
      },
      []
    )
    setPalette(newPalette)
    setPinnedColors(resetPinned)
    const newCombo = generateRandomPalette(newPalette, resetPinned)
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

        <Div mt={2}>
          <Input
            key={imageName}
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageUpload}
          />
        </Div>
        <P>or</P>
        <Div>
          <TextButton fontSize={2} fontWeight={700} onClick={handleFetchFromUnsplash}>
            Choose an image from Unsplash
          </TextButton>
        </Div>
        <P>or</P>
        {paletteImage && <Img src={paletteImage} />}

        <Div>
          <Div
            fontWeight={700}
            mt={4}
            mb={2}
            display="flex"
            flexWrap='wrap'
            alignItems="center"
          >
            <Div width={1} mb={4}>
              <Input type="text" value={palxColor} onChange={handlePalxColor} mr={3} />
              <TextButton onClick={handleUsePalx}>Generate palette</TextButton>{" "}
            </Div>
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

          <Div mt={4} display='flex'>
            <TextButton fontSize={2} fontWeight={700} onClick={handleBorderToggle} width={1/2} textAlign='left'>
              {withBorders ? "Hide" : "Show"} borders
            </TextButton>
            {withBorders && (
              <Div ml='auto' textAlign='right'>
                <Label fontWeight={700} fontSize={2} mr={2}>Border width</Label>
                <Input
                  value={borderWidth}
                  onChange={handleBorderWidthChange}
                  type="number"
                  py={2}
                  px={2}
                  fontSize={2}
                  fontWeight={600}
                  borderRadius={2}
                  border={'1px solid ' + theme.colors.gray[8]}
                  min={1}
                  max={32}
                  step={1}
                />
              </Div>
            )}
 
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
            <TextBlock
              withBorders={withBorders}
              borderWidth={borderWidth}
              currentCombination={currentCombination}
            />
            <IconOutlineBlock 
              currentCombination={currentCombination} 
              withBorders={withBorders}
              borderWidth={borderWidth}
            />

            <IconBlock 
              currentCombination={currentCombination} 
              withBorders={withBorders}
              borderWidth={borderWidth}
            />
            <FormBlock 
              currentCombination={currentCombination} 
              withBorders={withBorders}
              borderWidth={borderWidth}
            />
            <ChartsBlock 
              currentCombination={currentCombination} 
              withBorders={withBorders}
              borderWidth={borderWidth}
            />
          </Div>
        </Div>
      )}
    </Div>
  )
}

export default withRouter(Index)

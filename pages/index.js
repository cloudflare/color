import React, { useState, useEffect } from "react"
import { get as getIdb, set as setIdb } from "idb-keyval"
import palx from "palx"
import OutsideClickHandler from "react-outside-click-handler"
import useHistory from "../utils/useHistory"
import useInterval from "../utils/useInterval"
import isEmpty from "lodash/isEmpty"
import isArray from "lodash/isArray"
import uniqWith from "lodash/uniqWith"
import isEqual from "lodash/isEqual"
import toNumber from "lodash/toNumber"
import reduce from "lodash/reduce"
import findKey from "lodash/findKey"
import debounce from "lodash/debounce"
import theme from "../theme"

import defaultPalette from "../utils/defaultPalette"
import generateRandomPalette from "../utils/generateRandomPalette"
import sortPalette from "../utils/sortPalette"
import getAllCombos from "../utils/getAllCombos"
import getContrastScore from "../utils/getContrastScore"

import Preview from "../components/Preview"
import PlayerControls from "../components/PlayerControls"
import Colorbox from "../components/Colorbox"
import isHex from "../utils/isHex"

const resetPinned = {
  color: false,
  bg: false,
  borderColor: false,
  parentBg: false
}

const debouncedUpdateCombos = debounce(
  (updatedPalette, contrastRatio, setAvailableCombos) => {
    const availableCombos = getAllCombos(updatedPalette, contrastRatio)
    setAvailableCombos(availableCombos)
  },
  500
)

const Index = () => {
  const [palette, setPalette] = useState(sortPalette(defaultPalette))
  const [availableCombos, setAvailableCombos] = useState(() =>
    getAllCombos(defaultPalette, 4.5)
  )
  const [paletteModalIsOpen, togglePaletteModal] = useState(false)
  const [likes, updateLikes] = useState([])
  const [contrastRatio, setContrastRatio] = useState(4.5)
  const [colorFilter, setColorFilter] = useState("none")
  const [paletteImage, setPaletteImage] = useState(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [imageName, setImageName] = useState("")
  const [currentState, { set, undo, redo, canRedo, canUndo }] = useHistory({})
  const { present: currentCombination } = currentState
  const [pinnedColors, setPinnedColors] = useState(resetPinned)
  const [borderWidth, setBorderWidth] = useState(0)
  const [boxPadding, setBoxPadding] = useState(64)
  const [palxColor, setPalxColor] = useState("#07c")
  const [currentPickerColor, setPickerColor] = useState({
    color: null,
    index: null
  })
  const [currentComboProp, setCurrentComboProp] = useState(null)
  const [activeTab, setActiveTab] = useState("url")
  const [importValue, setImportValue] = useState(JSON.stringify(palette))
  const [importError, setImportError] = useState(false)
  const { start, stop, isRunning } = useInterval({
    duration: 3000,
    startImmediate: true,
    callback: () => {
      const newCombo = generateRandomPalette(
        palette,
        pinnedColors,
        currentCombination,
        availableCombos
      )
      set(newCombo)
    }
  })

  useEffect(() => {
    getIdb("likes").then(likes => {
      likes && updateLikes(likes)
    })

    const starterCombination = generateRandomPalette(
      palette,
      pinnedColors,
      currentCombination,
      availableCombos
    )

    set(starterCombination)
  }, [])

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

  const handleClearLikes = async () => {
    updateLikes([])
    await setIdb("likes", [])
  }

  const handleNext = () => {
    if (canRedo) {
      return redo()
    }
    isRunning && stop()
    const newCombo = generateRandomPalette(
      palette,
      pinnedColors,
      currentCombination,
      availableCombos
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
    isRunning && stop()
    set(likes[index])
  }

  const handleRemoveColor = color => {
    const alteredPalette = palette.filter(c => c !== color)
    setPalette(alteredPalette)
    setPickerColor({
      color: null,
      index: null
    })
  }

  const handleAddColor = () => {
    const newPalette = [...palette, "#000000"]
    setPalette(newPalette)
    setPickerColor({ color: "#000000", index: newPalette.length - 1 })
  }

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
    const availableCombos = getAllCombos(palette, contrastRatio)
    setAvailableCombos(availableCombos)
    const newCombo = generateRandomPalette(
      palette,
      resetPinned,
      null,
      availableCombos
    )
    set(newCombo)
  }

  const handleClearPalette = () => {
    const clearedPalette = ["#000000", "#FFFFFF", "#2c7cb0", "#757575"]
    setPalette(clearedPalette)
    const availableCombos = getAllCombos(clearedPalette, contrastRatio)
    setAvailableCombos(availableCombos)
    const newCombo = generateRandomPalette(
      clearedPalette,
      resetPinned,
      null,
      availableCombos
    )
    set(newCombo)
    setImageName(new Date())
    setPaletteImage("")
  }

  const handlePinColor = key => () => {
    setPinnedColors(prevState => ({ ...prevState, [key]: !prevState[key] }))
  }

  const handleImageUpload = async e => {
    setImageLoading(true)
    setPaletteImage({
      url: URL.createObjectURL(e.target.files[0]),
      name: null,
      username: null
    })

    const res = await fetch("https://image-palette.now.sh", {
      method: "POST",
      body: e.target.files[0]
    })
    const palette = await res.json()

    setImageLoading(false)

    setPalette(palette)
    setPinnedColors(resetPinned)
    const availableCombos = getAllCombos(palette, contrastRatio)
    setAvailableCombos(availableCombos)
    const newCombo = generateRandomPalette(
      palette,
      resetPinned,
      null,
      availableCombos
    )
    set(newCombo)
  }

  const handleBorderWidthChange = e => setBorderWidth(parseInt(e.target.value))
  const handleBoxPaddingChange = e => setBoxPadding(parseInt(e.target.value))

  const handleFetchFromUnsplash = async () => {
    setImageLoading(true)
    const res = await fetch("https://unsplash-palette.now.sh")
    const { colors, url, name, username } = await res.json()
    setImageLoading(false)
    setPalette(colors)
    setPinnedColors(resetPinned)
    const availableCombos = getAllCombos(colors, contrastRatio)
    setAvailableCombos(availableCombos)
    const newCombo = generateRandomPalette(
      palette,
      resetPinned,
      null,
      availableCombos
    )
    set(newCombo)
    setPaletteImage({ url, name, username })
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
    const availableCombos = getAllCombos(newPalette, contrastRatio)
    setAvailableCombos(availableCombos)
    const newCombo = generateRandomPalette(
      newPalette,
      resetPinned,
      null,
      availableCombos
    )
    set(newCombo)
  }

  const handlePaletteColorClick = (color, index) => {
    const comboColorProp = findKey(currentCombination, c => c === color)
    if (comboColorProp) {
      stop()
      setCurrentComboProp(comboColorProp)
    }
    setPickerColor({ color, index })
  }

  const handleSetEditColor = color => {
    isRunning && stop()

    setPickerColor({ color, index: currentPickerColor.index })

    const updatedPalette = [...palette]
    updatedPalette[currentPickerColor.index] = color
    setPalette(updatedPalette)

    if (currentComboProp) {
      set({ ...currentCombination, [currentComboProp]: color })
    }

    debouncedUpdateCombos(updatedPalette, contrastRatio, setAvailableCombos)
  }

  const handleContrastRatioChange = e => {
    const newContrastRatio = toNumber(e.target.value)
    setContrastRatio(newContrastRatio)
    const availableCombos = getAllCombos(palette, newContrastRatio)
    setAvailableCombos(availableCombos)
  }

  const handleActiveTab = value => () => setActiveTab(value)

  const handleColorClick = (color, key) => {
    isRunning && stop()
    setCurrentComboProp(key)
    const paletteIndex = palette.findIndex(p => p === color)
    setPickerColor({ color, index: paletteIndex })
  }

  const colorParentBgContrastValue = getContrastScore(
    currentCombination.color,
    currentCombination.parentBg
  )

  const controlColor =
    colorParentBgContrastValue < 4.5
      ? currentCombination.bg
      : currentCombination.color

  const handleColorBoxAdd = newPalette => {
    setPalette(prev => [...prev, ...newPalette])
  }

  const handleColorBoxReplace = newPalette => {
    setPalette(newPalette)
  }

  const handlePaletteImport = () => {
    try {
      const newPalette = JSON.parse(importValue)

      newPalette.map(c => {
        if (!isHex(c)) {
          throw Error("Invalid Hex code provided")
        }
      })
      setPalette(newPalette)
    } catch (error) {
      setImportError(true)
    }
  }

  return (
    <Div
      bg="white"
      display="flex"
      flexWrap="wrap"
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
      <Div width={[1]}>
        <Div pt={3} px={3} mb={3} textAlign="center">
          <TextButton
            onClick={handleActiveTab("url")}
            bg="transparent"
            mr={3}
            fontWeight={700}
            fontSize={2}
            color={activeTab === "url" ? "blue.4" : "inherit"}
          >
            URL
          </TextButton>
          <TextButton
            onClick={handleActiveTab("palx")}
            bg="transparent"
            mr={3}
            fontWeight={700}
            fontSize={2}
            color={activeTab === "palx" ? "blue.4" : "inherit"}
          >
            Palx
          </TextButton>

          <TextButton
            onClick={handleActiveTab("colorbox")}
            bg="transparent"
            mr={3}
            fontWeight={700}
            fontSize={2}
            color={activeTab === "colorbox" ? "blue.4" : "inherit"}
          >
            ColorBox
          </TextButton>
          <TextButton
            onClick={handleActiveTab("image")}
            bg="transparent"
            mr={3}
            fontWeight={700}
            fontSize={2}
            color={activeTab === "image" ? "blue.4" : "inherit"}
          >
            Image
          </TextButton>
          <TextButton
            onClick={handleActiveTab("text")}
            bg="transparent"
            mr={3}
            fontWeight={700}
            fontSize={2}
            color={activeTab === "text" ? "blue.4" : "inherit"}
          >
            Text
          </TextButton>
        </Div>
        <TextButton
          display={["none", "block"]}
          position="absolute"
          top={0}
          right={0}
          fontWeight={700}
          fontSize={2}
          p={3}
          onClick={() => togglePaletteModal(true)}
        >
          Export palette
        </TextButton>

        {activeTab === "url" && (
          <Div px={3} mx="auto" maxWidth="32rem">
            <SiteFetch onSubmit={handleSiteFetch} />
          </Div>
        )}

        {activeTab === "image" && (
          <>
            <Flex maxWidth="32rem" mx="auto" mt={3} mb={2} px={3}>
              <Div>
                <Input
                  id="imageUpload"
                  border="1px solid rgba(0,0,0,.1)"
                  py={3}
                  width={1}
                  pl={3}
                  key={imageName}
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageUpload}
                  css={{ display: "none" }}
                />
                <Label
                  display="block"
                  color="gray.0"
                  bg="gray.8"
                  fontSize={2}
                  borderRadius={2}
                  py={2}
                  px={3}
                  width="auto"
                  fontWeight={700}
                  textAlign="center"
                  css={{ whiteSpace: "nowrap", cursor: "pointer" }}
                  htmlFor="imageUpload"
                >
                  Upload image
                </Label>
              </Div>
              <Div>
                <P textAlign="center">or</P>
              </Div>
              <Div ml="auto">
                <Button
                  color="white"
                  bg="gray.3"
                  fontSize={2}
                  borderRadius={2}
                  py={2}
                  px={3}
                  ml="auto"
                  display="flex"
                  width={"auto"}
                  border="none"
                  fontWeight={700}
                  css={{
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}
                  onClick={handleFetchFromUnsplash}
                >
                  <Icon viewBox="0 0 123 123" size={16} type="unsplash" />
                  <Span pl={2}>Unsplash photo</Span>
                </Button>
              </Div>
            </Flex>

            {imageLoading && (
              <Flex width={1}>
                <LoadingBars />
                <P ml={2}>Fetching Palette</P>
              </Flex>
            )}

            {paletteImage && (
              <>
                <Flex px={3}>
                  <TextButton ml="auto" onClick={handleClearPalette}>
                    Clear Image
                  </TextButton>
                </Flex>

                <Div p={2} border="1px solid rgba(0,0,0,.1)">
                  <Img src={paletteImage.url} />
                  {paletteImage.name && (
                    <P color="gray.5" fontSize={0}>
                      Photo by{" "}
                      <TextLink
                        href={`https://unsplash.com/@${paletteImage.username}`}
                      >
                        {paletteImage.name}
                      </TextLink>{" "}
                      on{" "}
                      <TextLink href="https://unsplash.com/">Unsplash</TextLink>
                    </P>
                  )}
                </Div>
              </>
            )}
          </>
        )}

        <Div>
          <Div
            fontWeight={700}
            mt={3}
            mb={2}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
          >
            {activeTab === "palx" && (
              <Form
                maxWidth="32rem"
                mx="auto"
                mb={4}
                px={3}
                borderRadius={2}
                style={{ overflow: "hidden" }}
              >
                <Flex
                  overflow="hidden"
                  borderRadius={2}
                  css={{ overflow: "hidden" }}
                >
                  <TextInput
                    width={48}
                    fontSize={2}
                    py={3}
                    readOnly
                    border={0}
                    bg={palxColor}
                  />
                  <TextInput
                    type="text"
                    value={palxColor}
                    onChange={handlePalxColor}
                    fontSize={2}
                    fontWeight={700}
                    py={3}
                    px={3}
                    width={[3 / 4]}
                    type="url"
                    border="0"
                    bg="gray.8"
                    borderRadius={0}
                  />
                  <Button
                    py={3}
                    width={1 / 4}
                    bg="gray.3"
                    fontSize={2}
                    color="white"
                    fontWeight={700}
                    border="none"
                    style={{ cursor: "pointer", minWidth: 128 }}
                    onClick={handleUsePalx}
                  >
                    Generate
                  </Button>{" "}
                </Flex>
              </Form>
            )}

            {activeTab === "colorbox" && (
              <Colorbox
                onAddPalette={handleColorBoxAdd}
                onReplacePalette={handleColorBoxReplace}
              />
            )}

            {activeTab === "text" && (
              <Div px={3} mx="auto" maxWidth="32rem">
                {importError && (
                  <P color="marketing.red">
                    There is something wrong with the JSON provided
                  </P>
                )}
                <Textarea
                  border="1px solid"
                  borderColor="black"
                  width={1}
                  value={importValue}
                  css={`
                    resize: vertical;
                    min-height: 100px;
                  `}
                  onChange={e => setImportValue(e.target.value)}
                />
                <Button onClick={handlePaletteImport}>Import Palette</Button>
              </Div>
            )}

            <Div mt={3} px={[3, 5, 6]}>
              <Palette
                palette={palette}
                pickerColor={currentPickerColor}
                activeColors={Object.values(currentCombination)}
                onClick={handlePaletteColorClick}
                onAddColor={handleAddColor}
              />
              <Div textAlign="center" my={3}>
                <TextButton
                  fontSize={1}
                  bg="transparent"
                  onClick={handleClearPalette}
                >
                  Clear palette
                </TextButton>
              </Div>
              <Div maxWidth="48rem" mx="auto">
                <CombinationTools
                  currentCombination={currentCombination}
                  pinnedColors={pinnedColors}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onPinColor={handlePinColor}
                  onLike={handleLike}
                  onAutoCycling={handleAutoCycling}
                  isRunning={isRunning}
                  onColorClick={handleColorClick}
                />
              </Div>
              <Div display="none" dataName="stats">
                <Dl
                  color={controlColor}
                  display="flex"
                  maxWidth="24rem"
                  width={1}
                  mb={0}
                >
                  <Dt fontSize={2} width={3 / 4}>
                    Accessible Combinations
                  </Dt>
                  <Dd
                    fontSize={2}
                    width={1 / 4}
                    fontWeight={800}
                    ml={0}
                    textAlign="right"
                  >
                    {availableCombos.length}
                  </Dd>
                </Dl>
                <Dl
                  color={controlColor}
                  display="flex"
                  maxWidth="24rem"
                  width={1}
                  mb={0}
                  pb={3}
                >
                  <Dt fontSize={2} width={3 / 4}>
                    Combos with Parent Bg
                  </Dt>
                  <Dd
                    fontSize={2}
                    width={1 / 4}
                    fontWeight={800}
                    ml={0}
                    textAlign="right"
                  >
                    {(availableCombos.length * palette.length).toLocaleString()}
                  </Dd>
                </Dl>
              </Div>

              {paletteModalIsOpen && (
                <PaletteModal
                  togglePaletteModal={togglePaletteModal}
                  palette={palette}
                />
              )}
            </Div>
          </Div>

          {currentPickerColor.color && (
            <OutsideClickHandler
              onOutsideClick={() => {
                setPickerColor({
                  color: null,
                  index: null
                })
                setCurrentComboProp(null)
              }}
            >
              <ColorPicker
                currentColor={currentPickerColor.color}
                onChange={handleSetEditColor}
                onRemoveColor={handleRemoveColor}
              />
            </OutsideClickHandler>
          )}
        </Div>
      </Div>
      {!isEmpty(currentCombination) && (
        <Div width={[1]} bg={currentCombination.parentBg}>
          <Div
            borderTop="1px solid"
            borderColor={controlColor}
            style={{ opacity: 0.2 }}
          />
          <PlayerControls
            currentCombination={currentCombination}
            pinnedColors={pinnedColors}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onPinColor={handlePinColor}
            onLike={handleLike}
            onAutoCycling={handleAutoCycling}
            isRunning={isRunning}
            onColorClick={handleColorClick}
          />
          <Div maxWidth="48rem" mx="auto" pb={4}>
            <Preview
              borderWidth={borderWidth}
              boxPadding={boxPadding}
              currentCombination={currentCombination}
            />
          </Div>
          <Div bg="white" color="gray.0" pb={3}>
            <Div
              mb={4}
              borderTop="1px solid"
              borderColor={controlColor}
              style={{ opacity: 0.175 }}
            />
            <Div px={[3, 4]} maxWidth="48rem" mx="auto">
              <H4 fontSize={2}>Settings</H4>
              <Form pt={4}>
                <Fieldset border="0" p={0}>
                  <Legend fontWeight={700} fontSize={3}>
                    Contrast Ratio
                  </Legend>
                  <Flex mx={-3} py={2}>
                    <Flex px={3}>
                      <Input
                        type="radio"
                        name="contrastRatio"
                        value={3}
                        onChange={handleContrastRatioChange}
                        checked={contrastRatio === 3}
                        mr={2}
                      />
                      <Label style={{ whiteSpace: "nowrap" }}>
                        <Span fontWeight={800}>3 </Span>
                        <Span fontSize={3}>AA large</Span>
                      </Label>
                    </Flex>
                    <Flex px={3}>
                      <Input
                        type="radio"
                        name="contrastRatio"
                        value={4.5}
                        onChange={handleContrastRatioChange}
                        checked={contrastRatio === 4.5}
                        mr={2}
                      />
                      <Label style={{ whiteSpace: "nowrap" }}>
                        <Span fontWeight={800}>4.5 </Span>
                        <Span fontSize={3}>AA</Span>
                      </Label>
                    </Flex>
                    <Flex px={3}>
                      <Input
                        type="radio"
                        name="contrastRatio"
                        value={7}
                        onChange={handleContrastRatioChange}
                        checked={contrastRatio === 7}
                        mr={2}
                      />
                      <Label style={{ whiteSpace: "nowrap" }}>
                        <Span fontWeight={800}>7:1 </Span>
                        <Span fontSize={2}>AAA</Span>
                      </Label>
                    </Flex>
                  </Flex>
                </Fieldset>
              </Form>
              <Div>
                <ColorBlindFilter
                  onChange={handleColorBlindFilter}
                  currentValue={colorFilter}
                />
                <Div>
                  <Label fontWeight={700} fontSize={2} mr={2}>
                    Border width
                  </Label>
                  <Input
                    value={borderWidth}
                    onChange={handleBorderWidthChange}
                    type="number"
                    py={2}
                    px={2}
                    fontSize={2}
                    fontWeight={600}
                    borderRadius={2}
                    border={"1px solid " + theme.colors.gray[8]}
                    min={0}
                    max={32}
                    step={1}
                  />
                </Div>
                <Div mt={2}>
                  <Label fontWeight={700} fontSize={2} mr={2}>
                    Box Padding
                  </Label>
                  <Input
                    value={boxPadding}
                    onChange={handleBoxPaddingChange}
                    type="number"
                    py={2}
                    px={2}
                    fontSize={2}
                    fontWeight={600}
                    borderRadius={2}
                    border={"1px solid " + theme.colors.gray[8]}
                    min={0}
                    max={32}
                    step={1}
                  />
                </Div>
              </Div>
              <Div py={4} bg="white">
                <Likes
                  likes={likes}
                  onSelectLike={handleViewLike}
                  onRemoveLike={handleRemoveLike}
                  onClearLikes={handleClearLikes}
                />
              </Div>
            </Div>
          </Div>
          <Div
            bg="white"
            display="flex"
            py={3}
            px={3}
            borderTop="1px solid rgba(0,0,0,.1)"
          >
            <A
              display="block"
              href="https://cloudflare.design"
              fontWeight={700}
              fontSize={2}
            >
              Cloudflare Design
            </A>

            <A
              href="/combinations"
              pageData={{ combinations: availableCombos }}
            >
              Test Data link
            </A>
            <A
              href="https://github.com/cloudflare-design"
              ml="auto"
              fontSize={2}
              color="blue.4"
              display="block"
              fontWeight={700}
            >
              GitHub
            </A>
          </Div>
        </Div>
      )}
    </Div>
  )
}

export default Index

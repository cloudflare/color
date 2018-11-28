import React, { useState, useEffect } from "react"
import chroma from "chroma-js"
import { set, get } from "idb-keyval"
import extractSkins from "../utils/extract-skins"

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Bar,
  BarChart,
  Area,
  AreaChart,
  LineChart,
  Line
} from "recharts"
import linedata from "../data/linechart"
import bardata from "../data/barchart"

import radialdata from "../data/radialchart"
import radial2 from "../data/radial2"
import radial3 from "../data/radial3"
import radial4 from "../data/radial4"
import radial5 from "../data/radial5"

import ButtonPrimary from '../components/ButtonPrimary'

const defaultPalette = [
  "#000000",
  "#1d1f20",
  "#36393a",
  "#4e5255",
  "#62676a",
  "#72777b",
  "#92979b",
  "#b7bbbd",
  "#d5d7d8",
  "#eaebeb",
  "#f7f7f8",
  "#ffffff",
  "#430c15",
  "#711423",
  "#a01c32",
  "#bf223c",
  "#da304c",
  "#e35f75",
  "#ec93a2",
  "#f3bac3",
  "#f9dce1",
  "#fcf0f2",
  "#341a04",
  "#5b2c06",
  "#813f09",
  "#a24f0b",
  "#b6590d",
  "#e06d10",
  "#f4a15d",
  "#f8c296",
  "#fbdbc1",
  "#fdf1e7",
  "#0f2417",
  "#1c422b",
  "#285d3d",
  "#31724b",
  "#398557",
  "#46a46c",
  "#79c698",
  "#b0ddc2",
  "#d8eee1",
  "#eff8f3",
  "#0c2427",
  "#164249",
  "#1d5962",
  "#26727e",
  "#2b818e",
  "#35a0b1",
  "#66c3d1",
  "#a5dce4",
  "#d0edf1",
  "#e9f7f9",
  "#0c2231",
  "#163d57",
  "#1f567a",
  "#276d9b",
  "#2c7cb0",
  "#479ad1",
  "#7cb7de",
  "#add2eb",
  "#d6e9f5",
  "#ebf4fa",
  "#181e34",
  "#2c365e",
  "#404e88",
  "#5062aa",
  "#6373b6",
  "#8794c7",
  "#a5aed5",
  "#c8cde5",
  "#e0e3f0",
  "#f1f3f8",
  "#2d1832",
  "#502b5a",
  "#753f83",
  "#8e4c9e",
  "#9f5bb0",
  "#b683c3",
  "#c9a2d2",
  "#dbc1e1",
  "#ebddee",
  "#f7f1f8"
]

const getRandomColor = palette => {
  return palette[Math.round(Math.random() * (palette.length - 1))]
}

const generateRandomPalette = palette => {
  const getColors = palette => {
    const randomColor = getRandomColor(palette)
    let randomBg = getRandomColor(palette)

    while (chroma.contrast(randomColor, randomBg) < 4.5) {
      randomBg = getRandomColor(palette)
    }
    return [randomColor, randomBg]
  }

  const [randomBg, randomColor] = getColors(palette)
  const randomParentBg = getRandomColor(palette)
  const randomBorderColor = getRandomColor(palette)

  return {
    parentBg: randomParentBg,
    bg: randomBg,
    color: randomColor,
    borderColor: randomBorderColor
  }
}

const Index = () => {
  const [url, setUrl] = useState("https://cloudflare.com")
  const [palette, setPalette] = useState(defaultPalette)
  const [currentCombination, updateCombination] = useState([])
  const [history, updateHistory] = useState([])
  const [likes, updateLikes] = useState([])

  useEffect(() => {
    updateCombination(generateRandomPalette(palette))
  }, [])

  const handleLike = () => {
    updateLikes([currentCombination, ...likes])
    updateHistory([currentCombination, ...history.slice(0, 9)])
    updateCombination(generateRandomPalette(palette))
  }

  const handleNext = () => {
    updateHistory([currentCombination, ...history.slice(0, 9)])
    updateCombination(generateRandomPalette(palette))
  }

  const handlePrevious = () => {}

  const handleSetLike = index => () => {
    updateCombination(likes[index])
  }

  const handleChange = e => {
    setUrl(e.target.value)
  }

  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(likes)
  )}`

  const handleSubmit = async e => {
    e.preventDefault()
    const fullUrl = `https://api.cssstats.com/stats/?url=${url}`

    const res = await fetch(fullUrl)

    if (res.ok) {
      const cssdata = await res.json()
      const cssPalette = extractSkins(cssdata).colors
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
  return (
    <Div
      bg={currentCombination.parentBg}
      textAlign="center"
      pt={[0, 3]}
      position="relative"
      style={{ overflow: "hidden" }}
    >
      <Form
        onSubmit={handleSubmit}
        display="flex"
        width={1}
        mx="auto"
        maxWidth="64rem"
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
        >
          Go
        </Button>
      </Form>
      <Flex mx='auto' justifyContent='center' mt={3}>
        <ButtonPrimary mx={1} alignItems='center' onClick={handlePrevious} button='left' children='Previous' />
        <ButtonPrimary mx={1} alignItems='center' onClick={handleLike} button='plus' children='Add to collection' />
        <ButtonPrimary mx={1} alignItems='center' onClick={handleNext} button='right' align='right' children='Next' />
      </Flex>
      <Div maxWidth="48em" mx="auto" py={5}>
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
        <Div
          mt={5}
          py={[4, 5]}
          px={[3, 4, 5]}
          bg={currentCombination.bg}
          display="grid"
          style={{ gridTemplateColumns: "repeat(12, 1fr)", rowGap: "2em" }}
        >
          <Icon color={currentCombination.color} type="remove" />
          <Icon color={currentCombination.color} type="caretDown" />
          <Icon color={currentCombination.color} type="caretRight" />
          <Icon color={currentCombination.color} type="caretLeft" />
          <Icon color={currentCombination.color} type="caretUp" />
          <Icon color={currentCombination.color} type="pop" />
          <Icon color={currentCombination.color} type="cost" />
          <Icon color={currentCombination.color} type="creditCard" />
          <Icon color={currentCombination.color} type="upload" />
          <Icon color={currentCombination.color} type="exclamationOutline" />
          <Icon color={currentCombination.color} type="exclamation" />
          <Icon color={currentCombination.color} type="collapse" />
          <Icon color={currentCombination.color} type="expand" />
          <Icon color={currentCombination.color} type="file" />
          <Icon color={currentCombination.color} type="forward" />
          <Icon color={currentCombination.color} type="left" />
          <Icon color={currentCombination.color} type="right" />
          <Icon color={currentCombination.color} type="down" />
          <Icon color={currentCombination.color} type="gear" />
          <Icon color={currentCombination.color} type="generalInfo" />
          <Icon color={currentCombination.color} type="hamburger" />
          <Icon color={currentCombination.color} type="info" />
          <Icon color={currentCombination.color} type="help" />
          <Icon color={currentCombination.color} type="list" />
          <Icon color={currentCombination.color} type="mail" />
          <Icon color={currentCombination.color} type="refresh" />
          <Icon color={currentCombination.color} type="reorder" />
          <Icon color={currentCombination.color} type="resizeHorizontal" />
          <Icon color={currentCombination.color} type="minus" />
          <Icon color={currentCombination.color} type="plus" />
          <Icon color={currentCombination.color} type="okSign" />
          <Icon color={currentCombination.color} type="activation" />
          <Icon color={currentCombination.color} type="validator" />
          <Icon color={currentCombination.color} type="safeOutline" />
          <Icon color={currentCombination.color} type="safe" />
          <Icon color={currentCombination.color} type="warningOutline" />
          <Icon color={currentCombination.color} type="warning" />
          <Icon color={currentCombination.color} type="stopOutline" />
          <Icon color={currentCombination.color} type="stop" />
          <Icon color={currentCombination.color} type="lock" />
          <Icon color={currentCombination.color} type="time" />
          <Icon color={currentCombination.color} type="quotes" />
          <Icon color={currentCombination.color} type="signup" />
          <Icon color={currentCombination.color} type="facebook" />
          <Icon color={currentCombination.color} type="google" />
          <Icon color={currentCombination.color} type="linkedin" />
          <Icon color={currentCombination.color} type="download" />
          <Icon color={currentCombination.color} type="wrench" />
        </Div>
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
          <SingleComponent
            py={2}
            px={4}
            mr={3}
            mb={3}
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
          <Div>
            <SingleComponent
              py={2}
              px={4}
              mr={3}
              mb={3}
              border="1px solid"
              borderRadius={1}
              color={currentCombination.bg}
              bg="transparent"
              borderColor={currentCombination.bg}
              children="Secondary Click"
            />
            <BadgeOutline
              borderColor={currentCombination.bg}
              color={currentCombination.bg}
            />
          </Div>
          <Flex
            bg={currentCombination.bg}
            mx={-4}
            mt={4}
            flexWrap="wrap"
            py={5}
          >
            <Div px={5} width={[1]}>
              <Div style={{ overflow: "hidden" }}>
                <LineChart width={700} height={120} data={linedata}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke={currentCombination.color}
                    strokeWidth={2}
                  />
                </LineChart>
              </Div>
            </Div>
            <Div pl={5} pr={3} width={[1, 1 / 2]}>
              <Div style={{ overflow: "hidden" }}>
                <AreaChart
                  width={360}
                  height={120}
                  data={linedata}
                  margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                >
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke={currentCombination.color}
                    strokeWidth={2}
                    fill={currentCombination.color}
                  />
                </AreaChart>
              </Div>
            </Div>
            <Div pl={3} pr={5} width={[1, 1 / 2]}>
              <Div style={{ overflow: "hidden" }}>
                <BarChart width={320} height={120} data={bardata}>
                  <Bar
                    dataKey="amt"
                    fillOpacity={0.75}
                    fill={currentCombination.color}
                  />
                </BarChart>
              </Div>
            </Div>
            <Flex width={1} px={5} flexWrap="wrap" mt={4}>
              <Div width={1 / 5}>
                <RadarChart
                  cx={64}
                  cy={64}
                  outerRadius={48}
                  width={128}
                  height={128}
                  data={radialdata}
                >
                  <PolarGrid
                    stroke={currentCombination.color}
                    strokeOpacity={0.5}
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    stroke={currentCombination.color}
                  />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke={currentCombination.color}
                    fill={currentCombination.color}
                    strokeOpacity={0.5}
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </Div>
              <Div width={1 / 5}>
                <RadarChart
                  cx={64}
                  cy={64}
                  outerRadius={48}
                  width={128}
                  height={128}
                  data={radial5}
                >
                  <PolarGrid
                    stroke={currentCombination.color}
                    strokeOpacity={0.5}
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    stroke={currentCombination.color}
                  />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke={currentCombination.color}
                    fill={currentCombination.color}
                    strokeOpacity={0.5}
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </Div>
              <Div width={1 / 5}>
                <RadarChart
                  cx={64}
                  cy={64}
                  outerRadius={48}
                  width={128}
                  height={128}
                  data={radial2}
                >
                  <PolarGrid
                    stroke={currentCombination.color}
                    strokeOpacity={0.5}
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    stroke={currentCombination.color}
                  />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke={currentCombination.color}
                    fill={currentCombination.color}
                    strokeOpacity={0.5}
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </Div>
              <Div width={1 / 5}>
                <RadarChart
                  cx={64}
                  cy={64}
                  outerRadius={48}
                  width={128}
                  height={128}
                  data={radial3}
                >
                  <PolarGrid
                    stroke={currentCombination.color}
                    strokeOpacity={0.5}
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    stroke={currentCombination.color}
                  />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke={currentCombination.color}
                    fill={currentCombination.color}
                    strokeOpacity={0.5}
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </Div>
              <Div width={1 / 5}>
                <RadarChart
                  cx={64}
                  cy={64}
                  outerRadius={48}
                  width={128}
                  height={128}
                  data={radial4}
                >
                  <PolarGrid
                    stroke={currentCombination.color}
                    strokeOpacity={0.5}
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    stroke={currentCombination.color}
                  />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke={currentCombination.color}
                    fill={currentCombination.color}
                    strokeOpacity={0.5}
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </Div>
            </Flex>
          </Flex>
        </Div>
      </Div>
      <Div width={1}>
        <H4 mt={5}>Palette</H4>
        <Flex>
          {palette.map(color => (
            <Div key={color} py={3} bg={color} />
          ))}
        </Flex>
      </Div>

      <Div width={1}>
        <H4 mt={5}>Likes</H4>
        <Div>
          {likes.map((like, i) => {
            const colors = Object.values(like)
            return (
              <Flex onClick={handleSetLike(i)} width={1 / 4}>
                {colors.map(color => (
                  <Div key={color} py={3} bg={color} />
                ))}
              </Flex>
            )
          })}
        </Div>
      </Div>

      <A download="likes.json" href={dataStr}>
        Export Likes as JSON
      </A>
    </Div>
  )
}

export default Index

import React from "react"
import chroma from "chroma-js"
import randomHex from "random-hex-color"
import extractSkins from "../utils/extract-skins"
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Bar, BarChart, Area, AreaChart, LineChart, Line} from "recharts" 
import linedata from "../data/linechart"
import bardata from "../data/barchart"

import radialdata from "../data/radialchart"
import radial2 from "../data/radial2"
import radial3 from "../data/radial3"
import radial4 from "../data/radial4"
import radial5 from "../data/radial5"

import BadgeOutline from "../components/BadgeOutline"


const palette = [
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
      "#f7f1f8",
]

export default class Index extends React.Component {
  state = {
    url: "https://cloudflare.com",
    palette: palette
  }
  componentDidMount() {
    setInterval(() => this.setState({}), 2000)
  }

  componentDidUpdate() {}

  handleChange = e => {
    this.setState({ url: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { url } = this.state
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

      this.setState({ ...this.state, palette: newPalette })
    }
  }

  render() {
    const getColors = () => {
      const randomColor = this.state.palette
        ? this.state.palette[randomPaletteColor]
        : randomHex()
      let randomBg = this.state.palette
        ? this.state.palette[randomPaletteColor1]
        : randomHex()
      while (chroma.contrast(randomColor, randomBg) < 4.5) {
        randomBg = this.state.palette[
          Math.round(Math.random() * (this.state.palette.length - 1))
        ]
      }
      return [randomColor, randomBg]
    }

    const randomPaletteColor = Math.round(
      Math.random() * (this.state.palette.length - 1)
    )
    const randomPaletteColor1 = Math.round(
      Math.random() * (this.state.palette.length - 1)
    )
    const randomPaletteColor2 = Math.round(
      Math.random() * (this.state.palette.length - 1)
    )
    const randomPaletteColor3 = Math.round(
      Math.random() * (this.state.palette.length - 1)
    )
    const randomPaletteColor4 = Math.round(
      Math.random() * (this.state.palette.length - 1)
    )
    const randomPaletteColor5 = Math.round(
      Math.random() * (this.state.palette.length - 1)
    )

    const randomBool = Math.random() <= 0.5
    const randomBool2 = Math.random() <= 0.5

    let randomParentBg = randomHex()

    const [randomBg, randomColor] = getColors()

    const randomBorderColor = this.state.palette
      ? this.state.palette[randomPaletteColor2]
      : randomHex()

    let randomTextShadow = randomBool ? randomHex() : "transparent"
    let randomBoxShadow = randomBool2 ? randomHex() : "transparent"

    if (this.state.palette) {
      randomParentBg = this.state.palette[randomPaletteColor5]
      randomTextShadow = randomBool
        ? this.state.palette[randomPaletteColor3]
        : "transparent"
      randomBoxShadow = randomBool
        ? this.state.palette[randomPaletteColor4]
        : "transparent"
    }

    const data = {
      parentBg: randomParentBg,
      bg: randomBg,
      color: randomColor,
      borderColor: randomBorderColor,
      textShadowColor: randomTextShadow,
      boxShadowColor: randomBoxShadow
    }

    return (
      <Div bg={data.parentBg} textAlign="center" pt={[0,3]} position='relative' style={{overflow: 'hidden'}}>
          <Form onSubmit={this.handleSubmit} display='flex' width={1} mx='auto' maxWidth='64rem' borderRadius={[0,2]} style={{overflow: 'hidden'}}>
          <Input
            fontSize={2}
            fontWeight={700}
            py={3}
            px={3}
            width={[3/4, 7/8]}
            type="url"
            border='none'
            bg='#eeeeee'
            borderRadius={0}
            value={this.state.url}
            onChange={this.handleChange}
          />
          <Button width={[1/4, 1/8]} py={3} fontSize={2} bg='black' color='white' fontWeight={700} border='none'>Go</Button>
        </Form>
        <Div maxWidth="48em" mx="auto" py={5}>
          <Text py={[4,5]} px={[3,4,5]} color={data.color} bg={data.bg} textAlign="left">
            <Span fontWeight={800} fontSize={[5,6]}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Span>
            <Span fontWeight={600} fontSize={5} display='block' lineHeight={1.5}>abcdefghijklmnopqrstuvwxyz 1234567890!@#$%^&*()</Span>
            <Span lineHeight={1.5} display='block' mt={3}>
              Every perception of colour is an illusion.. ..we do not see colours as they really are. In our perception they alter one another. In order to use color effectively it is necessary to recognize that color deceives continually. In visual perception a color is almost never seen as it really is — as it physically is. This fact makes color the most relative medium in art.
            </Span>
          </Text>
          <Div
            mt={5}
            py={[4,5]}
            px={[3,4,5]}
            bg={data.bg}
            display="grid"
            style={{ gridTemplateColumns: "repeat(12, 1fr)", rowGap: "2em" }}
          >
            <Icon color={data.color} type="remove" />
            <Icon color={data.color} type="caretDown" />
            <Icon color={data.color} type="caretRight" />
            <Icon color={data.color} type="caretLeft" />
            <Icon color={data.color} type="caretUp" />
            <Icon color={data.color} type="pop" />
            <Icon color={data.color} type="cost" />
            <Icon color={data.color} type="creditCard" />
            <Icon color={data.color} type="upload" />
            <Icon color={data.color} type="exclamationOutline" />
            <Icon color={data.color} type="exclamation" />
            <Icon color={data.color} type="collapse" />
            <Icon color={data.color} type="expand" />
            <Icon color={data.color} type="file" />
            <Icon color={data.color} type="forward" />
            <Icon color={data.color} type="left" />
            <Icon color={data.color} type="right" />
            <Icon color={data.color} type="down" />
            <Icon color={data.color} type="gear" />
            <Icon color={data.color} type="generalInfo" />
            <Icon color={data.color} type="hamburger" />
            <Icon color={data.color} type="info" />
            <Icon color={data.color} type="help" />
            <Icon color={data.color} type="list" />
            <Icon color={data.color} type="mail" />
            <Icon color={data.color} type="refresh" />
            <Icon color={data.color} type="reorder" />
            <Icon color={data.color} type="resizeHorizontal" />
            <Icon color={data.color} type="minus" />
            <Icon color={data.color} type="plus" />
            <Icon color={data.color} type="okSign" />
            <Icon color={data.color} type="activation" />
            <Icon color={data.color} type="validator" />
            <Icon color={data.color} type="safeOutline" />
            <Icon color={data.color} type="safe" />
            <Icon color={data.color} type="warningOutline" />
            <Icon color={data.color} type="warning" />
            <Icon color={data.color} type="stopOutline" />
            <Icon color={data.color} type="stop" />
            <Icon color={data.color} type="lock" />
            <Icon color={data.color} type="time" />
            <Icon color={data.color} type="quotes" />
            <Icon color={data.color} type="signup" />
            <Icon color={data.color} type="facebook" />
            <Icon color={data.color} type="google" />
            <Icon color={data.color} type="linkedin" />
            <Icon color={data.color} type="download" />
            <Icon color={data.color} type="wrench" />
          </Div>
          <Flex mt={2} px={[3,4]} display='none'>
            <TextInput
              py={3}
              px={4}
              mr={1}
              border="1px solid"
              borderRadius={1}
              color={data.bg}
              bg={data.color}
              borderColor={data.borderColor}
              defaultValue="email@example.com"
            />
            <SingleComponent
              py={3}
              px={4}
              border="1px solid"
              borderRadius={1}
              color={data.color}
              bg={data.bg}
              borderColor={data.borderColor}
              children="Click Here"
            />
          </Flex>
          <Div mt={4} textAlign="left" px={[3,4]}>
            <SingleComponent
              py={2}
              px={4}
              mr={3}
              mb={3}
              borderRadius={1}
              color={data.color}
              bg={data.bg}
              children="Primary Click"
            />
            <Badge bg={data.bg} color={data.color} mr={3} />
            <Div>
            <SingleComponent
              py={2}
              px={4}
              mr={3}
              mb={3}
              border="1px solid"
              borderRadius={1}
              color={data.bg}
              bg="transparent"
              borderColor={data.bg}
              children="Secondary Click"
            />
            <BadgeOutline borderColor={data.bg} color={data.bg} />
            </Div>
            <Flex bg={data.bg} mx={-4} mt={4} flexWrap='wrap' py={5}>
              <Div px={5} width={[1]}>
                <Div style={{overflow: 'hidden'}}>
                  <LineChart width={700} height={120} data={linedata}>
                    <Line type='monotone' dataKey='pv' stroke={data.color} strokeWidth={2} />
                  </LineChart>
                </Div>
              </Div>
              <Div pl={5} pr={3} width={[1,1/2]}>
                <Div style={{overflow: 'hidden'}}>
              <AreaChart width={360} height={120} data={linedata}
                        margin={{top: 5, right: 0, left: 0, bottom: 5}}>
                    <Area type='monotone' dataKey='uv' stroke={data.color} strokeWidth={2} fill={data.color} />
                  </AreaChart>
                </Div>
                </Div>
                <Div pl={3} pr={5} width={[1,1/2]}>
                  <Div style={{overflow: 'hidden'}}>
                    <BarChart width={320} height={120} data={bardata}>
                     <Bar dataKey='amt' fillOpacity={.75} fill={data.color} />
                   </BarChart>
                 </Div>
                </Div>
                <Flex width={1} px={5} flexWrap='wrap' mt={4}>
                    <Div width={1/5}>

	<RadarChart cx={64} cy={64} outerRadius={48} width={128} height={128} data={radialdata}>
          <PolarGrid stroke={data.color} strokeOpacity={.5} strokeWidth={1} />
          <PolarAngleAxis dataKey="subject" stroke={data.color} />
          <Radar name="Mike" dataKey="A" stroke={data.color} fill={data.color} strokeOpacity={.5} fillOpacity={.5}/>
        </RadarChart>
                  </Div>
                  <Div width={1/5}>

	<RadarChart cx={64} cy={64} outerRadius={48} width={128} height={128} data={radial5}>
          <PolarGrid stroke={data.color} strokeOpacity={.5} strokeWidth={1} />
          <PolarAngleAxis dataKey="subject" stroke={data.color} />
          <Radar name="Mike" dataKey="A" stroke={data.color} fill={data.color} strokeOpacity={.5} fillOpacity={.5}/>
        </RadarChart>
                  </Div>
                  <Div width={1/5}>

	<RadarChart cx={64} cy={64} outerRadius={48} width={128} height={128} data={radial2}>
          <PolarGrid stroke={data.color} strokeOpacity={.5} strokeWidth={1} />
          <PolarAngleAxis dataKey="subject" stroke={data.color} />
          <Radar name="Mike" dataKey="A" stroke={data.color} fill={data.color} strokeOpacity={.5} fillOpacity={.5}/>
        </RadarChart>
                  </Div>
                  <Div width={1/5}>

	<RadarChart cx={64} cy={64} outerRadius={48} width={128} height={128} data={radial3}>
          <PolarGrid stroke={data.color} strokeOpacity={.5} strokeWidth={1} />
          <PolarAngleAxis dataKey="subject" stroke={data.color} />
          <Radar name="Mike" dataKey="A" stroke={data.color} fill={data.color} strokeOpacity={.5} fillOpacity={.5}/>
        </RadarChart>
                  </Div>
                  <Div width={1/5}>

	<RadarChart cx={64} cy={64} outerRadius={48} width={128} height={128} data={radial4}>
          <PolarGrid stroke={data.color} strokeOpacity={.5} strokeWidth={1} />
          <PolarAngleAxis dataKey="subject" stroke={data.color} />
          <Radar name="Mike" dataKey="A" stroke={data.color} fill={data.color} strokeOpacity={.5} fillOpacity={.5}/>
        </RadarChart>
                  </Div>
        </Flex>
            </Flex>
          </Div>

        </Div>
          <Div width={1}>
            <H4 mt={5}>Palette</H4>
            <Flex>
              {this.state.palette.map((color, i) => (
                <Div key={color} py={3} bg={color}>

                </Div>
              ))}
            </Flex>
          </Div>
      </Div>
    )
  }
}

import React from "react"
import chroma from "chroma-js"
import randomHex from "random-hex-color"
import extractSkins from "../utils/extract-skins"

const palette = [
  "#000000",
  "#333333",
  "#ffffff",
  "#666666",
  "#444444",
  "#eeeeee",
  //'#404041',
  //'#4D4D4F',
  //'#7D7D7D',
  //'#808285',
  //'#a3a3a3',
  //'#cccccc',
  //'#bcbec0',
  //'#dedede',
  //'#e0e0e0',
  //'#ebebeb',
  //'#f7f7f7',
  //'#f9f9f9',
  //'#ffffff',
  //'#9f1f21',
  //'#BD2527',
  //'#f16975',
  //'#de9293',
  //'#f8e9e9',
  //'#e66b00',
  //'#f56500',
  //'#FF7900',
  //'#f48120',
  //'#f69259',
  //'#faad3f',
  //'#ffdb6f',
  //'#8176b5',
  //'#ba77b1',
  //'#1e4e79',
  //'#215686',
  //'#26669d',
  //'#286ea4',
  //'#2869a2',
  //'#2F7BBF',
  //'#408bc9',
  //'#62a1d8',
  //'#76c4e2',
  //'#76c2e2',
  //'#97bddf',
  //'#cbdeef',
  //'#eaf2f8',
  //'#85cba8',
  //'#5d7b22',
  //'#729729',
  //'#85b832',
  //'#87b331',
  //'#9BCA3E',
  //'#cde49e',
  //'#f5faeb',
  //'#9545e5',
  "#d91698"
]

export default class Index extends React.Component {
  state = {
    url: "https://cloudflare.com",
    palette: palette
  }
  componentDidMount() {
    setInterval(() => this.setState({}), 1000)
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

      console.log(url)
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
      <Div bg={data.parentBg} py={8} textAlign="center">
        <Form onSubmit={this.handleSubmit}>
          <Input
            fontSize={1}
            py={2}
            px={3}
            type="url"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <Button>Import Palette</Button>
        </Form>
        <Div maxWidth="40em" mx="auto">
          <Text py={4} px={5} color={data.color} bg={data.bg} textAlign="left">
            <Span fontWeight={700} fontSize={4}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Span>
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            1234567890!@#$%^&*()
            <br />
          </Text>
          <Flex mt={2}>
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
          <Div mt={4} textAlign="left">
            <SingleComponent
              py={2}
              px={4}
              mr={3}
              border="1px solid"
              borderRadius={1}
              color={data.color}
              bg="transparent"
              borderColor={data.color}
              children="Secondary Click"
            />
            <SingleComponent
              py={2}
              px={4}
              mr={3}
              borderRadius={1}
              color={data.color}
              bg={data.bg}
              children="Primary Click"
            />
            <Badge bg={data.bg} color={data.color} />
          </Div>
          <Div
            mt={5}
            p={4}
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
        </Div>
      </Div>
    )
  }
}

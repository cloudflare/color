import App, { Container } from "next/app"
import React from "react"
import { ThemeProvider } from "emotion-theming"
import { hydrate } from "react-emotion"

import XRay from "react-x-ray"

import theme from "../theme"

export const {
  Provider: DebugProvider,
  Consumer: DebugConsumer
} = React.createContext(false)

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids)
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    filter: "achromatopsia",
    filterActive: false,
    xRay: false,
    debug: false,
    dataDrawer: false
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress)
  }

  handleKeyPress = ({ key }) => {
    switch (key) {
      case "u":
        this.setState({
          filterActive: !this.state.filterActive
        })
        break
      case "x":
        this.setState({
          xRay: !this.state.xRay
        })
        break
      case ";":
        this.setState({
          debug: !this.state.debug
        })
        break
      case "d":
        this.setState({
          dataDrawer: !this.state.dataDrawer
        })
        break
    }
  }

  handleFilterChange = e => {
    this.setState({ filter: e.target.value })
  }

  render() {
    const { Component, pageProps } = this.props
    const {
      authenticated,
      xRay,
      filterActive,
      debug,
      filter,
      dataDrawer
    } = this.state

    const XRayWrapper = xRay ? XRay : "div"

    return (
      <Container>
        <DebugProvider value={debug}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              {/* <DataDrawer
                  visible={dataDrawer}
                  filter={filter}
                  handleFilterChange={this.handleFilterChange}
                  filterActive={filterActive}
                /> */}

              <XRayWrapper>
                <div
                  style={{
                    filter: filterActive
                      ? `url(/static/filters.svg#${filter})`
                      : "none"
                  }}
                >
                  <Component {...pageProps} />
                </div>
              </XRayWrapper>
            </React.Fragment>
          </ThemeProvider>
        </DebugProvider>
      </Container>
    )
  }
}

class PasswordForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.passwordInput.value)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Div w={1} mx="auto" maxWidth="20em" p={5} textAlign="center">
          <Label fontSize={2} for="password">
            Password
            <Input
              my={3}
              p={2}
              id="password"
              type="password"
              innerRef={ref => (this.passwordInput = ref)}
            />
          </Label>
          <Input
            type="submit"
            value="Log in"
            radii={1}
            bg="blue.4"
            fontSize={2}
            color="white"
            px={3}
            py={2}
            border="none"
          />
        </Div>
      </Form>
    )
  }
}

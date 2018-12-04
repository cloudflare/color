import App, { Container } from "next/app"
import React from "react"
import { hydrate, injectGlobal } from "react-emotion"
import { ThemeProvider } from "emotion-theming"

import theme from "../theme"

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  body {
    margin: 0;
    font-family: ${theme.font.sansSerif};
    background-color: ${theme.colors.gray[9]};
  }

  * {
    transition:
      color .25s ease-in, background-color .25s ease-in, stroke .25s ease-in;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

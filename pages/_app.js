import App, { Container } from "next/app"
import React from "react"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { hydrate } from "emotion"

import theme from "../theme"

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids)
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Global
            styles={{
              body: {
                margin: 0,
                fontFamily: theme.font.sansSerif,
                backgroundColor: theme.colors.gray[9]
              },
              "*": {
                transition:
                  "color .25s ease-in, background-color .25s ease-in, stroke .25s ease-in"
              }
            }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

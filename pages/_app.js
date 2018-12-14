import App, { Container } from "next/app"
import Head from "next/head"
import React from "react"
import { hydrate, injectGlobal } from "react-emotion"
import { ThemeProvider } from "emotion-theming"
import { initGA, logPageView } from "../utils/analytics"

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
`

export default class MyApp extends App {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Colors - Cloudflare.design</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

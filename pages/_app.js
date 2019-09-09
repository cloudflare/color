import App from "next/app"
import Head from "next/head"
import React from "react"
import { Global, css } from "@emotion/core"
import createStore from "unistore"
import { Provider } from "unistore/react"
import { ThemeProvider } from "emotion-theming"
import { initGA, logPageView } from "../utils/analytics"
import { get, set } from "idb-keyval"

import theme from "../theme"

const defaultState = {
  pageData: {}
}

const getState = async (store, defaultState) => {
  if (typeof window !== "undefined") {
    const state = await get("state")
    return store.setState({ ...state })
  }
  return defaultState
}

const store = createStore(defaultState)

if (typeof window !== "undefined") {
  initGA()
  store.subscribe(async state => await set("state", state))
  getState(store, defaultState)
}

export default class MyApp extends App {
  componentDidMount() {
    logPageView()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Color - Cloudflare Design</title>
          <meta
            name="description"
            content="A color palette tool for interface design"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:image"
            content="https://cloudflare-assets.s3.amazonaws.com/palette-card.jpg"
          />
          <meta property="og:url" content="https://cloudflare.design/color" />
          <meta name="twitter:site" content="@cloudflare" />
          <meta property="og:title" content="Color by Cloudflare Design" />
          <meta
            property="og:description"
            content="A color palette tool for interface design"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <>
            <Global
              styles={css`
                body {
                  margin: 0;
                  font-family: ${theme.font.sansSerif};
                  background-color: ${theme.colors.white};
                }
              `}
            />

            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </>
        </ThemeProvider>
      </>
    )
  }
}

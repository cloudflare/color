import App, { Container } from "next/app"
import Head from "next/head"
import React from "react"
import { hydrate, injectGlobal } from "react-emotion"
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
  hydrate(window.__NEXT_DATA__.ids)
  initGA()
  store.subscribe(async state => await set("state", state))
  getState(store, defaultState)
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
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    )
  }
}

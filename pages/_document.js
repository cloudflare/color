import Document, { Head, Main, NextScript } from "next/document"
import { extractCritical } from "emotion-server"
import theme from "../theme"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <style>{`body { margin: 0 } * { transition: color .25s ease-in, background-color .25s ease-in, stroke .25s ease-in; /* custom! */`}</style>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body
          style={{
            fontFamily: theme.font.sansSerif,
            backgroundColor: theme.colors.gray[9]
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

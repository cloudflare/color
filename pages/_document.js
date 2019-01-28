import Document, { Head, Main, NextScript } from "next/document"
import { extractCritical } from "emotion-server"

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
      <html lang="en-US">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta property="og:image" content="https://cloudflare-assets.s3.amazonaws.com/color-card.jpg" />
          <meta property="og:url" content="https://cloudflare.design/color" />
          <meta property="og:title" content="Color" />
          <meta property="og:description" content="A tool for creating, using, and documenting color palettes." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

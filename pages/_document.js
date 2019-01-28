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
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content="https://cloudflare-assets.s3.amazonaws.com/palette-card.jpg" />
          <meta property="og:url" content="https://cloudflare.design/color" />
          <meta name="twitter:site" content="@cloudflare" />
          <meta property="og:title" content="Color by Cloudflare Design" />
          <meta property="og:description" content="A color palette tool for interface design" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

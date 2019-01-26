import React from "react"
import data from "../data"

const SiteFooter = ({ variant, ...props }) => {
  switch (variant) {
    case 1:
      return (
          <Footer
            bg="white"
            color='gray.0'
            display="flex"
            flexWrap='wrap'
            py={4}
            px={4}
            borderTop="1px solid rgba(0,0,0,.1)"
            {...props}
          >
            <Div width={[1,1/2]}>
              <A
                display="inline-flex"
                alignItems="center"
                href="https://cloudflare.design"
                fontWeight={700}
                fontSize={3}
              >
                <Logo variant='mark' width={32} /> 
                <Span ml={2}>Cloudflare Design</Span>

              </A>

              <P fontSize={2} mt={2} mb={0}>
                We're growing our teams in San Francisco, London, and Austin! If you're interested in joining us, checkout <A fontWeight={600} href='https://www.cloudflare.com/careers/departments/design/'>our open positions</A>. 
              </P>
            </Div>
            <Div width={[1,1/4]}>
              <H4 fontWeight={600} fontSize={2} mt={[4,0]}>Colophon</H4>
              <A py={1} lineHeight={1.5} fontSize={2} display='block' href='https://github.com/gka/chroma.js/' children="Chroma" />
              <A py={1} lineHeight={1.5} fontSize={2} display='block' href='https://github.com/jxnblk/colorable' children="Colorable" />
              <A py={1} lineHeight={1.5} fontSize={2} display='block' href='https://github.com/lyft/coloralgorithm' children="ColorBox" />
              <A py={1} lineHeight={1.5} fontSize={2} display='block' href='https://github.com/cssstats/cssstats' children="Css Stats" />
              <A py={1} lineHeight={1.5} fontSize={2} display='block' href='https://github.com/jxnblk/palx' children="Palx" />
              <A py={1} lineHeight={1.5} fontSize={2} display='block' href='https://unsplash.com/developers' children="Unsplash" />
            </Div>

            <A
              href="https://github.com/cloudflare-design"
              ml="auto"
              fontSize={2}
              color="blue.4"
              display="block"
              fontWeight={700}
            >
              GitHub
            </A>
          </Footer>
      )
  }
}

SiteFooter.defaultProps = {
  variant: 1
}

export default SiteFooter

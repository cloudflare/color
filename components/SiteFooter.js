import React from "react"
import data from "../data"

import withVariations from "../utils/withVariations"

const SocialIcons = withVariations(({ variant, ...props }) => {
  switch (variant) {
    case 1:
      return (
        <Flex mx={-3} {...props}>
          <Div px={3}>
            <Icon color="blue.4" width={24} type="twitter" />
          </Div>
          <Div px={3}>
            <Icon width={24} color="blue.4" type="facebook" />
          </Div>
          <Div px={3}>
            <Icon width={24} color="blue.4" type="google" />
          </Div>
          <Div px={3}>
            <Icon width={24} color="blue.4" type="linkedin" />
          </Div>
        </Flex>
      )
    case 2:
      return (
        <Flex mx={-3} {...props}>
          <Div px={[2, 3]}>
            <Icon width={24} color="blue.4" type="facebook" />
          </Div>
          <Div px={[2, 3]}>
            <Icon width={24} color="blue.4" type="linkedin" />
          </Div>
          <Div px={[2, 3]}>
            <Icon color="blue.4" width={24} type="twitter" />
          </Div>
        </Flex>
      )
  }
}, 2)

const SiteFooter = ({ variant, ...props }) => {
  switch (variant) {
    case 1:
      return (
        <Footer {...props}>
          Cloudflare Design
        </Footer>
      )
  }
}

SiteFooter.defaultProps = {
  variant: 1
}

export default withVariations(SiteFooter, 2)

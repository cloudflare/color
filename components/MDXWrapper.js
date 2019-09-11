import React from "react"
import { MDXProvider } from "@mdx-js/react"
import H1 from "../elements/H1"
import Div from "../elements/Div"

const CustomH1 = props => (
  <Div mx="auto" css={{ maxWidth: "42em" }}>
    <H1 fontSize={[5, 6, 9]} {...props} />
  </Div>
)
const CustomH2 = props => (
  <Div mx="auto" css={{ maxWidth: "42em" }}>
    <H2 fontSize={[4, 5, 6]} {...props} />
  </Div>
)
const CustomLi = props => (
  <Li mb={2} mx="auto" css={{ lineHeight: 1.5, maxWidth: "42em" }} {...props} />
)
const CustomP = props => <P mx="auto" {...props} />
const Wrapper = props => <Div px={[2, 4]} py={[2, 4]} {...props} />
const CustomImg = props => (
  <Figure m={0} my={5} mx="auto" css={{ maxWidth: "42em" }}>
    <Img
      fontSize={2}
      maxWidth="42em"
      css={{ display: "block" }}
      mx="auto"
      width={3 / 4}
      loading="lazy"
      src={`${process.env.assetPrefix}${props.src}`}
      alt={props.alt}
    />
    <Figcaption textAlign="center" fontSize={1} pt={2} color="gray.2">
      {props.alt}
    </Figcaption>
  </Figure>
)

const MDXComponents = {
  h1: CustomH1,
  li: CustomLi,
  h2: CustomH2,
  img: CustomImg,
  a: A,
  p: CustomP,
  wrapper: Wrapper
}

export default ({ children }) => (
  <MDXProvider components={MDXComponents}>{children}</MDXProvider>
)

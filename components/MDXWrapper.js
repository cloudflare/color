import React from "react"
import { MDXProvider } from "@mdx-js/react"
import H1 from "../elements/H1"
import Div from "../elements/Div"
import Pre from "../elements/Pre"
import Blockquote from "../elements/Blockquote"

const CustomH1 = (props) => (
  <Div mx="auto" fontSize={[3, 4, 4]} maxWidth="34em">
    <H1 fontSize={[5, 6, 8]} {...props} />
  </Div>
)
const CustomH2 = (props) => (
  <Div mx="auto" fontSize={[3, 4, 4]} css={{ maxWidth: "34em" }}>
    <H2 fontSize={[4, 5, 6]} {...props} />
  </Div>
)
const CustomLi = (props) => (
  <Li
    mb={2}
    mx="auto"
    fontSize={[3, 4, 4]}
    css={{ lineHeight: 1.5, maxWidth: "34em" }}
    {...props}
  />
)
const CustomP = (props) => (
  <P maxWidth="34em" fontSize={[3, 4, 4]} mx="auto" {...props} />
)
const Wrapper = (props) => <Div px={[2, 4]} py={[2, 4]} {...props} />
const CustomImg = (props) => (
  <Figure
    m={0}
    my={[3, 5]}
    mx="auto"
    fontSize={[3, 4, 4]}
    css={{ width: "100%", maxWidth: "34em" }}
  >
    <Img
      css={{ display: "block" }}
      mx="auto"
      loading="lazy"
      src={props.src}
      alt={props.alt}
    />
    <Figcaption textAlign="center" fontSize={2} pt={2} color="gray.2">
      {props.alt}
    </Figcaption>
  </Figure>
)

export const FigureLink = ({ href, src, caption }) => (
  <Figure
    m={0}
    my={5}
    mx="auto"
    fontSize={[3, 4, 4]}
    css={{ width: "100%", maxWidth: "34em" }}
  >
    <Img
      css={{ display: "block" }}
      mx="auto"
      loading="lazy"
      src={src}
      alt={caption}
    />
    <Figcaption textAlign="center" fontSize={2} pt={2} color="gray.2">
      <A href={href}>{caption}</A>
    </Figcaption>
  </Figure>
)

const CustomPre = (props) => (
  <Pre
    {...props}
    css={{
      maxWidth: "34em",
      marginLeft: "auto",
      marginRight: "auto",
      overflowX: "scroll",
    }}
  />
)

const CustomBlockquote = (props) => <Blockquote mx={0} {...props} />

const MDXComponents = {
  h1: CustomH1,
  li: CustomLi,
  h2: CustomH2,
  img: CustomImg,
  a: A,
  p: CustomP,
  wrapper: Wrapper,
  pre: CustomPre,
  blockquote: CustomBlockquote,
}

export default ({ children }) => (
  <MDXProvider components={MDXComponents}>{children}</MDXProvider>
)

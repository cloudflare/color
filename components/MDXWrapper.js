import React from "react"
import { MDXProvider } from "@mdx-js/react"
import H1 from "../elements/H1"
import Div from "../elements/Div"

const CustomH1 = props => <H1 fontSize={[5, 6, 9]} {...props} />
const CustomH2 = props => <H2 fontSize={[4, 5, 6]} {...props} />
const CustomLi = props => <Li mb={2} {...props} />
const Wrapper = props => <Div px={[3, 5, 6]} {...props} />
const CustomImg = props => (
  <Figure m={0} my={5} px={4}>
    <Img
      css={{ display: "block" }}
      mx="auto"
      width={3 / 4}
      src={props.src}
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
  p: P,
  wrapper: Wrapper
}

export default ({ children }) => (
  <MDXProvider components={MDXComponents}>{children}</MDXProvider>
)

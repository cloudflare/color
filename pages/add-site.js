import React from "react"
import data from "../data"

const AddSite = props => (
  <Div height="100vh" bg="white">
    <Form
      style={{
        maxWidth: "30em"
      }}
      mx="auto"
      py={7}
      px={4}
    >
      <Fieldset fontSize={4} border={0} p={0}>
        <Legend fontWeight={600}>Add site</Legend>
        <P fontSize={3}>Cloudflare will speed up and protect your site</P>
        <Flex mb={3}>
          <FormTextInput
            type="url"
            label="Site"
            text="Example: www.example.com"
          />
        </Flex>
      </Fieldset>
      <ButtonLink
        my={3}
        href="/overview"
        fontSize={3}
        children="Add Site"
        width={1}
        py={3}
      />
      <A display="block" textAlign="center">
        Add more than one domain at a time
      </A>
    </Form>
  </Div>
)

export default AddSite

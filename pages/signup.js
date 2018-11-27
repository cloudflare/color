import React from "react"
import data from "../data"

const Login = props => (
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
        <Legend mb={4} fontWeight={600}>
          Sign up
        </Legend>
        <Div mb={3}>
          <FormTextInput type="email" label="Email" />
        </Div>
        <Div>
          <FormTextInput type="password" label="Password" />
        </Div>
      </Fieldset>
      <Div my={3}>
        <Label fontSize={2}>
          <Input type="checkbox" />
          <Span pl={2} color="gray.4">
            I would like to receive occasional email updates and special offers
            for Cloudflare products, services, and events.
          </Span>
        </Label>
      </Div>
      <Small color="gray.4">
        By clicking Create Account, I agree to Cloudflare's <A href="">Terms</A>
        , <A href="">Privacy Policy</A>, and <A href="">Cookie Policy</A>.
      </Small>
      <ButtonLink
        mt={3}
        href="/overview"
        fontSize={3}
        children="Create account"
        width={1}
        py={3}
      />
      <Flex py={4}>
        <A
          href="/signup"
          fontSize={3}
          children="Already have an account? Log in"
        />
      </Flex>
    </Form>
  </Div>
)

export default Login

import React from "react"

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
          Log in
        </Legend>
        <Div mb={3}>
          <FormTextInput type="email" label="Email" />
        </Div>
        <Div>
          <FormTextInput type="password" label="Password" />
        </Div>
      </Fieldset>
      <Flex py={4}>
        <Label fontSize={2}>
          <Input type="checkbox" />
          <Span pl={2}>Remember me</Span>
        </Label>
      </Flex>
      <ButtonLink
        href="/overview"
        fontSize={3}
        children="Log in"
        width={1}
        py={3}
      />
      <Flex py={4}>
        <A href="/signup" fontSize={3} children="Sign Up" />
        <A fontSize={3} ml="auto" children="Forgot Your Password?" />
      </Flex>
    </Form>
  </Div>
)

export default Login

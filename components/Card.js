import React from "react"

const Card = ({ title, text, meta, button, help, api, ...props }) => {
  return (
    <ModuleWrapper {...props}>
      <Div color="gray.1" width={2 / 3} py={4} px={[3, 4]}>
        <H3 my={0}>{title}</H3>
        <P mt={2} mb={0} fontSize={[2, 3]}>
          {text}
        </P>
        {meta && <MetaText mt={3} mb={0} children={meta} />}
      </Div>
      <Flex
        width={1 / 3}
        alignItems="center"
        justifyContent="center"
        px={[3, 4]}
        bg="gray.9"
        borderLeft="1px solid"
        borderColor="gray.8"
      >
        <ButtonLink children={button} />
      </Flex>
      <Div
        width={1}
        display="block"
        borderTop="1px solid"
        borderColor="gray.8"
        textAlign="right"
        px={[3, 4]}
        py={2}
      >
        {help && <TextLink mr={4} children="Help" />}
        {api && <TextLink children="API" />}
      </Div>
    </ModuleWrapper>
  )
}

Card.defaultProps = {
  button: "Click Here",
  title: "Sample Card Title",
  text:
    "Manage the hostnames and SSL certificates for third-parties that CNAME to your domain.",
  meta: "This setting was updated 38 minutes ago",
  help: true,
  api: true
}

export default Card

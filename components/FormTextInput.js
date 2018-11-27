import React from "react"

const FormTextInput = ({ label, text, type, ...props }) => {
  return (
    <Div {...props}>
      <Label fontSize={3} mb={1} children={label} />
      {text && <P my={1} fontSize={2} color="gray.4" children={text} />}
      <TextInput mt={1} type={type} />
    </Div>
  )
}

FormTextInput.defaultProps = {
  type: "text",
  label: "",
  text: ""
}

export default FormTextInput

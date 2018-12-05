import React from "react"
import Color from "color"

const FormBlock = ({ currentCombination }) => {
  const colorParentBgContrastValue = Color(currentCombination.color).contrast(
    Color(currentCombination.parentBg)
  )
  const outlineBg = colorParentBgContrastValue < 4.5 ? currentCombination.bg : "transparent"
  const radioColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color

  return (
    <>
      <Flex mt={2} px={[3, 4]} display="none">
        <TextInput
          py={3}
          px={4}
          mr={1}
          border="1px solid"
          borderRadius={1}
          color={currentCombination.bg}
          bg={currentCombination.color}
          borderColor={currentCombination.borderColor}
          defaultValue="email@example.com"
        />
        <SingleComponent
          py={3}
          px={4}
          border="1px solid"
          borderRadius={1}
          color={currentCombination.color}
          bg={currentCombination.bg}
          borderColor={currentCombination.borderColor}
          children="Click Here"
        />
      </Flex>
      <Div mt={4} textAlign="left">
        <Div display="flex" alignItems="center" px={3}>
          <SingleComponent
            py={2}
            px={4}
            mr={3}
            borderRadius={1}
            color={currentCombination.color}
            bg={currentCombination.bg}
            children="Primary Click"
          />
          <Badge
            bg={currentCombination.bg}
            color={currentCombination.color}
            mr={3}
          />
          <Div display="flex" alignItems="center" borderRadius={2} pl={3}>
            <RadioButton name="group 1" color={radioColor} mr={3}>
              Yes
            </RadioButton>
            <RadioButton
              name="group 1"
              color={radioColor}
              checked={true}
            >
              No
            </RadioButton>
          </Div>
        </Div>
        <Div alignItems="center" display="flex" mt={3} bg={outlineBg} p={3}>
          <SingleComponent
            py={2}
            px={4}
            mr={3}
            border="1px solid"
            borderRadius={1}
            color={currentCombination.color}
            bg="transparent"
            borderColor={currentCombination.color}
            children="Secondary Click"
            width="auto"
          />
          <BadgeOutline
            borderColor={currentCombination.color}
            color={currentCombination.color}
            width="auto"
          />
          <Div display="flex" alignItems="center" borderRadius={2} pl={3}>
            <RadioButton name="group 1" color={currentCombination.color} mr={3}>
              Yes
            </RadioButton>
            <RadioButton
              name="group 1"
              color={currentCombination.color}
              checked={true}
            >
              No
            </RadioButton>
          </Div>
        </Div>
      </Div>
    </>
  )
}

export default FormBlock

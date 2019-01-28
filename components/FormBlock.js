import React from "react"
import getContrastScore from "../utils/getContrastScore"

const FormBlock = ({ boxPadding, borderWidth, currentCombination }) => {
  const colorParentBgContrastValue = getContrastScore(
    currentCombination.color,
    currentCombination.parentBg
  )

  const outlineBg =
    colorParentBgContrastValue < 4.5 ? currentCombination.bg : "transparent"
  const radioColor =
    colorParentBgContrastValue < 4.5
      ? currentCombination.bg
      : currentCombination.color

  return (
    <>
      <Flex mt={2} px={[3, 4]} display="none" p={boxPadding}>

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
      <Div bg={currentCombination.bg} p={boxPadding} borderColor={currentCombination.borderColor} border={`${borderWidth}px solid`}>
          <Form color={currentCombination.color} mb={3} >
          <Progress 
            color={currentCombination.color}
            border='1px solid currentColor'
            css={{ 
              '&[value]::-webkit-progress-bar': {
                backgroundColor: 'transparent',
              },
              '&[value]::-webkit-progress-value': {
                backgroundColor: currentCombination.color,
              },
            }}
          />
          <Fieldset borderRadius={1} my={3} pt={0} borderColor={currentCombination.color} border='1px solid'>
            <Legend fontWeight={600}>Name</Legend>
            <Flex mx={-2}>
            <Div px={2}>
              <Label display='block'  mb={1} mt={3} fontWeight={600} fontSize={2}>First</Label>
              <TextInput borderRadius={1} mb={2} bg='transparent' color='inherit' borderColor='currentColor' defaultValue='Example first name' />
            </Div>
            <Div px={2}>
              <Label display='block' fontSize={2} fontWeight={600} mb={1} mt={3}>Last</Label>
              <TextInput borderRadius={1} mb={2} bg='transparent' color='inherit' borderColor='currentColor' defaultValue='Example last name' />
            </Div>
          </Flex>
          </Fieldset>
            <Label display='block' fontWeight={600} mb={2} mt={3}>Boolean?</Label>
<Div display="flex" alignItems="center">
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
          </Form>
          <Flex mt={4}>
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
          
        </Flex>
        </Div>
      <Div mt={4} textAlign="left">
        <Div px={boxPadding} mb={3}>
          <Div 
            pt={3}
            pb={3}
            mb={3}
            style={{
              background: 'repeating-linear-gradient( 135deg, '+currentCombination.bg+','+ currentCombination.bg+' 1px, transparent 1px, transparent 6px)'
            }} 
          />
          <Div 
            borderColor={currentCombination.borderColor}
            border={`${borderWidth}px solid`}
            py={2} px={2} color={currentCombination.color} bg={currentCombination.bg} mb={2} borderRadius={1}>
            <Label fontSize={1} display='block' mb={1}> Address Line 1</Label>
            <TextInput fontWeight={600} width='auto' px={0} py={0} bg='transparent' color={currentCombination.color} border='0' fontSize={3} defaultValue="6234 Spadina Avenue" /><br />
          </Div>
          <Div 
            borderColor={currentCombination.borderColor}
            border={`${borderWidth}px solid`}
            py={2} px={2} color={currentCombination.color} bg={currentCombination.bg} borderRadius={1} mb={3}>
            <Label fontSize={1} display='block' mb={1}> Address Line 2</Label>
            <TextInput fontWeight={600} width='auto' px={0} py={0} bg='transparent' color={currentCombination.color} border='0' fontSize={3} defaultValue="Suite 4201" /><br />
          </Div>
          <SingleComponent
            py={2}
            px={4}
            borderRadius={1}
            color={currentCombination.color}
            bg={currentCombination.bg}
            children="Primary Click"
            width="auto"
            borderColor={currentCombination.borderColor}
            border={`${borderWidth}px solid`}
          />
        </Div>
        <Div display="none" alignItems="center" px={3}>
          <SingleComponent
            py={2}
            px={4}
            mr={3}
            borderRadius={1}
            color={currentCombination.color}
            bg={currentCombination.bg}
            children="Primary Click"
            borderColor={currentCombination.borderColor}
            border={`${borderWidth}px solid`}
          />
          <Badge
            bg={currentCombination.bg}
            color={currentCombination.color}
            mr={3}
            borderColor={currentCombination.borderColor}
            border={`${borderWidth}px solid`}
          />
        </Div>
        
      </Div>
    </>
  )
}

export default FormBlock

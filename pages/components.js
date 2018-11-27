import React from 'react'
import theme from '../theme'

const Components = props => (
    <Div>
      <SiteHeader />
      <Container py={5}>
        <ModuleWrapper bg='white' p={4}>
          <H4 width={1} mt={0} color='gray.1' fontSize={4}>Card title <Beta /></H4>
          <Flex>
            <ButtonOutline children="Click here" mr={2} /> 
            <ButtonLink children="Click here" mr={2} /> 
            <ButtonLink bg='red.4' children="Delete this" mr={2} /> 
            <ButtonLink bg='gray.8' color='gray.2' children="Maybe look at this" mr={3} /> 
            <A bg='transparent' color='blue.3' children="Click here" fontSize={2} /> 
          </Flex>
        </ModuleWrapper>
        <Flex flexWrap='wrap' mx={-2}>
          <Div px={2} width={[1,1/2,1/2]}><ItemCard icon='remove' iconColor={theme.colors.red[4]} status='Deleted' title='example.com' mt={3} bg='white' /></Div>
          <Div px={2} width={[1,1/2,1/2]}><ItemCard icon='time' iconColor='blue.4' status='Pending' title='generative.ly' mt={3} bg='white' /></Div>
          <Div px={2} width={[1,1/2,1/2]}><ItemCard icon='pause' iconColor='gray.4' status='Paused' title='generative.ly' mt={3} bg='white' /></Div>
          <Div px={2} width={[1,1/2,1/2]}><ItemCard mt={3} bg='white' iconColor='green.4' /></Div>
        </Flex>
        <CardTable mt={3} bg='white' />
      </Container>
      <SiteFooter variant={2} />
    </Div>
)

export default Components

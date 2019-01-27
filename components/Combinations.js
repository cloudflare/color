import React from "react"

const Combinations = ({ availableCombos, onHideCombinations }) => {
  return (
    <Div position='relative' display='block' bg='white'>
      <Flex py={3}>
            <ButtonIcon
              onClick={onHideCombinations}
              icon='left'
              ml={3}
              css={`
                backface-visibility: hidden;
              `}
            />
      <H4 my={0} width={1} display='block'  textAlign='center'>{availableCombos.length} Accessible Combinations</H4>
            <ButtonIcon
              onClick={onHideCombinations}
              icon='remove'
              mr={3}
              css={`
                backface-visibility: hidden;
              `}
            />
          </Flex>
      <Flex width={1} flexWrap='wrap'>
      {availableCombos.map((combo, i) => {
        const currentCombination = {
          bg: combo[0],
          color: combo[1],
          borderColor: combo[1]
        }
        return (
          <Div
            width={[1, 1 / 2, 1 / 4]}
            key={i}
            css={`
              position: relative;
            `}
          >
            <MiniTextBlock
              key={i}
              currentCombination={currentCombination}
            />
          </Div>
        )
      })}
    </Flex>
              
    </Div>
  )
}

export default Combinations

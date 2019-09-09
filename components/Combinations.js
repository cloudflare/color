import React, { useState } from "react"
import chunk from "lodash/chunk"

const Combinations = ({ availableCombos, onHideCombinations }) => {
  const pagedCombinations = chunk(availableCombos, 100)
  const [viewableArrayCount, setViewableArrayCount] = useState(0)
  const [inViewCombinations, setInViewCombinations] = useState(
    pagedCombinations[0]
  )
  const combinationsLeftToView =
    viewableArrayCount < pagedCombinations.length - 1

  const handleLoadMore = () => {
    const newCount = viewableArrayCount + 1
    setViewableArrayCount(newCount)
    setInViewCombinations(prev => [...prev, ...pagedCombinations[newCount]])
  }

  return (
    <Div position="relative" display="block" bg="white">
      <Flex py={3}>
        <ButtonIcon
          onClick={onHideCombinations}
          icon="left"
          ml={3}
          css={{
            backfaceVisibility: "hidden"
          }}
        />
        <H4 my={0} width={1} display="block" textAlign="center">
          {availableCombos.length} Accessible Combinations
        </H4>
        <ButtonIcon
          onClick={onHideCombinations}
          icon="remove"
          mr={3}
          css={{
            backfaceVisibility: "hidden"
          }}
        />
      </Flex>
      <Flex width={1} flexWrap="wrap">
        {inViewCombinations.map((combo, i) => {
          const currentCombination = {
            bg: combo[0],
            color: combo[1],
            borderColor: combo[1]
          }
          return (
            <Div
              width={[1, 1 / 2, 1 / 4]}
              key={i}
              css={{
                position: "relative"
              }}
            >
              <MiniTextBlock key={i} currentCombination={currentCombination} />
            </Div>
          )
        })}
        {combinationsLeftToView && (
          <Div width={1} py={4} textAlign="center">
            <ButtonOutline
              color="gray.0"
              borderColor="gray.0"
              type="button"
              onClick={handleLoadMore}
            >
              Load more combos
            </ButtonOutline>
          </Div>
        )}
      </Flex>
    </Div>
  )
}

export default Combinations

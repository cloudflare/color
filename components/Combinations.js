import React from "react"

const Combinations = ({ availableCombos, onHideCombinations }) => {
  return (
    <Div display="flex" flexWrap="wrap">
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
            <Button
              onClick={onHideCombinations}
              css={`
                position: fixed;
                top: 0;
                right: 0;
                backface-visibility: hidden;
              `}
            >
              Close
            </Button>
          </Div>
        )
      })}
    </Div>
  )
}

export default Combinations

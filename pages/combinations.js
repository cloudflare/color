import React from "react"
import { connect } from "unistore/react"
import isEmpty from "lodash/isEmpty"

const Combinations = ({ pageData }) => {
  return isEmpty(pageData) ? null : (
    <Div display='flex' flexWrap='wrap'>
      {pageData.combinations.map((combo, i) => {
        const currentCombination = {
          bg: combo[0],
          color: combo[1],
          borderColor: combo[1]
        }
        return (
          <Div width={[1/2, 1/3]} key={i}>
            <MiniTextBlock
              key={i}
              boxPadding={64}
              currentCombination={currentCombination}
            />
          </Div>
        )
      })}
    </Div>
  )
}

export default connect("pageData")(Combinations)

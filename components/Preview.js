import React, { memo } from 'react';

export default memo(({
  boxPadding,
  borderWidth,
  currentCombination
}) => (
  <Div>
      <TextBlock
        borderWidth={borderWidth}
        boxPadding={boxPadding}
        currentCombination={currentCombination}
      />
      <IconOutlineBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />

      <IconBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />
      <FormBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />
      <ChartsBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />
    </Div>
))

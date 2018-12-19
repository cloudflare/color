import React, { memo } from 'react';

export default memo(({
  boxPadding,
  borderWidth,
  currentCombination
}) => (
  <Div width={3 / 4} pb={5} pt={4} borderTop="1px solid rgba(0,0,0,.1)">
    <Div maxWidth="48em" mx="auto">
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
  </Div>
))
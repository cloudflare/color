import React, { memo } from 'react';

export default memo(({
  boxPadding,
  borderWidth,
  currentCombination
}) => (
  <Flex flexWrap='wrap' pb={4} alignItems='flex-start'>
    <Div px={[3,0]} width={[1, 1, 1/2, 1/3]} px={3}>
      <TextBlock
        borderWidth={borderWidth}
        boxPadding={boxPadding}
        currentCombination={currentCombination}
      />
    </Div>
    <Div width={[1, 1, 1/2, 1/3]} px={3}>
      <IconBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />
      <IconOutlineBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />
    </Div>
    <Div width={[1, 1, 1/2, 1/3]} px={3}>
      <FormBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />
    </Div>
    <Div width={[1, 1, 1/2, 1/3]} px={3}>
    </Div>
    <Div width={[1, 1, 1/2, 1/3]} px={3} display='none'>
      <ChartsBlock
        currentCombination={currentCombination}
        borderWidth={borderWidth}
      />
    </Div>
    </Flex>
))

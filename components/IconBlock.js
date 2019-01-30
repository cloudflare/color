import React from "react"
import Color from "color"

const IconBlock = ({ boxPadding, currentCombination, borderWidth }) => {
  return (
    <Div
      p={boxPadding}
      bg={currentCombination.bg}
      display="grid"
      style={{
        justifyItems: "center",
        justifyContent: "space-around",
        gridTemplateColumns: "repeat(auto-fill, minmax(32px,64px))",
        rowGap: '16px'
      }}
      borderColor={currentCombination.borderColor}
      border={`${borderWidth}px solid`}
    >
      <Icon title="down caret" size={24} color={currentCombination.color} type="caretDown" />
      <Icon title="right caret" size={24} color={currentCombination.color} type="caretRight" />
      <Icon title="left caret" size={24} color={currentCombination.color} type="caretLeft" />
      <Icon title="up caret" size={24} color={currentCombination.color} type="caretUp" />
      <Icon title="backward" size={24} color={currentCombination.color} type="backward" />
      <Icon title="forward" size={24} color={currentCombination.color} type="forward" />
      <Icon title="left" size={24} color={currentCombination.color} type="left" />
      <Icon title="right" size={24} color={currentCombination.color} type="right" />
      <Icon title="reorder" size={24} color={currentCombination.color} type="reorder" />
      <Icon title="horizontal resize" size={24} color={currentCombination.color} type="resizeHorizontal" />
      <Icon title="minus" size={24} color={currentCombination.color} type="minus" />
      <Icon title="plus" size={24} color={currentCombination.color} type="plus" />
      <Icon title="remove" size={24} color={currentCombination.color} type="remove" />
      <Icon title="hamburger menu" size={24} color={currentCombination.color} type="hamburger" />
      <Icon title="refresh"  size={24} color={currentCombination.color} type="refresh" />
      <Icon title="checkmark" size={24} color={currentCombination.color} type="ok" />
      <Icon title="server rack" size={24} color={currentCombination.color} type="drive" />
      <Icon title="download" size={24} color={currentCombination.color} type="download" />
      <Icon title="wrench" size={24} color={currentCombination.color} type="wrench" />
      <Icon title="location pin"size={24} color={currentCombination.color} type="network" />
      <Icon title="speech bubble" size={24} color={currentCombination.color} type="speech" />
      <Icon title="credit card" size={24} color={currentCombination.color} type="creditCard" />
      <Icon title="upload" size={24} color={currentCombination.color} type="upload" />
      <Icon title="pie chart" size={24} color={currentCombination.color} type="chart" />
      <Icon title="collapse arrows" size={24} color={currentCombination.color} type="collapse" />
      <Icon title="expand arrows" size={24} color={currentCombination.color} type="expand" />
      <Icon title="file" size={24} color={currentCombination.color} type="file" />
      <Icon title="filter" size={24} color={currentCombination.color} type="filter" />
      <Icon title="gear" size={24} color={currentCombination.color} type="gear" />
      <Icon title="shield" size={24} color={currentCombination.color} type="shield" />
      <Icon title="info" size={24} color={currentCombination.color} type="info" />
      <Icon title="mail envelope" size={24} color={currentCombination.color} type="mail" />
      <Icon title="list" size={24} color={currentCombination.color} type="list" />
      <Icon title="ok sign" size={24} color={currentCombination.color} type="okSign" />
      <Icon title="pause" size={24} color={currentCombination.color} type="pause" />
      <Icon title="lightning bolt" size={24} color={currentCombination.color} type="bolt" />
      <Icon title="flow chart" size={24} color={currentCombination.color} type="flowchart" />
      <Icon title="clipboard" size={24} color={currentCombination.color} type="clipboard" />
      <Icon title="lock" size={24} color={currentCombination.color} type="lock" />
      <Icon title="help" size={24} color={currentCombination.color} type="help" />
      <Icon title="clock" size={24} color={currentCombination.color} type="time" />
      <Icon title="door" size={24} color={currentCombination.color} type="door" />
      <Icon title="user" size={24} color={currentCombination.color} type="user" />
      <Icon title="quotes" size={24} color={currentCombination.color} type="quotes" />
      <Icon title="github" size={24} color={currentCombination.color} type="github" />
      <Icon title="linkedin" size={24} color={currentCombination.color} type="linkedin" />
      <Icon title="facebook" size={24} color={currentCombination.color} type="facebook" />
      <Icon title="twitter"size={24} color={currentCombination.color} type="twitter" />
    </Div>
  )
}

export default IconBlock

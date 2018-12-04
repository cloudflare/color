import React from "react"

const filters = [
  { label: "None", value: "none", population: "92%" },
  { label: "Deuteranomaly", value: "deuteranomaly", population: "2.7%" },
  { label: "Protanomaly", value: "protanomaly", population: "0.66"},
  { label: "Protanopia", value: "protanopia", population: ".59%"},
  { label: "Deuteranopia", value: "deuteranopia", population: "0.56%"},
  { label: "Tritanopia", value: "tritanopia", population: "0.016%"},
  { label: "Tritanomaly", value: "tritanomaly", population: ".01%" },
  { label: "Achromatopsia", value: "achromatopsia", population: "<0.0001%" },
  { label: "Achromatomaly", value: "achromatomaly", population: "Unknown" }
]

const SingleRadio = ({ label, value, population, onChange, currentValue }) => (
  <Div display="flex" alignItems="center" width="auto" width={1}>
    <Input
      type="radio"
      checked={currentValue === value}
      name="colorFilter"
      id={label}
      value={value}
      onChange={onChange}
    />
    <Label pl={1} htmlFor={label} display='flex'>
      <Span width={1/2}>{label}</Span> 
      <Span color='gray.3' width={1/2}>{population}</Span>
    </Label>
  </Div>
)

const ColorBlindFilter = ({ onChange, currentValue }) => {
  return (
    <Div display="flex" flexWrap="wrap">
      <H4 width={1} mb={2} mt={4}>
        Color Blindness Filter
      </H4>

      {filters.map(f => (
        <SingleRadio
          key={f.label}
          label={f.label}
          value={f.value}
          population={f.population}
          onChange={onChange}
          currentValue={currentValue}
        />
      ))}
    </Div>
  )
}

export default ColorBlindFilter

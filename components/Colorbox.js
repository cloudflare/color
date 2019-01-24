import React, { useState, useEffect } from "react"
import generate from "../utils/colorbox"

const CURVES = [
  { label: "Quad - EaseIn", value: "easeInQuad" },
  { label: "Quad - EaseOut", value: "easeOutQuad" },
  { label: "Quad - EaseInOut", value: "easeInOutQuad" },
  { label: "Quart - EaseIn", value: "easeInQuart" },
  { label: "Quart - EaseOut", value: "easeOutQuart" },
  { label: "Quart - EaseInOut", value: "easeInOutQuart" },
  { label: "Sine - EaseIn", value: "easeInSine" },
  { label: "Sine - EaseOut", value: "easeOutSine" },
  { label: "Sine - EaseInOut", value: "easeInOutSine" },
  { label: "Cubic - EaseIn", value: "easeInCubic" },
  { label: "Cubic - EaseOut", value: "easeOutCubic" },
  { label: "Cubic - EaseInOut", value: "easeInOutCubic" },
  { label: "Expo - EaseIn", value: "easeInExpo" },
  { label: "Expo - EaseOut", value: "easeOutExpo" },
  { label: "Expo - EaseInOut", value: "easeInOutExpo" },
  { label: "Quint - EaseIn", value: "easeInQuint" },
  { label: "Quint - EaseOut", value: "easeOutQuint" },
  { label: "Quint - EaseInOut", value: "easeInOutQuint" },
  { label: "Circ - EaseIn", value: "easeInCirc" },
  { label: "Circ - EaseOut", value: "easeOutCirc" },
  { label: "Circ - EaseInOut", value: "easeInOutCirc" },
  { label: "Back - EaseIn", value: "easeInBack" },
  { label: "Back - EaseOut", value: "easeOutBack" },
  { label: "Back - EaseInOut", value: "easeInOutBack" },
  { label: "Linear", value: "linear" }
]

const generateSpecs = ({
  steps,
  hueStart,
  hueEnd,
  hueCurve,
  satStart,
  satEnd,
  satCurve,
  satRate,
  lumStart,
  lumEnd,
  lumCurve
}) => ({
  specs: {
    steps,
    hue_start: hueStart,
    hue_end: hueEnd,
    hue_curve: hueCurve,
    sat_start: satStart,
    sat_end: satEnd,
    sat_curve: satCurve,
    sat_rate: satRate,
    lum_start: lumStart,
    lum_end: lumEnd,
    lum_curve: lumCurve,
    modifier: 10
  }
})

const Colorbox = ({ onAddPalette, ...props }) => {
  const [form, setForm] = useState({
    steps: 11,
    hueStart: 34,
    hueEnd: 230,
    hueCurve: "easeInExpo",
    satStart: 4,
    satEnd: 90,
    satCurve: "easeOutQuad",
    satRate: 130,
    lumStart: 100,
    lumEnd: 53,
    lumCurve: "easeOutQuad"
  })
  const [palette, setPalette] = useState([])

  const handleInput = e => {
    const target = e.target
    const name = target.name
    const rawValue = target.value
    const numValue = parseInt(rawValue)
    const finalValue = isNaN(numValue) ? rawValue : numValue
    setForm(prev => ({ ...prev, [name]: finalValue }))
  }

  const handleAddToPalette = () => {
    const paletteHexes = palette.map(p => p.hex)
    onAddPalette(paletteHexes)
  }

  useEffect(
    () => {
      const specs = generateSpecs(form)
      const palette = generate(specs)

      setPalette(palette)
    },
    [form]
  )

  return (
    <Div {...props}>
      <Div mx='auto' maxWidth='64rem'>
        <Header px={4}>
          <H4><A href='https://colorbox.io' title="ColorBox by Lyft Design">ColorBox <Span fontSize={1} fontWeight={400}>by Lyft Design</Span></A></H4>
        </Header>
        <Flex mb={3} px={4}>
          <Label fontWeight={700} mr={2} fontSize={2}>Steps</Label>
          <Input
            name="steps"
            type="range"
            number='1'
            value={form.steps}
            onChange={handleInput}
            width={1}
            min="3"
            max="128"
          />
          <Span width={48} fontSize={2} textAlign='right'>{form.steps}</Span>
        </Flex>
        <Flex flexWrap={['wrap', 'nowrap']}>
          <Div fontSize={2} px={4} mb={[3,0]}>
              <Label mb={2} display='block' fontWeight={700} fontSize={1}>Hue</Label>
              <Div>
              <Flex mb={2}>
                <Label width={48}>Start</Label>
                <Input
                  name="hueStart"
                  type="range"
                  value={form.hueStart}
                  onChange={handleInput}
                  number='1'
                  min="0"
                  max="359"
                width={1}
                />
                <Span pl={2} fontSize={2}>{form.hueStart}</Span>
              </Flex>
              <Flex mb={2}>
                <Label width={48}>End</Label>
                <Input
                  name="hueEnd"
                  type="range"
                  number='1'
                  value={form.hueEnd}
                  onChange={handleInput}
                  min="0"
                  max="359"
                width={1}
                />
                <Span fontSize={2} pl={2}>{form.hueEnd}</Span>
              </Flex>
            <Flex mb={2}>
              <Label pr={2}>Curve</Label>
              <Select
                width={1}
                name="hueCurve"
                value={form.hueCurve}
                onChange={handleInput}
              >
                {CURVES.map((c, i) => (
                  <option key={i} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </Select>
            </Flex>
            </Div>

          </Div>

          <Div fontSize={2} px={4} mb={[3,0]}>
            <Label fontSize={1} fontWeight={700} display='block' mb={2}>Saturation</Label>
            <Flex mb={2}>
              <Label width={48}>Start</Label>
              <Input
                name="satStart"
                type="range"
                number="1"
                value={form.satStart}
                onChange={handleInput}
                min="0"
                max="100"
                width={1}
              />
              <Span width={48} textAlign='right'fontSize={2}>{form.satStart}</Span>
            </Flex>
            <Flex mb={2}>
              <Label width={48}>End</Label>
              <Input
                name="satEnd"
                type="range"
                number="1"
                value={form.satEnd}
                onChange={handleInput}
                min="0"
                max="100"
                width={1}
              />
              <Span width={48} fontSize={2} textAlign='right'>{form.satEnd}</Span>
            </Flex>

            <Flex mb={2}>
              <Label pr={2}>Curve</Label>
              <Select
                width={1}
                name="satCurve"
                value={form.hueCurve}
                onChange={handleInput}
              >
                {CURVES.map((c, i) => (
                  <option key={i} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </Select>
            </Flex>
          </Div>

          <Div fontSize={2} px={4} mb={[3,0]}>
            <Label fontSize={1} fontWeight={700} mb={2} display='block'>Luminosity</Label>
            <Flex mb={2}>
              <Label pr={2}>Start</Label>
              <Input
                name="lumStart"
                type="range"
                width={1}
                number="1"
                value={form.lumStart}
                onChange={handleInput}
                min="0"
                max="100"
              />
              <Span width={48} textAlign='right'>{form.lumStart}</Span>
            </Flex>
            <Flex mb={2}>
              <Label width={48}>End</Label>
              <Input
                width={1}
                name="lumEnd"
                type="range"
                number="1"
                value={form.lumEnd}
                onChange={handleInput}
                min="0"
                max="100"
              />
              <Span width={48} textAlign='right'>{form.lumEnd}</Span>
            </Flex>
            <Flex>
              <Label pr={2}>Curve</Label>
              <Select
                width={1}
                name="lumCurve"
                value={form.lumCurve}
                onChange={handleInput}
              >
                {CURVES.map((c, i) => (
                  <option key={i} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </Select>
            </Flex>
          </Div>
        </Flex>
      </Div>
          <Flex mt={3} px={[3,5,6]}>
            {palette.map((p, i) => (
              <Div>
              <Div
                key={i}
                height={32}
                bg={p.hex}
              ></Div>
              </Div>
            ))}
          </Flex>
          <Div textAlign='center' mb={4}>

        <ButtonPrimary mt={2} borderRadius={1} iconSize={12} fontSize={1} py={1} button='plus' bg='black' color='white' type="button" onClick={handleAddToPalette}>
          Add to palette
        </ButtonPrimary>

      </Div>
    </Div>
  )
}

export default Colorbox

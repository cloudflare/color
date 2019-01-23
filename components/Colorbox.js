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

const Colorbox = ({ onAddPalette }) => {
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
    <Div>
      <Div>
        <Div>
          <P>Steps</P>
          <Input
            name="steps"
            type="number"
            value={form.steps}
            onChange={handleInput}
            min="3"
            max="21"
          />
        </Div>
        <Flex>
          <Div>
            <Div>
              <P fontWeight={700}>Hue</P>
              <P>Start</P>
              <Input
                name="hueStart"
                type="number"
                value={form.hueStart}
                onChange={handleInput}
                min="0"
                max="359"
              />
            </Div>
            <Div>
              <P>End</P>
              <Input
                name="hueEnd"
                type="number"
                value={form.hueEnd}
                onChange={handleInput}
                min="0"
                max="359"
              />
            </Div>

            <Div>
              <P>Curve</P>
              <Select
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
            </Div>
          </Div>

          <Div>
            <Div>
              <P fontWeight={700}>Saturation</P>
              <P>Start</P>
              <Input
                name="satStart"
                type="number"
                value={form.satStart}
                onChange={handleInput}
                min="0"
                max="100"
              />
            </Div>
            <Div>
              <P>End</P>
              <Input
                name="satEnd"
                type="number"
                value={form.satEnd}
                onChange={handleInput}
                min="0"
                max="100"
              />
            </Div>

            <Div>
              <P>Curve</P>
              <Select
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
            </Div>
          </Div>

          <Div>
            <Div>
              <P fontWeight={700}>Luminosity</P>
              <P>Start</P>
              <Input
                name="satStart"
                type="number"
                value={form.lumStart}
                onChange={handleInput}
                min="0"
                max="100"
              />
            </Div>
            <Div>
              <P>End</P>
              <Input
                name="satEnd"
                type="number"
                value={form.lumEnd}
                onChange={handleInput}
                min="0"
                max="100"
              />
            </Div>

            <Div>
              <P>Curve</P>
              <Select
                name="satCurve"
                value={form.lumCurve}
                onChange={handleInput}
              >
                {CURVES.map((c, i) => (
                  <option key={i} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </Select>
            </Div>
          </Div>
        </Flex>
      </Div>

      <Flex>
        {palette.map(p => (
          <Div
            width={24}
            m={1}
            css={`
              height: 24px;
              border-radius: 50%;
            `}
            bg={p.hex}
          />
        ))}
      </Flex>

      <Button type="button" onClick={handleAddToPalette}>
        Add to palette
      </Button>
    </Div>
  )
}

export default Colorbox

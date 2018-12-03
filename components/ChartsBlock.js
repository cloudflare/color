import React from "react"

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Bar,
  BarChart,
  Area,
  AreaChart,
  LineChart,
  Line
} from "recharts"
import linedata from "../data/linechart"
import bardata from "../data/barchart"

import radialdata from "../data/radialchart"
import radial2 from "../data/radial2"
import radial3 from "../data/radial3"
import radial4 from "../data/radial4"
import radial5 from "../data/radial5"

const ChartsBlock = ({ currentCombination }) => {
  return (
    <Flex bg={currentCombination.bg} mt={4} flexWrap="wrap" py={5}>
      <Div px={5} width={[1]}>
        <Div style={{ overflow: "hidden" }}>
          <LineChart width={700} height={120} data={linedata}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke={currentCombination.color}
              strokeWidth={2}
            />
          </LineChart>
        </Div>
      </Div>
      <Div pl={5} pr={3} width={[1, 1 / 2]}>
        <Div style={{ overflow: "hidden" }}>
          <AreaChart
            width={360}
            height={120}
            data={linedata}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <Area
              type="monotone"
              dataKey="uv"
              stroke={currentCombination.color}
              strokeWidth={2}
              fill={currentCombination.color}
            />
          </AreaChart>
        </Div>
      </Div>
      <Div pl={3} pr={5} width={[1, 1 / 2]}>
        <Div style={{ overflow: "hidden" }}>
          <BarChart width={320} height={120} data={bardata}>
            <Bar
              dataKey="amt"
              fillOpacity={0.75}
              fill={currentCombination.color}
            />
          </BarChart>
        </Div>
      </Div>
      <Flex width={1} px={5} flexWrap="wrap" mt={4}>
        <Div width={1 / 5}>
          <RadarChart
            cx={64}
            cy={64}
            outerRadius={48}
            width={128}
            height={128}
            data={radialdata}
          >
            <PolarGrid
              stroke={currentCombination.color}
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <PolarAngleAxis
              dataKey="subject"
              stroke={currentCombination.color}
            />
            <Radar
              name="Mike"
              dataKey="A"
              stroke={currentCombination.color}
              fill={currentCombination.color}
              strokeOpacity={0.5}
              fillOpacity={0.5}
            />
          </RadarChart>
        </Div>
        <Div width={1 / 5}>
          <RadarChart
            cx={64}
            cy={64}
            outerRadius={48}
            width={128}
            height={128}
            data={radial5}
          >
            <PolarGrid
              stroke={currentCombination.color}
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <PolarAngleAxis
              dataKey="subject"
              stroke={currentCombination.color}
            />
            <Radar
              name="Mike"
              dataKey="A"
              stroke={currentCombination.color}
              fill={currentCombination.color}
              strokeOpacity={0.5}
              fillOpacity={0.5}
            />
          </RadarChart>
        </Div>
        <Div width={1 / 5}>
          <RadarChart
            cx={64}
            cy={64}
            outerRadius={48}
            width={128}
            height={128}
            data={radial2}
          >
            <PolarGrid
              stroke={currentCombination.color}
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <PolarAngleAxis
              dataKey="subject"
              stroke={currentCombination.color}
            />
            <Radar
              name="Mike"
              dataKey="A"
              stroke={currentCombination.color}
              fill={currentCombination.color}
              strokeOpacity={0.5}
              fillOpacity={0.5}
            />
          </RadarChart>
        </Div>
        <Div width={1 / 5}>
          <RadarChart
            cx={64}
            cy={64}
            outerRadius={48}
            width={128}
            height={128}
            data={radial3}
          >
            <PolarGrid
              stroke={currentCombination.color}
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <PolarAngleAxis
              dataKey="subject"
              stroke={currentCombination.color}
            />
            <Radar
              name="Mike"
              dataKey="A"
              stroke={currentCombination.color}
              fill={currentCombination.color}
              strokeOpacity={0.5}
              fillOpacity={0.5}
            />
          </RadarChart>
        </Div>
        <Div width={1 / 5}>
          <RadarChart
            cx={64}
            cy={64}
            outerRadius={48}
            width={128}
            height={128}
            data={radial4}
          >
            <PolarGrid
              stroke={currentCombination.color}
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <PolarAngleAxis
              dataKey="subject"
              stroke={currentCombination.color}
            />
            <Radar
              name="Mike"
              dataKey="A"
              stroke={currentCombination.color}
              fill={currentCombination.color}
              strokeOpacity={0.5}
              fillOpacity={0.5}
            />
          </RadarChart>
        </Div>
      </Flex>
    </Flex>
  )
}

export default ChartsBlock

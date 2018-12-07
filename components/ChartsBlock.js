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
  Line,
  PieChart, 
  Pie, 
  Tooltip,
  ResponsiveContainer
} from "recharts"
import linedata from "../data/linechart"
import bardata from "../data/barchart"

import radialdata from "../data/radialchart"
import radial2 from "../data/radial2"
import radial3 from "../data/radial3"
import radial4 from "../data/radial4"
import radial5 from "../data/radial5"

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

const data03 = [{name: 'Group A', value: 1000}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 908}, {name: 'Group F', value: 4800}];


const data04 = [{name: 'A1', value: 100},
                    {name: 'A2', value: 300},
                   {name: 'B1', value: 100},
                   {name: 'B2', value: 80},
                   {name: 'B3', value: 40},
                   {name: 'B4', value: 30},
                   {name: 'B5', value: 50},
                  {name: 'C1', value: 100},
                  {name: 'C2', value: 200},
                   {name: 'D1', value: 150},
                   {name: 'D2', value: 50}]


const ChartsBlock = ({ currentCombination, ...props }) => {

  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <Flex bg={currentCombination.bg} mt={4} flexWrap="wrap" py={5}>
      <Div px={5} width={[1]}>
          <ResponsiveContainer width='100%' height={128}>
            <LineChart data={linedata}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke={currentCombination.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
      </Div>
      <Div display='grid' style={{justifyItems: 'center', gridTemplateColumns: 'repeat(3, 1fr)' }}>
 	<PieChart width={200} height={180}>
        <Pie stroke={currentCombination.bg} data={data03} innerRadius={40} outerRadius={60} fill={currentCombination.color}/>
       </PieChart>
 	<PieChart width={200} height={180}>
        <Pie stroke={currentCombination.bg} isAnimationActive={false} data={data01} outerRadius={60} fill={currentCombination.color} label/>
       </PieChart>
 	<PieChart width={200} height={180}>
        <Pie stroke={currentCombination.bg} data={data01} outerRadius={48} fill={currentCombination.color} />
        <Pie stroke={currentCombination.bg} data={data02} innerRadius={64} outerRadius={80} fill={currentCombination.color} label/>
       </PieChart>
     </Div>

      <Div pl={5} pr={3} width={[1, 1 / 2]}>
        <ResponsiveContainer width='100%' height={128}>
          <AreaChart
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
        </ResponsiveContainer>
      </Div>
      <Div pl={3} pr={5} width={[1, 1 / 2]}>
        <ResponsiveContainer width='100%' height={128}>
          <BarChart data={bardata}>
            <Bar
              dataKey="amt"
              fillOpacity={0.75}
              fill={currentCombination.color}
            />
          </BarChart>
        </ResponsiveContainer>
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

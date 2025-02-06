"use client";


import type { FC } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Efficiency", value: 0.312 },
  { name: "Remaining", value: 0.688 },
]

const COLORS = ["#00C49F", "#FFBB28"]

const EfficiencyGaugeChart: FC = () => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-yellow-300 mb-4">Overall Efficiency Gauge</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-2xl font-bold text-white mt-4">31.2%</p>
      <p className="text-center text-sm text-gray-300">Assets per Hour</p>
    </div>
  )
}

export default EfficiencyGaugeChart


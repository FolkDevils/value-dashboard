"use client";


import type React from "react"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const data = [
  { name: "Creative Asset Production", value: 35 },
  { name: "Email & Digital Campaigns", value: 25 },
  { name: "Website & Technical Work", value: 20 },
  { name: "Video Production", value: 10 },
  { name: "Meetings & Reviews", value: 10 },
]

const COLORS = ["#FFD700", "#FFA500", "#FF4500", "#8A2BE2", "#4169E1"]

const WorkDistributionDonutChart: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-yellow-300 mb-4">Work Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "4px" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{
              paddingLeft: "20px",
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-300 mt-4 text-center">
        This chart illustrates the distribution of work across different categories, showcasing the diverse range of
        skills and services provided.
      </p>
    </div>
  )
}

export default WorkDistributionDonutChart


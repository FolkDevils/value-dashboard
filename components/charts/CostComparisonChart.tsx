"use client";


import type { FC } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Email Design", industry: 450, user: 400 },
  { name: "Social Graphic", industry: 450, user: 300 },
  { name: "Landing Page", industry: 2250, user: 2000 },
  { name: "Animation (30s)", industry: 3000, user: 2000 },
]

const CostComparisonChart: FC = () => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-yellow-300 mb-4">Cost Comparison: Industry vs User</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} labelStyle={{ color: "#fff" }} />
          <Legend />
          <Bar dataKey="industry" fill="#ff4d4d" name="Industry Average" />
          <Bar dataKey="user" fill="#4dff4d" name="User's Cost" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CostComparisonChart


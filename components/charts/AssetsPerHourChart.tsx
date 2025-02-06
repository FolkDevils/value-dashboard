"use client";


import type { FC } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { week: "Nov 17-23", ratio: 0.2 },
  { week: "Nov 24-30", ratio: 0.5 },
  { week: "Dec 1-7", ratio: 0.5 },
  { week: "Dec 9-13", ratio: 0.4 },
  { week: "Dec 16-20", ratio: 0.35 },
  { week: "Dec 22-27", ratio: 0.045 },
  { week: "Dec 30-31", ratio: 0.545 },
  { week: "Jan 1-5", ratio: 0.208 },
  { week: "Jan 6-12", ratio: 0.27 },
  { week: "Jan 13-17", ratio: 0.183 },
  { week: "Jan 20-25", ratio: 0.37 },
  { week: "Jan 27-31", ratio: 0.4 },
  { week: "Feb 3-7", ratio: 0.57 },
]

const AssetsPerHourChart: FC = () => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-yellow-300 mb-4">Assets Produced per Hour</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="week" angle={-45} textAnchor="end" interval={0} height={100} stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} labelStyle={{ color: "#fff" }} />
          <Bar dataKey="ratio" fill="#ffa500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AssetsPerHourChart


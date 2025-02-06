import type { FC } from "react"

interface ValueMetricCardProps {
  title: string
  value: string
  unit: string
  description: string
}

const ValueMetricCard: FC<ValueMetricCardProps> = ({ title, value, unit, description }) => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-yellow-300 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white mb-2">
        {value}
        <span className="text-sm ml-1">{unit}</span>
      </p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  )
}

export default ValueMetricCard


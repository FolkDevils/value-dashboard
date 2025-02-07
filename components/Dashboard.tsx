import type { FC } from "react"
import AssetsPerHourChart from "./charts/AssetsPerHourChart"
import CostComparisonChart from "./charts/CostComparisonChart"
import ProductivityTrendChart from "./charts/ProductivityTrendChart"
import WorkDistributionDonutChart from "./charts/WorkDistributionDonutChart"
import ValueMetricCard from "./ValueMetricCard"

const Dashboard: FC = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Performance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <ValueMetricCard
          title="Overall Efficiency"
          value="0.312"
          unit="assets/hour"
          description="Average assets produced per hour across all projects"
        />
        <ValueMetricCard
          title="Cost Savings"
          value="15-30%"
          unit=""
          description="Savings compared to standard agency pricing on complex projects"
        />
        <ValueMetricCard
          title="Time Saved"
          value="33%"
          unit=""
          description="Reduction in production time for animated content"
        />

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AssetsPerHourChart />
        <CostComparisonChart />
        <ProductivityTrendChart />
        <WorkDistributionDonutChart />
      </div>
    </div>
  )
}

export default Dashboard


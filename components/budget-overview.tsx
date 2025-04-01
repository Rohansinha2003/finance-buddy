"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

import { Progress } from "@/components/ui/progress"

// Sample budget data
const budgetData = [
  { name: "Food & Dining", value: 500, spent: 420, color: "#8884d8" },
  { name: "Transportation", value: 300, spent: 250, color: "#82ca9d" },
  { name: "Entertainment", value: 200, spent: 180, color: "#ffc658" },
  { name: "Utilities", value: 350, spent: 330, color: "#ff8042" },
  { name: "Housing", value: 1200, spent: 1200, color: "#0088fe" },
]

// Format for pie chart
const pieData = budgetData.map((item) => ({
  name: item.name,
  value: item.value,
  color: item.color,
}))

export function BudgetOverview() {
  return (
    <div className="space-y-6">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4">
        {budgetData.map((budget, index) => {
          const percentage = Math.round((budget.spent / budget.value) * 100)
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{budget.name}</span>
                <span className="text-sm text-muted-foreground">
                  ${budget.spent} / ${budget.value}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={percentage} className="h-2" />
                <span className="text-xs text-muted-foreground w-10">{percentage}%</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


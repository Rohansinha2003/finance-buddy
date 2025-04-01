"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InvestmentGrowthChart() {
  const [isMounted, setIsMounted] = useState(false)
  const [initialInvestment, setInitialInvestment] = useState(2000)
  const [monthlyContribution, setMonthlyContribution] = useState(200)
  const [years, setYears] = useState(20)
  const [riskProfile, setRiskProfile] = useState("moderate")
  const [chartData, setChartData] = useState([])
  const [comparisonView, setComparisonView] = useState("cumulative")

  // Calculate expected returns based on risk profile
  const getReturns = () => {
    switch (riskProfile) {
      case "conservative":
        return { average: 4, optimistic: 6, pessimistic: 2 }
      case "moderately-conservative":
        return { average: 5.5, optimistic: 7.5, pessimistic: 3 }
      case "moderate":
        return { average: 7, optimistic: 9, pessimistic: 4 }
      case "moderately-aggressive":
        return { average: 8.5, optimistic: 11, pessimistic: 4.5 }
      case "aggressive":
        return { average: 10, optimistic: 13, pessimistic: 5 }
      default:
        return { average: 7, optimistic: 9, pessimistic: 4 }
    }
  }

  // Generate chart data
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }

    const returns = getReturns()
    const data = []

    // Calculate compound growth for different scenarios
    let conservativeTotal = initialInvestment
    let averageTotal = initialInvestment
    let optimisticTotal = initialInvestment
    let totalInvested = initialInvestment

    for (let year = 0; year <= years; year++) {
      if (year > 0) {
        const yearlyContribution = monthlyContribution * 12
        totalInvested += yearlyContribution

        conservativeTotal = conservativeTotal * (1 + returns.pessimistic / 100) + yearlyContribution
        averageTotal = averageTotal * (1 + returns.average / 100) + yearlyContribution
        optimisticTotal = optimisticTotal * (1 + returns.optimistic / 100) + yearlyContribution
      }

      data.push({
        year,
        "Total Invested": Math.round(totalInvested),
        "Conservative Estimate": Math.round(conservativeTotal),
        "Expected Growth": Math.round(averageTotal),
        "Optimistic Estimate": Math.round(optimisticTotal),
      })
    }

    setChartData(data)
  }, [initialInvestment, monthlyContribution, years, riskProfile, isMounted])

  if (!isMounted) {
    return <div className="h-[400px] flex items-center justify-center">Loading chart...</div>
  }

  // Calculate final values
  const finalValues =
    chartData.length > 0
      ? chartData[chartData.length - 1]
      : {
          "Total Invested": 0,
          "Conservative Estimate": 0,
          "Expected Growth": 0,
          "Optimistic Estimate": 0,
        }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-medium">Investment Growth Projection</h3>
        <p className="text-sm text-muted-foreground">
          See how your investments could grow over time based on different scenarios and risk profiles.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Investment Parameters</CardTitle>
          <CardDescription>Adjust these values to see different projections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Initial Investment</Label>
                <span className="text-sm font-medium">${initialInvestment}</span>
              </div>
              <Slider
                value={[initialInvestment]}
                min={0}
                max={10000}
                step={100}
                onValueChange={(value) => setInitialInvestment(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$0</span>
                <span>$10,000</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Monthly Contribution</Label>
                <span className="text-sm font-medium">${monthlyContribution}</span>
              </div>
              <Slider
                value={[monthlyContribution]}
                min={0}
                max={1000}
                step={10}
                onValueChange={(value) => setMonthlyContribution(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$0</span>
                <span>$1,000</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Time Horizon (Years)</Label>
                <span className="text-sm font-medium">{years} years</span>
              </div>
              <Slider value={[years]} min={1} max={40} step={1} onValueChange={(value) => setYears(value[0])} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 year</span>
                <span>40 years</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Risk Profile</Label>
              <Select value={riskProfile} onValueChange={setRiskProfile}>
                <SelectTrigger>
                  <SelectValue placeholder="Select risk profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Conservative</SelectItem>
                  <SelectItem value="moderately-conservative">Moderately Conservative</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="moderately-aggressive">Moderately Aggressive</SelectItem>
                  <SelectItem value="aggressive">Aggressive</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {riskProfile === "conservative" && "Lower risk, lower potential returns (4% avg)"}
                {riskProfile === "moderately-conservative" && "Lower-moderate risk and returns (5.5% avg)"}
                {riskProfile === "moderate" && "Balanced risk and potential returns (7% avg)"}
                {riskProfile === "moderately-aggressive" && "Higher risk, higher potential returns (8.5% avg)"}
                {riskProfile === "aggressive" && "Highest risk and potential returns (10% avg)"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Projected Growth</CardTitle>
          <div className="flex items-center justify-between">
            <CardDescription>Based on your parameters and risk profile</CardDescription>
            <Tabs value={comparisonView} onValueChange={setComparisonView} className="h-8">
              <TabsList className="h-8">
                <TabsTrigger value="cumulative" className="h-7 text-xs">
                  Cumulative
                </TabsTrigger>
                <TabsTrigger value="comparison" className="h-7 text-xs">
                  Comparison
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: "Years", position: "insideBottomRight", offset: -10 }} />
                <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} width={80} />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
                  labelFormatter={(value) => `Year ${value}`}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="Total Invested"
                  stackId={comparisonView === "comparison" ? "1" : undefined}
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="Conservative Estimate"
                  stackId={comparisonView === "comparison" ? "2" : undefined}
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="Expected Growth"
                  stackId={comparisonView === "comparison" ? "3" : undefined}
                  stroke="#ffc658"
                  fill="#ffc658"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="Optimistic Estimate"
                  stackId={comparisonView === "comparison" ? "4" : undefined}
                  stroke="#ff8042"
                  fill="#ff8042"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Invested</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${finalValues["Total Invested"].toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Conservative Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${finalValues["Conservative Estimate"].toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((finalValues["Conservative Estimate"] / finalValues["Total Invested"] - 1) * 100)}% total
                  return
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Expected Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${finalValues["Expected Growth"].toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((finalValues["Expected Growth"] / finalValues["Total Invested"] - 1) * 100)}% total return
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Optimistic Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${finalValues["Optimistic Estimate"].toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((finalValues["Optimistic Estimate"] / finalValues["Total Invested"] - 1) * 100)}% total
                  return
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


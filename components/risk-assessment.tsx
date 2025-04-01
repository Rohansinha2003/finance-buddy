"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

export function RiskAssessment() {
  const [riskScore, setRiskScore] = useState(50)
  const [timeHorizon, setTimeHorizon] = useState("5-10")
  const [investmentGoals, setInvestmentGoals] = useState("balanced")
  const [incomeStability, setIncomeStability] = useState("stable")

  // Calculate risk profile based on inputs
  const getRiskProfile = () => {
    let score = riskScore

    // Adjust score based on time horizon
    if (timeHorizon === "0-2") score -= 20
    else if (timeHorizon === "2-5") score -= 10
    else if (timeHorizon === "10+") score += 10

    // Adjust score based on goals
    if (investmentGoals === "income") score -= 15
    else if (investmentGoals === "growth") score += 15

    // Adjust score based on income stability
    if (incomeStability === "unstable") score -= 10
    else if (incomeStability === "very-stable") score += 10

    // Ensure score is between 0 and 100
    score = Math.max(0, Math.min(100, score))

    // Determine risk profile
    if (score < 30) return "Conservative"
    if (score < 50) return "Moderately Conservative"
    if (score < 70) return "Moderate"
    if (score < 85) return "Moderately Aggressive"
    return "Aggressive"
  }

  const riskProfile = getRiskProfile()

  // Get description based on risk profile
  const getRiskDescription = () => {
    switch (riskProfile) {
      case "Conservative":
        return "Focus on preserving capital with minimal risk. Primarily bonds and cash equivalents with very limited stock exposure."
      case "Moderately Conservative":
        return "Emphasis on stability with some growth potential. Higher allocation to bonds with modest stock exposure."
      case "Moderate":
        return "Balanced approach with equal focus on growth and stability. Mix of stocks and bonds for long-term growth with moderate volatility."
      case "Moderately Aggressive":
        return "Emphasis on growth with acceptance of higher volatility. Higher allocation to stocks with some bonds for diversification."
      case "Aggressive":
        return "Maximizing growth potential with acceptance of significant volatility. Primarily stocks with minimal bonds or cash."
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-medium">Your Risk Tolerance Assessment</h3>
        <p className="text-sm text-muted-foreground">
          Understanding your risk tolerance is crucial for creating an investment strategy that aligns with your comfort
          level and financial goals.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Risk Tolerance Questionnaire</CardTitle>
            <CardDescription>Adjust these parameters to match your situation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Risk Comfort Level</Label>
                <span className="text-sm font-medium">{riskScore}/100</span>
              </div>
              <Slider
                value={[riskScore]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => setRiskScore(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Risk Averse</span>
                <span>Risk Tolerant</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Investment Time Horizon</Label>
              <RadioGroup value={timeHorizon} onValueChange={setTimeHorizon}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0-2" id="horizon-1" />
                  <Label htmlFor="horizon-1">0-2 years (Short-term)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2-5" id="horizon-2" />
                  <Label htmlFor="horizon-2">2-5 years (Medium-term)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5-10" id="horizon-3" />
                  <Label htmlFor="horizon-3">5-10 years (Long-term)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10+" id="horizon-4" />
                  <Label htmlFor="horizon-4">10+ years (Very long-term)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Primary Investment Goal</Label>
              <RadioGroup value={investmentGoals} onValueChange={setInvestmentGoals}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="income" id="goal-1" />
                  <Label htmlFor="goal-1">Income & Capital Preservation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="balanced" id="goal-2" />
                  <Label htmlFor="goal-2">Balanced Growth & Income</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="growth" id="goal-3" />
                  <Label htmlFor="goal-3">Long-term Growth</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Income Stability</Label>
              <RadioGroup value={incomeStability} onValueChange={setIncomeStability}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unstable" id="income-1" />
                  <Label htmlFor="income-1">Variable/Uncertain</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="stable" id="income-2" />
                  <Label htmlFor="income-2">Stable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-stable" id="income-3" />
                  <Label htmlFor="income-3">Very Stable</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Reset to Default
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Your Risk Profile</CardTitle>
            <CardDescription>Based on your responses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-muted p-4 text-center">
              <h3 className="text-2xl font-bold">{riskProfile}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{getRiskDescription()}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">Suggested Asset Allocation</h4>
                <div className="mt-2 h-8 w-full overflow-hidden rounded-full bg-muted">
                  {riskProfile === "Conservative" && (
                    <>
                      <div className="h-full w-[20%] bg-blue-500 float-left" />
                      <div className="h-full w-[60%] bg-green-500 float-left" />
                      <div className="h-full w-[20%] bg-yellow-500 float-left" />
                    </>
                  )}
                  {riskProfile === "Moderately Conservative" && (
                    <>
                      <div className="h-full w-[35%] bg-blue-500 float-left" />
                      <div className="h-full w-[50%] bg-green-500 float-left" />
                      <div className="h-full w-[15%] bg-yellow-500 float-left" />
                    </>
                  )}
                  {riskProfile === "Moderate" && (
                    <>
                      <div className="h-full w-[50%] bg-blue-500 float-left" />
                      <div className="h-full w-[40%] bg-green-500 float-left" />
                      <div className="h-full w-[10%] bg-yellow-500 float-left" />
                    </>
                  )}
                  {riskProfile === "Moderately Aggressive" && (
                    <>
                      <div className="h-full w-[70%] bg-blue-500 float-left" />
                      <div className="h-full w-[25%] bg-green-500 float-left" />
                      <div className="h-full w-[5%] bg-yellow-500 float-left" />
                    </>
                  )}
                  {riskProfile === "Aggressive" && (
                    <>
                      <div className="h-full w-[85%] bg-blue-500 float-left" />
                      <div className="h-full w-[10%] bg-green-500 float-left" />
                      <div className="h-full w-[5%] bg-yellow-500 float-left" />
                    </>
                  )}
                </div>
                <div className="mt-2 flex text-xs">
                  <div className="flex items-center">
                    <div className="mr-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Stocks</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <div className="mr-1 h-2 w-2 rounded-full bg-green-500" />
                    <span>Bonds</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <div className="mr-1 h-2 w-2 rounded-full bg-yellow-500" />
                    <span>Cash</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Key Considerations</h4>
                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                  <li>This profile suggests investments aligned with a {riskProfile.toLowerCase()} risk tolerance</li>
                  <li>
                    Your{" "}
                    {timeHorizon === "10+"
                      ? "very long"
                      : timeHorizon === "5-10"
                        ? "long"
                        : timeHorizon === "2-5"
                          ? "medium"
                          : "short"}
                    -term time horizon influences this recommendation
                  </li>
                  <li>Consider reviewing your risk profile annually or when major life changes occur</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Recommended Investments</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


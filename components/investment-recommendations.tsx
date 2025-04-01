"use client"

import { useState } from "react"
import { ArrowRight, Check, HelpCircle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample investment recommendations
const recommendations = [
  {
    id: 1,
    title: "Diversified ETF Portfolio",
    description: "A balanced mix of ETFs covering US stocks, international markets, and bonds",
    allocation: [
      {
        name: "US Total Market ETF (VTI)",
        percentage: 40,
        description: "Broad exposure to the entire US stock market",
      },
      {
        name: "International Developed Markets ETF (VEA)",
        percentage: 20,
        description: "Exposure to established international markets",
      },
      { name: "US Bond ETF (BND)", percentage: 25, description: "Fixed income securities for stability" },
      {
        name: "Emerging Markets ETF (VWO)",
        percentage: 10,
        description: "Higher growth potential in developing economies",
      },
      { name: "REIT ETF (VNQ)", percentage: 5, description: "Real estate investment trusts for diversification" },
    ],
    expectedReturn: "7-9% annually",
    riskLevel: "Moderate",
    timeHorizon: "5+ years",
    reasoning:
      "Based on your savings rate, age, and moderate risk tolerance, this diversified portfolio provides a balance of growth potential and stability. The allocation is designed to weather market volatility while providing long-term growth.",
  },
  {
    id: 2,
    title: "Growth-Focused Portfolio",
    description: "Higher allocation to growth assets for potentially higher returns",
    allocation: [
      {
        name: "US Growth ETF (VUG)",
        percentage: 45,
        description: "Focus on US companies with above-average growth potential",
      },
      {
        name: "International Growth ETF (VWIGX)",
        percentage: 25,
        description: "Growth-oriented international companies",
      },
      { name: "Small-Cap ETF (VB)", percentage: 15, description: "Smaller companies with higher growth potential" },
      { name: "US Bond ETF (BND)", percentage: 10, description: "Minimal fixed income for some stability" },
      { name: "Technology Sector ETF (VGT)", percentage: 5, description: "Exposure to technology sector growth" },
    ],
    expectedReturn: "9-12% annually",
    riskLevel: "Moderate-High",
    timeHorizon: "7+ years",
    reasoning:
      "This portfolio is recommended as an alternative if you're comfortable with more volatility in exchange for potentially higher returns. Your age and steady income make this a viable option if you won't need these funds in the near term.",
  },
  {
    id: 3,
    title: "Income & Stability Portfolio",
    description: "Focus on dividend income and capital preservation",
    allocation: [
      {
        name: "Dividend Appreciation ETF (VIG)",
        percentage: 30,
        description: "Companies with a history of dividend growth",
      },
      { name: "US Bond ETF (BND)", percentage: 40, description: "Core fixed income allocation for stability" },
      { name: "High Dividend Yield ETF (VYM)", percentage: 15, description: "Higher current dividend income" },
      {
        name: "International Dividend ETF (VIGI)",
        percentage: 10,
        description: "International companies with growing dividends",
      },
      {
        name: "Short-Term Corporate Bond ETF (VCSH)",
        percentage: 5,
        description: "Lower duration bonds for reduced interest rate risk",
      },
    ],
    expectedReturn: "5-7% annually",
    riskLevel: "Low-Moderate",
    timeHorizon: "3+ years",
    reasoning:
      "If capital preservation is more important to you than maximum growth, this portfolio emphasizes stability and income. It's suitable if you might need to access some of these funds in the medium term or prefer less volatility in your investments.",
  },
]

export function InvestmentRecommendations() {
  const [selectedRecommendation, setSelectedRecommendation] = useState(recommendations[0])

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-medium">AI-Generated Investment Strategy</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Info</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  These recommendations are based on your financial profile, savings rate, and risk tolerance. Always
                  consult with a financial advisor before making investment decisions.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm text-muted-foreground">
          Based on your financial profile, savings patterns, and risk assessment, we've generated personalized
          investment strategies to help you maximize your returns while aligning with your financial goals.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {recommendations.map((rec) => (
          <Card
            key={rec.id}
            className={`cursor-pointer transition-all hover:border-primary ${selectedRecommendation.id === rec.id ? "border-primary" : ""}`}
            onClick={() => setSelectedRecommendation(rec)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                {rec.title}
                {selectedRecommendation.id === rec.id && <Check className="ml-2 inline h-4 w-4 text-primary" />}
              </CardTitle>
              <CardDescription className="text-xs">{rec.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Expected Return:</span>
                  <span className="font-medium">{rec.expectedReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk Level:</span>
                  <span className="font-medium">{rec.riskLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Horizon:</span>
                  <span className="font-medium">{rec.timeHorizon}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant={selectedRecommendation.id === rec.id ? "default" : "outline"}
                size="sm"
                className="w-full"
              >
                {selectedRecommendation.id === rec.id ? "Selected" : "Select"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recommended Allocation</CardTitle>
          <CardDescription>
            {selectedRecommendation.title} - {selectedRecommendation.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex h-4 w-full overflow-hidden rounded-full">
              {selectedRecommendation.allocation.map((item, index) => (
                <div
                  key={index}
                  className="h-full"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: getColorForIndex(index),
                  }}
                />
              ))}
            </div>

            <div className="grid gap-2">
              {selectedRecommendation.allocation.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: getColorForIndex(index) }} />
                    <div className="flex items-center">
                      <span className="text-sm font-medium">{item.name}</span>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                            <HelpCircle className="h-3 w-3" />
                            <span className="sr-only">More info</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="text-sm">
                            <p>{item.description}</p>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Why This Strategy?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{selectedRecommendation.reasoning}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Adjust Preferences</Button>
          <Button>
            Apply This Strategy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// Helper function to get a color based on index
function getColorForIndex(index: number): string {
  const colors = [
    "#4f46e5", // indigo-600
    "#0891b2", // cyan-600
    "#16a34a", // green-600
    "#ca8a04", // yellow-600
    "#dc2626", // red-600
    "#9333ea", // purple-600
    "#2563eb", // blue-600
    "#db2777", // pink-600
  ]

  return colors[index % colors.length]
}


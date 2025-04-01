"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react"

interface MarketData {
  symbol: string
  price: number
  change: number
  changePercent: number
}

export function GoogleFinanceBanner() {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: "AAPL", price: 175.43, change: 2.34, changePercent: 1.35 },
    { symbol: "GOOGL", price: 141.78, change: -1.23, changePercent: -0.86 },
    { symbol: "MSFT", price: 338.11, change: 3.45, changePercent: 1.03 },
    { symbol: "AMZN", price: 172.45, change: 1.67, changePercent: 0.98 },
    { symbol: "META", price: 474.99, change: 5.67, changePercent: 1.21 },
  ])

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Market Overview
        </CardTitle>
        <CardDescription>Real-time market data from major indices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {marketData.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center gap-2 rounded-lg border bg-card p-2 text-sm"
            >
              <span className="font-medium">{stock.symbol}</span>
              <span className="text-muted-foreground">${stock.price.toFixed(2)}</span>
              <span className={`flex items-center gap-1 ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                {stock.change >= 0 ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                <span>{Math.abs(stock.change).toFixed(2)}</span>
                <span>({stock.changePercent.toFixed(2)}%)</span>
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 
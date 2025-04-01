"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Star, Search } from "lucide-react"

export function StarFolioWidget() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentStock, setCurrentStock] = useState("INFY")
  const [stockName, setStockName] = useState("Infosys Ltd.")

  useEffect(() => {
    // Load the Trendlyne widget script
    const script = document.createElement("script")
    script.src = "https://cdn-static.trendlyne.com/static/js/webwidgets/tl-widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script)
    }
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const stockSymbol = searchQuery.trim().toUpperCase()
      setCurrentStock(stockSymbol)
      
      // Fetch stock name from Trendlyne API
      try {
        const response = await fetch(`https://trendlyne.com/api/v1/stock/${stockSymbol}/`)
        const data = await response.json()
        setStockName(data.name || `${stockSymbol} Stock`)
      } catch (error) {
        console.error("Error fetching stock details:", error)
        setStockName(`${stockSymbol} Stock`)
      }
    }
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          Star Portfolio Analysis
        </CardTitle>
        <CardDescription>Detailed SWOT analysis of your portfolio stocks</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="mb-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for a stock (e.g., AAPL, GOOGL, MSFT)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
        <div className="rounded-lg border bg-muted/50 p-2">
          <p className="text-sm text-muted-foreground">
            Currently analyzing: <span className="font-medium">{stockName}</span> ({currentStock})
          </p>
        </div>
        <blockquote
          className="trendlyne-widgets mt-4"
          data-get-url={`https://trendlyne.com/web-widget/swot-widget/Poppins/${currentStock}/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`}
          data-theme="light"
        />
      </CardContent>
    </Card>
  )
} 
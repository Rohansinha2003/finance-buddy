"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export function InvestmentAdvisor() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/investment-advice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()
      setResponse(data.advice)
    } catch (error) {
      console.error("Error getting investment advice:", error)
      setResponse("Sorry, there was an error getting investment advice. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Investment Advisor</CardTitle>
        <CardDescription>Get personalized investment advice based on your financial goals</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="query">What would you like to know about investments?</Label>
            <Textarea
              id="query"
              placeholder="e.g., What's the best investment strategy for a 30-year-old with $10,000 to invest?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit" disabled={isLoading || !query.trim()}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Get Advice
          </Button>
        </form>

        {response && (
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold">AI Response:</h3>
            <div className="rounded-lg bg-muted p-4 text-sm">{response}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 
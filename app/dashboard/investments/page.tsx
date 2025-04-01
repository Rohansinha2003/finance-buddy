"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CreditCard,
  DollarSign,
  Home,
  Menu,
  Package,
  PieChart,
  Settings,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { InvestmentRecommendations } from "@/components/investment-recommendations"
import { RiskAssessment } from "@/components/risk-assessment"
import { InvestmentGrowthChart } from "@/components/investment-growth-chart"
import { InvestmentAdvisor } from "@/components/InvestmentAdvisor"
import { GoogleFinanceBanner } from "@/components/GoogleFinanceBanner"
import { StarFolioWidget } from "@/components/StarFolioWidget"

export default function InvestmentsPage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Finance Buddy</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/dashboard" className="transition-colors hover:text-primary">
                Dashboard
              </Link>
              <Link href="/dashboard/expenses" className="transition-colors hover:text-primary">
                Expenses
              </Link>
              <Link href="/dashboard/budgets" className="transition-colors hover:text-primary">
                Budgets
              </Link>
              <Link href="/dashboard/investments" className="text-primary transition-colors">
                Investments
              </Link>
              <Link href="/dashboard/reports" className="transition-colors hover:text-primary">
                Reports
              </Link>
            </nav>
          </div>
          <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileNavOpen(false)}>
                  <span className="font-bold">Finance Buddy</span>
                </Link>
              </div>
              <div className="flex flex-col gap-4 px-1 py-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/expenses"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <CreditCard className="h-5 w-5" />
                  Expenses
                </Link>
                <Link
                  href="/dashboard/budgets"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <DollarSign className="h-5 w-5" />
                  Budgets
                </Link>
                <Link
                  href="/dashboard/investments"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <TrendingUp className="h-5 w-5" />
                  Investments
                </Link>
                <Link
                  href="/dashboard/reports"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <BarChart3 className="h-5 w-5" />
                  Reports
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="ml-auto hidden h-8 md:flex">
                <TrendingUp className="mr-2 h-4 w-4" />
                New Investment
              </Button>
            </div>
            <nav className="flex items-center">
              <Button variant="ghost" size="icon" aria-label="Settings" className="mr-1">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Button>
              <Button variant="ghost" size="icon" aria-label="User account">
                <User className="h-4 w-4" />
                <span className="sr-only">Account</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Investment Advisor</h1>
              <p className="text-muted-foreground">AI-powered recommendations for optimal investment strategies</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="md:hidden">
                <TrendingUp className="mr-2 h-4 w-4" />
                New Investment
              </Button>
              <Button>
                <BrainCircuit className="mr-2 h-4 w-4" />
                Get Personalized Advice
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available for Investment</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,100.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 18%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Investments</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,750.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 7%</span> growth this year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Potential Returns (5yr)</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$9,320.00</div>
                <p className="text-xs text-muted-foreground">Based on recommended portfolio</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Moderate</div>
                <p className="text-xs text-muted-foreground">Balanced portfolio mix</p>
              </CardContent>
            </Card>
          </div>

          <GoogleFinanceBanner />

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Investment Growth</CardTitle>
                <CardDescription>Your investment portfolio performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <InvestmentGrowthChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>Your current investment risk profile</CardDescription>
              </CardHeader>
              <CardContent>
                <RiskAssessment />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <InvestmentAdvisor />
            <StarFolioWidget />
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Investment Recommendations</CardTitle>
                <CardDescription>Personalized investment suggestions based on your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <InvestmentRecommendations />
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader className="flex flex-row items-center space-y-0">
              <div>
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  AI Investment Recommendations
                </CardTitle>
                <CardDescription>
                  Personalized investment strategies based on your financial profile and goals
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="recommendations" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  <TabsTrigger value="assessment">Risk Assessment</TabsTrigger>
                  <TabsTrigger value="projection">Growth Projection</TabsTrigger>
                </TabsList>
                <TabsContent value="recommendations" className="space-y-4 pt-4">
                  <InvestmentRecommendations />
                </TabsContent>
                <TabsContent value="assessment" className="space-y-4 pt-4">
                  <RiskAssessment />
                </TabsContent>
                <TabsContent value="projection" className="space-y-4 pt-4">
                  <InvestmentGrowthChart />
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Apply Recommended Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Investment Education</CardTitle>
                <CardDescription>Learn more about investment options and strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Understanding ETFs vs. Mutual Funds</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Exchange-traded funds (ETFs) and mutual funds both offer diversification, but they differ in how
                      they're traded and managed.
                    </p>
                    <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                      Read more
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">The Power of Compound Interest</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Learn how compound interest can significantly grow your investments over time and why starting
                      early matters.
                    </p>
                    <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                      Read more
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Balancing Risk and Reward</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Understanding the relationship between risk and potential returns is essential for building an
                      effective investment strategy.
                    </p>
                    <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                      Read more
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Articles
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Goals</CardTitle>
                <CardDescription>Track progress toward your financial objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Retirement Fund</span>
                      <span className="text-sm text-muted-foreground">$12,500 / $500,000</span>
                    </div>
                    <Progress value={2.5} className="h-2" />
                    <p className="text-xs text-muted-foreground">Target date: 2055</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Home Down Payment</span>
                      <span className="text-sm text-muted-foreground">$15,000 / $60,000</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <p className="text-xs text-muted-foreground">Target date: 2026</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Emergency Fund</span>
                      <span className="text-sm text-muted-foreground">$8,000 / $12,000</span>
                    </div>
                    <Progress value={66.7} className="h-2" />
                    <p className="text-xs text-muted-foreground">Target date: 2024</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Add New Goal
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Download,
  Home,
  LineChart,
  Menu,
  PieChart,
  Settings,
  TrendingUp,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ExpenseChart } from "@/components/expense-chart"
import { BudgetOverview } from "@/components/budget-overview"

export default function ReportsPage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [timeRange, setTimeRange] = useState("this-month")

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
              <Link href="/dashboard/investments" className="transition-colors hover:text-primary">
                Investments
              </Link>
              <Link href="/dashboard/reports" className="text-primary transition-colors">
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
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <TrendingUp className="h-5 w-5" />
                  Investments
                </Link>
                <Link
                  href="/dashboard/reports"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium text-primary"
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
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="ml-auto h-8 w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
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
              <h1 className="text-2xl font-bold tracking-tight">Financial Reports</h1>
              <p className="text-muted-foreground">Analyze your financial data and track your progress</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden md:flex">
                <Download className="mr-2 h-4 w-4" />
                Export PDF
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mt-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="expenses">Expense Analysis</TabsTrigger>
              <TabsTrigger value="income">Income Analysis</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$4,250.00</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">↑ 5%</span> from previous period
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,150.00</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-red-500">↑ 8%</span> from previous period
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Net Savings</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,100.00</div>
                    <p className="text-xs text-muted-foreground">49.4% of income saved</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Budget Adherence</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">84%</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">↑ 3%</span> from previous period
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Income vs. Expenses</CardTitle>
                    <CardDescription>Comparison over the selected period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <IncomeVsExpensesChart />
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Expense Breakdown</CardTitle>
                    <CardDescription>By category for the selected period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ExpenseBreakdownChart />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Summary</CardTitle>
                  <CardDescription>Financial overview for each month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-sm font-medium">
                      <div className="col-span-2">Month</div>
                      <div className="col-span-2">Income</div>
                      <div className="col-span-2">Expenses</div>
                      <div className="col-span-2">Savings</div>
                      <div className="col-span-2">Savings Rate</div>
                      <div className="col-span-2">Budget Adherence</div>
                    </div>
                    <div className="divide-y">
                      <MonthlySummaryRow
                        month="February 2024"
                        income={4250}
                        expenses={2150}
                        savings={2100}
                        savingsRate={49.4}
                        budgetAdherence={84}
                      />
                      <MonthlySummaryRow
                        month="January 2024"
                        income={4100}
                        expenses={2300}
                        savings={1800}
                        savingsRate={43.9}
                        budgetAdherence={81}
                      />
                      <MonthlySummaryRow
                        month="December 2023"
                        income={4500}
                        expenses={2900}
                        savings={1600}
                        savingsRate={35.6}
                        budgetAdherence={76}
                      />
                      <MonthlySummaryRow
                        month="November 2023"
                        income={4000}
                        expenses={2350}
                        savings={1650}
                        savingsRate={41.3}
                        budgetAdherence={82}
                      />
                      <MonthlySummaryRow
                        month="October 2023"
                        income={3950}
                        expenses={2250}
                        savings={1700}
                        savingsRate={43.0}
                        budgetAdherence={85}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Full History
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="expenses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expense Trends</CardTitle>
                  <CardDescription>Your spending patterns over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ExpenseChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                  <CardDescription>Your spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BudgetOverview />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Expense Categories</CardTitle>
                  <CardDescription>Where most of your money is going</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <TopExpenseItem category="Housing" amount={1200} percentage={55.8} />
                    <TopExpenseItem category="Food & Dining" amount={420} percentage={19.5} />
                    <TopExpenseItem category="Utilities" amount={330} percentage={15.3} />
                    <TopExpenseItem category="Transportation" amount={250} percentage={11.6} />
                    <TopExpenseItem category="Entertainment" amount={180} percentage={8.4} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Categories
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="income" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Income Sources</CardTitle>
                  <CardDescription>Breakdown of your income streams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <IncomeSourcesChart />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Income History</CardTitle>
                  <CardDescription>Your income over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-sm font-medium">
                      <div className="col-span-3">Source</div>
                      <div className="col-span-3">Amount</div>
                      <div className="col-span-3">Date</div>
                      <div className="col-span-3">Category</div>
                    </div>
                    <div className="divide-y">
                      <IncomeHistoryRow source="Salary" amount={3800} date="Feb 28, 2024" category="Employment" />
                      <IncomeHistoryRow
                        source="Freelance Project"
                        amount={450}
                        date="Feb 15, 2024"
                        category="Side Hustle"
                      />
                      <IncomeHistoryRow source="Salary" amount={3800} date="Jan 31, 2024" category="Employment" />
                      <IncomeHistoryRow
                        source="Dividend Payment"
                        amount={120}
                        date="Jan 20, 2024"
                        category="Investment"
                      />
                      <IncomeHistoryRow
                        source="Freelance Project"
                        amount={300}
                        date="Jan 12, 2024"
                        category="Side Hustle"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Income
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Trends</CardTitle>
                  <CardDescription>Track your financial progress over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px]">
                    <FinancialTrendsChart />
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Savings Rate</CardTitle>
                    <CardDescription>Percentage of income saved over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <SavingsRateChart />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Net Worth Growth</CardTitle>
                    <CardDescription>Track your overall financial growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <NetWorthChart />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Year-over-Year Comparison</CardTitle>
                  <CardDescription>Compare your finances with previous years</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-sm font-medium">
                      <div className="col-span-3">Category</div>
                      <div className="col-span-3">2024 (YTD)</div>
                      <div className="col-span-3">2023</div>
                      <div className="col-span-3">Change</div>
                    </div>
                    <div className="divide-y">
                      <YearComparisonRow
                        category="Total Income"
                        currentYear={8350}
                        previousYear={45000}
                        change={+11.3}
                      />
                      <YearComparisonRow
                        category="Total Expenses"
                        currentYear={4450}
                        previousYear={28500}
                        change={-6.2}
                      />
                      <YearComparisonRow category="Savings" currentYear={3900} previousYear={16500} change={+41.8} />
                      <YearComparisonRow
                        category="Investments"
                        currentYear={2500}
                        previousYear={10000}
                        change={+50.0}
                      />
                      <YearComparisonRow category="Debt Payments" currentYear={1200} previousYear={7200} change={0} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Detailed Comparison
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

// Placeholder components for charts
function IncomeVsExpensesChart() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/20 rounded-md">
      <div className="text-center">
        <LineChart className="mx-auto h-10 w-10 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">Income vs Expenses Chart</p>
      </div>
    </div>
  )
}

function ExpenseBreakdownChart() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/20 rounded-md">
      <div className="text-center">
        <PieChart className="mx-auto h-10 w-10 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">Expense Breakdown Chart</p>
      </div>
    </div>
  )
}

function IncomeSourcesChart() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/20 rounded-md">
      <div className="text-center">
        <PieChart className="mx-auto h-10 w-10 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">Income Sources Chart</p>
      </div>
    </div>
  )
}

function FinancialTrendsChart() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/20 rounded-md">
      <div className="text-center">
        <LineChart className="mx-auto h-10 w-10 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">Financial Trends Chart</p>
      </div>
    </div>
  )
}

function SavingsRateChart() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/20 rounded-md">
      <div className="text-center">
        <BarChart3 className="mx-auto h-10 w-10 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">Savings Rate Chart</p>
      </div>
    </div>
  )
}

function NetWorthChart() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/20 rounded-md">
      <div className="text-center">
        <TrendingUp className="mx-auto h-10 w-10 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">Net Worth Chart</p>
      </div>
    </div>
  )
}

function MonthlySummaryRow({ month, income, expenses, savings, savingsRate, budgetAdherence }) {
  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
      <div className="col-span-2 font-medium">{month}</div>
      <div className="col-span-2">${income.toFixed(2)}</div>
      <div className="col-span-2">${expenses.toFixed(2)}</div>
      <div className="col-span-2">${savings.toFixed(2)}</div>
      <div className="col-span-2">{savingsRate.toFixed(1)}%</div>
      <div className="col-span-2">{budgetAdherence}%</div>
    </div>
  )
}

function TopExpenseItem({ category, amount, percentage }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{category}</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">${amount.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground">({percentage}%)</span>
        </div>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

function IncomeHistoryRow({ source, amount, date, category }) {
  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
      <div className="col-span-3 font-medium">{source}</div>
      <div className="col-span-3 text-green-600">${amount.toFixed(2)}</div>
      <div className="col-span-3 text-muted-foreground">{date}</div>
      <div className="col-span-3">
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
          {category}
        </span>
      </div>
    </div>
  )
}

function YearComparisonRow({ category, currentYear, previousYear, change }) {
  const isPositive = change > 0
  const isNeutral = change === 0

  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
      <div className="col-span-3 font-medium">{category}</div>
      <div className="col-span-3">${currentYear.toFixed(2)}</div>
      <div className="col-span-3">${previousYear.toFixed(2)}</div>
      <div className="col-span-3">
        <span className={`${isPositive ? "text-green-600" : isNeutral ? "text-muted-foreground" : "text-red-600"}`}>
          {isPositive ? "+" : ""}
          {change}%
        </span>
      </div>
    </div>
  )
}


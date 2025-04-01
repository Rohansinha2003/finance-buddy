"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  BarChart3,
  CreditCard,
  DollarSign,
  Home,
  Menu,
  Plus,
  Settings,
  TrendingUp,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ExpenseChart } from "@/components/expense-chart"
import { ExpenseForm } from "@/components/expense-form"
import { RecentTransactions } from "@/components/recent-transactions"
import { BudgetOverview } from "@/components/budget-overview"
import { FinancialAdvisor } from "@/components/FinancialAdvisor"

export default function DashboardPage() {
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
              <Link href="/dashboard" className="text-primary transition-colors">
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
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium text-primary"
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
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <BarChart3 className="h-5 w-5" />
                  Reports
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
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
              <h1 className="text-2xl font-bold tracking-tight">Financial Dashboard</h1>
              <p className="text-muted-foreground">Overview of your financial status and activities</p>
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,250.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 5%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,150.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">↑ 8%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,100.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 12%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investment Returns</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$450.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 15%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Expense Overview</CardTitle>
                <CardDescription>Your spending patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Budget Overview</CardTitle>
                <CardDescription>Your budget utilization this month</CardDescription>
              </CardHeader>
              <CardContent>
                <BudgetOverview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Financial Advisor</CardTitle>
                <CardDescription>AI-powered financial insights</CardDescription>
              </CardHeader>
              <CardContent>
                <FinancialAdvisor />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function Download(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


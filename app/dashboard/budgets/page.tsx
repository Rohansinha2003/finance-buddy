"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Edit,
  Home,
  Menu,
  Package,
  Percent,
  Plus,
  Settings,
  TrendingUp,
  Trash2,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BudgetOverview } from "@/components/budget-overview"

export default function BudgetsPage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isAddBudgetOpen, setIsAddBudgetOpen] = useState(false)
  const [newBudgetData, setNewBudgetData] = useState({
    category: "",
    amount: "",
    period: "monthly",
  })

  const handleNewBudgetChange = (e) => {
    const { name, value } = e.target
    setNewBudgetData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddBudget = (e) => {
    e.preventDefault()
    // In a real app, this would save the new budget
    console.log("Adding new budget:", newBudgetData)
    setIsAddBudgetOpen(false)
    setNewBudgetData({
      category: "",
      amount: "",
      period: "monthly",
    })
  }

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
              <Link href="/dashboard/budgets" className="text-primary transition-colors">
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
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium text-primary"
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
              <Dialog open={isAddBudgetOpen} onOpenChange={setIsAddBudgetOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="ml-auto hidden h-8 md:flex">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Budget
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Budget</DialogTitle>
                    <DialogDescription>Set up a new budget to help manage your spending</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddBudget}>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          name="category"
                          value={newBudgetData.category}
                          onValueChange={(value) => handleNewBudgetChange({ target: { name: "category", value } })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="food">Food & Dining</SelectItem>
                            <SelectItem value="transportation">Transportation</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                            <SelectItem value="utilities">Utilities</SelectItem>
                            <SelectItem value="housing">Housing</SelectItem>
                            <SelectItem value="shopping">Shopping</SelectItem>
                            <SelectItem value="health">Health & Medical</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Budget Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                          <Input
                            id="amount"
                            name="amount"
                            placeholder="0.00"
                            className="pl-7"
                            value={newBudgetData.amount}
                            onChange={handleNewBudgetChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="period">Budget Period</Label>
                        <Select
                          name="period"
                          value={newBudgetData.period}
                          onValueChange={(value) => handleNewBudgetChange({ target: { name: "period", value } })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Create Budget</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
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
              <h1 className="text-2xl font-bold tracking-tight">Budgets</h1>
              <p className="text-muted-foreground">Plan and track your spending with budgets</p>
            </div>
            <div className="flex items-center gap-2">
              <Dialog open={isAddBudgetOpen} onOpenChange={setIsAddBudgetOpen}>
                <DialogTrigger asChild>
                  <Button className="md:hidden">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Budget
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Budget</DialogTitle>
                    <DialogDescription>Set up a new budget to help manage your spending</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddBudget}>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          name="category"
                          value={newBudgetData.category}
                          onValueChange={(value) => handleNewBudgetChange({ target: { name: "category", value } })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="food">Food & Dining</SelectItem>
                            <SelectItem value="transportation">Transportation</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                            <SelectItem value="utilities">Utilities</SelectItem>
                            <SelectItem value="housing">Housing</SelectItem>
                            <SelectItem value="shopping">Shopping</SelectItem>
                            <SelectItem value="health">Health & Medical</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Budget Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                          <Input
                            id="amount"
                            name="amount"
                            placeholder="0.00"
                            className="pl-7"
                            value={newBudgetData.amount}
                            onChange={handleNewBudgetChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Create Budget</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mt-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="manage">Manage Budgets</TabsTrigger>
              <TabsTrigger value="history">Budget History</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Budget Overview</CardTitle>
                  <CardDescription>Your budget utilization this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <BudgetOverview />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Detailed Breakdown
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,550.00</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">↑ 5%</span> from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Spent So Far</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$1,380.00</div>
                    <p className="text-xs text-muted-foreground">54% of total budget</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Remaining</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$1,170.00</div>
                    <p className="text-xs text-muted-foreground">46% of total budget</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Daily Budget</CardTitle>
                    <Percent className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$39.00</div>
                    <p className="text-xs text-muted-foreground">For the next 30 days</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="manage" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Budgets</CardTitle>
                  <CardDescription>Create, edit, and delete your budget categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-sm font-medium">
                      <div className="col-span-4">Category</div>
                      <div className="col-span-2">Period</div>
                      <div className="col-span-2">Budget</div>
                      <div className="col-span-2">Spent</div>
                      <div className="col-span-1">Progress</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y">
                      <BudgetItem category="Food & Dining" period="Monthly" budget={500} spent={420} progress={84} />
                      <BudgetItem category="Transportation" period="Monthly" budget={300} spent={250} progress={83} />
                      <BudgetItem category="Entertainment" period="Monthly" budget={200} spent={180} progress={90} />
                      <BudgetItem category="Utilities" period="Monthly" budget={350} spent={330} progress={94} />
                      <BudgetItem category="Housing" period="Monthly" budget={1200} spent={1200} progress={100} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => setIsAddBudgetOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Budget
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Budget History</CardTitle>
                  <CardDescription>View your budget performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-sm font-medium">
                      <div className="col-span-3">Month</div>
                      <div className="col-span-3">Total Budget</div>
                      <div className="col-span-3">Total Spent</div>
                      <div className="col-span-3">Status</div>
                    </div>
                    <div className="divide-y">
                      <BudgetHistoryItem month="February 2024" budget={2550} spent={2380} status="Under Budget" />
                      <BudgetHistoryItem month="January 2024" budget={2500} spent={2650} status="Over Budget" />
                      <BudgetHistoryItem month="December 2023" budget={2700} spent={2900} status="Over Budget" />
                      <BudgetHistoryItem month="November 2023" budget={2500} spent={2350} status="Under Budget" />
                      <BudgetHistoryItem month="October 2023" budget={2400} spent={2250} status="Under Budget" />
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
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function BudgetItem({ category, period, budget, spent, progress }) {
  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
      <div className="col-span-4 font-medium">{category}</div>
      <div className="col-span-2">{period}</div>
      <div className="col-span-2">${budget.toFixed(2)}</div>
      <div className="col-span-2">${spent.toFixed(2)}</div>
      <div className="col-span-1">
        <div className="flex items-center gap-2">
          <Progress value={progress} className="h-2 w-12" />
          <span className="text-xs">{progress}%</span>
        </div>
      </div>
      <div className="col-span-1 flex justify-end space-x-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Edit className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Trash2 className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
  )
}

function BudgetHistoryItem({ month, budget, spent, status }) {
  const isOverBudget = status === "Over Budget"

  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
      <div className="col-span-3 font-medium">{month}</div>
      <div className="col-span-3">${budget.toFixed(2)}</div>
      <div className="col-span-3">${spent.toFixed(2)}</div>
      <div className="col-span-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            isOverBudget ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  )
}


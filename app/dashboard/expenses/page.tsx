"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Filter,
  Home,
  Menu,
  Plus,
  Search,
  Settings,
  TrendingUp,
  Trash2,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ExpenseForm } from "@/components/expense-form"
import { RecentTransactions } from "@/components/recent-transactions"

export default function ExpensesPage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [dateFilter, setDateFilter] = useState("all-time")
  const [categoryFilter, setCategoryFilter] = useState("all")

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
              <Link href="/dashboard/expenses" className="text-primary transition-colors">
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
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/expenses"
                  className="flex items-center gap-2 px-6 py-2 text-lg font-medium text-primary"
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
                <Plus className="mr-2 h-4 w-4" />
                Add Expense
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
              <h1 className="text-2xl font-bold tracking-tight">Expenses</h1>
              <p className="text-muted-foreground">Track, manage, and analyze your spending</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="md:hidden">
                <Plus className="mr-2 h-4 w-4" />
                Add Expense
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Expense
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="mt-6">
            <TabsList>
              <TabsTrigger value="all">All Expenses</TabsTrigger>
              <TabsTrigger value="recurring">Recurring</TabsTrigger>
              <TabsTrigger value="add">Add New</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expense Tracker</CardTitle>
                  <CardDescription>View and manage all your expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4 md:flex-row md:items-end">
                    <div className="flex-1 space-y-2">
                      <label htmlFor="search" className="text-sm font-medium">
                        Search
                      </label>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="search"
                          placeholder="Search expenses..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-[180px] space-y-2">
                      <label htmlFor="date-filter" className="text-sm font-medium">
                        Date Range
                      </label>
                      <Select value={dateFilter} onValueChange={setDateFilter}>
                        <SelectTrigger id="date-filter">
                          <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="this-month">This Month</SelectItem>
                          <SelectItem value="last-month">Last Month</SelectItem>
                          <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                          <SelectItem value="this-year">This Year</SelectItem>
                          <SelectItem value="all-time">All Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-full md:w-[180px] space-y-2">
                      <label htmlFor="category-filter" className="text-sm font-medium">
                        Category
                      </label>
                      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger id="category-filter">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
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
                    <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>

                  <div className="mt-6 rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-sm font-medium">
                      <div className="col-span-5">Description</div>
                      <div className="col-span-2">Category</div>
                      <div className="col-span-2">Date</div>
                      <div className="col-span-2 text-right">Amount</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y">
                      {/* Sample expense items */}
                      <ExpenseItem
                        description="Grocery Shopping"
                        category="Food"
                        date="Today, 2:30 PM"
                        amount={120.5}
                      />
                      <ExpenseItem
                        description="Electric Bill"
                        category="Utilities"
                        date="Feb 28, 3:15 PM"
                        amount={85.75}
                      />
                      <ExpenseItem
                        description="Amazon Purchase"
                        category="Shopping"
                        date="Feb 27, 7:20 PM"
                        amount={65.99}
                      />
                      <ExpenseItem
                        description="Gas Station"
                        category="Transportation"
                        date="Feb 26, 5:45 PM"
                        amount={45.0}
                      />
                      <ExpenseItem
                        description="Movie Tickets"
                        category="Entertainment"
                        date="Feb 25, 8:00 PM"
                        amount={32.5}
                      />
                      <ExpenseItem description="Coffee Shop" category="Food" date="Feb 25, 9:15 AM" amount={8.75} />
                      <ExpenseItem
                        description="Internet Bill"
                        category="Utilities"
                        date="Feb 24, 10:00 AM"
                        amount={79.99}
                      />
                      <ExpenseItem description="Pharmacy" category="Health" date="Feb 23, 4:30 PM" amount={45.25} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Showing 8 of 24 expenses</div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="recurring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recurring Expenses</CardTitle>
                  <CardDescription>Manage your recurring bills and subscriptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-sm font-medium">
                      <div className="col-span-4">Description</div>
                      <div className="col-span-2">Category</div>
                      <div className="col-span-2">Frequency</div>
                      <div className="col-span-2">Next Due</div>
                      <div className="col-span-1 text-right">Amount</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y">
                      <RecurringExpenseItem
                        description="Netflix Subscription"
                        category="Entertainment"
                        frequency="Monthly"
                        nextDue="Mar 15, 2024"
                        amount={14.99}
                      />
                      <RecurringExpenseItem
                        description="Rent Payment"
                        category="Housing"
                        frequency="Monthly"
                        nextDue="Mar 1, 2024"
                        amount={1200.0}
                      />
                      <RecurringExpenseItem
                        description="Gym Membership"
                        category="Health"
                        frequency="Monthly"
                        nextDue="Mar 5, 2024"
                        amount={49.99}
                      />
                      <RecurringExpenseItem
                        description="Phone Bill"
                        category="Utilities"
                        frequency="Monthly"
                        nextDue="Mar 10, 2024"
                        amount={85.0}
                      />
                      <RecurringExpenseItem
                        description="Car Insurance"
                        category="Transportation"
                        frequency="Quarterly"
                        nextDue="Apr 15, 2024"
                        amount={240.0}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Recurring Expense
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="add" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Expense</CardTitle>
                  <CardDescription>Record your latest expense</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseForm />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Expenses</CardTitle>
                  <CardDescription>Your most recent expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentTransactions />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Expenses
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

function ExpenseItem({ description, category, date, amount }) {
  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
      <div className="col-span-5 font-medium">{description}</div>
      <div className="col-span-2">
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
          {category}
        </span>
      </div>
      <div className="col-span-2 text-muted-foreground">{date}</div>
      <div className="col-span-2 text-right font-medium">${amount.toFixed(2)}</div>
      <div className="col-span-1 flex justify-end">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Trash2 className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
  )
}

function RecurringExpenseItem({ description, category, frequency, nextDue, amount }) {
  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
      <div className="col-span-4 font-medium">{description}</div>
      <div className="col-span-2">
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
          {category}
        </span>
      </div>
      <div className="col-span-2">{frequency}</div>
      <div className="col-span-2 text-muted-foreground">{nextDue}</div>
      <div className="col-span-1 text-right font-medium">${amount.toFixed(2)}</div>
      <div className="col-span-1 flex justify-end">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Trash2 className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
  )
}


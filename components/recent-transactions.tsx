"use client"

import { CreditCard, DollarSign, ShoppingCart, Utensils, Zap } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample transaction data
const transactions = [
  {
    id: "1",
    description: "Grocery Shopping",
    amount: -120.5,
    date: "Today, 2:30 PM",
    category: "Food",
    icon: <Utensils className="h-4 w-4" />,
    color: "bg-orange-500",
  },
  {
    id: "2",
    description: "Monthly Salary",
    amount: 4250.0,
    date: "Mar 1, 9:00 AM",
    category: "Income",
    icon: <DollarSign className="h-4 w-4" />,
    color: "bg-green-500",
  },
  {
    id: "3",
    description: "Electric Bill",
    amount: -85.75,
    date: "Feb 28, 3:15 PM",
    category: "Utilities",
    icon: <Zap className="h-4 w-4" />,
    color: "bg-yellow-500",
  },
  {
    id: "4",
    description: "Amazon Purchase",
    amount: -65.99,
    date: "Feb 27, 7:20 PM",
    category: "Shopping",
    icon: <ShoppingCart className="h-4 w-4" />,
    color: "bg-blue-500",
  },
  {
    id: "5",
    description: "Gas Station",
    amount: -45.0,
    date: "Feb 26, 5:45 PM",
    category: "Transportation",
    icon: <CreditCard className="h-4 w-4" />,
    color: "bg-purple-500",
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className={`h-9 w-9 ${transaction.color}`}>
              <AvatarFallback className="text-white">{transaction.icon}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{transaction.description}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={transaction.amount > 0 ? "outline" : "secondary"} className="text-xs">
              {transaction.category}
            </Badge>
            <span className={`text-sm font-medium ${transaction.amount > 0 ? "text-green-600" : ""}`}>
              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}


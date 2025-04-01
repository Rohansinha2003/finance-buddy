"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const monthlyData = [
  { name: "Jan", Food: 400, Transportation: 240, Entertainment: 180, Utilities: 320 },
  { name: "Feb", Food: 380, Transportation: 260, Entertainment: 220, Utilities: 310 },
  { name: "Mar", Food: 420, Transportation: 250, Entertainment: 200, Utilities: 330 },
  { name: "Apr", Food: 390, Transportation: 230, Entertainment: 210, Utilities: 340 },
  { name: "May", Food: 410, Transportation: 270, Entertainment: 190, Utilities: 320 },
  { name: "Jun", Food: 430, Transportation: 280, Entertainment: 230, Utilities: 350 },
]

const weeklyData = [
  { name: "Mon", Food: 90, Transportation: 60, Entertainment: 40, Utilities: 0 },
  { name: "Tue", Food: 110, Transportation: 50, Entertainment: 30, Utilities: 0 },
  { name: "Wed", Food: 80, Transportation: 70, Entertainment: 20, Utilities: 0 },
  { name: "Thu", Food: 100, Transportation: 40, Entertainment: 50, Utilities: 0 },
  { name: "Fri", Food: 120, Transportation: 80, Entertainment: 70, Utilities: 0 },
  { name: "Sat", Food: 150, Transportation: 30, Entertainment: 90, Utilities: 0 },
  { name: "Sun", Food: 130, Transportation: 20, Entertainment: 60, Utilities: 0 },
]

export function ExpenseChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Loading chart...</div>
  }

  return (
    <Tabs defaultValue="monthly" className="w-full">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="monthly" className="space-y-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Food" fill="#8884d8" />
              <Bar dataKey="Transportation" fill="#82ca9d" />
              <Bar dataKey="Entertainment" fill="#ffc658" />
              <Bar dataKey="Utilities" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
      <TabsContent value="weekly" className="space-y-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Food" fill="#8884d8" />
              <Bar dataKey="Transportation" fill="#82ca9d" />
              <Bar dataKey="Entertainment" fill="#ffc658" />
              <Bar dataKey="Utilities" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
    </Tabs>
  )
}


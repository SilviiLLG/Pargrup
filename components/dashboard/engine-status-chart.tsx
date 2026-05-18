"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const serviceData = [
  { month: "Aug", preventive: 18, corrective: 8, predictive: 12 },
  { month: "Sep", preventive: 22, corrective: 5, predictive: 15 },
  { month: "Oct", preventive: 25, corrective: 10, predictive: 18 },
  { month: "Nov", preventive: 20, corrective: 6, predictive: 14 },
  { month: "Dec", preventive: 28, corrective: 9, predictive: 20 },
  { month: "Jan", preventive: 32, corrective: 7, predictive: 22 },
]

const engineDistribution = [
  { name: "QSK-60", value: 85, color: "hsl(var(--chart-1))" },
  { name: "KTA-50", value: 120, color: "hsl(var(--chart-2))" },
  { name: "QSV-91", value: 67, color: "hsl(var(--chart-3))" },
  { name: "QST-30", value: 70, color: "hsl(var(--chart-4))" },
]

export function EngineStatusChart() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Services Bar Chart */}
      <Card className="border-border/50 bg-card lg:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">
            Services Overview
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Monthly service breakdown by type
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serviceData} barCategoryGap="20%">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Bar
                  dataKey="preventive"
                  name="Preventive"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="predictive"
                  name="Predictive"
                  fill="hsl(var(--chart-2))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="corrective"
                  name="Corrective"
                  fill="hsl(var(--chart-5))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="mt-4 flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-1" />
              <span className="text-sm text-muted-foreground">Preventive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-2" />
              <span className="text-sm text-muted-foreground">Predictive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-5" />
              <span className="text-sm text-muted-foreground">Corrective</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Engine Distribution Pie Chart */}
      <Card className="border-border/50 bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">
            Engine Distribution
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            By Cummins model type
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={engineDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {engineDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {engineDistribution.map((engine) => (
              <div key={engine.name} className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: engine.color }}
                />
                <span className="text-xs text-muted-foreground">
                  {engine.name} ({engine.value})
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

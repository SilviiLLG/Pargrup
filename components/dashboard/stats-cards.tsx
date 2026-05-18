import { Card, CardContent } from "@/components/ui/card"
import { Users, Settings, FileText, Wrench, TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    title: "Active Clients",
    value: "127",
    change: "+12%",
    trend: "up",
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Engines Managed",
    value: "342",
    change: "+8%",
    trend: "up",
    icon: Settings,
    description: "Total in system",
  },
  {
    title: "Pending Budgets",
    value: "23",
    change: "-5%",
    trend: "down",
    icon: FileText,
    description: "Awaiting approval",
  },
  {
    title: "Services This Month",
    value: "47",
    change: "+18%",
    trend: "up",
    icon: Wrench,
    description: "Completed services",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border/50 bg-card">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1.5">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3.5 w-3.5 text-success" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5 text-destructive" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.description}
                  </span>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

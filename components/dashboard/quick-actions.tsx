"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Plus, 
  UserPlus, 
  FileText, 
  Wrench, 
  Settings,
  ArrowRight 
} from "lucide-react"

const actions = [
  {
    title: "New Budget",
    description: "Create a new service budget",
    href: "/dashboard/budgets/new",
    icon: FileText,
    color: "bg-primary",
  },
  {
    title: "Add Client",
    description: "Register a new client",
    href: "/dashboard/clients/new",
    icon: UserPlus,
    color: "bg-chart-2",
  },
  {
    title: "Register Engine",
    description: "Add engine to database",
    href: "/dashboard/engines/new",
    icon: Settings,
    color: "bg-chart-3",
  },
  {
    title: "Log Service",
    description: "Record completed service",
    href: "/dashboard/services/new",
    icon: Wrench,
    color: "bg-chart-4",
  },
]

export function QuickActions() {
  return (
    <Card className="border-border/50 bg-card">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-foreground">Quick Actions</h3>
            <p className="text-sm text-muted-foreground">
              Common tasks and shortcuts
            </p>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard" className="flex items-center gap-1 text-xs text-muted-foreground">
              View all
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <Link key={action.title} href={action.href}>
              <div className="group flex items-center gap-4 rounded-lg border border-border/50 bg-muted/30 p-4 transition-all hover:border-primary/50 hover:bg-muted/50">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${action.color}`}
                >
                  <action.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground group-hover:text-primary">
                    {action.title}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>
                <Plus className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-90 group-hover:text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

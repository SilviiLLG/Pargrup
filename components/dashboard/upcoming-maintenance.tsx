import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, Calendar } from "lucide-react"

const maintenanceItems = [
  {
    id: 1,
    engine: "QSK-60 #4521",
    client: "Minera San Juan",
    hoursRemaining: 250,
    dueDate: "2024-02-01",
    priority: "high",
    type: "Hours Based",
  },
  {
    id: 2,
    engine: "KTA-50 #7832",
    client: "Constructora Norte",
    hoursRemaining: 500,
    dueDate: "2024-02-15",
    priority: "medium",
    type: "Hours Based",
  },
  {
    id: 3,
    engine: "QSV-91 #2198",
    client: "Transporte Austral",
    hoursRemaining: null,
    dueDate: "2024-01-28",
    priority: "high",
    type: "Date Based",
  },
  {
    id: 4,
    engine: "QST-30 #5467",
    client: "Energía del Sur",
    hoursRemaining: 1200,
    dueDate: "2024-03-10",
    priority: "low",
    type: "Hours Based",
  },
]

const priorityConfig = {
  high: {
    label: "Urgent",
    className: "bg-destructive/10 text-destructive border-destructive/20",
    icon: AlertTriangle,
  },
  medium: {
    label: "Soon",
    className: "bg-warning/10 text-warning border-warning/20",
    icon: Clock,
  },
  low: {
    label: "Scheduled",
    className: "bg-muted text-muted-foreground border-border",
    icon: Calendar,
  },
}

export function UpcomingMaintenance() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg font-semibold">
          Maintenance Alerts
        </CardTitle>
        <Button variant="outline" size="sm" className="text-xs">
          <Calendar className="mr-1.5 h-3.5 w-3.5" />
          Sync Calendar
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {maintenanceItems.map((item) => {
          const priority = priorityConfig[item.priority as keyof typeof priorityConfig]
          const PriorityIcon = priority.icon
          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4 transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    item.priority === "high"
                      ? "bg-destructive/10"
                      : item.priority === "medium"
                      ? "bg-warning/10"
                      : "bg-muted"
                  }`}
                >
                  <PriorityIcon
                    className={`h-5 w-5 ${
                      item.priority === "high"
                        ? "text-destructive"
                        : item.priority === "medium"
                        ? "text-warning"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.engine}</p>
                  <p className="text-sm text-muted-foreground">{item.client}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className={priority.className}>
                  {priority.label}
                </Badge>
                <div className="mt-1 text-xs text-muted-foreground">
                  {item.hoursRemaining ? (
                    <span>{item.hoursRemaining} hrs remaining</span>
                  ) : (
                    <span>Due: {item.dueDate}</span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

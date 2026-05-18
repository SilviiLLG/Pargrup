import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Settings,
  Truck,
} from "lucide-react"

const timelineEvents = [
  {
    id: 1,
    date: "2024-01-15",
    time: "16:30",
    type: "completion",
    title: "Service Completed",
    description: "Preventive maintenance on QSK-60 #4521 completed successfully.",
    client: "Minera San Juan",
    icon: CheckCircle2,
    iconColor: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 2,
    date: "2024-01-15",
    time: "14:00",
    type: "work",
    title: "Final Testing",
    description: "Engine performance tests and diagnostics verification.",
    client: "Minera San Juan",
    icon: Settings,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 3,
    date: "2024-01-15",
    time: "09:00",
    type: "work",
    title: "Filter Replacement",
    description: "Oil, fuel, and air filters replaced with genuine parts.",
    client: "Minera San Juan",
    icon: Wrench,
    iconColor: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    id: 4,
    date: "2024-01-14",
    time: "08:00",
    type: "arrival",
    title: "Technician Arrival",
    description: "Carlos Mendez arrived at site for scheduled maintenance.",
    client: "Minera San Juan",
    icon: Truck,
    iconColor: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    id: 5,
    date: "2024-01-12",
    time: "11:00",
    type: "alert",
    title: "Service Alert Triggered",
    description: "Engine hours threshold reached, maintenance scheduled.",
    client: "Minera San Juan",
    icon: AlertTriangle,
    iconColor: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 6,
    date: "2024-01-10",
    time: "09:30",
    type: "completion",
    title: "Corrective Repair Completed",
    description: "Turbocharger replacement completed on KTA-50 #7832.",
    client: "Constructora Norte",
    icon: CheckCircle2,
    iconColor: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 7,
    date: "2024-01-08",
    time: "14:00",
    type: "work",
    title: "Parts Received",
    description: "Genuine Cummins turbocharger delivered to site.",
    client: "Constructora Norte",
    icon: Wrench,
    iconColor: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
]

export function ServiceTimeline() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Service Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-border" />

          <div className="space-y-6">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              return (
                <div key={event.id} className="relative flex gap-4">
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${event.bgColor}`}
                  >
                    <Icon className={`h-5 w-5 ${event.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-foreground">
                          {event.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className="bg-muted text-muted-foreground"
                        >
                          {event.client}
                        </Badge>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {event.date} • {event.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

const services = [
  {
    id: "SRV-2024-001",
    client: "Minera San Juan",
    engine: "QSK-60 #4521",
    type: "Predictive",
    status: "completed",
    date: "2024-01-15",
    technician: "Carlos M.",
  },
  {
    id: "SRV-2024-002",
    client: "Constructora Norte",
    engine: "KTA-50 #7832",
    type: "Corrective",
    status: "in-progress",
    date: "2024-01-16",
    technician: "Miguel R.",
  },
  {
    id: "SRV-2024-003",
    client: "Transporte Austral",
    engine: "QSV-91 #2198",
    type: "Preventive",
    status: "pending",
    date: "2024-01-17",
    technician: "Juan P.",
  },
  {
    id: "SRV-2024-004",
    client: "Energía del Sur",
    engine: "QST-30 #5467",
    type: "Preventive",
    status: "completed",
    date: "2024-01-14",
    technician: "Carlos M.",
  },
]

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    variant: "default" as const,
    className: "bg-success/10 text-success border-success/20",
  },
  "in-progress": {
    label: "In Progress",
    icon: Clock,
    variant: "secondary" as const,
    className: "bg-warning/10 text-warning border-warning/20",
  },
  pending: {
    label: "Pending",
    icon: AlertCircle,
    variant: "outline" as const,
    className: "bg-muted text-muted-foreground border-border",
  },
}

const typeConfig = {
  Preventive: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  Predictive: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Corrective: "bg-chart-5/10 text-chart-5 border-chart-5/20",
}

export function RecentServices() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Recent Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {services.map((service) => {
          const status = statusConfig[service.status as keyof typeof statusConfig]
          const StatusIcon = status.icon
          return (
            <div
              key={service.id}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4 transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <StatusIcon className={`h-5 w-5 ${
                    service.status === "completed" ? "text-success" : 
                    service.status === "in-progress" ? "text-warning" : "text-muted-foreground"
                  }`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{service.client}</p>
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${typeConfig[service.type as keyof typeof typeConfig]}`}
                    >
                      {service.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.engine} • {service.technician}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className={`${status.className}`}>
                  {status.label}
                </Badge>
                <p className="mt-1 text-xs text-muted-foreground">{service.date}</p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

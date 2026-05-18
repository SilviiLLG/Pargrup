"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Camera, Calendar, Filter, X, ZoomIn } from "lucide-react"

// Placeholder service photos with industrial workshop theme
const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    title: "Engine Bay Overview",
    service: "SRV-2024-001",
    date: "2024-01-15",
    engine: "QSK-60 #4521",
    type: "Before",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    title: "Oil Filter Installation",
    service: "SRV-2024-001",
    date: "2024-01-15",
    engine: "QSK-60 #4521",
    type: "During",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=400&h=300&fit=crop",
    title: "Turbocharger Inspection",
    service: "SRV-2024-002",
    date: "2024-01-14",
    engine: "KTA-50 #7832",
    type: "Before",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&h=300&fit=crop",
    title: "New Parts Installed",
    service: "SRV-2024-002",
    date: "2024-01-16",
    engine: "KTA-50 #7832",
    type: "After",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop",
    title: "Coolant System Check",
    service: "SRV-2024-001",
    date: "2024-01-15",
    engine: "QSK-60 #4521",
    type: "During",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400&h=300&fit=crop",
    title: "Final Assembly",
    service: "SRV-2024-001",
    date: "2024-01-15",
    engine: "QSK-60 #4521",
    type: "After",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&h=300&fit=crop",
    title: "Diagnostic Testing",
    service: "SRV-2024-003",
    date: "2024-01-12",
    engine: "QSV-91 #2198",
    type: "During",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&h=300&fit=crop",
    title: "Workshop Overview",
    service: "SRV-2024-003",
    date: "2024-01-12",
    engine: "QSV-91 #2198",
    type: "After",
  },
]

const typeConfig = {
  Before: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  During: "bg-warning/10 text-warning border-warning/20",
  After: "bg-success/10 text-success border-success/20",
}

export function ServiceGallery() {
  const [filter, setFilter] = useState("all")
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)

  const filteredPhotos =
    filter === "all" ? photos : photos.filter((p) => p.type === filter)

  return (
    <>
      <Card className="border-border/50 bg-card">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg font-semibold">
                Technical Photo Gallery
              </CardTitle>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Photos</SelectItem>
                <SelectItem value="Before">Before</SelectItem>
                <SelectItem value="During">During</SelectItem>
                <SelectItem value="After">After</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-muted/30 transition-all hover:border-primary/50 hover:shadow-lg"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all group-hover:bg-foreground/40">
                  <ZoomIn className="h-8 w-8 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                {/* Info */}
                <div className="p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={typeConfig[photo.type as keyof typeof typeConfig]}
                    >
                      {photo.type}
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">
                      {photo.service}
                    </span>
                  </div>
                  <p className="font-medium text-foreground">{photo.title}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {photo.date}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {photo.engine}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 bg-background/80"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="h-5 w-5" />
            </Button>
            <img
              src={selectedPhoto.url.replace("w=400&h=300", "w=1200&h=800")}
              alt={selectedPhoto.title}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="border-t border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedPhoto.engine} • {selectedPhoto.service}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={
                      typeConfig[selectedPhoto.type as keyof typeof typeConfig]
                    }
                  >
                    {selectedPhoto.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {selectedPhoto.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

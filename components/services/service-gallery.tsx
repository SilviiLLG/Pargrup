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
import { Camera, Filter, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

// BASE DE DATOS ESTRUCTURADA: 6 Motores (Carpetas) con 7-8 fotos cada uno
const trabajosMotores = [
  {
    id: 1,
    engine: "QSV91",
    title: "TITAN",
    type: "After",
    service: "SRV-2026-001",
    date: "2026-05-10",
    specification: "Motor V18 cilindros",
    description: "Reconstrucción completa de bloque y culatas. Se realizó el arenado técnico, difuminado de imperfecciones superficiales y calibración de inyectores de alta presión para optimizar el rendimiento en planta de energía.",
    // Carpeta de fotos del Motor 1 (8 fotos)
    imagenes: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    engine: "QSK60",
    title: "HERCULES",
    type: "During",
    service: "SRV-2026-002",
    date: "2026-05-14",
    specification: "Motor V16 Cummins",
    description: "Inspección interna del sistema de distribución y cambio de cojinetes de biela. Ajuste fino de torques según manual técnico de fábrica y alineación con instrumental láser de alta precisión.",
    // Carpeta de fotos del Motor 2 (7 fotos)
    imagenes: [
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    engine: "KTA50",
    title: "VULCANO",
    type: "Before",
    service: "SRV-2026-003",
    date: "2026-05-18",
    specification: "Generador diésel de alta potencia",
    description: "Diagnóstico inicial por falla crítica en la presión de aceite. Desarmado preventivo de bombas y limpieza profunda de conductos obstruidos antes de proceder al rectificado de componentes.",
    // Carpeta de fotos del Motor 3 (7 fotos)
    imagenes: [
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4,
    engine: "CAT3516",
    title: "CYCLOPS",
    type: "After",
    service: "SRV-2026-004",
    date: "2026-05-22",
    specification: "Motor Marino Caterpillar",
    description: "Mantenimiento mayor (Overhaul) completado con éxito. Pruebas de banco de carga satisfactorias, alcanzando el 100% de la potencia nominal sin registrar anomalías térmicas ni vibraciones estructurales.",
    // Carpeta de fotos del Motor 4 (7 fotos)
    imagenes: [
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 5,
    engine: "MTU4000",
    title: "ZEUS",
    type: "During",
    service: "SRV-2026-005",
    date: "2026-05-26",
    specification: "Módulo de Cogeneración",
    description: "Fase intermedia de cableado de sensores complejos e integración de sistemas de alarmas al panel de control digital. Testeo exhaustivo de continuidad eléctrica y aislamiento de borneras de potencia.",
    // Carpeta de fotos del Motor 5 (7 fotos)
    imagenes: [
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 6,
    engine: "WARTSILA",
    title: "ODIN",
    type: "Before",
    service: "SRV-2026-006",
    date: "2026-05-29",
    specification: "Motor Estacionario Industrial",
    description: "Recepción de la unidad de gran porte en los talleres centrales. Registro fotográfico del estado inicial del turbocompresor y toma de muestras de fluidos hidráulicos para análisis de laboratorio químico.",
    // Carpeta de fotos del Motor 6 (7 fotos)
    imagenes: [
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=80"
    ]
  }
]

const typeConfig = {
  Before: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  During: "bg-warning/10 text-warning border-warning/20",
  After: "bg-success/10 text-success border-success/20",
}

export function ServiceGallery() {
  const [filter, setFilter] = useState("all")
  // Controla qué carpeta de motor (de las 6) está seleccionada
  const [selectedTrabajo, setSelectedTrabajo] = useState<(typeof trabajosMotores)[0] | null>(null)
  // Controla qué foto interna (de las 7 u 8) se está renderizando en el carrusel grande
  const [currentFotoIdx, setCurrentFotoIdx] = useState(0)

  const filteredTrabajos = filter === "all" ? trabajosMotores : trabajosMotores.filter((t) => t.type === filter)

  const nextPhoto = () => {
    if (!selectedTrabajo) return
    setCurrentFotoIdx((prev) => (prev + 1) % selectedTrabajo.imagenes.length)
  }

  const prevPhoto = () => {
    if (!selectedTrabajo) return
    setCurrentFotoIdx((prev) => (prev - 1 + selectedTrabajo.imagenes.length) % selectedTrabajo.imagenes.length)
  }

  return (
    <>
      <Card className="border-border/50 bg-card">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg font-semibold uppercase tracking-tight">
                Nuestro Trabajo (Galerías Técnicas)
              </CardTitle>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Before">Antes</SelectItem>
                <SelectItem value="During">Durante</SelectItem>
                <SelectItem value="After">Después</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* GRILLA PRINCIPAL: Muestra las 6 "Carpetas" en pantalla */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTrabajos.map((trabajo) => (
              <div
                key={trabajo.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-muted/30 transition-all hover:border-[#00CCFF]/50 hover:shadow-[0_0_25px_rgba(0,204,255,0.2)]"
                onClick={() => {
                  setSelectedTrabajo(trabajo)
                  setCurrentFotoIdx(0) // Abre siempre mostrando la primera foto de la carpeta
                }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={trabajo.imagenes[0]} // Foto de portada de la carpeta
                    alt={trabajo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/40">
                  <ZoomIn className="h-8 w-8 text-[#00CCFF] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-4 border-t border-border/30">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-mono text-sm font-bold text-[#00CCFF]">{trabajo.engine}</p>
                    <Badge variant="outline" className={typeConfig[trabajo.type as keyof typeof typeConfig]}>
                      {trabajo.type === "Before" ? "Antes" : trabajo.type === "During" ? "Durante" : "Después"}
                    </Badge>
                  </div>
                  <p className="text-sm font-light text-muted-foreground">Proyecto: <span className="font-semibold text-foreground">-{trabajo.title}-</span></p>
                  <p className="text-xs text-gray-500 mt-1 font-mono">{trabajo.imagenes.length} fotografías técnicas</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* LIGHTBOX SPLIT VIEW (Fiel a photo_4969748324139338690_y.jpg) */}
      {selectedTrabajo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTrabajo(null)}
        >
          <div 
            className="relative flex h-full max-h-[680px] w-full max-w-6xl flex-col overflow-hidden border border-cyan-500/30 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,204,255,0.15)] md:flex-row rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4 z-20 text-white hover:bg-white/10"
              onClick={() => setSelectedTrabajo(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* LADO IZQUIERDO: Carrusel Principal de la carpeta abierta */}
            <div className="relative flex flex-1 items-center justify-center bg-black p-4 md:flex-[7]">
              <img 
                src={selectedTrabajo.imagenes[currentFotoIdx]} 
                className="h-full w-full object-contain border-x border-cyan-500/5 select-none" 
                alt="Inspección detallada"
              />
              
              {/* Controles de Navegación */}
              <Button 
                variant="ghost" size="icon" 
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/40"
                onClick={prevPhoto}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button 
                variant="ghost" size="icon" 
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/40"
                onClick={nextPhoto}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Puntos indicativos (Dots) según la cantidad exacta de fotos (7 u 8) */}
              <div className="absolute bottom-6 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {selectedTrabajo.imagenes.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentFotoIdx ? 'bg-[#00CCFF] w-4' : 'bg-gray-600'}`} 
                  />
                ))}
              </div>
            </div>

            {/* LADO DERECHO: Panel de Datos Técnicos y Grilla Completa de Miniaturas */}
            <div className="flex flex-col border-l border-cyan-500/10 p-8 text-white md:flex-[3] bg-[#0c0c0c]">
              <div className="mb-5 border-l-4 border-[#00CCFF] pl-4">
                <h2 className="text-4xl font-bold tracking-tighter text-[#00CCFF]">
                  {selectedTrabajo.engine} <span className="font-thin text-white font-sans">-{selectedTrabajo.title}-</span>
                </h2>
                <p className="mt-1.5 text-xs font-semibold text-cyan-400/70 uppercase tracking-widest">
                  {selectedTrabajo.specification}
                </p>
              </div>

              {/* Scroll con descripción del trabajo */}
              <div className="flex-1 overflow-y-auto pr-2 text-sm leading-relaxed text-gray-400 font-light max-h-[180px] md:max-h-none">
                <p>{selectedTrabajo.description}</p>
                <div className="mt-5 pt-4 border-t border-border/10 text-[11px] font-mono text-muted-foreground/80 space-y-0.5">
                  <p>Código Servicio: {selectedTrabajo.service}</p>
                  <p>Fecha Finalización: {selectedTrabajo.date}</p>
                </div>
              </div>

              {/* Grilla que muestra las 7 u 8 Miniaturas dinámicamente */}
              <div className="mt-6">
                <p className="text-[11px] uppercase text-cyan-400/50 font-bold tracking-wider mb-2">Imágenes en carpeta ({selectedTrabajo.imagenes.length})</p>
                <div className="grid grid-cols-4 gap-2 overflow-y-auto max-h-[140px] pr-1">
                  {selectedTrabajo.imagenes.map((url, idx) => (
                    <div 
                      key={idx} 
                      className={`aspect-square cursor-pointer overflow-hidden border transition-all rounded ${idx === currentFotoIdx ? 'border-[#00CCFF] scale-95 shadow-[0_0_10px_rgba(0,204,255,0.3)] bg-black' : 'border-gray-800 opacity-40 hover:opacity-90'}`}
                      onClick={() => setCurrentFotoIdx(idx)}
                    >
                      <img src={url} className="h-full w-full object-cover" alt="Thumb" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
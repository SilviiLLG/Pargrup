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
import { Camera, Filter, ChevronLeft, ChevronRight, Wrench, ShieldCheck, Lightbulb, Target } from "lucide-react"

// BASE DE DATOS ADAPTADA A TUS ARCHIVOS REALES EN PUBLIC/IMAGES
const trabajosMotores = [
  {
    id: 1,
    engine: "Doosan",
    title: "6 CILINDROS",
    type: "After",
    service: "SRV-2026-001",
    date: "2026-05-10",
    specification: "Motor en línea de 6 cilindros",
    mainTitle: "Recuperación integral de grupo electrógeno Doosan 6Cyl - 220 kVA",
    desafio: "Un grupo electrógeno de 220 kVA, equipado con motor Doosan de 6 cilindros, alcanzó aproximadamente 25.000 horas de operación continua en aplicaciones petroleras de alta exigencia en la provincia de Neuquén. Las condiciones severas de trabajo y el desgaste acumulado comprometían la confiabilidad operativa.",
    solucion: "Se ejercitó un overhaul completo del motor. La intervención incluyó el desmontaje total e inspección técnica del conjunto motriz, control dimensional de componentes críticos según especificaciones del fabricante, servicio integral de tapa de cilindros y sistema de distribución.",
    resultado: "El equipo fue reacondicionado con éxito y se encuentra en su etapa final, listo para pruebas bajo carga y validación operativa, con parámetros restablecidos.",
    valorAgregado: "Este proyecto reafirma la capacidad para intervenir en motores sometidos a condiciones extremas, brindando soluciones que maximizan la disponibilidad.",
    imagenes: Array.from({ length: 4 }, (_, i) => `/images/doosan-6cil_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 4 fotos
  },
  {
    id: 2,
    engine: "Doosan",
    title: "V12",
    type: "During",
    service: "SRV-2026-002",
    date: "2026-05-14",
    specification: "Motor de alta potencia V12",
    mainTitle: "Recuperación integral de grupo electrógeno Doosan V12",
    desafio: "Un grupo electrógeno de alta potencia, equipado con motor Doosan V12, alcanzó horas críticas de operación continua en aplicaciones industriales severas.",
    solucion: "Se está ejecutando un overhaul completo del motor. La intervención en desarrollo incluye el desmontaje total para inspección técnica del conjunto motriz y control dimensional exhaustivo.",
    resultado: "El equipo se encuentra actualmente en proceso de reacondicionamiento técnico y control dimensional de bancadas, avanzando rigurosamente.",
    valorAgregado: "Capacidad técnica especializada para intervenir en bloques de alta cilindrada y complejidad estructural.",
    imagenes: Array.from({ length: 3 }, (_, i) => `/images/doosan-v12_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 3 fotos
  },
  {
    id: 3,
    engine: "KTA50",
    title: "ROTURA DE VALVULAS",
    type: "Before",
    service: "SRV-2026-003",
    date: "2026-05-18",
    specification: "Diagnóstico de fallas críticas Cummins",
    mainTitle: "Recuperación integral de motor Cummins KTA50 en central ENERSA",
    desafio: "Motor Cummins KTA50 presentó una falla crítica producto del desgaste avanzado en el sistema de válvulas, asociado a falta de mantenimiento preventivo, derivando en una falla catastrófica.",
    solucion: "Se ejercitó una intervención mecánica mayor, abordando la reparación integral del banco afectado, reemplazo completo de cilindros, pistones y componentes críticos.",
    resultado: "El motor fue recuperado exitosamente, restituyendo sus condiciones operativas y asegurando la confiabilidad necesaria para servicio continuo.",
    valorAgregado: "Soluciones eficientes en entornos de alta exigencia donde la continuidad operativa es crítica.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/kta50-valvulas_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 8 fotos
  },
  {
    id: 4,
    engine: "QSK 60 G",
    title: "CAMBIO DE CONJUNTO",
    type: "During",
    service: "SRV-2026-004",
    date: "2026-05-22",
    specification: "Overhaul intermedio de potencia",
    mainTitle: "Intervención correctiva en motor Cummins QSK60G en yacimiento petrolero",
    desafio: "Presentó detonaciones anormales durante operación en el cilindro L2. La inspección boroscópica permitió identificar desgaste avanzado en la camisa del cilindro.",
    solucion: "Intervención correctiva focalizada, realizando el desmontaje del tren superior y reemplazo de la camisa de cilindro, elementos de sellado y tapa.",
    resultado: "El motor fue recuperado exitosamente, quedando en condiciones de avanzar a etapas de armado final y calibración.",
    valorAgregado: "Rápida detección y resolución de la falla permitiendo evitar daños mayores.",
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/qsk60g-conjunto_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 9 fotos
  },
  {
    id: 5,
    engine: "Qsk 60 G",
    title: "ITA CARBURACION",
    type: "After",
    service: "SRV-2026-005",
    date: "2026-05-25",
    specification: "Ajuste de sistema de combustible",
    mainTitle: "Optimización de combustión en motor Cummins QSK60G",
    desafio: "Motor a gas presentaba desvíos en sus parámetros de combustión, afectando la eficiencia energética y la estabilidad operativa.",
    solucion: "Servicio de regulación estequiométrica y calibración mediante herramientas de diagnóstico y software original Cummins (INSITE / InPower).",
    resultado: "Se logró una combustión más eficiente y estable, con mejora notoria en el rendimiento del motor.",
    valorAgregado: "Aporte de precisión técnica y herramientas de última generación para optimizar motores.",
    imagenes: Array.from({ length: 7 }, (_, i) => `/images/qsk60g-carburacion_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 7 fotos
  },
  {
    id: 6,
    engine: "QSK60 G",
    title: "M4",
    type: "After",
    service: "SRV-2026-006",
    date: "2026-05-28",
    specification: "Mantenimiento modular específico",
    mainTitle: "Mantenimiento mayor M4 en motor Cummins QSK60G - 12.000 horas",
    desafio: "Alcanzó su intervalo de mantenimiento mayor trabajando en régimen de 60 Hz a 1800 RPM, lo que implica mayores cargas mecánicas y térmicas.",
    solucion: "Mantenimiento mayor tipo M4 enfocado en prevención. Incluyó reemplazo de tapas de cilindro, turboalimentadores y regulación de válvulas.",
    resultado: "El motor quedó en condiciones óptimas para continuar su operación continua con excelente estabilidad.",
    valorAgregado: "Intervención anticipada reduciendo riesgos de fallas no planificadas.",
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/qsk60g-m4_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 9 fotos
  },
  {
    id: 7,
    engine: "Qsv 91",
    title: "PERDIDA DE REFRIGERANTE",
    type: "Before",
    service: "SRV-2026-007",
    date: "2026-06-01",
    specification: "Localización de fugas complejas",
    mainTitle: "Intervención correctiva en motor Cummins QSV91 en planta industrial",
    desafio: "Pérdida de refrigerante en una tapa de cilindro derivó en contaminación del sistema de combustión y acumulación de carbonilla.",
    solucion: "Reemplazo de tapa de cilindro defectuosa, sustitución de turboalimentadores del banco afectado y descontaminación completa.",
    resultado: "El equipo fue recuperado y quedó en condiciones de retomar su operación continua con parámetros restablecidos.",
    valorAgregado: "Experiencia técnica y capacidad de respuesta rápida en entornos industriales de alta exigencia.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/qsv91-refrigerante_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 8 fotos
  },
  {
    id: 8,
    engine: "QSV91",
    title: "TITAN",
    type: "After",
    service: "SRV-2026-008",
    date: "2026-06-02",
    specification: "Reconstrucción completa V18",
    mainTitle: "Mantenimiento mayor M5 en motor Cummins QSV91 Titan - Oil and Gas",
    desafio: "Alcanzó su intervalo de mantenimiento mayor tipo M5 tras aproximadamente 30.000 horas de operación continua bajo condiciones severas.",
    solucion: "Mantenimiento mayor integral con desmontaje completo: sustitución de camisas, tapas de cilindro, bielas y los cuatro turboalimentadores.",
    resultado: "El motor fue puesto en condiciones óptimas para continuar su operación continua con máxima confiabilidad estructural.",
    valorAgregado: "Maximizar la disponibilidad del equipo y extender su vida útil en aplicaciones críticas.",
    imagenes: Array.from({ length: 7 }, (_, i) => `/images/qsv91-titan_foto-${i + 1}.jpg`) // Cambiado a tu formato real de 7 fotos
  }
]

const typeConfig = {
  Before: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  During: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  After: "bg-green-500/10 text-green-400 border-green-500/20",
}

export function ServiceGallery() {
  const [filter, setFilter] = useState("all")
  const [selectedTrabajo, setSelectedTrabajo] = useState(trabajosMotores[0])
  const [currentFotoIdx, setCurrentFotoIdx] = useState(0)

  const filteredTrabajos = filter === "all" ? trabajosMotores : trabajosMotores.filter((t) => t.type === filter)

  const nextPhoto = () => {
    setCurrentFotoIdx((prev) => (prev + 1) % selectedTrabajo.imagenes.length)
  }

  const prevPhoto = () => {
    setCurrentFotoIdx((prev) => (prev - 1 + selectedTrabajo.imagenes.length) % selectedTrabajo.imagenes.length)
  }

  return (
    <div className="space-y-12 w-full text-white">
      
      {/* VISUALIZADOR HORIZONTAL PRINCIPAL */}
      <div className="w-full border border-neutral-800 bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row h-full min-h-[550px]">
          
          {/* PANEL IZQUIERDO: VISUALIZADOR DE IMAGEN */}
          <div className="relative flex-1 lg:flex-[5.5] bg-black flex items-center justify-center p-6 min-h-[350px]">
            <img 
              src={selectedTrabajo.imagenes[currentFotoIdx]} 
              className="max-h-[450px] w-full object-contain select-none transition-all duration-300" 
              alt="Registro técnico ParGrup"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80"
              }}
            />
            
            <Button 
              variant="outline" size="icon" 
              className="absolute left-4 rounded-full bg-black/60 border-neutral-700 text-cyan-400 hover:bg-cyan-500 hover:text-black"
              onClick={prevPhoto}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" size="icon" 
              className="absolute right-4 rounded-full bg-black/60 border-neutral-700 text-cyan-400 hover:bg-cyan-500 hover:text-black"
              onClick={nextPhoto}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="absolute bottom-4 flex gap-1.5 bg-black/70 px-3 py-1.5 rounded-full border border-neutral-800">
              {selectedTrabajo.imagenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentFotoIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === currentFotoIdx ? 'bg-[#00CCFF] w-4' : 'bg-neutral-600 w-1.5'}`}
                />
              ))}
            </div>
          </div>

          {/* PANEL DERECHO: DATOS TÉCNICOS */}
          <div className="flex-1 lg:flex-[4.5] bg-[#0f0f0f] p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800">
            <div className="space-y-4 overflow-y-auto max-h-[420px] pr-2">
              <div className="border-l-4 border-[#00CCFF] pl-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{selectedTrabajo.specification}</span>
                <h3 className="text-2xl font-black tracking-tight uppercase text-white mt-0.5">
                  {selectedTrabajo.engine} <span className="text-[#00CCFF] font-light">{selectedTrabajo.title}</span>
                </h3>
              </div>

              <p className="text-xs font-medium text-neutral-300 bg-neutral-900/50 p-2.5 rounded border border-neutral-800 leading-relaxed">
                {selectedTrabajo.mainTitle}
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-neutral-900/30 p-3 rounded border border-neutral-800">
                  <h4 className="flex items-center gap-1.5 font-bold text-red-400 uppercase tracking-wider text-[10px] mb-1">
                    <Target className="h-3.5 w-3.5" /> Desafío Técnico
                  </h4>
                  <p className="text-neutral-400 font-light leading-relaxed">{selectedTrabajo.desafio}</p>
                </div>

                <div className="bg-neutral-900/30 p-3 rounded border border-neutral-800">
                  <h4 className="flex items-center gap-1.5 font-bold text-cyan-400 uppercase tracking-wider text-[10px] mb-1">
                    <Wrench className="h-3.5 w-3.5" /> Solución Aplicada
                  </h4>
                  <p className="text-neutral-400 font-light leading-relaxed">{selectedTrabajo.solucion}</p>
                </div>

                <div className="bg-neutral-900/30 p-3 rounded border border-neutral-800">
                  <h4 className="flex items-center gap-1.5 font-bold text-green-400 uppercase tracking-wider text-[10px] mb-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> Resultado Operativo
                  </h4>
                  <p className="text-neutral-400 font-light leading-relaxed">{selectedTrabajo.resultado}</p>
                </div>
              </div>
            </div>

            {/* MINIATURAS FOTOGRÁFICAS INFERIORES */}
            <div className="mt-4 pt-4 border-t border-neutral-800">
              <div className="flex justify-between text-[10px] font-mono text-neutral-500 mb-2">
                <span>OT: {selectedTrabajo.service}</span>
                <span>FECHA: {selectedTrabajo.date}</span>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {selectedTrabajo.imagenes.map((url, idx) => (
                  <div 
                    key={idx}
                    className={`aspect-square rounded overflow-hidden cursor-pointer border transition-all ${idx === currentFotoIdx ? 'border-[#00CCFF] scale-95 shadow-md bg-black' : 'border-neutral-800 opacity-40 hover:opacity-100'}`}
                    onClick={() => setCurrentFotoIdx(idx)}
                  >
                    <img src={url} className="h-full w-full object-cover" alt="Miniatura" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=100&auto=format&fit=crop&q=80" }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* GRILLA DE SELECCIÓN DE CARPETAS */}
      <Card className="border-neutral-800 bg-[#0a0a0a] text-white">
        <CardHeader className="border-b border-neutral-900 pb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-cyan-400" />
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-neutral-300">
                Galerías Técnicas (Seleccionar Carpeta de Motor)
              </CardTitle>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[160px] bg-black border-neutral-800 text-white text-xs">
                <Filter className="mr-2 h-3.5 w-3.5 text-cyan-400" />
                <SelectValue placeholder="Filtrar Estado" />
              </SelectTrigger>
              <SelectContent className="bg-[#0a0a0a] border-neutral-800 text-white text-xs">
                <SelectItem value="all">Ver Todos</SelectItem>
                <SelectItem value="Before">Antes</SelectItem>
                <SelectItem value="During">Durante</SelectItem>
                <SelectItem value="After">Después</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTrabajos.map((trabajo) => (
              <div
                key={trabajo.id}
                className={`group relative cursor-pointer overflow-hidden border p-4 transition-all rounded-lg ${selectedTrabajo.id === trabajo.id ? 'border-[#00CCFF] bg-cyan-950/10 shadow-[0_0_15px_rgba(0,204,255,0.1)]' : 'border-neutral-900 bg-black/40 hover:border-neutral-700'}`}
                onClick={() => {
                  setSelectedTrabajo(trabajo)
                  setCurrentFotoIdx(0)
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-xs font-bold text-[#00CCFF]">{trabajo.engine}</p>
                  <Badge variant="outline" className={`text-[9px] font-mono py-0 px-1.5 border ${typeConfig[trabajo.type as keyof typeof typeConfig]}`}>
                    {trabajo.type === "Before" ? "Antes" : trabajo.type === "During" ? "Durante" : "Después"}
                  </Badge>
                </div>
                <p className="text-xs font-bold text-neutral-200 truncate uppercase">
                  {trabajo.title}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1 font-mono">{trabajo.imagenes.length} fotografías vinculadas</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
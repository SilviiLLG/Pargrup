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
import { Camera, Filter, X, ZoomIn, ChevronLeft, ChevronRight, Wrench, ShieldCheck, Lightbulb, Target } from "lucide-react"

// BASE DE DATOS ESTRUCTURADA: Contiene absolutamente todos los textos exigidos por el cliente sin romper el código
const trabajosMotores = [
  {
    id: 1,
    engine: "Doosan",
    title: "6 CILINDROS",
    type: "After",
    service: "SRV-2026-001",
    date: "2026-05-10",
    specification: "Motor en línea de 6 cilindros",
    mainTitle: "Recuperación integral de grupo electrógeno Doosan 6Cyl – 220 kVA",
    desafio: "Un grupo electrógeno de 220 kVA, equipado con motor Doosan de 6 cilindros, alcanzó aproximadamente 25.000 horas de operación continua en aplicaciones petroleras de alta exigencia en la provincia de Neuquén. Las condiciones severas de trabajo y el desgaste acumulado comprometían la confiabilidad operativa y el desempeño del equipo, haciendo necesario un proceso de recuperación integral.",
    solucion: "Se ejecutó un overhaul completo del motor, con el objetivo de restituir sus condiciones originales de funcionamiento y extender su vida útil. La intervención incluyó el desmontaje total e inspección técnica del conjunto motriz, control dimensional de componentes críticos según especificaciones del fabricante, servicio integral de tapa de cilindros y sistema de distribución, reemplazo de componentes sujetos a desgaste, e intervención en sistemas de lubricación, refrigeración e inyección. Adicionalmente, se realizó la limpieza del alternador y la revisión general del sistema de generación para asegurar condiciones operativas óptimas.",
    resultado: "El equipo fue reacondicionado con éxito y se encuentra en su etapa final, listo para pruebas bajo carga y validación operativa, con parámetros restablecidos y mayor confiabilidad para operación continua.",
    valorAgregado: "Este proyecto reafirma la capacidad de ParGrup para intervenir en motores sometidos a condiciones extremas, brindando soluciones que maximizan la disponibilidad de equipos críticos y reducen costos asociados a fallas no planificadas.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/doosan-6cil/foto-${i + 1}.jpg`)
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
    desafio: "Un grupo electrógeno de alta potencia, equipado con motor Doosan V12, alcanzó horas críticas de operación continua en aplicaciones industriales severas. Las condiciones extremas de carga y el desgaste acumulado comprometían la confiabilidad operativa y el desempeño general del bloque, haciendo necesario un proceso de auditoría y recuperación integral.",
    solucion: "Se está ejecutando un overhaul completo del motor. La intervención en desarrollo incluye el desmontaje total para inspección técnica del conjunto motriz, control dimensional exhaustivo de componentes críticos de fuerza según especificaciones de fábrica, y el servicio integral de tapas de cilindros junto con el sistema de distribución.",
    resultado: "El equipo se encuentra actualmente en proceso de reacondicionamiento técnico y control dimensional de bancadas, avanzando rigurosamente hacia las etapas de montaje y verificación de parámetros mecánicos.",
    valorAgregado: "Este proyecto reafirma la capacidad técnica especializada de ParGrup para intervenir en bloques de alta cilindrada y complejidad estructural, garantizando la restitución de la confianza operativa de activos industriales críticos.",
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/services/doosan-v12/foto-${i + 1}.jpg`)
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
    desafio: "Motor Cummins KTA50 destinado a generación continua en una central de ENERSA presentó una falla crítica producto del desgaste avanzado en el sistema de válvulas, asociado a falta de mantenimiento preventivo. La anomalía derivó en una falla catastrófica que afectó múltiples cilindros del banco, generando daños estructurales y contaminación interna de sistemas clave.",
    solucion: "Se ejecutó una intervención mecánica mayor, abordando la reparación integral del banco afectado. El trabajo incluyó el reemplazo completo de cilindros, pistones y componentes críticos; sustitución de turbo y sistema de aftercooler; inspección estructural del motor y control de cigüeñal; junto con una limpieza profunda y descontaminación de sistemas de admisión y lubricación.",
    resultado: "El motor fue recuperado exitosamente, restituyendo sus condiciones operativas y asegurando la confiabilidad necesaria para servicio continuo. La intervención permitió evitar una parada prolongada de la central y reducir significativamente el riesgo de fallas futuras.",
    valorAgregado: "Este proyecto refuerza la capacidad de ParGrup para intervenir en fallas complejas en motores de gran porte, brindando soluciones eficientes en entornos de alta exigencia donde la continuidad operativa es crítica.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/kta50-valvulas/foto-${i + 1}.jpg`)
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
    desafio: "Un motor Cummins QSK60G, destinado a generación continua en un yacimiento petrolero, presentó detonaciones anormales durante operación, localizadas en el cilindro L2. La inspección boroscópica permitió identificar desgaste avanzado en la camisa del cilindro, presencia de combustible en la cámara de combustión y condiciones irregulares en las superficies de trabajo, comprometiendo la integridad del conjunto.",
    solucion: "Se ejecutó una intervención correctiva focalizada, realizando el desmontaje del tren superior y una evaluación mecánica del cilindro afectado. Se procedió al reemplazo de la camisa de cilindro, elementos de sellado, sustitución de la tapa de cilindro, y cambio de aros y cojinetes de biela. Asimismo, se realizaron controles complementarios de estanqueidad sobre componentes asociados.",
    resultado: "El motor fue recuperado exitosamente, quedando en condiciones de avanzar a etapas de armado final, calibración y ensayos operativos bajo exigencias propias de la industria Oil & Gas.",
    valorAgregado: "La rápida detección y resolución de la falla permitió evitar daños mayores y restituir la continuidad operativa de un equipo crítico. ParGrup demuestra su capacidad de respuesta ante fallas específicas en campo, optimizando tiempos y costos de intervención.",
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/services/qsk60g-conjunto/foto-${i + 1}.jpg`)
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
    desafio: "Motor a gas Cummins QSK60G presentaba desvíos en sus parámetros de combustión, afectando la eficiencia energética, la estabilidad operativa y la calidad de emisiones en condiciones de trabajo continuo. En este tipo de aplicaciones, una incorrecta relación aire/combustible impacta directamente en el rendimiento del equipo y en el cumplimiento de estándares operativos.",
    solucion: "Se ejecutó un servicio de regulación estequiométrica y calibración mediante herramientas de diagnóstico y software original Cummins (INSITE / InPower). Se realizó el ajuste de la relación aire/combustible, parametrización del ECM en tiempo real y verificación de sensores. Adicionalmente, se realizó un análisis de gases de escape con equipamiento profesional TESTO (O₂, CO, CO₂ y NOx).",
    resultado: "Se logró una combustión más eficiente y stable, con mejora notoria en el rendimiento del motor y reducción estricta de desviaciones en emisiones contaminantes, asegurando parámetros óptimos de operación continua.",
    valorAgregado: "La correcta calibración del sistema permite maximizar la eficiencia energética y prolongar la vida útil del equipo. ParGrup aporta precisión técnica y herramientas de última generación para optimizar motores en aplicaciones críticas.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/qsk60g-carburacion/foto-${i + 1}.jpg`)
  },
  {
    id: 6,
    engine: "QSK60 G",
    title: "M4",
    type: "After",
    service: "SRV-2026-006",
    date: "2026-05-28",
    specification: "Mantenimiento modular específico",
    mainTitle: "Mantenimiento mayor M4 en motor Cummins QSK60G – 12.000 horas",
    desafio: "Un motor Cummins QSK60G V16, destinado a generación continua en una planta industrial en Salta, alcanzó su intervalo de mantenimiento mayor (12.000 horas) bajo condiciones exigentes. El equipo trabaja en régimen de 60 Hz a 1800 RPM, lo que implica mayores cargas mecánicas y térmicas respecto a configuraciones estándar, incrementando el riesgo de desgaste prematuro.",
    solucion: "Se ejecutó un mantenimiento mayor tipo M4 enfocado en prevención. Incluyó el reemplazo de tapas de cilindro y turboalimentadores, inspección de árbol de levas, sustitución de bombas de refrigeración, descarbonización de cámaras y regulación de válvulas. Finalmente se realizó la calibración de combustión y ajuste estequiométrico con herramientas Cummins INSITE / InPower y análisis de gases.",
    resultado: "El motor quedó en condiciones óptimas para continuar su operación continua, con mejora en la estabilidad de combustión, eficiencia energética y confiabilidad general del sistema.",
    valorAgregado: "La intervención anticipada permitió reducir riesgos de fallas no planificadas y maximizar la disponibilidad del equipo en una aplicación industrial crítica. ParGrup aporta una estrategia de mantenimiento alineada a condiciones reales.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/qsk60g-m4/foto-${i + 1}.jpg`)
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
    desafio: "Un motor Cummins QSV91, destinado a generación continua en una planta industrial de alta demanda energética, presentó una falla asociada al sistema de refrigeración. La pérdida de refrigerante en una tapa de cilindro derivó en contaminación del sistema de combustión, acumulación crítica de carbonilla en el circuito de escape y afectación de los turboalimentadores del banco comprometido.",
    solucion: "Se ejecutó una intervención correctiva integral: reemplazo de tapa de cilindro defectuosa, sustitución de turboalimentadores del banco afectado, limpieza y descontaminación completa del sistema de escape, descarbonización del conjunto de combustión, e inspección y control estricto de camisas de cilindro.",
    resultado: "El equipo fue recuperado y quedó en condiciones de retomar su operación continua, con parámetros de funcionamiento completamente restablecidos y sistemas críticos saneados.",
    valorAgregado: "La intervención permitió corregir una falla compleja con impacto directo en múltiples sistemas del motor, evitando daños mayores. ParGrup aporta experiencia técnica y capacidad de respuesta rápida en entornos industriales de alta exigencia.",
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/services/qsv91-refrigerante/foto-${i + 1}.jpg`)
  },
  {
    id: 8,
    engine: "QSV91",
    title: "TITAN",
    type: "After",
    service: "SRV-2026-008",
    date: "2026-06-02",
    specification: "Reconstrucción completa V18",
    mainTitle: "Mantenimiento mayor M5 en motor Cummins QSV91 Titan – Oil & Gas",
    desafio: "Motor Cummins QSV91 Titan, instalado en una operación petrolera en Tratayén (Neuquén), alcanzó su intervalo de mantenimiento mayor tipo M5, tras aproximadamente 30.000 horas de operación continua bajo condiciones severas de carga. Este tipo de equipos, configurados en V18 y con sistema multiturbo, operan en entornos donde la fatiga de componentes impacta directo en la confiabilidad.",
    solucion: "Se ejecutó un mantenimiento mayor integral con desmontaje completo: sustitución de camisas, tapas de cilindro, bielas, cambio de bomba de aceite, retenes y los cuatro turboalimentadores. Se realizó la inspección de cigüeñal y árbol de levas, reemplazo de mangueras y circuitos, y regulación final de válvulas acompañada de calibraciones electrónicas INSITE / InPower y análisis de gases TESTO.",
    resultado: "El motor fue puesto en condiciones óptimas para continuar su operación continua, con mejora crítica en la estabilidad de combustión, confiabilidad mecánica y eficiencia operativa en un entorno de alta exigencia.",
    valorAgregado: "La ejecución del mantenimiento en tiempo y forma permitió maximizar la disponibilidad del equipo y extender su vida útil. ParGrup aporta experiencia técnica para intervenir en motores de máxima potencia en aplicaciones de Oil & Gas.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/qsv91-titan/foto-${i + 1}.jpg`)
  }
]

const typeConfig = {
  Before: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  During: "bg-warning/10 text-warning border-warning/20",
  After: "bg-success/10 text-success border-success/20",
}

export function ServiceGallery() {
  const [filter, setFilter] = useState("all")
  const [selectedTrabajo, setSelectedTrabajo] = useState<(typeof trabajosMotores)[0] | null>(null)
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTrabajos.map((trabajo) => (
              <div
                key={trabajo.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-muted/30 transition-all hover:border-[#00CCFF]/50 hover:shadow-[0_0_25px_rgba(0,204,255,0.2)]"
                onClick={() => {
                  setSelectedTrabajo(trabajo)
                  setCurrentFotoIdx(0)
                }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={trabajo.imagenes[0]}
                    alt={trabajo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80"
                    }}
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
                  <p className="text-sm font-light text-muted-foreground truncate">
                    Proyecto: <span className="font-semibold text-foreground">-{trabajo.title}-</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-mono">{trabajo.imagenes.length} fotografías técnicas</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* LIGHTBOX SPLIT VIEW MODAL OPTIMIZADO PARA TEXTOS LARGOS */}
      {selectedTrabajo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTrabajo(null)}
        >
          <div 
            className="relative flex h-full max-h-[85vh] w-full max-w-7xl flex-col overflow-hidden border border-cyan-500/30 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,204,255,0.15)] lg:flex-row rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4 z-20 text-white hover:bg-white/10"
              onClick={() => setSelectedTrabajo(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* CARRUSEL PRINCIPAL (Izquierda/Arriba) */}
            <div className="relative flex flex-1 items-center justify-center bg-black p-4 lg:flex-[5] min-h-[350px] lg:min-h-none">
              <img 
                src={selectedTrabajo.imagenes[currentFotoIdx]} 
                className="h-full w-full object-contain border-x border-cyan-500/5 select-none" 
                alt="Detalle de inspección"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80"
                }}
              />
              
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

              <div className="absolute bottom-6 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {selectedTrabajo.imagenes.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentFotoIdx ? 'bg-cyan-400 w-4' : 'bg-gray-600'}`} />
                ))}
              </div>
            </div>

            {/* PANEL LATERAL DE DETALLES INGENIERILES (Derecha/Abajo) */}
            <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-cyan-500/10 p-6 text-white lg:flex-[4] bg-[#0c0c0c] overflow-y-auto max-h-[50vh] lg:max-h-none">
              <div className="mb-4 border-l-4 border-cyan-400 pl-3">
                <h2 className="text-2xl font-bold tracking-tight text-cyan-400 uppercase">
                  {selectedTrabajo.engine} <span className="text-lg font-light text-white block lg:inline lg:ml-2">-{selectedTrabajo.title}-</span>
                </h2>
                <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">{selectedTrabajo.specification}</p>
              </div>

              {/* TÍTULO PRINCIPAL DEL INFORME TÉCNICO */}
              <h3 className="text-sm font-semibold text-gray-200 bg-muted/20 p-2 rounded border border-border/30 mb-4">
                {selectedTrabajo.mainTitle}
              </h3>

              {/* DESGLOSE ESTRUCTURADO EXIGIDO POR EL CLIENTE */}
              <div className="space-y-4 text-xs font-light leading-relaxed text-gray-300 flex-1">
                <div>
                  <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-red-400 mb-1">
                    <Target className="h-3.5 w-3.5" /> Desafío Técnico
                  </h4>
                  <p className="bg-red-950/10 p-2.5 rounded border border-red-900/20">{selectedTrabajo.desafio}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    <Wrench className="h-3.5 w-3.5" /> Solución Aplicada
                  </h4>
                  <p className="bg-cyan-950/10 p-2.5 rounded border border-cyan-900/20">{selectedTrabajo.solucion}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> Resultado Operativo
                  </h4>
                  <p className="bg-emerald-950/10 p-2.5 rounded border border-emerald-900/20">{selectedTrabajo.resultado}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400 mb-1">
                    <Lightbulb className="h-3.5 w-3.5" /> Valor Agregado
                  </h4>
                  <p className="bg-amber-950/10 p-2.5 rounded border border-amber-900/20">{selectedTrabajo.valorAgregado}</p>
                </div>
              </div>

              {/* METADATOS Y MINIATURAS */}
              <div className="mt-5 pt-3 border-t border-border/10">
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-3">
                  <span>OT: {selectedTrabajo.service}</span>
                  <span>FINALIZADO: {selectedTrabajo.date}</span>
                </div>

                <p className="text-[10px] uppercase text-cyan-400/50 font-bold tracking-wider mb-2">
                  Imágenes de Inspección ({selectedTrabajo.imagenes.length})
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {selectedTrabajo.imagenes.map((url, idx) => (
                    <div 
                      key={idx} 
                      className={`aspect-square cursor-pointer overflow-hidden border transition-all rounded ${idx === currentFotoIdx ? 'border-cyan-400 scale-95 shadow-[0_0_8px_rgba(0,204,255,0.3)] bg-black' : 'border-gray-800 opacity-40 hover:opacity-90'}`}
                      onClick={() => setCurrentFotoIdx(idx)}
                    >
                      <img src={url} className="h-full w-full object-cover" alt="Thumb" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=150&auto=format&fit=crop&q=80" }} />
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
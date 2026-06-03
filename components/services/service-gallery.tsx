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

// BASE DE DATOS ESTRUCTURADA REVISADA PARA EVITAR ERRORES DE COMPILACIÓN
const trabajosMotores = [
  {
    id: 1,
    engine: "Doosan",
    title: "6 CILINDROS",
    type: "After",
    service: "SRV-2026-001",
    date: "2026-05-10",
    specification: "Motor en linea de 6 cilindros",
    mainTitle: "Recuperacion integral de grupo electrogeno Doosan 6Cyl - 220 kVA",
    desafio: "Un grupo electrogeno de 220 kVA, equipado con motor Doosan de 6 cilindros, alcanzo aproximadamente 25.000 horas de operacion continua en aplicaciones petroleras de alta exigencia en la provincia de Neuquen. Las condiciones severas de trabajo y el desgaste acumulado comprometian la confiabilidad operativa y el desempeno del equipo, haciendo necesario un proceso de recuperacion integral.",
    solucion: "Se ejercito un overhaul completo del motor, con el objetivo de restituir sus condiciones originales de funcionamiento y extender su vida util. La intervencion incluyo el desmontaje total e inspeccion tecnica del conjunto motriz, control dimensional de componentes criticos segun especificaciones del fabricante, servicio integral de tapa de cilindros y sistema de distribucion, reemplazo de componentes sujetos a desgaste, e intervencion en sistemas de lubricacion, refrigeracion e inyeccion. Adicionalmente, se realizo la limpieza del alternador y la revision general del sistema de generacion para asegurar condiciones operativas optimas.",
    resultado: "El equipo fue reacondicionado con exito y se encuentra en su etapa final, listo para pruebas bajo carga y validacion operativa, con parametros restablecidos y mayor confiabilidad para operacion continua.",
    valorAgregado: "Este proyecto reafirma la capacidad de ParGrup para intervenir en motores sometidos a condiciones extremas, brindando soluciones que maximizan la disponibilidad de equipos criticos y reducen costos asociados a fallas no planificadas.",
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
    mainTitle: "Recuperacion integral de grupo electrogeno Doosan V12",
    desafio: "Un grupo electrogeno de alta potencia, equipado con motor Doosan V12, alcanzo horas criticas de operacion continua en aplicaciones industriales severas. Las condiciones extremas de carga y el desgaste acumulado comprometian la confiabilidad operativa y el desempeno general del bloque, haciendo necesario un proceso de auditoria y recuperacion integral.",
    solucion: "Se esta ejecutando un overhaul completo del motor. La intervencion en desarrollo incluye el desmontaje total para inspeccion tecnica del conjunto motriz, control dimensional exhaustivo de componentes criticos de fuerza segun especificaciones de fabrica, y el servicio integral de tapas de cilindros junto con el sistema de distribucion.",
    resultado: "El equipo se encuentra actualmente en proceso de reacondicionamiento tecnico y control dimensional de bancadas, avanzando rigurosamente hacia las etapas de montaje y verificacion de parametros mecanicos.",
    valorAgregado: "Este proyecto reafirma la capacidad tecnica especializada de ParGrup para intervenir en bloques de alta cilindrada y complejidad estructural, garantizando la restitucion de la confianza operativa de activos industriales criticos.",
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/services/doosan-v12/foto-${i + 1}.jpg`)
  },
  {
    id: 3,
    engine: "KTA50",
    title: "ROTURA DE VALVULAS",
    type: "Before",
    service: "SRV-2026-003",
    date: "2026-05-18",
    specification: "Diagnostico de fallas criticas Cummins",
    mainTitle: "Recuperacion integral de motor Cummins KTA50 en central ENERSA",
    desafio: "Motor Cummins KTA50 destinado a generacion continua en una central de ENERSA presento una falla critica producto del desgaste avanzado en el sistema de valvulas, asociado a falta de mantenimiento preventivo. La anomalia derivo en una falla catastrofica que afecto multiples cilindros del banco, generando danos estructurales y contaminacion interna de sistemas clave.",
    solucion: "Se ejercito una intervencion mecanica mayor, abordando la reparacion integral del banco afectado. El trabajo incluyo el reemplazo completo de cilindros, pistones y componentes criticos; sustitucion de turbo y sistema de aftercooler; inspeccion estructural del motor y control de ciguenal; junto con una limpieza profunda y descontaminacion de sistemas de admision y lubricacion.",
    resultado: "El motor fue recuperado exitosamente, restituyendo sus condiciones operativas y asegurando la confiabilidad necesaria para servicio continuo. La intervencion permitio evitar una parada prolongada de la central y reducir significativamente el riesgo de fallas futuras.",
    valorAgregado: "Este proyecto refuerza la capacidad de ParGrup para intervenir en fallas complejas en motores de gran porte, brindando soluciones eficientes en entornos de alta exigencia donde la continuidad operativa es critica.",
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
    mainTitle: "Intervencion correctiva en motor Cummins QSK60G en yacimiento petrolero",
    desafio: "Un motor Cummins QSK60G, destinado a generacion continua en un yacimiento petrolero, presento detonaciones anormales durante operacion, localizadas en el cilindro L2. La inspeccion boroscopica permitio identificar desgaste avanzado en la camisa del cilindro, presencia de combustible en la camara de combustion y condiciones irregulares en las superficies de trabajo, comprometiendo la integridad del conjunto.",
    solucion: "Se ejercito una intervencion correctiva focalizada, realizando el desmontaje del tren superior y una evaluacion mecanica del cilindro afectado. Se procedio al reemplazo de la camisa de cilindro, elementos de sellado, sustitucion de la tapa de cilindro, y cambio de aros y cojinetes de biela. Asimismo, se realizaron controles complementarios de estanqueidad sobre componentes asociados.",
    resultado: "El motor fue recuperado exitosamente, quedando en condiciones de avanzar a etapas de armado final, calibracion y ensayos operativos bajo exigencias propias de la industria Oil and Gas.",
    valorAgregado: "La rapida deteccion y resolucion de la falla permitio evitar danos mayores y restituir la continuidad operativa de un equipo critico. ParGrup demuestra su capacidad de respuesta ante fallas especificas en campo, optimizando tiempos y costos de intervencion.",
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
    mainTitle: "Optimizacion de combustion en motor Cummins QSK60G",
    desafio: "Motor a gas Cummins QSK60G presentaba desvios en sus parametros de combustion, afectando la eficiencia energetica, la estabilidad operativa y la calidad de emisiones en condiciones de trabajo continuo. En este tipo de aplicaciones, una incorrecta relacion aire/combustible impacta directamente en el rendimiento del equipo y en el cumplimiento de estandares operativos.",
    solucion: "Se ejercito un servicio de regulacion estequiometrica y calibracion mediante herramientas de diagnostico y software original Cummins (INSITE / InPower). Se realizo el ajuste de la relacion aire/combustible, parametrizacion del ECM en tiempo real y verificacion de sensores. Adicionalmente, se realizo un analisis de gases de escape con equipamiento profesional TESTO (O2, CO, CO2 y NOx).",
    resultado: "Se logro una combustion mas eficiente y estable, con mejora notoria en el rendimiento del motor y reduccion estricta de desvios en emisiones contaminantes, asegurando parametros optimos de operacion continua.",
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
    specification: "Mantenimiento modular especifico",
    mainTitle: "Mantenimiento mayor M4 en motor Cummins QSK60G - 12.000 horas",
    desafio: "Un motor Cummins QSK60G V16, destinado a generacion continua en una planta industrial en Salta, alcanzo su intervalo de mantenimiento mayor (12.000 horas) bajo condiciones exigentes. El equipo trabaja en regimen de 60 Hz a 1800 RPM, lo que implica mayores cargas mecanicas y termicas respecto a configuraciones estandar, incrementando el riesgo de desgaste prematuro.",
    solucion: "Se ejercito un mantenimiento mayor tipo M4 enfocado en prevencion. Incluyo el reemplazo de tapas de cilindro y turboalimentadores, inspeccion de arbol de levas, sustitucion de bombas de refrigeracion, descarbonizacion de camaras y regulacion de valvulas. Finalmente se realizo la calibracion de combustion y ajuste estequiometrico con herramientas Cummins INSITE / InPower y analisis de gases.",
    resultado: "El motor quedo en condiciones optimas para continuar su operacion continua, con mejora en la estabilidad de combustion, eficiencia energetica y confiabilidad general del sistema.",
    valorAgregado: "La intervencion anticipada permitio reducir riesgos de fallas no planificadas y maximizar la disponibilidad del equipo en una aplicacion industrial critica. ParGrup aporta una estrategia de mantenimiento alineada a condiciones reales.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/qsk60g-m4/foto-${i + 1}.jpg`)
  },
  {
    id: 7,
    engine: "Qsv 91",
    title: "PERDIDA DE REFRIGERANTE",
    type: "Before",
    service: "SRV-2026-007",
    date: "2026-06-01",
    specification: "Localizacion de fugas complejas",
    mainTitle: "Intervencion correctiva en motor Cummins QSV91 en planta industrial",
    desafio: "Un motor Cummins QSV91, destinado a generacion continua en una planta industrial de alta demanda energetica, presento una falla asociada al sistema de refrigeracion. La perdida de refrigerante en una tapa de cilindro derivo en contaminacion del sistema de combustion, acumulacion critica de carbonilla en el circuito de escape y afectacion de los turboalimentadores del banco comprometido.",
    solucion: "Se ejercito una intervencion correctiva integral: reemplazo de tapa de cilindro defectuosa, sustitucion de turboalimentadores del banco afectado, limpieza y descontaminacion completa del sistema de escape, descarbonizacion del conjunto de combustion, e inspeccion y control estricto de camisas de cilindro.",
    resultado: "El equipo fue recuperado y quedo en condiciones de retomar su operacion continua, con parametros de funcionamiento completamente restablecidos y sistemas criticos saneados.",
    valorAgregado: "La intervencion permitio corregir una falla compleja con impacto directo en multiples sistemas del motor, evitando danos mayores. ParGrup aporta experiencia tecnica y capacidad de respuesta rapida en entornos industriales de alta exigencia.",
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/services/qsv91-refrigerante/foto-${i + 1}.jpg`)
  },
  {
    id: 8,
    engine: "QSV91",
    title: "TITAN",
    type: "After",
    service: "SRV-2026-008",
    date: "2026-06-02",
    specification: "Reconstruccion completa V18",
    mainTitle: "Mantenimiento mayor M5 en motor Cummins QSV91 Titan - Oil and Gas",
    desafio: "Motor Cummins QSV91 Titan, instalado en una operacion petrolera en Tratayen (Neuquen), alcanzo su intervalo de mantenimiento mayor tipo M5, tras aproximadamente 30.000 horas de operacion continua bajo condiciones severas de carga. Este tipo de equipos, configurados en V18 y con sistema multiturbo, operan en entornos donde la fatiga de componentes impacta directo en la confiabilidad.",
    solucion: "Se ejercito un mantenimiento mayor integral con desmontaje completo: sustitucion de camisas, tapas de cilindro, bielas, cambio de bomba de aceite, retenes y los cuatro turboalimentadores. Se realizo la inspeccion de ciguenal y arbol de levas, reemplazo de mangueras y circuitos, y regulacion final de valvulas acompanada de calibraciones electronicas INSITE / InPower y analisis de gases TESTO.",
    resultado: "El motor fue puesto en condiciones optimas para continuar su operacion continua, con mejora critica en la estabilidad de combustion, confiabilidad mecanica y eficiencia operativa en un entorno de alta exigencia.",
    valorAgregado: "La ejecucion del mantenimiento en tiempo y forma permitio maximizar la disponibilidad del equipo y extender su vida util. ParGrup aporta experiencia tecnica para intervenir en motores de maxima potencia en aplicaciones de Oil and Gas.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/qsv91-titan/foto-${i + 1}.jpg`)
  }
]

const typeConfig = {
  Before: "bg-[#f97316]/10 text-[#f97316] border-[#f97316]/20",
  During: "bg-[#eab308]/10 text-[#eab308] border-[#eab308]/20",
  After: "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20",
}

export function ServiceGallery() {
  const [filter, setFilter] = useState("all")
  const [selectedTrabajo, setSelectedTrabajo] = useState<(typeof trabajosMotores)[0] | null>(trabajosMotores[7])
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
    <div className="space-y-8 w-full max-w-7xl mx-auto p-2">
      
      {/* VISUALIZADOR PRINCIPAL INTEGRADO HORIZONTAL */}
      {selectedTrabajo && (
        <div className="w-full flex justify-center">
          <div className="relative flex h-full min-h-[580px] max-h-[750px] w-full flex-col overflow-hidden border border-cyan-500/20 bg-[#000000] lg:flex-row rounded-lg shadow-[0_0_40px_rgba(0,204,255,0.08)]">
      
            {/* PANEL IZQUIERDO: CARRUSEL MULTIMEDIA */}
            <div className="relative flex flex-1 items-center justify-center bg-black p-4 lg:flex-[5.5] min-h-[380px] lg:min-h-none">
              <img 
                src={selectedTrabajo.imagenes[currentFotoIdx]} 
                className="h-full max-h-[520px] w-full object-contain select-none" 
                alt="Inspeccion de ingenieria"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80"
                }}
              />
              
              <Button 
                variant="ghost" size="icon" 
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/30 border-none"
                onClick={prevPhoto}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" size="icon" 
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/30 border-none"
                onClick={nextPhoto}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-4 flex gap-1.5 bg-black/50 px-3 py-1 rounded-full">
                {selectedTrabajo.imagenes.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === currentFotoIdx ? 'bg-[#00CCFF] scale-110 w-3' : 'bg-gray-600'}`} 
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent my-6"></div>

            {/* PANEL DERECHO: DETALLES INGENIERILES DESGLOSADOS */}
            <div className="flex flex-col p-6 text-white lg:flex-[4.5] bg-[#050505] justify-between overflow-hidden">
              
              <div className="overflow-y-auto pr-2 space-y-4 max-h-[420px] lg:max-h-[500px] style-scrollbar">
                
                <div className="border-l-4 border-cyan-400 pl-3">
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#00CCFF] uppercase">
                    {selectedTrabajo.engine} <span className="text-lg font-light text-white block sm:inline sm:ml-2">-{selectedTrabajo.title}-</span>
                  </h2>
                  <p className="text-[10px] font-mono text-gray-400 mt-0.5 uppercase tracking-wider">{selectedTrabajo.specification}</p>
                </div>

                <h3 className="text-xs font-semibold text-gray-200 bg-white/5 p-2 rounded border border-white/10">
                  {selectedTrabajo.mainTitle}
                </h3>

                <div className="space-y-3 text-[11px] font-light leading-relaxed text-gray-300">
                  <div>
                    <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-red-400 mb-0.5">
                      <Target className="h-3 w-3" /> Desafio Tecnico
                    </h4>
                    <p className="bg-red-950/5 p-2 rounded border border-red-900/15">{selectedTrabajo.desafio}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-cyan-400 mb-0.5">
                      <Wrench className="h-3 w-3" /> Solucion Aplicada
                    </h4>
                    <p className="bg-cyan-950/5 p-2 rounded border border-cyan-900/15">{selectedTrabajo.solucion}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-emerald-400 mb-0.5">
                      <ShieldCheck className="h-3 w-3" /> Resultado Operativo
                    </h4>
                    <p className="bg-emerald-950/5 p-2 rounded border border-emerald-900/15">{selectedTrabajo.resultado}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400 mb-0.5">
                      <Lightbulb className="h-3 w-3" /> Valor Agregado
                    </h4>
                    <p className="bg-amber-950/5 p-2 rounded border border-amber-900/15">{selectedTrabajo.valorAgregado}</p>
                  </div>
                </div>
              </div>

              {/* METADATOS Y MINIATURAS FOTOGRAFICAS ABAJO */}
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="flex justify-between text-[9px] font-mono text-gray-500 mb-2">
                  <span>OT: {selectedTrabajo.service}</span>
                  <span>FINALIZADO: {selectedTrabajo.date}</span>
                </div>

                <div className="grid grid-cols-5 gap-1.5">
                  {selectedTrabajo.imagenes.map((url, idx) => (
                    <div 
                      key={idx} 
                      className={`aspect-square cursor-pointer overflow-hidden border transition-all rounded ${idx === currentFotoIdx ? 'border-[#00CCFF] scale-95 shadow-[0_0_8px_rgba(0,204,255,0.3)] bg-black' : 'border-neutral-900 opacity-40 hover:opacity-100'}`}
                      onClick={() => setCurrentFotoIdx(idx)}
                    >
                      <img 
                        src={url} 
                        className="h-full w-full object-cover" 
                        alt="Miniatura tecnica" 
                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=150&auto=format&fit=crop&q=80" }} 
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* GRILLA SELECCION DE CARPETAS */}
      <Card className="border-white/5 bg-[#0a0a0a] rounded-lg">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-cyan-400" />
              <CardTitle className="text-md font-bold uppercase tracking-wider text-gray-300">
                Galerias Tecnicas (Seleccionar Carpeta)
              </CardTitle>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[150px] bg-black border-neutral-800 text-white">
                <Filter className="mr-2 h-4 w-4 text-cyan-400" />
                <SelectValue placeholder="Filtrar" />
              </SelectTrigger>
              <SelectContent className="bg-[#0a0a0a] border-neutral-800 text-white">
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Before">Antes</SelectItem>
                <SelectItem value="During">Durante</SelectItem>
                <SelectItem value="After">Despues</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTrabajos.map((trabajo) => (
              <div
                key={trabajo.id}
                className={`group relative cursor-pointer overflow-hidden border p-4 transition-all rounded-lg ${selectedTrabajo?.id === trabajo.id ? 'border-[#00CCFF] bg-cyan-500/5 shadow-[0_0_15px_rgba(0,204,255,0.1)]' : 'border-neutral-900 bg-black/50 hover:border-cyan-500/30'}`}
                onClick={() => {
                  setSelectedTrabajo(trabajo)
                  setCurrentFotoIdx(0)
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-xs font-bold text-[#00CCFF]">{trabajo.engine}</p>
                  <Badge variant="outline" className={`text-[10px] py-0 px-1.5 ${typeConfig[trabajo.type as keyof typeof typeConfig]}`}>
                    {trabajo.type === "Before" ? "Antes" : trabajo.type === "During" ? "Durante" : "Despues"}
                  </Badge>
                </div>
                <p className="text-xs font-medium text-gray-300 truncate">
                  {trabajo.title}
                </p>
                <p className="text-[10px] text-gray-500 mt-1 font-mono">{trabajo.imagenes.length} fotografias locales</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
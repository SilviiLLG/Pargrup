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
import { Camera, Filter, ChevronLeft, ChevronRight } from "lucide-react"

// BASE DE DATOS COMPLETA: 8 carpetas reales con sus fotos exactas (8 o 9) y las descripciones largas originales
const trabajosMotores = [
  {
    id: 1,
    engine: "DOOSAN",
    title: "6 CILINDROS",
    type: "After",
    service: "SRV-2026-001",
    date: "2026-05-10",
    specification: "Motor en línea de 6 cilindros",
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Recuperación integral de grupo electrógeno Doosan 6Cyl – 220 kVA</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Un grupo electrógeno de 220 kVA, equipado con motor Doosan de 6 cilindros, alcanzó aproximadamente 25.000 horas de operación continua en aplicaciones petroleras de alta exigencia en la provincia de Neuquén. Las condiciones severas de trabajo y el desgaste acumulado comprometían la confiabilidad operativa y el desempeño del equipo, haciendo necesario un proceso de recuperación integral.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó un overhaul completo del motor, con el objetivo de restituir sus condiciones originales de funcionamiento y extender su vida útil. La intervención incluuyó: Desmontaje total e inspección técnica del conjunto motriz; Control dimensional de componentes críticos según especificaciones del fabricante; Servicio integral de tapa de cilindros y sistema de distribución; Reemplazo de componentes sujetos a desgaste; Intervención en sistemas de lubricación, refrigeración e inyección; Limpieza técnica y verificación de parámetros mecánicos. Adicionalmente, se realizó la limpieza del alternador y la revisión general del sistema de generación para asegurar condiciones operativas óptimas.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> El equipo fue reacondicionado con éxito y se encuentra en su etapa final, listo para pruebas bajo carga y validación operativa, con parámetros restablecidos y mayor confiabilidad para operación continua.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> Este proyecto reafirma la capacidad de ParGrup para intervenir en motores sometidos a condiciones extremas, brindando soluciones que maximizan la disponibilidad de equipos críticos y reducen costos asociados a fallas no planificadas.</p>
      </>
    ),
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/doosan-6cil/foto-${i + 1}.jpg`)
  },
  {
    id: 2,
    engine: "DOOSAN",
    title: "V12",
    type: "During",
    service: "SRV-2026-002",
    date: "2026-05-14",
    specification: "Motor de alta potencia V12",
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Recuperación integral de grupo electrógeno Doosan 6Cyl – 220 kVA</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Un grupo electrógeno de 220 kVA, equipado con motor Doosan de 6 cilindros, alcanzó aproximadamente 25.000 horas de operación continua en aplicaciones petroleras de alta exigencia en la provincia de Neuquén. Las condiciones severas de trabajo y el desgaste acumulado comprometían la confiabilidad operativa y el desempeño del equipo, haciendo necesario un proceso de recuperación integral.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó un overhaul completo del motor, con el objetivo de restituir sus condiciones originales de funcionamiento y extender su vida útil. La intervención incluyó: Desmontaje total e inspección técnica del conjunto motriz; Control dimensional de componentes críticos según especificaciones del fabricante; Servicio integral de tapa de cilindros y sistema de distribución; Reemplazo de componentes sujetos a desgaste; Intervención en sistemas de lubricación, refrigeración e inyección; Limpieza técnica y verificación de parámetros mecánicos. Adicionalmente, se realizó la limpieza del alternador y la revisión general del sistema de generación para asegurar condiciones operativas óptimas.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> El equipo fue reacondicionado con éxito y se encuentra en su etapa final, listo para pruebas bajo carga y validación operativa, con parámetros restablecidos y mayor confiabilidad para operation continua.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> Este proyecto reafirma la capacidad de ParGrup para intervenir en motores sometidos a condiciones extremas, brindando soluciones que maximizan la disponibilidad de equipos críticos y reducen costos asociados a fallas no planificadas.</p>
      </>
    ),
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
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Recuperación integral de motor Cummins KTA50 en central ENERSA</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Motor Cummins KTA50 destinado a generación continua en una central de ENERSA presentó una falla crítica producto del desgaste avanzado en el sistema de válvulas, asociado a falta de mantenimiento preventivo. La anomalía derivó en una falla catastrófica que afectó múltiples cilindros del banco, generando daños estructurales y contaminación interna de sistemas clave.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó una intervención mecánica mayor, abordando la reparación integral del banco afectado. El trabajo incluyó: Reemplazo completo de cilindros, pistones y componentes críticos; Sustitución de turbo y sistema de aftercooler; Inspección estructural del motor y control de cigüeñal; Limpieza profunda y descontaminación de sistemas de admisión y lubricación; Verificación integral de tolerancias y condiciones mecánicas.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> El motor fue recuperado exitosamente, restituendo sus condiciones operativas y asegurando la confiabilidad necesaria para servicio continuo. La intervención permitió evitar una parada prolongada de la central y reducir significativamente el riesgo de fallas futuras.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> Este proyecto refuerza la capacidad de ParGrup para intervenir en fallas complejas en motores de gran porte, brindando soluciones eficientes en entornos de alta exigencia donde la continuidad operativa es crítica.</p>
      </>
    ),
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
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Intervención correctiva en motor Cummins QSK60G en yacimiento petrolero</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Un motor Cummins QSK60G, destinado a generación continua en un yacimiento petrolero, presentó detonaciones anormales durante operación, localizadas en el cilindro L2. La inspección boroscópica permitió identificar desgaste avanzado en la camisa del cilindro, presencia de combustible en la cámara de combustión y condiciones irregulares en las superficies de trabajo, comprometiendo la integridad del conjunto.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó una intervención correctiva focalizada, realizando el desmontaje del tren superior y una evaluación mecánica integral del cilindro afectado. La intervención incluyó: Inspección técnica del conjunto pistón/camisa; Reemplazo de camisa de cilindro y elementos de sellado; Sustitución de tapa de cilindro; Cambio de aros y cojinetes de biela del conjunto intervenido; Verificación de tolerancias mecánicas y condiciones de funcionamiento. Asimismo, se realizaron controles complementarios sobre componentes asociados para asegurar estanqueidad, estabilidad y confiabilidad operativa.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> El motor fue recuperado exitosamente, quedando en condiciones de avanzar a etapas de armado final, calibración y ensayos operativos bajo exigencias propias de la industria Oil & Gas.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> La rápida detección y resolución de la falla permitió evitar daños mayores y restituir la continuidad operativa de un equipo crítico. ParGrup demuestra su capacidad de respuesta ante fallas específicas en campo, optimizando tiempos y costos de intervención.</p>
      </>
    ),
    imagenes: Array.from({ length: 9 }, (_, i) => `/images/services/qsk60g-conjunto/foto-${i + 1}.jpg`)
  },
  {
    id: 5,
    engine: "QSK 60 G",
    title: "ITA CARBURACION",
    type: "After",
    service: "SRV-2026-005",
    date: "2026-05-25",
    specification: "Ajuste de sistema de combustible",
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Optimización de combustión en motor Cummins QSK60G</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Motor a gas Cummins QSK60G presentaba desvíos en sus parámetros de combustión, afectando la eficiencia energética, la estabilidad operativa y la calidad de emisiones en condiciones de trabajo continuo. En este tipo de aplicaciones, una incorrecta relación aire/combustible impacta directamente en el rendimiento del equipo y en el cumplimiento de estándares operativos y ambientales.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó un servicio integral de regulación estequiométrica y calibración de combustión, mediante herramientas de diagnóstico y software original Cummins (INSITE / InPower). La intervención incluyó: Monitoreo y ajuste de la relación aire/combustible; Parametrización de variables críticas del ECM en tiempo real; Control de temperaturas, presiones y condiciones de combustión; Verificación de sensores y actuadores. Adicionalmente, se realizó análisis de gases de escape con equipamiento profesional TESTO, permitiendo ajustar y optimizar indicadores clave como O₂, CO, CO₂ y NOx.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> Se logró una combustión más eficiente y estable, con mejora en el rendimiento del motor y reducción de desviaciones en emisiones contaminantes, asegurando parámetros óptimos de operación continua.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> La correcta calibración del sistema permite maximizar la eficiencia energética y prolongar la vida útil del equipo, reduciendo costos operativos. ParGrup aporta precisión técnica y herramientas de última generación para optimizar motores en aplicaciones críticas.</p>
      </>
    ),
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
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Mantenimiento mayor M4 en motor Cummins QSK60G – 12.000 horas</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Un motor Cummins QSK60G V16, destinado a generación continua en una planta industrial en Salta, alcanzó su intervalo de mantenimiento mayor (12.000 horas) bajo condiciones de operación de alta exigencia. El equipo trabaja en régimen de 60 Hz a 1800 RPM, lo que implica mayores cargas mecánicas y térmicas respecto a configuraciones estándar, incrementando el riesgo de desgaste prematuro y afectando la confiabilidad operativa.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó un mantenimiento mayor tipo M4, adaptado a las condiciones reales de operación, con foco en prevención y confiabilidad. La intervención incluyó: Reemplazo de tapas de cilindro y turboalimentadores; Inspección de árbol de levas y componentes del tren de válvulas; Sustitución de bombas de refrigeración y sistema de control térmico; Descarbonización de cámaras de combustión; Reemplazo de filtros, bujías y elementos de sellado; Regulación de válvulas y control de tolerancias críticas. Como parte final, se realizó calibración de combustión y ajuste estequiométrico mediante herramientas Cummins INSITE / InPower y análisis de gases, optimizando la mezcla aire/combustible y los parámetros de operación.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> El motor quedó en condiciones óptimas para continuar su operación continua, con mejora en la estabilidad de combustión, eficiencia energética y confiabilidad general del sistema.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> La intervención anticipada permitió reducir riesgos de fallas no planificadas y maximizar la disponibilidad del equipo en una aplicación industrial crítica. ParGrup aporta una estrategia de mantenimiento alineada a condiciones reales de operación, asegurando rendimiento y continuidad.</p>
      </>
    ),
    imagenes: Array.from({ length: 8 }, (_, i) => `/images/services/qsk60g-m4/foto-${i + 1}.jpg`)
  },
  {
    id: 7,
    engine: "QSV 91",
    title: "PERDIDA DE REFRIGERANTE",
    type: "Before",
    service: "SRV-2026-007",
    date: "2026-06-01",
    specification: "Localización de fugas complejas",
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Intervención correctiva en motor Cummins QSV91 en planta industrial</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Un motor Cummins QSV91, destinado a generación continua en una planta industrial de alta demanda energética, presentó una falla asociada al sistema de refrigeración. La pérdida de refrigerante en una tapa de cilindro derivó en contaminación del sistema de combustión, acumulación crítica de carbonilla en el circuito de escape y afectación de los turboalimentadores del banco comprometido, comprometiendo seriamente la operación del equipo.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó una intervención correctiva integral sobre el conjunto afectado, realizando desmontaje, diagnóstico técnico y recuperación de los sistemas comprometidos. La intervención incluyó: Reemplazo de tapa de cilindro defectuosa; Sustitución de turboalimentadores del banco afectado; Limpieza y descontaminación del sistema de escape; Descarbonización del conjunto de combustión; Inspección y control de camisa y componentes críticos; Verificación de tolerancias y condiciones mecánicas. Adicionalmente, se realizaron controles de estanqueidad y validación de condiciones de armado para asegurar la confiabilidad del sistema.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> El equipo fue recuperado y quedó en condiciones de retomar su operación continua, con parámetros de funcionamiento restablecidos y sistemas críticos saneados.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> La intervención permitió corregir una falla compleja con impacto directo en múltiples sistemas del motor, evitando daños mayores y recuperando la disponibilidad de un activo crítico. ParGrup aporta experiencia técnica y capacidad de respuesta en entornos industriales de alta exigencia.</p>
      </>
    ),
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
    description: (
      <>
        <p className="font-semibold text-gray-200 mb-2">Mantenimiento mayor M5 en motor Cummins QSV91 Titan – Oil & Gas</p>
        <p className="mb-2"><strong className="text-cyan-400">Desafío:</strong> Motor Cummins QSV91 Titan, instalado en una operación petrolera en Tratayén (Neuquén), alcanzó su intervalo de mantenimiento mayor tipo M5, tras aproximadamente 30.000 horas de operación continua bajo condiciones severas de carga. Este tipo de equipos, configurados en V18 y con sistema multiturbo, operan en entornos críticos donde el desgaste estructural y la fatiga de componentes pueden impactar directamente en la disponibilidad y confiabilidad del sistema.</p>
        <p className="mb-2"><strong className="text-cyan-400">Solución:</strong> Se ejecutó un mantenimiento mayor integral, con desmontaje completo, inspección técnica y reemplazo preventivo de componentes críticos. La intervención incluyó: Sustitución de camisas, tapas de cilindro y bielas; Reemplazo de bomba de aceite y retenes; Cambio de los cuatro turboalimentadores; Inspección y control del cigeweñal y árbol de levas; Intervención sobre sistema de distribución; Reemplazo integral de mangueras y circuitos de lubricación y refrigeración; Renovación de filtros, bujías y elementos de sellado; Regulación de válvulas y control de tolerancias. Como etapa final, se realizaron calibraciones electrónicas y ajuste estequiométrico mediante herramientas Cummins INSITE / InPower y análisis de gases, optimizando la combustión y el desempeño bajo carga.</p>
        <p className="mb-2"><strong className="text-cyan-400">Resultado:</strong> El motor fue puesto en condiciones óptimas para continuar su operación continua, con mejora en la estabilidad de combustión, confiabilidad mecánica y eficiencia operativa en un entorno de alta exigencia.</p>
        <p><strong className="text-cyan-400">Valor agregado:</strong> La ejecución del mantenimiento en tiempo y forma permitió maximizar la disponibilidad del equipo, reducir riesgos de fallas críticas y extender su vida útil. ParGrup aporta experiencia y capacidad técnica para intervenir en motores de máxima potencia en aplicaciones críticas de Oil & Gas.</p>
      </>
    ),
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
  const [selectedTrabajo, setSelectedTrabajo] = useState<(typeof trabajosMotores)[0] | null>(trabajosMotores[7]) // QSV91 TITAN precargado igual al bosquejo
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
    <div className="space-y-10 bg-[#060606] p-4 min-h-screen text-white">
      
      {/* SECCIÓN DEL VISUALIZADOR PRINCIPAL INTEGRADO (Look oscuro e integrado, fiel al bosquejo) */}
      {selectedTrabajo && (
        <div className="w-full flex justify-center py-4">
          <div className="relative flex h-full min-h-[500px] max-h-[640px] w-full max-w-6xl flex-col overflow-hidden border border-cyan-500/10 bg-[#000000] md:flex-row rounded-none">
            
            {/* CARRUSEL DE IMAGEN (Izquierda) */}
            <div className="relative flex flex-1 items-center justify-center bg-black p-2 md:flex-[6]">
              <img 
                src={selectedTrabajo.imagenes[currentFotoIdx]} 
                className="h-full max-h-[580px] w-full object-contain select-none" 
                alt="Detalle técnico de motor"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80"
                }}
              />
              
              {/* Botones de control del carrusel */}
              <Button 
                variant="ghost" size="icon" 
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/50 h-8 w-8"
                onClick={prevPhoto}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" size="icon" 
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/50 h-8 w-8"
                onClick={nextPhoto}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Indicadores en puntos */}
              <div className="absolute bottom-4 flex gap-1.5 bg-black/50 px-3 py-1 rounded-full">
                {selectedTrabajo.imagenes.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentFotoIdx ? 'bg-[#00CCFF] scale-110' : 'bg-gray-600'}`} 
                  />
                ))}
              </div>
            </div>

            {/* Divisor vertical celeste */}
            <div className="hidden md:block w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent my-8 opacity-60"></div>

            {/* PANEL DE INFORMACIÓN TEXTUAL (Derecha) */}
            <div className="flex flex-col p-6 text-white md:flex-[4] bg-[#000000] justify-between overflow-hidden">
              <div className="overflow-y-auto pr-2 custom-scrollbar">
                {/* Encabezado del Motor */}
                <h2 className="text-3xl font-extrabold tracking-tight text-[#00CCFF] uppercase font-sans">
                  {selectedTrabajo.engine} <span className="text-white font-light">-{selectedTrabajo.title}-</span>
                </h2>
                
                <p className="mt-1 text-sm font-medium text-cyan-400/90 font-sans tracking-wide">
                  {selectedTrabajo.specification}
                </p>

                {/* Texto de ingeniería completo e ininterrumpido en blanco */}
                <div className="mt-4 text-xs leading-relaxed text-gray-300 font-normal space-y-3 font-sans">
                  {selectedTrabajo.description}
                </div>
              </div>

              {/* MINIATURAS FOTOGRÁFICAS (Abajo a la derecha) */}
              <div className="mt-4 pt-3 border-t border-gray-900">
                <div className="grid grid-cols-4 gap-2">
                  {selectedTrabajo.imagenes.slice(0, 4).map((url, idx) => (
                    <div 
                      key={idx} 
                      className={`aspect-square cursor-pointer overflow-hidden border transition-all rounded-none ${idx === currentFotoIdx ? 'border-[#00CCFF] shadow-[0_0_8px_rgba(0,204,255,0.4)]' : 'border-gray-800 opacity-50 hover:opacity-100'}`}
                      onClick={() => setCurrentFotoIdx(idx)}
                    >
                      <img 
                        src={url} 
                        className="h-full w-full object-cover" 
                        alt="Miniatura técnica" 
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=150&auto=format&fit=crop&q=80"
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* GRILLA SELECTORA DE CARPETAS */}
      <Card className="border-gray-900 bg-[#0a0a0a] rounded-none">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-cyan-400" />
              <CardTitle className="text-md font-bold uppercase tracking-wider text-gray-300">
                Galerías Técnicas (Seleccionar Carpeta)
              </CardTitle>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[150px] bg-black border-gray-800 text-white">
                <Filter className="mr-2 h-4 w-4 text-cyan-400" />
                <SelectValue placeholder="Filtrar" />
              </SelectTrigger>
              <SelectContent className="bg-[#0a0a0a] border-gray-800 text-white">
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Before">Antes</SelectItem>
                <SelectItem value="During">Durante</SelectItem>
                <SelectItem value="After">Después</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTrabajos.map((trabajo) => (
              <div
                key={trabajo.id}
                className={`group relative cursor-pointer overflow-hidden border p-3 transition-all ${selectedTrabajo?.id === trabajo.id ? 'border-[#00CCFF] bg-muted/20' : 'border-gray-900 bg-black hover:border-cyan-500/40'}`}
                onClick={() => {
                  setSelectedTrabajo(trabajo)
                  setCurrentFotoIdx(0)
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-xs font-bold text-[#00CCFF]">{trabajo.engine}</p>
                  <Badge variant="outline" className={`text-[10px] py-0 px-1.5 ${typeConfig[trabajo.type as keyof typeof typeConfig]}`}>
                    {trabajo.type === "Before" ? "Antes" : trabajo.type === "During" ? "Durante" : "Después"}
                  </Badge>
                </div>
                <p className="text-xs font-medium text-gray-300 truncate">
                  {trabajo.title}
                </p>
                <p className="text-[10px] text-gray-500 mt-1 font-mono">{trabajo.imagenes.length} fotografías técnicas</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
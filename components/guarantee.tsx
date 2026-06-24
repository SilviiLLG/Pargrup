'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, ShieldCheck, Users, Truck, Headphones, Handshake, X, CheckCircle } from 'lucide-react'

export function Guarantee() {
  // Estado para controlar la ventana emergente (modal) de "Por Qué Elegirnos"
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Características de la sección original (Garantía)
  const features = [
    { icon: ShieldCheck, title: 'Repuestos 100% Originales', desc: 'Garantía total de autenticidad Cummins en cada componente.' },
    { icon: Users, title: 'Técnicos Certificados', desc: 'Personal capacitado directamente por Cummins Inc.' },
    { icon: Truck, title: 'Logística Nacional', desc: 'Entrega y servicio en todo el territorio argentino.' },
    { icon: Headphones, title: 'Soporte Continuo', desc: 'Asistencia técnica telefónica y guardias adaptadas a su necesidad.' },
  ]

  // Información detallada de los Acuerdos LSA (Por Qué Elegirnos) para el modal
  const lsaDetails = {
    title: 'ACUERDOS DE SOPORTE LSA*',
    subtitle: '¿POR QUÉ ELEGIRNOS?',
    description: 'Estructuramos acuerdos de soporte de ciclo de vida a medida (Lifecycle Support Agreements).',
    points: [
      { title: 'Contratos a Medida', desc: 'Para aplicaciones Standby brindamos coberturas programadas con análisis de fluidos e informes automatizados.' },
      { title: 'Regímenes Prime', desc: 'Garantizamos packs de consumibles y mantenimiento preventivo continuo cada 250 horas, absorbiendo la responsabilidad operativa.' },
      { title: 'Componentes Seleccionados', desc: 'Máxima confiabilidad en piezas y repuestos originales para cada motor intervenido.' },
      { title: 'Logística en Yacimientos', desc: 'Despliegue operativo inmediato y asistencia técnica especializada en toda la Argentina.' }
    ]
  }

  return (
    <section id="elegirnos" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Círculo original brillante azul de Cummins */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-square w-full max-w-[380px] rounded-full border-2 border-cyan-500/30 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-cyan-950/20 to-black shadow-[0_0_50px_rgba(6,182,212,0.15)]">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-cyan-400" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono mb-1">
                GARANTÍA DE
              </span>
              <h3 className="text-2xl font-bold max-w-xs text-white uppercase">
                Repuestos Originales <span className="text-cyan-400 block mt-1">CUMMINS</span>
              </h3>
              <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
                <ShieldCheck className="w-4 h-4" />
                Certificado
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Textos originales y las 4 tarjetas fijas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              {/* BOTON INTERACTIVO: Abre la información oculta */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-mono text-cyan-400 uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-sm"
              >
                Nuestra Garantía • <span className="underline font-bold">Ver ¿Por Qué Elegirnos?</span>
              </button>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                Compromiso con la <span className="text-cyan-400 text-glow">Excelencia</span>
              </h2>

              <p className="text-neutral-400 text-sm leading-relaxed">
                Más de dos décadas trabajando exclusivamente con repuestos originales Cummins, garantizando el máximo rendimiento y durabilidad de cada motor.
              </p>
            </div>

            {/* Grilla de 4 características originales */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-900 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feat.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wide mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* VENTANA EMERGENTE (MODAL) INTERACTIVA PARA "POR QUÉ ELEGIRNOS" */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Fondo oscuro traslúcido de cierre */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Contenedor del contenido */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 lg:p-8 shadow-2xl z-10 text-white"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cabecera del modal */}
              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-1">
                  {lsaDetails.subtitle}
                </span>
                <h3 className="text-xl lg:text-2xl font-black text-white tracking-wide">
                  {lsaDetails.title}
                </h3>
                <div className="h-0.5 w-16 bg-cyan-500 mt-2" />
              </div>

              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {lsaDetails.description}
              </p>

              {/* Listado de puntos clave LSA */}
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {lsaDetails.points.map((point, index) => (
                  <div key={index} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-900 flex gap-3 items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-white mb-1">
                        {point.title}
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón inferior de cierre */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-white hover:bg-neutral-800 transition-colors"
                >
                  Entendido / Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
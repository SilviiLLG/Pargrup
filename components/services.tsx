'use client'

import { motion } from 'framer-motion'
import { Wrench, Settings, Activity, ShieldAlert, Cpu, FileText } from 'lucide-react'

export function Services() {
  const servicesList = [
    {
      icon: Wrench,
      title: 'Mantenimiento Preventivo',
      desc: 'Planes estructurados (cada 250 o 500 hs) para garantizar la disponibilidad crítica de tus grupos electrógenos.'
    },
    {
      icon: Settings,
      title: 'Overhaul y Reparación',
      desc: 'Intervenciones mayores y rectificación de motores Cummins con herramental de precisión y repuestos 100% originales.'
    },
    {
      icon: Activity,
      title: 'Diagnóstico Computarizado',
      desc: 'Escaneo electrónico avanzado de parámetros, lectura de códigos de falla y calibración de sistemas ECM.'
    },
    {
      icon: ShieldAlert,
      title: 'Guardias de Emergencia 24/7',
      desc: 'Soporte técnico telefónico inmediato y despliegue operativo en yacimientos o plantas ante paradas imprevistas.'
    },
    {
      icon: Cpu,
      title: 'Sincronismo y Automatización',
      desc: 'Configuración de módulos de control (Deep Sea, ComAp) y tableros de transferencia automática (TTA).'
    },
    {
      icon: FileText,
      title: 'Análisis de Fluidos',
      desc: 'Toma de muestras semestrales de aceite y refrigerante para análisis predictivo en laboratorio, reportado por email.'
    }
  ]

  return (
    <section id="servicios" className="relative py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        
        {/* Cabecera de la sección */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Soluciones de Ingeniería
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Nuestros <span className="text-cyan-400">Servicios Técnicos</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed text-pretty">
            Especialización absoluta en soporte de ciclo de vida para sistemas de generación de energía y motores industriales.
          </p>
        </div>

        {/* Grilla de Servicios de 3 columnas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((svc, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-900 hover:border-cyan-500/30 transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.05)]"
            >
              {/* Contenedor del Icono con animación sutil al hacer hover */}
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                <svc.icon className="w-5 h-5 text-cyan-400 group-hover:text-black transition-colors" />
              </div>

              <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-2 group-hover:text-cyan-400 transition-colors">
                {svc.title}
              </h3>
              
              <p className="text-neutral-400 text-xs leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
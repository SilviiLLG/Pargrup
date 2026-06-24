'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Rocket, 
  AlertTriangle, 
  Wrench, 
  Settings, 
  Cpu, 
  FlaskConical,    // Ícono para laboratorio / aceite
  CalendarCheck,   // Ícono para abono mensual
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const mainServices = [
  {
    id: 'puesta-marcha',
    icon: Rocket,
    title: 'Puesta en Marcha',
    subtitle: 'Commissioning & Startup',
    description: 'Instalación profesional y configuración inicial de motores. Calibración de sistemas, pruebas de rendimiento y certificación operativa.',
    features: [
      'Instalación certificada',
      'Calibración de parámetros',
      'Pruebas de rendimiento',
      'Documentación técnica'
    ],
    color: 'primary',
    blueprint: true,
  },
  {
    id: 'diagnostico',
    icon: AlertTriangle,
    title: 'Diagnóstico de Fallas',
    subtitle: 'Emergency Support 24/7',
    description: 'Respuesta inmediata ante fallas críticas. Diagnóstico computarizado avanzado con equipamiento Cummins original.',
    features: [
      'Diagnóstico electrónico',
      'Análisis de aceite',
      'Reportes detallados'
    ],
    color: 'destructive',
    emergency: true,
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    title: 'Mantenimiento Programado',
    subtitle: 'Preventive, Predictive & Corrective', // Actualizado
    description: 'Planes de mantenimiento personalizados y esquemas correctivos que maximizan la vida útil de su motor y minimizan tiempos de inactividad.', // Actualizado
    features: [
      'Plan preventivo',
      'Plan predictivo',
      'Plan correctivo', // PUNTO 4 APLICADO AQUÍ
    ],
    color: 'primary',
    premium: true,
  },
]

// Servicios complementarios
const additionalServices = [
  { icon: Settings, title: 'Overhaul Completo', desc: 'Reconstrucción total del motor' },
  { icon: Cpu, title: 'Reprogramación ECU', desc: 'Optimización de parámetros' },
  { icon: FlaskConical, title: 'Análisis de aceite', desc: 'Detección de índices de metales.' },
  { icon: CalendarCheck, title: 'Revisión integral periódica', desc: 'Planes de mantenimiento preventivo de abono mensual' },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-balance text-white uppercase tracking-tight">
            Soluciones Integrales de{' '}
            <span className="text-cyan-400 font-light">Ingeniería</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed text-pretty font-light">
            Tres pilares fundamentales que garantizan el máximo rendimiento y confiabilidad de su inversión.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`h-full rounded-2xl bg-neutral-950/40 border border-neutral-900 p-6 lg:p-8 transition-all duration-500 hover:border-neutral-800 ${
                service.emergency ? 'border-destructive/40 hover:border-destructive/60' : ''
              }`}>
                {/* Blueprint Pattern for Puesta en Marcha */}
                {service.blueprint && (
                  <div className="absolute inset-0 rounded-2xl opacity-5 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(90deg, #00cfff 1px, transparent 1px),
                        linear-gradient(#00cfff 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                )}

                {/* Emergency Badge */}
                {service.emergency && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider animate-pulse">
                      24/7
                    </span>
                  </div>
                )}

                {/* Premium Badge */}
                {service.premium && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.emergency 
                    ? 'bg-destructive/10 group-hover:bg-destructive/20' 
                    : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.emergency ? 'text-destructive' : 'text-cyan-400'
                  }`} />
                </div>

                {/* Content */}
                <div className="space-y-4 flex flex-col h-[calc(100%-80px)] justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-200 mb-1 uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-neutral-400 text-xs leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 pt-4 border-t border-neutral-900">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-neutral-400 font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA LINKED TO CONTACT (PUNTO 5 APLICADO AQUÍ) */}
                  <a 
                    href="#contacto" 
                    className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neutral-900 hover:bg-cyan-500 border border-neutral-800 hover:border-cyan-400 text-neutral-300 hover:text-black text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    Solicitar Información
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-center mb-8 text-neutral-500">
            Servicios Complementarios
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <a
                key={index}
                href="#contacto"
                className="group p-5 rounded-xl bg-neutral-950/40 border border-neutral-900 hover:border-neutral-800 transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/5 flex items-center justify-center mb-3 group-hover:bg-cyan-500/10 transition-colors">
                  <service.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="font-bold text-neutral-200 text-xs mb-1 uppercase tracking-wide">{service.title}</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">{service.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
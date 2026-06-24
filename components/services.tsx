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
    subtitle: 'Preventive & Predictive',
    description: 'Planes de mantenimiento personalizados que maximizan la vida útil de su motor y minimizan tiempos de inactividad.',
    features: [
      'Plan preventivo',
      'Plan predictivo',
      'Plan correctivo' // PUNTO 4: Agregado de forma limpia aquí
    ],
    color: 'primary',
    premium: true,
  },
]

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
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Soluciones Integrales de{' '}
            <span className="text-primary text-glow">Ingeniería</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
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
              <div className={`h-full rounded-2xl glass p-6 lg:p-8 transition-all duration-500 hover:glow-blue-sm ${
                service.emergency ? 'border-destructive/50 hover:border-destructive' : ''
              }`}>
                {/* Blueprint Pattern for Puesta en Marcha */}
                {service.blueprint && (
                  <div className="absolute inset-0 rounded-2xl opacity-5 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(90deg, var(--primary) 1px, transparent 1px),
                        linear-gradient(var(--primary) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                )}

                {/* Emergency Badge */}
                {service.emergency && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider animate-pulse">
                      24/7
                    </span>
                  </div>
                )}

                {/* Premium Badge */}
                {service.premium && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.emergency 
                    ? 'bg-destructive/20 group-hover:bg-destructive/30' 
                    : 'bg-primary/20 group-hover:bg-primary/30'
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.emergency ? 'text-destructive' : 'text-primary'
                  }`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-4 border-t border-border/50">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </td>
                    ))}
                  </ul>

                  {/* PUNTO 5: Botón convertido en enlace <a> manteniendo tus estilos exactos */}
                  <a 
                    href="#contacto"
                    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium transition-all group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Solicitar Información
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
            Servicios Complementarios
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl glass hover:glow-blue-sm transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{service.title}</h4>
                <p className="text-xs text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
)
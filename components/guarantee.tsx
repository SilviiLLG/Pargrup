'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Truck, Headphones, CheckCircle } from 'lucide-react'

const guaranteeFeatures = [
  {
    icon: Shield,
    title: 'Repuestos 100% Originales',
    description: 'Garantía total de autenticidad Cummins en cada componente.',
  },
  {
    icon: Award,
    title: 'Técnicos Certificados',
    description: 'Personal capacitado directamente por Cummins Inc.',
  },
  {
    icon: Truck,
    title: 'Logística Nacional',
    description: 'Entrega y servicio en todo el territorio argentino.',
  },
  {
    icon: Headphones,
    title: 'Soporte Continuo',
    description: 'Asistencia técnica telefónica las 24 horas.',
  },
]

export function Guarantee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Badge/Seal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, var(--primary), transparent)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Main Seal */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full glass glow-blue flex flex-col items-center justify-center p-8 border-2 border-primary/30">
                {/* Inner Circle */}
                <div className="absolute inset-8 rounded-full border border-primary/20" />
                
                {/* Decorative Lines */}
                <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                {/* Shield Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-2">
                    Garantía de
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 text-balance">
                    Repuestos Originales
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-glow">
                    CUMMINS
                  </div>
                </motion.div>

                {/* Bottom Checkmark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="mt-4 flex items-center gap-2 text-primary"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Certificado</span>
                </motion.div>
              </div>

              {/* Floating Particles */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-primary/50 blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-6 w-3 h-3 rounded-full bg-primary/40 blur-sm"
              />
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6">
              Nuestra Garantía
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Compromiso con la{' '}
              <span className="text-primary text-glow">Excelencia</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
              Más de dos décadas trabajando exclusivamente con repuestos originales Cummins, 
              garantizando el máximo rendimiento y durabilidad de cada motor.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {guaranteeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group p-5 rounded-xl glass hover:glow-blue-sm transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

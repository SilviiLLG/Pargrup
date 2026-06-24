'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Truck, Headphones, CheckCircle, Handshake, Users, Wrench, Landmark } from 'lucide-react'

const guaranteeFeatures = [
  {
    icon: Shield,
    title: 'Componentes Seleccionados',
    description: 'Máxima confiabilidad en piezas y repuestos para cada motor intervenido.',
  },
  {
    icon: Award,
    title: 'Técnicos Calificados',
    description: 'Personal técnico con amplia experiencia en motores de alta cilindrada.',
  },
  {
    icon: Truck,
    title: 'Logística en Yacimientos y Plantas',
    description: 'Despliegue operativo y asistencia técnica en toda la Argentina.',
  },
  {
    icon: Headphones,
    title: 'Soporte Continuo',
    description: 'Asistencia y guardias técnicas adaptadas a la criticidad de su planta.',
  },
]

export function Guarantee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="elegirnos" className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0a] scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Bloque Corporativo Estratégico Reubicado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center w-full"
          >
            <div className="w-full max-w-md bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(0,204,255,0.05)] text-center space-y-6 select-none">
              <div className="mx-auto w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Handshake className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight text-white uppercase">CONTRATOS LSA* PARGRUP</h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Tranquilidad operativa y predictibilidad técnica. Nos hacemos cargo de la gestión de sus grupos electrógenos para que usted se enfoque en el núcleo de su negocio.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-left pt-2">
                <div className="bg-neutral-900/80 p-3 rounded-lg border border-neutral-800 flex items-center gap-2.5">
                  <Wrench className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-[11px] font-medium text-neutral-300">Soporte Operativo Foco</span>
                </div>
                <div className="bg-neutral-900/80 p-3 rounded-lg border border-neutral-800 flex items-center gap-2.5">
                  <Landmark className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span className="text-[11px] font-medium text-neutral-300">Previsibilidad de Costos</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 text-neutral-500 font-mono text-[10px] pt-2 border-t border-neutral-900">
                <span className="flex items-center gap-1"><Users className="w-3 h-3 text-cyan-500" /> Postventa</span>
                <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-500" /> Respaldo</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider">
              ¿Por qué elegir ParGrup?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-balance text-white uppercase tracking-tight">
              Acuerdos de Soporte <span className="text-cyan-400 font-light">LSA*</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10 text-pretty font-light">
              Estructuramos acuerdos de soporte de ciclo de vida a medida (**Lifecycle Support Agreements**). Para aplicaciones *Standby* brindamos coberturas programadas con análisis de fluidos e informes automatizados; para regímenes *Prime*, garantizamos packs de consumibles y mantenimiento preventivo continuo cada 250 horas, absorbiendo la responsabilidad operativa del equipo.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {guaranteeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group p-5 rounded-xl bg-black/40 border border-neutral-900 hover:border-neutral-800 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-neutral-200 mb-1 uppercase tracking-wide">{feature.title}</h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* NOTA LEGAL ACLARATORIA AL PIE DE LA SECCIÓN */}
        <div className="mt-20 pt-6 border-t border-neutral-950 text-left">
          <p className="text-[10px] font-mono text-neutral-600 leading-relaxed max-w-4xl">
            * LSA (Lifecycle Support Agreements / Acuerdos de Soporte de Ciclo de Vida). 
            <br />
            <span className="text-neutral-700">Aviso legal: ParGrup es una empresa de servicios técnicos mecánicos de ingeniería independiente. Toda mención a marcas registradas, logotipos o denominaciones de fabricantes de motores (tales como Cummins, Doosan, Caterpillar, Perkins, Komatsu, etc.) se realiza exclusivamente con fines descriptivos e ilustrativos para indicar la compatibilidad, especialización y el destino de las prestaciones de servicio técnico ofrecidas, perteneciendo dichas marcas a sus respectivos titulares legales.</span>
          </p>
        </div>

      </div>
    </section>
  )
}
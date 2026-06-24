'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, ShieldCheck, Users, Truck, Headphones, Handshake, ShieldAlert } from 'lucide-react'

export function Guarantees() {
  // Estado para alternar de manera interactiva entre Garantía y Contratos LSA
  const [activeTab, setActiveTab] = useState<'garantia' | 'lsa'>('garantia')

  // Datos dinámicos según la pestaña activa tomados directamente de tus dos capturas
  const content = {
    garantia: {
      badge: 'Nuestra Garantía',
      title: 'Compromiso con la ',
      titleHighlight: 'Excelencia',
      description: 'Más de dos décadas trabajando exclusivamente con repuestos originales Cummins, garantizando el máximo rendimiento y durabilidad de cada motor.',
      leftCard: {
        icon: Shield,
        title: 'GARANTÍA DE',
        mainText: 'Repuestos Originales CUMMINS',
        subText: 'Certificado',
      },
      features: [
        { icon: ShieldCheck, title: 'Repuestos 100% Originales', desc: 'Garantía total de autenticidad Cummins en cada componente.' },
        { icon: Users, title: 'Técnicos Certificados', desc: 'Personal capacitado directamente por Cummins Inc.' },
        { icon: Truck, title: 'Logística Nacional', desc: 'Entrega y servicio en todo el territorio argentino.' },
        { icon: Headphones, title: 'Soporte Continuo', desc: 'Asistencia técnica telefónica y guardias adaptadas a su necesidad.' },
      ]
    },
    lsa: {
      badge: '¿Por qué elegir ParGrup?',
      title: 'ACUERDOS DE SOPORTE ',
      titleHighlight: 'LSA*',
      description: 'Estructuramos acuerdos de soporte de ciclo de vida a medida (**Lifecycle Support Agreements**). Para aplicaciones *Standby* brindamos coberturas programadas con análisis de fluidos e informes automatizados; para regímenes *Prime*, garantizamos packs de consumibles y mantenimiento preventivo continuo cada 250 horas, absorbiendo la responsabilidad operativa del equipo.',
      leftCard: {
        icon: Handshake,
        title: 'CONTRATOS LSA* PARGRUP',
        mainText: 'Tranquilidad operativa y predictibilidad técnica.',
        subText: 'Nos hacemos cargo de la gestión de sus grupos electrógenos para que usted se enfoque en el núcleo de su negocio.',
        tags: ['Soporte Operativo Foco', 'Previsibilidad de Costos', 'Postventa', 'Respaldo']
      },
      features: [
        { icon: Shield, title: 'COMPONENTES SELECCIONADOS', desc: 'Máxima confiabilidad en piezas y repuestos para cada motor intervenido.' },
        { icon: Users, title: 'TÉCNICOS CALIFICADOS', desc: 'Personal técnico con amplia experiencia en motores de alta cilindrada.' },
        { icon: Truck, title: 'LOGÍSTICA EN YACIMIENTOS Y PLANTAS', desc: 'Despliegue operativo y asistencia técnica en toda la Argentina.' },
        { icon: Headphones, title: 'SOPORTE CONTINUO', desc: 'Asistencia y guardias técnicas adaptadas a la criticidad de su planta.' },
      ]
    }
  }

  const current = content[activeTab]

  return (
    <section id="elegirnos" className="relative py-24 bg-[#050505] overflow-hidden text-white">
      <div className="container mx-auto px-6">
        
        {/* Selector de pestañas superior estilo switch profesional */}
        <div className="flex justify-center mb-12">
          <div className="bg-neutral-900/80 border border-neutral-800 p-1 rounded-xl flex gap-2">
            <button
              onClick={() => setActiveTab('garantia')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'garantia' 
                  ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Garantía Original
            </button>
            <button
              onClick={() => setActiveTab('lsa')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'lsa' 
                  ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Acuerdos LSA*
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: La tarjeta interactiva que se presiona */}
          <div className="lg:col-span-5 flex justify-center">
            <button 
              onClick={() => setActiveTab(activeTab === 'garantia' ? 'lsa' : 'garantia')}
              className="group text-left focus:outline-none w-full max-w-[400px]"
            >
              <AnimatePresence mode="wait">
                {activeTab === 'garantia' ? (
                  /* VISTA ORIGINAL: Círculo brillante azul de Cummins */
                  <motion.div
                    key="card-garantia"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-square rounded-full border-2 border-cyan-500/30 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-cyan-950/20 to-black shadow-[0_0_50px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-cyan-400" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">
                      {current.leftCard.title}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold max-w-xs text-balance text-white">
                      Repuestos Originales <span className="text-cyan-400 block mt-1">CUMMINS</span>
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
                      <ShieldCheck className="w-4 h-4" />
                      {current.leftCard.subText}
                    </div>
                    <div className="absolute bottom-4 text-[10px] text-neutral-500 uppercase tracking-widest font-mono animate-pulse">
                      Haz clic para ver contratos LSA *
                    </div>
                  </motion.div>
                ) : (
                  /* VISTA LSA: Tarjeta rectangular moderna de la segunda imagen */
                  <motion.div
                    key="card-lsa"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full rounded-2xl border border-cyan-500/30 p-8 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black shadow-xl group-hover:border-cyan-400 transition-colors duration-300"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
                        <Handshake className="w-7 h-7 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-center tracking-wider text-white uppercase font-mono mb-4">
                      {current.leftCard.title}
                    </h3>
                    <p className="text-neutral-300 text-sm text-center leading-relaxed mb-6">
                      {current.leftCard.mainText} {current.leftCard.subText}
                    </p>
                    
                    {/* Tags interactivos inferiores estilo píldora */}
                    <div className="grid grid-cols-2 gap-2 text-center text-[10px] text-neutral-400 font-mono">
                      {current.leftCard.tags?.map((tag, idx) => (
                        <div key={idx} className="bg-neutral-900 border border-neutral-800 p-2 rounded-lg">
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center text-[10px] text-neutral-500 uppercase tracking-widest font-mono animate-pulse">
                      Haz clic para volver a Garantía
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* COLUMNA DERECHA: Textos y Grilla de 4 características que cambian dinámicamente */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Badge contextual */}
                <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {current.badge}
                </span>

                {/* Título adaptativo */}
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                  {current.title}
                  <span className="text-cyan-400 text-glow block sm:inline">{current.titleHighlight}</span>
                </h2>

                {/* Descripción descriptiva */}
                <p className="text-neutral-400 text-base leading-relaxed text-pretty">
                  {current.description}
                </p>

                {/* Subgrilla de las 4 sub-tarjetas limpias */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {current.features.map((feat, i) => (
                    <div 
                      key={i} 
                      className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 transition-colors flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <feat.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs uppercase tracking-wide mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Nota al pie legal e informativa de la segunda captura (visible siempre o en LSA) */}
        <div className="mt-16 pt-6 border-t border-neutral-900 text-[10px] text-neutral-600 leading-relaxed space-y-1">
          <p>* LSA (Lifecycle Support Agreements / Acuerdos de Soporte de Ciclo de Vida).</p>
          <p>Aviso legal: ParGrup es una empresa de servicios técnicos mecánicos de ingeniería independiente. Toda mención a marcas registradas, logotipos o denominaciones de fabricantes de motores (tales como Cummins, Doosan, Caterpillar, Perkins, Komatsu, etc.) se realiza exclusivamente con fines descriptivos e ilustrativos para indicar la compatibilidad, especialización y el destino de las prestaciones de servicio técnico ofrecidas, perteneciendo dichas marcas a sus respectivos titulares legales.</p>
        </div>

      </div>
    </section>
  )
}
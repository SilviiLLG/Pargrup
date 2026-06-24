'use client'

import { motion } from 'framer-motion'
import { Shield, ShieldCheck, Users, Truck, Headphones, CheckCircle } from 'lucide-react'

export function Guarantee() {
  // Características fijas de la derecha
  const features = [
    { 
      icon: ShieldCheck, 
      title: 'Repuestos 100% Originales', 
      desc: 'Garantía total de autenticidad Cummins en cada componente.' 
    },
    { 
      icon: Users, 
      title: 'Técnicos Certificados', 
      desc: 'Personal capacitado directamente por Cummins Inc.' 
    },
    { 
      icon: Truck, 
      title: 'Logística Nacional', 
      desc: 'Entrega y servicio en todo el territorio argentino.' 
    },
    { 
      icon: Headphones, 
      title: 'Soporte Continuo', 
      desc: 'Asistencia técnica telefónica y guardias adaptadas a su necesidad.' 
    },
  ]

  return (
    <section id="elegirnos" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Fondo de grilla sutil */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Botón superior indicativo */}
        <div className="flex justify-center mb-12">
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Nuestra Garantía
          </span>
        </div>

        {/* Grilla principal de 3 columnas para emular la captura */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* COLUMNA 1 (lg:col-span-3): Círculo original brillante azul de Cummins */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative aspect-square w-full max-w-[280px] rounded-full border-2 border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-cyan-950/20 to-black shadow-[0_0_40px_rgba(6,182,212,0.15)]">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-0.5">
                GARANTÍA DE
              </span>
              <h3 className="text-lg font-bold text-white uppercase leading-tight">
                Repuestos Originales <span className="text-cyan-400 block mt-0.5">CUMMINS</span>
              </h3>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Certificado
              </div>
            </div>
          </div>

          {/* COLUMNA 2 (lg:col-span-5): Panel central de "CONTRATOS LSA* ¿POR QUÉ ELEGIRNOS?" */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-neutral-950 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest block mb-1">
                CONTRATOS LSA* PARGRUP
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mb-4">
                LSA* PARGRUP <span className="text-cyan-400">¿POR QUÉ ELEGIRNOS?</span>
              </h2>

              <div className="space-y-4 text-xs leading-relaxed">
                <div>
                  <span className="text-green-400 font-mono text-[10px] uppercase block mb-0.5">✓ VISIÓN COMERCIAL</span>
                  <span className="text-red-400 font-mono text-[10px] uppercase block mb-1">⚠️ CONTEXTO DEL MERCADO</span>
                  <p className="text-neutral-300">
                    Aprovechamos el hueco que las empresas tradicionales descuidan ("vender y desentenderse"). En ParGrup asumimos la total responsabilidad operativa del grupo electrógeno, permitiendo que el cliente se enfoque exclusivamente en su negocio con absoluta tranquilidad y previsibilidad de costos (con márgenes óptimos en repuestos del orden del 70%).
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-900">
                  <span className="text-cyan-400 font-mono text-[10px] uppercase block mb-1">🛠️ PROPUESTA DE VALOR (LSA*)</span>
                  <p className="text-neutral-300">
                    Implementamos Acuerdos de Valor de Cliente (LSA), contratos de mantenimiento 100% a medida. Para aplicaciones Standby (SBy) ofrecemos coberturas anuales o de 500 horas, con toma de muestras de aceite semestrales, cambio de fluidos y envío automatizado de informes técnicos por email. Para aplicaciones Prime, estructuramos nuestros packs de consumibles cada 250 horas de operación continua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA 3 (lg:col-span-4): Las 4 tarjetas fijas del lateral derecho */}
          <div className="lg:col-span-4 grid gap-4">
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

        {/* Pie aclaratorio legal */}
        <div className="mt-12 pt-6 border-t border-neutral-900 text-[10px] text-neutral-600 leading-relaxed max-w-4xl mx-auto text-center">
          <p>* LSA (Lifecycle Support Agreements / Acuerdos de Soporte de Ciclo de Vida).</p>
          <p className="mt-1">ParGrup es una empresa de servicios técnicos de ingeniería independiente. Toda mención a marcas registradas o logotipos se realiza exclusivamente con fines descriptivos para indicar la especialización del servicio técnico ofrecido.</p>
        </div>

      </div>
    </section>
  )
}
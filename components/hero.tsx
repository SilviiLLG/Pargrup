'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Zap } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_70%)]" />
      
      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[80px]"
      />

      {/* Content Container */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 pt-24 text-white"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 mb-8"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">27 años de excelencia técnica</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 text-balance uppercase tracking-tight"
            >
              Ingeniería de
              <br />
              <span className="text-cyan-400 font-light">Alta Potencia</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty font-light"
            >
              Nos especializamos en el servicio de campo de grupos electrógenos de alta y media potencia de la línea Cummins, brindando soporte técnico calificado con amplia trayectoria. También ofrecemos soluciones integrales multimarca adaptadas a motores Caterpillar, Perkins, Komatsu, entre otros, asegurando la continuidad operativa en entornos exigentes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-xs font-bold uppercase tracking-wider font-mono"
            >
              <a
                href="#trabajos"
                className="px-8 py-4 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-all duration-300 hover:scale-105 text-center"
              >
                Explorar Trabajos
              </a>
              <a
                href="https://wa.me/5491176686770"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-all duration-300 text-center"
              >
                Contactar Ahora
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-900"
            >
              {[
                { value: '27+', label: 'Años Trayectoria' },
                { value: '50+', label: 'Intervenciones' },
                { value: '24/7', label: 'Disponibilidad' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">{stat.value}</div>
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Engine Image - CORREGIDA LA RUTA RELATIVA A ABSOLUTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ scale }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-2xl mx-auto">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 blur-3xl" />
              
              {/* Image Container with Glass Border */}
              <div className="relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-900 p-1">
                <div className="rounded-2xl overflow-hidden bg-black">
                  <Image
                    src="/images/cummins-engine.jpg"
                    alt="Motor de alta potencia"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover opacity-85"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-black/90 border border-neutral-800 px-4 py-3 rounded-xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Potencia Hasta</div>
                    <div className="text-sm font-black text-neutral-200">4,500 HP</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-600"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 text-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
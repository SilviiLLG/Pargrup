'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
//Aqui hay que agregar las imagenes
const galleryImages = [
  { src: '/images/cummins-engine.jpg', alt: 'Motor Cummins', title: 'Motor Cummins QSK60', category: 'Generación' },
  { src: '/images/gallery-1.jpg', alt: 'Servicio técnico', title: 'Servicio Técnico Especializado', category: 'Mantenimiento' },
  { src: '/images/gallery-2.jpg', alt: 'Diagnóstico', title: 'Diagnóstico Electrónico', category: 'Diagnóstico' },
  { src: '/images/gallery-3.jpg', alt: 'Grupo electrógeno', title: 'Grupo Electrógeno Industrial', category: 'Generación' },
  { src: '/images/gallery-4.jpg', alt: 'Componentes', title: 'Componentes de Alta Precisión', category: 'Repuestos' },
]

export function Gallery() {
  const ref = useRef(null)
  // Ajuste de margen para que la animación se dispare rápido
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0))
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0))

  return (
    <section id="galeria" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-card/30" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header de sección con colores forzados para evitar el efecto "apagado" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6 border border-primary/20">
            Galería Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
            Nuestro{' '}
            <span className="text-primary text-glow brightness-125">Trabajo</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Instalaciones de primer nivel y equipamiento de última generación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden border border-white/5 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] w-full h-full glass">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                   <span className="text-[10px] text-primary font-mono uppercase border border-primary/30 px-2 py-1 rounded bg-primary/5 mb-2 inline-block">
                    {image.category}
                  </span>
                  <h3 className="text-white font-medium text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white"><X size={32}/></button>
          <div className="relative w-[85vw] h-[80vh]" onClick={e => e.stopPropagation()}>
            <Image src={galleryImages[selectedImage].src} alt="Zoom" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
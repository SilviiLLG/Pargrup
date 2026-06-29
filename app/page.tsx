'use client'

import { useEffect } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { ServiceGallery } from '@/components/service-gallery' 
import { Guarantee } from '@/components/guarantee' 
import { Contact } from '@/components/contact'
import Footer from '@/components/footer' 

export default function HomePage() {

  useEffect(() => {
    const handleScroll = () => {
      // Si está arriba de todo, forzamos "Inicio"
      if (window.scrollY < 200) {
        document.title = 'ParGrup | Inicio'
        return
      }

      // Secciones a escanear según sus IDs en el HTML
      const sections = [
        { id: 'trabajos', title: 'ParGrup | Trabajos' },
        { id: 'contacto', title: 'ParGrup | Contacto' }
      ]

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Si la sección cruzó la mitad superior de la pantalla
          if (rect.top <= 200 && rect.bottom >= 200) {
            document.title = section.title
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white antialiased">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        
        {/* CONTENEDOR DE NUESTROS TRABAJOS RECONSTRUIDO */}
        <section id="trabajos" className="py-20 bg-black relative z-10 border-t border-neutral-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-white">
              Nuestros <span className="text-[#00CCFF]">Trabajos</span>
            </h2>
            <p className="text-xs font-mono text-gray-500 uppercase mt-2 tracking-widest">
              Registro técnico de intervenciones, diagnósticos y overhaul multimedia
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            <ServiceGallery />    
          </div>
        </section>
        
        <Guarantee />  
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}
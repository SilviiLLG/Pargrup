'use client'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { ServiceGallery } from '@/components/service-gallery' // Ruta exacta según tu estructura
import { Guarantee } from '@/components/guarantee' 
import { Contact } from '@/components/contact'
import Footer from '@/components/footer' 

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white antialiased">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        
        {/* CONTENEDOR DE NUESTROS TRABAJOS RECONSTRUIDO */}
        <section className="py-20 bg-black relative z-10 border-t border-neutral-900">
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
'use client'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
// 1. Buscamos la galería en su nuevo archivo con llaves { }
import { ServiceGallery } from '@/components/services/service-gallery' 
import { Guarantee } from '@/components/guarantee' 
import { Contact } from '@/components/contact'
// 2. Buscamos el footer limpio sin llaves
import Footer from '@/components/footer' 

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        
        {/* 3. Colocamos el visualizador de motores acá */}
        <ServiceGallery />    
        
        <Guarantee />  
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
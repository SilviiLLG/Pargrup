'use client'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'    // <-- Asegurate de que esta línea esté
import { Guarantee } from '@/components/guarantee' // <-- Y esta también
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />    {/* <-- Aquí aparece la galería técnica */}
        <Guarantee />  {/* <-- Aquí aparece el círculo de Cummins */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
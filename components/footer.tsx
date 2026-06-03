"use client"

import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 text-gray-400 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* COLUMNA 1: BRANDING */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider text-lg">
            <Shield className="h-5 w-5 text-[#00CCFF]" />
            <span>PAR<span className="text-[#00CCFF]">GRUP</span></span>
          </div>
          <p className="text-xs font-light leading-relaxed max-w-sm text-gray-400">
            Soluciones integrales en mantenimiento, diagnóstico y overhaul de grupos electrógenos de alta potencia y motores industriales en entornos críticos.
          </p>
        </div>

        {/* COLUMNA 2: CONTACTO */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-[#00CCFF] pl-2">
            Contacto Técnico
          </h4>
          <ul className="space-y-2 text-xs font-light text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[#00CCFF]" />
              <span>+54 (11) 7668-6770</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-[#00CCFF]" />
              <span>contacto@pargrup.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#00CCFF]" />
              <span>Buenos Aires, Argentina</span>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: CERTIFICACIONES Y SOPORTE */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-[#00CCFF] pl-2">
            Servicio Especializado
          </h4>
          <p className="text-xs font-light leading-relaxed text-gray-400">
            Soporte técnico, regulaciones estequiométricas y calibración electrónica multimarca.
          </p>
        </div>

      </div>

      {/* BARRA INFERIOR DE DERECHOS */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono tracking-wide">
        <p>&copy; {new Date().getFullYear()} ParGrup. Todos los derechos reservados.</p>
        <p className="text-gray-600">Diseño y Desarrollo de Soluciones </p>
      </div>
    </footer>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  servicios: [
    { label: 'Puesta en Marcha', href: '#servicios' },
    { label: 'Diagnóstico de Fallas', href: '#servicios' },
    { label: 'Mantenimiento Programado', href: '#servicios' },
    { label: 'Overhaul Completo', href: '#servicios' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#inicio' },
    { label: 'Nuestra Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
    // El "Acceso Staff" fue removido para la versión de producción (Frontend Solo)
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-bold text-xl tracking-wider">PARGRUP</span>
                <span className="text-muted-foreground text-[10px] uppercase tracking-[0.2em]">Engineering</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Nos especializamos en el servicio de campo de grupos electrogenos de alta y media potencia de la linea cummins. Tambien ofrecemos servicios a motores Caterpillar, Perkins, Komatsu, entre otros.
              Ofrecemos un servicio de primer nivel que se ajusta a la ncesidad de cada cliente.
              Nuestro personal de servicio tecnico esta certificado y avalado por Cummins.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-blue-sm transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-blue-sm transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      link.label === 'Acceso Staff' 
                        ? 'text-primary/70 hover:text-primary font-medium tracking-wide text-glow text-primary text-xs' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5491176686770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  +54 9 11 7668 - 6770
                </a>
              </li>
              <li>
                <a
                  href="mailto:Consultas@pargrup.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  Consultas@pargrup.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} PARGRUP. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-[80px]"
      />
    </footer>
  )
}
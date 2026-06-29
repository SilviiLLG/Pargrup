'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import Swal from 'sweetalert2' // Importamos SweetAlert2

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+54 9 11 7668-6770',
    href: 'https://wa.me/5491176686770',
    primary: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Consultas@pargrup.com',
    href: 'mailto:Consultas@pargrup.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Buenos Aires, Argentina',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun - Vie: 8:00 - 18:00',
    href: '#',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // --- LÓGICA DE FORMULARIO ---
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // Cartel moderno integrado en la UI (Modo Oscuro)
    Swal.fire({
      title: '¡Gracias!',
      text: 'Su consulta ha sido enviada. Nos contactaremos pronto.',
      icon: 'success',
      background: '#121212',
      color: '#ffffff',
      confirmButtonColor: '#00CCFF',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'rounded-2xl border border-neutral-800 glass'
      }
    }).then((result) => {
      // Cuando el usuario le da a "Aceptar", recién ahí se envía el formulario
      if (result.isConfirmed) {
        form.submit()
        setFormData({ name: '', company: '', email: '', service: '', message: '' })
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  // ----------------------------

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Columna Izquierda: Info de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Hablemos de su <span className="text-primary">Proyecto</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Estamos listos para atender sus consultas técnicas.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="group flex items-center gap-4 p-5 rounded-xl glass hover:bg-white/5 transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.primary ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase">{item.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha: El Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-full rounded-2xl glass p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Envíenos un mensaje</h3>
              
              <form 
                action="https://formsubmit.co/Consultas@pargrup.com" 
                method="POST" 
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Configuración de FormSubmit */}
                <input type="hidden" name="_next" value="https://www.pargrup.com" />
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Forzar idioma español en FormSubmit */}
                <input type="hidden" name="_language" value="es" />
                
                {/* Solución para que puedan responder directo al remitente */}
                <input type="hidden" name="_replyto" value={formData.email} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Nombre *</label>
                    <input 
                      type="text" id="name" name="Nombre" required 
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-white focus:border-primary focus:outline-none" 
                      placeholder="Su nombre" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Empresa</label>
                    <input 
                      type="text" id="company" name="Empresa"
                      value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-white focus:border-primary focus:outline-none" 
                      placeholder="Empresa" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email *</label>
                  <input 
                    type="email" id="email" name="email" required 
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-white focus:border-primary focus:outline-none" 
                    placeholder="su@email.com" 
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Mensaje *</label>
                  <textarea 
                    id="message" name="Mensaje" required rows={4} 
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-white focus:border-primary focus:outline-none resize-none" 
                    placeholder="¿En qué podemos ayudarlo?" 
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-white font-semibold hover:brightness-110 transition-all active:scale-95"
                >
                  <Send className="w-5 h-5" />
                  Enviar Consulta
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
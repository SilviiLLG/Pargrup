import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ParGrup | Inicio',
  description: 'Registro técnico de intervenciones, diagnósticos y overhaul multimedia',
  icons: {
    icon: '/favicon.ico', // Acuerdate de meter el logo con este nombre exacto dentro de la carpeta /public o /app
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className="dark">
      <body className="antialiased bg-background">
        {children}
      </body>
    </html>
  )
}
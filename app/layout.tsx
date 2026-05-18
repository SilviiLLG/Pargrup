import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className="dark">
      <body className="antialiased bg-background">
        {/* AQUÍ NO VA EL HEADER NI NADA COMERCIAL */}
        {children}
      </body>
    </html>
  )
}
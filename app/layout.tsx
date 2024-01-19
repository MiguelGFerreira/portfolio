import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'
import Footer from './ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguel',
  description: 'Porfolio Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Firdousi',
  description: 'Software Engineering, Distributed Systems, Engineering Leadership and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={inter.className}>
        <div id="layout" className="layout">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

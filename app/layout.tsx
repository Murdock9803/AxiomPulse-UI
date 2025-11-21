import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Footer from '@/components/Footer'; 
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Axiom Pulse UI | Ayush Sahu (21064009)',
  icons: "/assets/icon.png",
  description: 'Crypto trading dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Error Boundary */}
        <ErrorBoundary>
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
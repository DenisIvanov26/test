import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import NavBar from '@/components/NavBar';


export const metadata: Metadata = {
  title: 'Test Repository',
  description: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NuiFlo Project',
  description: 'Generated with NuiFlo Next.js seed template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

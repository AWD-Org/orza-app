// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { CartProvider } from '@/hooks/useCart'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
    variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
    title: 'ORZA Tech – Empowering Industries with Intelligent Automation',
    description:
        'ORZA Tech delivers cutting-edge robotics solutions to enhance efficiency, productivity, and safety across diverse sectors.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={spaceGrotesk.variable}>
            <body className="font-sans antialiased bg-background text-foreground">
                <CartProvider> 
                    {children}
                </CartProvider>
            </body>
        </html>
    )
}

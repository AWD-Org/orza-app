// components/layout/Header.tsx
'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'
import Logo from '../common/Logo'
import NavigationMenu from './NavigationMenu'
import { ShoppingCartButton } from '../common/ShoppingCartButton'

const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Cases', href: '#cases' },
    { label: 'Company', href: '#company' },
    { label: 'Contact', href: '#contact' },
]

const Header: React.FC<{ className?: string }> = ({ className }) => (
    <header className={cn('relative mb-4 mt-2', className)}>
        <Container maxWidth="full">
            <div className="flex items-center justify-between h-16">
                <Logo />

                <div className="flex items-center">
                    <NavigationMenu items={navItems} />

                    {/* Shopping bag */}
                    <ShoppingCartButton />
                </div>
            </div>
        </Container>
    </header>
)

export default Header

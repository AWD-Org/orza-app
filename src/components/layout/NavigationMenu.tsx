// components/layout/NavigationMenu.tsx
'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationItem { label: string; href: string }
interface Props { 
  items: NavigationItem[]; 
  currentPath?: string;
  className?: string 
}

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 }
}

const drawer = {
    hidden: { x: '100%' },
    visible: { x: 0 }
}

const NavigationMenu: React.FC<Props> = ({ items, currentPath, className }) => {
    const [open, setOpen] = useState(false)
    
    const isActive = (href: string) => {
        if (href.startsWith('#')) return false // Para anchors, no marcar como activo
        return currentPath === href
    }
    
    return (
        <>
            {/* Desktop */}
            <nav className={cn('hidden md:flex items-center space-x-8', className)}>
                {items.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={cn(
                            'text-sm font-medium transition-colors font-space-grotesk',
                            isActive(item.href) 
                                ? 'text-[#1C4AF2] font-bold' 
                                : 'text-[#0D0F1C] hover:text-[#1C4AF2]'
                        )}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Mobile toggle */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6 text-[#0D0F1C]" />
            </button>

            {/* Drawer + Backdrop */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black z-40 mx-0"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={() => setOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.nav
                            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-white z-50 flex flex-col p-6 space-y-4 mx-0"
                            variants={drawer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ type: 'tween' }}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="self-end p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6 text-[#0D0F1C]" />
                            </button>
                            {items.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'block py-2 text-base font-medium transition-colors font-space-grotesk',
                                        isActive(item.href) 
                                            ? 'text-[#1C4AF2] font-bold' 
                                            : 'text-[#0D0F1C] hover:text-[#1C4AF2]'
                                    )}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default NavigationMenu

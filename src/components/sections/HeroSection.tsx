'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Container from '../layout/Container'

interface HeroSectionProps {
    className?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
    return (
        <section
            className={cn(
                "relative flex items-center justify-center",    // ← centrado X/Y
                "min-h-[480px] rounded-[12px] overflow-hidden",
                "bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center",
                className
            )}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/40" />

            {/* Content */}
            <Container className="relative z-10 text-center"> {/* opcional text-center */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <motion.h1
                        className="text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Empowering Industries with Intelligent Automation
                    </motion.h1>

                    <motion.p
                        className="text-lg text-white/90 max-w-3xl font-space-grotesk leading-relaxed mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        ORZA Tech delivers cutting-edge robotics solutions to enhance efficiency,
                        productivity, and safety across diverse sectors.
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    )
}

export default HeroSection

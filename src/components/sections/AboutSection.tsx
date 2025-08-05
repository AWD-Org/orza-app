'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Container from '../layout/Container'
import SectionTitle from '../common/SectionTitle'
import Image from 'next/image'

interface AboutSectionProps {
    className?: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
    const images = [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80'
    ]

    return (
        <section className={cn(
            "py-16",
            className
        )}>
            <Container>
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle>About ORZA Tech</SectionTitle>
                    </motion.div>
                </div>

                <div>
                    <motion.p
                        className="text-base text-foreground leading-relaxed font-space-grotesk mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        ORZA Tech is a leading provider of advanced robotics and automation solutions,
                        dedicated to transforming industries through innovation and technology. Our mission
                        is to empower businesses with intelligent automation that drives efficiency,
                        productivity, and safety. With a team of experienced engineers and experts, we
                        deliver tailored solutions that meet the unique needs of our clients, ensuring
                        seamless integration and optimal performance. We are committed to excellence,
                        continuous improvement, and building long-term partnerships to achieve mutual success.
                    </motion.p>

                    {/* Image Gallery */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="aspect-square rounded-xl overflow-hidden"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6 + (index * 0.1)
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image
                                    src={image}
                                    alt={`Technology ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default AboutSection

'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Container from '../layout/Container'
import SectionTitle from '../common/SectionTitle'
import TestimonialCard from '../common/TestimonialCard'
import { Button } from '../ui/button'
import type { TestimonialData } from '@/types'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonialsData: TestimonialData[] = [
    { id: '1', title: 'Transforming Manufacturing', content: "ORZA Tech's robotics solutions have revolutionized our manufacturing processes, leading to significant improvements in output and quality.", image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80', company: 'Manufacturing Corp' },
    { id: '2', title: 'Optimizing Warehouse Operations', content: "Our warehouse operations are now more efficient and cost-effective thanks to ORZA Tech's automation systems.", image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=600&q=80', company: 'Logistics Inc' },
    { id: '3', title: 'Enhancing Production Efficiency', content: "ORZA Tech's robotic arms have greatly enhanced our production line, resulting in faster turnaround times and reduced labor costs.", image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80', company: 'Production Ltd' },
    { id: '4', title: 'Revolutionizing Assembly Lines', content: "The integration of ORZA Tech's robotics has transformed our assembly lines, improving precision and reducing errors.", image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80', company: 'Assembly Co' },
]

const TestimonialsSection: React.FC<{ className?: string }> = ({ className }) => {
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    return (
        <section className={cn("py-16", className)}>
            <Container>
                <div className="flex items-center justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle>Client Success Stories</SectionTitle>
                    </motion.div>

                    <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => prevRef.current?.click()}
                            className="w-10 h-10 p-0"
                            ref={prevRef}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => nextRef.current?.click()}
                            className="w-10 h-10 p-0"
                            ref={nextRef}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current!,
                        nextEl: nextRef.current!
                    }}
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        768: { slidesPerView: 3, spaceBetween: 24 }
                    }}
                    onBeforeInit={(swiper) => {
                        // attach custom navigation refs
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current
                    }}
                    className="py-4"
                >
                    {testimonialsData.map((t, idx) => (
                        <SwiperSlide key={t.id}>
                            <TestimonialCard testimonial={t} index={idx} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    )
}

export default TestimonialsSection

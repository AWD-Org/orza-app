import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Card from '../common/Card'
import type { TestimonialData } from '@/types'
import Image from 'next/image'

interface TestimonialCardProps {
    testimonial: TestimonialData
    index: number
    className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
    index,
    className
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1
            }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={cn("h-full", className)}
        >
            <Card className="h-full overflow-hidden group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-base font-medium text-[#0D0F1C] mb-2 font-space-grotesk">
                        {testimonial.title}
                    </h3>
                    <p className="text-sm text-[#4A5C9C] font-space-grotesk leading-relaxed">
                        {testimonial.content}
                    </p>
                    {testimonial.company && (
                        <p className="text-xs text-[#4A5C9C] mt-2 font-space-grotesk font-medium">
                            {testimonial.company}
                        </p>
                    )}
                </div>
            </Card>
        </motion.div>
    )
}

export default TestimonialCard

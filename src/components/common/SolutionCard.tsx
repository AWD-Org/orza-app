import React from 'react'
import { motion } from 'framer-motion'
import {
    Bot,
    Brain,
    Settings,
    Shield,
    GraduationCap,
    LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Card from '../common/Card'
import type { SolutionData } from '@/types'

interface SolutionCardProps {
    solution: SolutionData & { IconComponent: LucideIcon }
    index: number
    className?: string
}

const SolutionCard: React.FC<SolutionCardProps> = ({
    solution,
    index,
    className
}) => {
    const { IconComponent } = solution

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
            <Card variant="bordered" className="h-full p-4 group cursor-pointer hover:border-[#1C4AF2]/30 transition-colors">
                <div className="flex flex-col h-full">
                    <div className="flex items-center mb-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-[#0D0F1C] group-hover:text-[#1C4AF2] transition-colors" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-base font-bold text-[#0D0F1C] mb-1 font-space-grotesk leading-tight">
                            {solution.title}
                        </h3>
                        <p className="text-sm text-[#a2a2a3] font-space-grotesk leading-relaxed">
                            {solution.description}
                        </p>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

export default SolutionCard

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Card from '../common/Card'
import type { StatData } from '@/types'

interface StatCardProps {
    stat: StatData
    index: number
    className?: string
}

const StatCard: React.FC<StatCardProps> = ({
    stat,
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
            className={cn("h-full", className)}
        >
            <Card variant="bordered" className="h-full p-6 text-center">
                <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3 + (index * 0.1),
                        type: "spring",
                        stiffness: 100
                    }}
                    viewport={{ once: true }}
                >
                    <div className="text-2xl font-bold text-[#0D0F1C] mb-2 font-space-grotesk">
                        {stat.value}
                    </div>
                    <div className="text-base font-medium text-[#0D0F1C] font-space-grotesk">
                        {stat.label}
                    </div>
                    {stat.description && (
                        <div className="text-sm text-[#a2a2a3] mt-1 font-space-grotesk">
                            {stat.description}
                        </div>
                    )}
                </motion.div>
            </Card>
        </motion.div>
    )
}

export default StatCard

'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Container from '../layout/Container'
import StatCard from '../common/StatCard'
import type { StatData } from '@/types'

interface StatsSectionProps {
    className?: string
}

const statsData: StatData[] = [
    {
        id: '1',
        label: 'Projects Completed',
        value: '250+',
        description: 'Successfully delivered'
    },
    {
        id: '2',
        label: 'Client Satisfaction',
        value: '98%',
        description: 'Happy customers'
    },
    {
        id: '3',
        label: 'Productivity Increase',
        value: '40%',
        description: 'Average improvement'
    }
]

const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
    return (
        <section className={cn(
            "pb-16",
            className
        )}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {statsData.map((stat, index) => (
                        <StatCard
                            key={stat.id}
                            stat={stat}
                            index={index}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default StatsSection

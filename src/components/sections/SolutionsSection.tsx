'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Brain, 
  Settings, 
  Shield, 
  GraduationCap 
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Container from '../layout/Container'
import SectionTitle from '../common/SectionTitle'
import SolutionCard from '../common/SolutionCard'

interface SolutionsSectionProps {
  className?: string
}

const solutionsData = [
  {
    id: '1',
    title: 'Robotics Engineering',
    description: 'Design and development of advanced robotic systems.',
    icon: 'bot',
    IconComponent: Bot
  },
  {
    id: '2',
    title: 'AI-Powered Automation',
    description: 'Integrating AI for intelligent automation processes.',
    icon: 'brain',
    IconComponent: Brain
  },
  {
    id: '3',
    title: 'Process Optimization',
    description: 'Streamlining workflows for maximum efficiency.',
    icon: 'settings',
    IconComponent: Settings
  },
  {
    id: '4',
    title: 'Safety & Compliance',
    description: 'Ensuring safe and compliant robotic operations.',
    icon: 'shield',
    IconComponent: Shield
  },
  {
    id: '5',
    title: 'Training & Support',
    description: 'Comprehensive training and ongoing support.',
    icon: 'graduation-cap',
    IconComponent: GraduationCap
  }
]

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ className }) => {
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
            <SectionTitle variant="centered">Solutions</SectionTitle>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SolutionsSection

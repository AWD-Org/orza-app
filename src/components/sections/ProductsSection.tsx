'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Container from '../layout/Container'
import SectionTitle from '../common/SectionTitle'
import ProductCard from '../common/ProductCard'
import type { ProductData } from '@/types'

interface ProductsSectionProps {
  className?: string
}

const productsData: ProductData[] = [
  {
    id: '1',
    name: 'RoboArm X500',
    description: 'High-precision robotic arm for manufacturing.',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    name: 'AutoGuide Transport',
    description: 'Autonomous guided vehicles for logistics.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    name: 'Precision Welding Bot',
    description: 'Robotic system for precise welding applications.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80'
  }
]

const ProductsSection: React.FC<ProductsSectionProps> = ({ className }) => {
  return (
    <section className={cn(
      "py-16",
      className
    )}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Top Products</SectionTitle>
          </motion.div>
          
          <motion.a
            href="#products"
            className="text-base text-[#0D0F1C] hover:text-[#1C4AF2] transition-colors font-space-grotesk mt-4 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            View more +
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductsSection

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Card from '@/components/common/Card'
import type { ProductDataExtended } from '@/types'

interface ProductCardEnhancedProps {
  product: ProductDataExtended
  index?: number
  className?: string
}

const ProductCardEnhanced: React.FC<ProductCardEnhancedProps> = ({
  product,
  index = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn('h-full', className)}
    >
      <Card
        variant="transparent"
        className="h-full overflow-hidden group cursor-pointer"
      >
        {/* Imagen con aspecto específico del Figma */}
        <div className="relative aspect-[176/176] overflow-hidden rounded-[12px]">
          <Image
            src={product.image}
            alt={product.name}
            style={{ objectFit: 'cover' }}
            fill
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Contenido con espaciado específico del Figma */}
        <div className="py-3 space-y-2">
          <h3 className="text-base font-medium text-[#0D0F1C] font-space-grotesk leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-[#4D5C99] font-space-grotesk leading-relaxed">
            {product.description}
          </p>

          {/* Categoría opcional */}
          {product.category && (
            <div className="pt-1">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-[#F7FAFC] text-[#4D5C99] rounded-lg border border-[#E5E8EB]">
                {product.category}
              </span>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

export default ProductCardEnhanced

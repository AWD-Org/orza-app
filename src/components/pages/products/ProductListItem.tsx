'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Card from '@/components/common/Card'
import type { ProductDataExtended } from '@/types'

interface ProductListItemProps {
  product: ProductDataExtended
  index?: number
  className?: string
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  index = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
      className={cn('w-full', className)}
    >
      <Card
        variant="transparent"
        className="overflow-hidden group cursor-pointer border border-[#E5E8EB] hover:border-[#1C4AF2] transition-colors duration-200"
      >
        <div className="flex flex-col sm:flex-row gap-4 p-4">
          {/* Imagen más pequeña para vista lista */}
          <div className="relative w-full sm:w-20 h-20 flex-shrink-0 overflow-hidden rounded-[8px]">
            <Image
              src={product.image}
              alt={product.name}
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
              fill
            />
          </div>

          {/* Contenido del lado derecho */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-base font-medium text-[#0D0F1C] font-space-grotesk leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-[#4D5C99] font-space-grotesk leading-relaxed mt-1">
                  {product.description}
                </p>
              </div>

              {/* Categoría en la esquina superior derecha */}
              {product.category && (
                <div className="flex-shrink-0">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#F7FAFC] text-[#4D5C99] rounded-lg border border-[#E5E8EB]">
                    {product.category}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ProductListItem

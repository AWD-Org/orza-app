'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import ProductCardEnhanced from './ProductCardEnhanced'
import type { ProductDataExtended } from '@/types'

interface ProductGridProps {
  products: ProductDataExtended[]
  className?: string
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  className
}) => {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <p className="text-lg text-[#4D5C99] font-space-grotesk">
            No products found
          </p>
          <p className="text-sm text-[#4D5C99] font-space-grotesk mt-2">
            Try adjusting your search or filters
          </p>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        className
      )}
    >
      {products.map((product, index) => (
        <ProductCardEnhanced
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </div>
  )
}

export default ProductGrid

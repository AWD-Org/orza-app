'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import ProductListItem from './ProductListItem'
import type { ProductDataExtended } from '@/types'

interface ProductListProps {
  products: ProductDataExtended[]
  className?: string
}

const ProductList: React.FC<ProductListProps> = ({
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
        'space-y-4',
        className
      )}
    >
      {products.map((product, index) => (
        <ProductListItem
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </div>
  )
}

export default ProductList

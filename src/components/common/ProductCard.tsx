'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Card from '../common/Card'
import type { ProductData } from '@/types'

interface ProductCardProps {
    product: ProductData
    index: number
    className?: string
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    index,
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
                {/* Imagen con Next/Image y bordes redondeados */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
                    <Image
                        src={product.image ?? ''}
                        alt={product.name ?? 'Product image'}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="py-4">
                    <h3 className="text-base font-medium text-[#0D0F1C] mb-2 font-space-grotesk">
                        {product.name ?? 'Unnamed Product'}
                    </h3>
                    <p className="text-sm text-[#4A5C9C] font-space-grotesk leading-relaxed">
                        {product.description ?? ''}
                    </p>
                </div>
            </Card>
        </motion.div>
    )
}

export default ProductCard

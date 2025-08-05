// components/common/ShoppingCartButton.tsx
'use client'

import React from 'react'
import { ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'

export const ShoppingCartButton: React.FC<{
    className?: string
}> = ({ className }) => {
    const { itemsCount, toggleCart } = useCart()

    return (
        <Button
            variant="primary"
            onClick={toggleCart}
            className={cn(
                'relative p-2 rounded-lg transition-colors ml-4',
                className
            )}
            aria-label="Open cart"
        >
            <ShoppingBag className="w-6 h-6 text-[#FBFBFB]" />
            {itemsCount > 0 && (
                <span
                    className="absolute -top-1 -right-1 inline-flex items-center justify-center
                     w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full"
                >
                    {itemsCount}
                </span>
            )}
        </Button>
    )
}

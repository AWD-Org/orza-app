import React from 'react'
import { cn } from '@/lib/utils'
import type { CardProps } from '@/types'

const Card: React.FC<CardProps> = ({
    children,
    className,
    variant = 'default'
}) => {
    const variantClasses = {
        default: 'bg-white',
        bordered: 'bg-white border border-[#E5E8EB]',
        elevated: 'bg-white shadow-sm',
        transparent: 'bg-transparent'
    }

    return (
        <div className={cn(
            'rounded-[12px] overflow-hidden',
            variantClasses[variant],
            className
        )}>
            {children}
        </div>
    )
}

export default Card

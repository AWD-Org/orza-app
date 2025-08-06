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
        transparent: 'bg-transparent',
        ghost: 'bg-transparent hover:bg-[#F7FAFC] hover:text-[#0D0F1C] border border-transparent hover:border-[#E5E8EB]',
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

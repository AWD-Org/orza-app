import React from 'react'
import { cn } from '@/lib/utils'
import type { SectionTitleProps } from '@/types'

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  const variantClasses = {
    default: 'text-2xl font-bold text-[#0D0F1C] text-left',
    large: 'text-4xl font-bold text-[#0D0F1C] text-center',
    centered: 'text-2xl font-bold text-[#0D0F1C] text-center'
  }

  return (
    <h2 className={cn(
      'font-space-grotesk leading-tight',
      variantClasses[variant],
      className
    )}>
      {children}
    </h2>
  )
}

export default SectionTitle

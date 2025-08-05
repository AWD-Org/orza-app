import React from 'react'
import { cn } from '@/lib/utils'
import type { ContainerProps } from '@/types'

const Container: React.FC<ContainerProps> = ({
    children,
    className,
    maxWidth = 'xl'
}) => {
    const maxWidthClasses = {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full'
    }

    return (
        <div className={cn(
            'mx-auto px-4 sm:px-6 lg:px-8',
            maxWidthClasses[maxWidth],
            className
        )}>
            {children}
        </div>
    )
}

export default Container

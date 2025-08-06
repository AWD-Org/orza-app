'use client'

import React from 'react'
import { Grid2X2, AlignJustify } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { ViewMode } from '@/types'

interface ViewToggleProps {
    currentView: ViewMode
    onViewChange: (view: ViewMode) => void
    className?: string
}

const ViewToggle: React.FC<ViewToggleProps> = ({
    currentView,
    onViewChange,
    className
}) => {
    return (
        <div className={cn('flex items-center gap-1', className)}>
            <Button
                variant={currentView === 'grid' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => onViewChange('grid')}
                className={cn(
                    'p-2 h-8 w-8',
                    currentView === 'grid'
                        ? 'bg-[#1C4AF2] text-white'
                        : 'bg-transparent border-[#CFD4E8] text-[#0D0F1C] hover:bg-[#F7FAFC]'
                )}
                aria-label="Grid view"
            >
                <Grid2X2 className="h-4 w-4" />
            </Button>

            <Button
                variant={currentView === 'list' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => onViewChange('list')}
                className={cn(
                    'p-2 h-8 w-8',
                    currentView === 'list'
                        ? 'bg-[#1C4AF2] text-white'
                        : 'bg-transparent border-[#CFD4E8] text-[#0D0F1C] hover:bg-[#F7FAFC]'
                )}
                aria-label="List view"
            >
                <AlignJustify className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default ViewToggle

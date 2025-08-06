'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface CategorySelectProps {
  categories: string[]
  selectedCategory?: string
  onCategoryChange: (category: string) => void
  placeholder?: string
  className?: string
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  selectedCategory = 'All',
  onCategoryChange,
  placeholder = 'Category',
  className
}) => {
  return (
    <Select value={selectedCategory} onValueChange={onCategoryChange}>
      <SelectTrigger 
        className={cn(
          'h-8 w-auto min-w-[120px] rounded-[12px] border border-[#CFD4E8]',
          'bg-[#F7FAFC] text-[#0D0F1C] font-space-grotesk text-sm',
          'focus:ring-1 focus:ring-[#1C4AF2] focus:border-[#1C4AF2]',
          'px-3 gap-2',
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      
      <SelectContent 
        className="rounded-[12px] border border-[#CFD4E8] bg-[#F7FAFC]"
      >
        {categories.map((category) => (
          <SelectItem 
            key={category} 
            value={category}
            className={cn(
              'font-space-grotesk text-sm text-[#0D0F1C]',
              'focus:bg-[#1C4AF2] focus:text-white',
              'cursor-pointer'
            )}
          >
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CategorySelect

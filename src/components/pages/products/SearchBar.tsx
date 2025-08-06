'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search products',
  className
}) => {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Search className="h-4 w-4 text-[#0D0F1C]" />
      </div>
      
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'pl-10 pr-4 h-12 rounded-[12px] border border-[#CFD4E8]',
          'bg-[#F7FAFC] text-[#0D0F1C] placeholder:text-[#4D5C99]',
          'focus:ring-1 focus:ring-[#1C4AF2] focus:border-[#1C4AF2]',
          'font-space-grotesk text-base',
          className
        )}
      />
    </div>
  )
}

export default SearchBar

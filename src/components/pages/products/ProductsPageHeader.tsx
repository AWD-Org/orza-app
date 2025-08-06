'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/common/SectionTitle'
import SearchBar from './SearchBar'
import CategorySelect from './CategorySelect'
import ViewToggle from './ViewToggle'
import type { ViewMode } from '@/types'

interface ProductsPageHeaderProps {
  searchQuery: string
  onSearch: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  categories: string[]
  viewMode: ViewMode
  onViewChange: (view: ViewMode) => void
  className?: string
}

const ProductsPageHeader: React.FC<ProductsPageHeaderProps> = ({
  searchQuery,
  onSearch,
  selectedCategory,
  onCategoryChange,
  categories,
  viewMode,
  onViewChange,
  className
}) => {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Título principal */}
      <div className="flex items-center justify-between">
        <SectionTitle className="text-[32px] font-bold text-[#0D0F1C] font-space-grotesk">
          ORZA Tech Products
        </SectionTitle>
      </div>

      {/* Barra de búsqueda */}
      <div className="w-full max-w-md">
        <SearchBar
          value={searchQuery}
          onChange={onSearch}
          placeholder="Search products"
        />
      </div>

      {/* Controles de filtros y vista */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Filtros del lado izquierdo */}
        <div className="flex items-center gap-3">
          <CategorySelect
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            placeholder="Category"
          />
        </div>

        {/* Toggle de vista del lado derecho */}
        <ViewToggle
          currentView={viewMode}
          onViewChange={onViewChange}
        />
      </div>
    </div>
  )
}

export default ProductsPageHeader

'use client'

import React, { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductsPageHeader from './ProductsPageHeader'
import ProductGrid from './ProductGrid'
import ProductList from './ProductList'
import PaginationWrapper from './PaginationWrapper'
import type { ProductDataExtended, ViewMode, FilterOptions } from '@/types'

// Datos de ejemplo basados en el Figma
const productsData: ProductDataExtended[] = [
  {
    id: '1',
    name: 'ORZA Arm 500',
    description: 'Compact robotic arm for light industrial tasks',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=600&q=80',
    category: 'Robotic Arms'
  },
  {
    id: '2',
    name: 'ORZA Arm 750',
    description: 'Medium-sized robotic arm for versatile applications',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    category: 'Robotic Arms'
  },
  {
    id: '3',
    name: 'ORZA Arm 1000',
    description: 'Heavy-duty robotic arm for demanding operations',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80',
    category: 'Robotic Arms'
  },
  {
    id: '4',
    name: 'ORZA Gripper 200',
    description: 'Precision gripper for delicate handling',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    category: 'End Effectors'
  },
  {
    id: '5',
    name: 'ORZA Vision System',
    description: 'Advanced vision system for robotic guidance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    category: 'Vision Systems'
  },
  {
    id: '6',
    name: 'ORZA Control Unit',
    description: 'Central control unit for robotic systems',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80',
    category: 'Controllers'
  },
  {
    id: '7',
    name: 'ORZA Arm 1500',
    description: 'High-capacity robotic arm for large-scale operations',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=600&q=80',
    category: 'Robotic Arms'
  },
]

const categories = ['All', 'Robotic Arms', 'End Effectors', 'Vision Systems', 'Controllers']

interface ProductsPageProps {
  className?: string
}

const ProductsPage: React.FC<ProductsPageProps> = ({ className }) => {
  // Estados principales
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<FilterOptions>({})

  const itemsPerPage = 6

  // Productos filtrados
  const filteredProducts = useMemo(() => {
    let filtered = productsData

    // Filtrar por búsqueda
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filtrar por categoría
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    return filtered
  }, [searchQuery, selectedCategory])

  // Productos paginados
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredProducts, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  // Handlers
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page
  }

  const handleViewChange = (view: ViewMode) => {
    setViewMode(view)
    // Guardar preferencia en localStorage
    localStorage.setItem('orza-products-view', view)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Cargar preferencia de vista desde localStorage
  React.useEffect(() => {
    const savedView = localStorage.getItem('orza-products-view') as ViewMode
    if (savedView && (savedView === 'grid' || savedView === 'list')) {
      setViewMode(savedView)
    }
  }, [])

  return (
    <div className={cn('flex flex-col min-h-screen', className)}>
      <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-[160px]">
        <Header />
        
        <div className="py-8">
          {/* Header de la página con filtros */}
          <ProductsPageHeader
            searchQuery={searchQuery}
            onSearch={handleSearch}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categories={categories}
            viewMode={viewMode}
            onViewChange={handleViewChange}
          />

          {/* Contenido principal */}
          <div className="mt-8">
            {viewMode === 'grid' ? (
              <ProductGrid products={paginatedProducts} />
            ) : (
              <ProductList products={paginatedProducts} />
            )}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="mt-12">
              <PaginationWrapper
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProductsPage

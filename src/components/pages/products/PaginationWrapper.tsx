'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination'

interface PaginationWrapperProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems: number
  itemsPerPage: number
  className?: string
}

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  className
}) => {
  // Función para generar los números de página visibles
  const getVisiblePageNumbers = () => {
    const delta = 2 // Número de páginas a mostrar a cada lado de la página actual
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      if (totalPages > 1) {
        rangeWithDots.push(totalPages)
      }
    }

    return rangeWithDots
  }

  const visiblePages = getVisiblePageNumbers()
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <div className={cn('flex flex-col items-center space-y-4', className)}>
      {/* Información de elementos */}
      <div className="text-sm text-[#4D5C99] font-space-grotesk">
        Showing {startItem}-{endItem} of {totalItems} products
      </div>

      {/* Paginación */}
      <Pagination>
        <PaginationContent>
          {/* Botón Previous */}
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              className={cn(
                'font-space-grotesk',
                currentPage <= 1 && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>

          {/* Números de página */}
          {visiblePages.map((page, index) => (
            <PaginationItem key={index}>
              {page === '...' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => onPageChange(page as number)}
                  isActive={page === currentPage}
                  className={cn(
                    'font-space-grotesk w-10 h-10 rounded-[20px]',
                    page === currentPage 
                      ? 'bg-[#1C4AF2] text-white border-[#1C4AF2]' 
                      : 'bg-transparent text-[#0D0F1C] border-[#CFD4E8] hover:bg-[#F7FAFC]'
                  )}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Botón Next */}
          <PaginationItem>
            <PaginationNext 
              onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
              className={cn(
                'font-space-grotesk',
                currentPage >= totalPages && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationWrapper

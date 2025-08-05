// src/hooks/useCart.tsx
'use client'

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from 'react'

interface CartContextValue {
    itemsCount: number
    toggleCart: () => void
    addItem: () => void
    removeItem: () => void
    isCartOpen: boolean
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [itemsCount, setItemsCount] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = useCallback(() => {
        setIsCartOpen((open) => !open)
    }, [])

    const addItem = useCallback(() => {
        setItemsCount((c) => c + 1)
    }, [])

    const removeItem = useCallback(() => {
        setItemsCount((c) => Math.max(0, c - 1))
    }, [])

    return (
        <CartContext.Provider
            value={{ itemsCount, toggleCart, addItem, removeItem, isCartOpen }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextValue {
    const ctx = useContext(CartContext)
    if (!ctx) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return ctx
}

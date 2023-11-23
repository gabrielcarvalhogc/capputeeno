"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { ReactNode, createContext, useContext } from 'react';

interface CartContextProps {
  cartLength: number;
  updateCartLength: (newLength: number[]) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCartContext:() => CartContextProps = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const { value: cartItems, updateLocalStorage } = useLocalStorage<number[]>('cart-items', []);

  const updateCartLength = (newLength: number[]) => {
    updateLocalStorage(newLength);
  };

  const cartContextValue: CartContextProps = {
    cartLength: cartItems.length,
    updateCartLength,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

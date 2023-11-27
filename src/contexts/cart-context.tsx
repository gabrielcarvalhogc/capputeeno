"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface CartContextProps {
  cartLength: number;
  updateCartLength: (newLength: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
  initialCartLength?: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCartContext:() => CartContextProps = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children, initialCartLength = 0 }: CartProviderProps) => {
  const [cartLength, setCartLength] = useState(initialCartLength);

  const updateCartLength = (newLength: number) => {
    setCartLength(newLength);
  };

  useEffect(() => {
    // Recuperar os itens do carrinho do localStorage e atualizar o comprimento do carrinho
    const cartItems = JSON.parse(localStorage.getItem('cart-items') || '[]') as number[];
    setCartLength(cartItems.length);
  }, []);

  const cartContextValue: CartContextProps = {
    cartLength,
    updateCartLength,
  };
  
  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

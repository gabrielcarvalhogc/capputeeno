"use client"

import { CartProvider } from "@/contexts/cart-context";
import { FilterContextProvider } from "@/contexts/filter-context";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface defaultProvidersProps {
  children: ReactNode
}

const theme = {
  desktopBreakpoints: "968px",
  tabletBreakpoint: "768px",
}

export function DefaultProviders({ children }: defaultProvidersProps) {
  const client = new QueryClient();
  const { value: cartItems } = useLocalStorage<number[]>('cart-items', []);
  const initialCartLength = cartItems ? cartItems.length : 0;
  
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          <CartProvider initialCartLength={initialCartLength}>
            {children}
          </CartProvider>
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}
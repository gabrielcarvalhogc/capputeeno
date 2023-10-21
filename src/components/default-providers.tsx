"use client"

import { FilterContextProvider } from "@/contexts/filter-context";
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
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>

    </QueryClientProvider>
  )
}
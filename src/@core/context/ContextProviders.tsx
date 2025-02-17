'use client'

import React, { ReactNode } from 'react'
import ThemeComponent from '@/@core/theme/ThemeComponent'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SettingsProvider } from '@/@core/context/settingsContext'
import { LoadingProvider } from './LoadingContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
})

const ContextProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <SettingsProvider>
          <ThemeComponent> {children}</ThemeComponent>
        </SettingsProvider>
      </LoadingProvider>
    </QueryClientProvider>
  )
}

export default ContextProviders

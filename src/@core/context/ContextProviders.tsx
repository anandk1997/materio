'use client'

import React, { ReactNode } from 'react'
import ThemeComponent from '@/@core/theme/ThemeComponent'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '@/@core/utils/create-emotion-cache'
import { SettingsConsumer, SettingsProvider } from '@/@core/context/settingsContext'
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
  const emotionCache = createEmotionCache()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <LoadingProvider>
            <SettingsProvider>
              <SettingsConsumer>
                {({ settings }) => {
                  return <ThemeComponent settings={settings}>{children}</ThemeComponent>
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </LoadingProvider>
        </CacheProvider>
      </QueryClientProvider>
    </>
  )
}

export default ContextProviders

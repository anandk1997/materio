'use client'

import React, { ReactNode } from 'react'
import ThemeComponent from '@/@core/theme/ThemeComponent'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '@/@core/utils/create-emotion-cache'

// ** ContextProviders
import { SettingsConsumer, SettingsProvider } from '@/@core/context/settingsContext'

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
          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return <ThemeComponent settings={settings}>{children}</ThemeComponent>
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </CacheProvider>
      </QueryClientProvider>
    </>
  )
}

export default ContextProviders

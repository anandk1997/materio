'use client'

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export const LoadingContext = createContext<
  | {
      loading: boolean
      setLoading: React.Dispatch<React.SetStateAction<boolean>>
      progress: number
      setProgress: React.Dispatch<React.SetStateAction<number>>
    }
  | undefined
>(undefined)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const defaultContext = {
    loading,
    setLoading,
    progress,
    setProgress,
  }

  return (
    <LoadingContext.Provider value={defaultContext}>
      <LoadingBar
        // color='#f11946'
        color='#9155FD'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {children}
    </LoadingContext.Provider>
  )
}

export const useLoadingContext = () => {
  const context = useContext(LoadingContext)
  if (!context) throw new Error('useLoadingContext must be used within a LoadingProvider')
  return context
}

export const useSetLoading = () => {
  const { setLoading } = useLoadingContext()
  useEffect(() => setLoading(false), [setLoading])
}

export const useIsLoading = (isPending: boolean) => {
  const { loading, setLoading, setProgress } = useLoadingContext()

  useEffect(() => {
    setLoading(isPending)
    return isPending || loading ? setProgress(val => val + 10) : setProgress(100)
  }, [isPending, loading, setProgress, setLoading])
}

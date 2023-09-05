'use client'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { LinearProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const LoadingContext = createContext<
  | { loading: boolean; setLoading: React.Dispatch<React.SetStateAction<boolean>> }
  | undefined
>(undefined)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)

  const useStyles = makeStyles(() => ({
    loader: {
      zIndex: '999999 !important',
      margin: 0,
      top: 0,
      right: 0,
      bottom: 'auto',
      width: '100%',
      position: 'fixed',
    },
    root: {
      backgroundColor: '#9155FD !important',
    },
    bar: {
      backgroundColor: '#b74acd !important',
    },
  }))

  const classes = useStyles()

  const defaultContext = {
    loading,
    setLoading,
  }

  return (
    <LoadingContext.Provider value={defaultContext}>
      {loading && (
        <LinearProgress
          classes={{
            root: classes.root,
            bar: classes.bar,
          }}
          className={classes.loader}
        />
      )}
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
  useEffect(() => setLoading(false), [])
}

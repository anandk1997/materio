import React, { ReactNode } from 'react'
import ContextProviders from './ContextProviders'

const AppContextProviders = ({ children }: { children: ReactNode }) => (
  <ContextProviders>{children}</ContextProviders>
)

export default AppContextProviders

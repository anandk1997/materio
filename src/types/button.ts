import { ButtonProps } from '@mui/material/Button'
import React from 'react'

export interface ButtonsProps extends ButtonProps {
  loading?: boolean
  disabled?: boolean
  htmlFor?: string
  children: React.ReactNode
}

import { ReactNode } from 'react'
import { ThemeColor } from '@/@core/layouts/types'

export type CardStatsVerticalProps = {
  title: string
  stats: string
  icon: ReactNode
  subtitle: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}

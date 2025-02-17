'use client'
import { createContext, useState, ReactNode } from 'react'
import { PaletteMode } from '@mui/material'
import themeConfig from '@/configs/themeConfig'
import { ThemeColor, ContentWidth } from '@/@core/layouts/types'

export type Settings = {
  mode: PaletteMode
  themeColor: ThemeColor
  contentWidth: ContentWidth
}

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth,
}

export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({ ...initialSettings })
  const saveSettings = (updatedSettings: Settings) => setSettings(updatedSettings)

  return <SettingsContext value={{ settings, saveSettings }}>{children}</SettingsContext>
}

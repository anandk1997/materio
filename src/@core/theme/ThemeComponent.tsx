'use client'
import { ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Settings } from '@/@core/context/settingsContext'
import themeConfig from '@/configs/themeConfig'
import overrides from './overrides'
import typography from './typography'
import themeOptions from './ThemeOptions'
import GlobalStyling from './globalStyles'

const ThemeComponent = (props: Props) => {
  const { settings, children } = props
  const coreThemeConfig = themeOptions(settings)
  let theme = createTheme(coreThemeConfig)

  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  })

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent

interface Props {
  settings: Settings
  children: ReactNode
}

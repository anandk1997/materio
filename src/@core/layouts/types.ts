import React, { ReactNode } from 'react'
import { Settings } from '@/@core/context/settingsContext'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type ContentWidth = 'full' | 'boxed'

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

export type NavLink = {
  path?: string
  title: string
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  icon?: string | string[] | ReactNode | React.SVGProps<SVGSVGElement> | React.ElementType
  badgeColor?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
}

export type NavSectionTitle = {
  sectionTitle: string
  action?: string
  subject?: string
}

export type ColapsibleTitle = {
  colapsibleTitle: string
  navVisible?: boolean
  toggleNavVisibility?: () => void
  item?: any
  icon:
    | string
    | string[]
    | React.ReactNode
    | React.SVGProps<SVGSVGElement>
    | React.ElementType
    | IconDefinition
  colapsibleMenu: Array<{
    subMenu: string
    path: string
    action?: string
    subject?: string
    disabled?: boolean
    badgeContent?: string
    externalLink?: boolean
    openInNewTab?: boolean
    icon:
      | string
      | string[]
      | React.ReactNode
      | React.SVGProps<SVGSVGElement>
      | React.ElementType
    badgeColor?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'warning'
      | 'info'
  }>
}

export type VerticalNavItemsType = (NavLink | NavSectionTitle | ColapsibleTitle)[]

export type LayoutProps = {
  hidden: boolean
  settings: Settings
  children: ReactNode
  verticalNavItems?: VerticalNavItemsType
  scrollToTop?: (props?: any) => ReactNode
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
  verticalAppBarContent?: (props?: any) => ReactNode
  verticalNavMenuContent?: (props?: any) => ReactNode
  verticalNavMenuBranding?: (props?: any) => ReactNode
  afterVerticalNavMenuContent?: (props?: any) => ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

export type BlankLayoutProps = {
  children: ReactNode
}

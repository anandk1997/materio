export interface MenuItem {
  path: string
  disabled: boolean
  openInNewTab: boolean
  badgeContent: string
  badgeColor: string
  icon: string
  title: string
}

export interface ItemFunctionResult {
  item: MenuItem
  navVisible?: boolean
  toggleNavVisibility?: () => void
}

export interface ItemMenu {
  path: string
  disabled: boolean
  openInNewTab: boolean
  badgeContent: string
  badgeColor: string
  icon: string
  subMenu: string
}

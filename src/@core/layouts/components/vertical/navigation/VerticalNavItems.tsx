import React from 'react'
import { Settings } from '@/@core/context/settingsContext'
import {
  ColapsibleTitle,
  NavLink,
  NavSectionTitle,
  VerticalNavItemsType,
} from '@/@core/layouts/types'
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle, { ColapsibleMenu } from './VerticalNavSectionTitle'

const VerticalNavItems = (props: Props) => {
  const { verticalNavItems } = props

  const RenderMenuItems = verticalNavItems?.map(
    (item: NavLink | NavSectionTitle | ColapsibleTitle, index: number) => {
      const TagName: any = resolveNavItemComponent(item)
      return <TagName {...props} key={index} item={item} />
    }
  )

  return RenderMenuItems
}

export default VerticalNavItems

interface Props {
  settings?: Settings
  navVisible?: boolean
  groupActive: string[]
  currentActiveGroup: string[]
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: Settings) => void
  setGroupActive: (value: string[]) => void
  setCurrentActiveGroup: (item: string[]) => void
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle | ColapsibleTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle
  if ((item as ColapsibleTitle).colapsibleTitle) return ColapsibleMenu

  return VerticalNavLink
}

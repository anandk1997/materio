import React from 'react'
import { ListItem } from '@mui/material'
import { ElementType, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import themeConfig from '@/configs/themeConfig'
import { NavLink } from '@/@core/layouts/types'
import { Settings } from '@/@core/context/settingsContext'
import UserIcon from '@/layouts/components/UserIcon'

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  const pathname = usePathname()
  const IconTag: ReactNode = item.icon as ReactNode
  const verifyPath = pathname === item.path

  const onLinkClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!item.path) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (navVisible) toggleNavVisibility()
  }

  return (
    <ListItem
      disablePadding
      className='nav-link'
      sx={{
        mt: 1.5,
        px: '0 !important',
        ...(item.disabled && { opacity: 0.5, pointerEvents: 'none' }),
      }}
    >
      <Link
        passHref
        href={item.path ?? '/'}
        className='w-100 text-decoration-none'
        {...(item.openInNewTab ? { target: '_blank' } : null)}
      >
        <MenuNavLink
          component={'span'}
          className={`${verifyPath && 'active'} no-underline`}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={onLinkClick}
          sx={{
            pl: 5.5,
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
          }}
        >
          <ListItemIcon
            sx={{
              mr: 2.5,
              color: 'text.primary',
              transition: 'margin .25s ease-in-out',
            }}
          >
            <UserIcon icon={IconTag} />
          </ListItemIcon>

          <MenuItemTextMetaWrapper>
            <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>
              {item.title}
            </Typography>

            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' },
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink

interface Props {
  item: NavLink
  settings: Settings
  navVisible?: boolean
  toggleNavVisibility: () => void
}

export const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & {
    component?: ElementType
    target?: '_blank' | undefined
  }
>(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`,
  },
}))

export const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' }),
})

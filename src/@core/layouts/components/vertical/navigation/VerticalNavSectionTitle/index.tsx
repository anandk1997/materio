import Divider from '@mui/material/Divider'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiListSubheader, { ListSubheaderProps } from '@mui/material/ListSubheader'
import { ColapsibleTitle, NavSectionTitle } from '@/@core/layouts/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { PropsWithChildren, useContext, useEffect, useState } from 'react'
import VerticalNavLink from '../VerticalNavLink'
import { ItemFunctionResult, ItemMenu } from '@/types/colapsibleMenu'
import {
  Accordion,
  AccordionContext,
  Button,
  useAccordionButton,
} from 'react-bootstrap'
import {
  IconDefinition,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import styles from './VerticleNavSectionTitle.module.scss'

const VerticalNavSectionTitle = ({ item }: Props) => {
  const theme = useTheme()

  return (
    <ListSubheader
      className='nav-section-title'
      sx={{
        px: 0,
        py: 1.75,
        color: theme.palette.text.disabled,
        '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.12)`,
        },
      }}
    >
      <Divider
        textAlign='left'
        sx={{
          m: 0,
          width: '100%',
          lineHeight: 'normal',
          textTransform: 'uppercase',
          '&:before, &:after': { top: 7, transform: 'none' },
          '& .MuiDivider-wrapper': {
            px: 2.5,
            fontSize: '0.75rem',
            letterSpacing: '0.21px',
          },
        }}
      >
        <TypographyHeaderText noWrap>{item.sectionTitle}</TypographyHeaderText>
      </Divider>
    </ListSubheader>
  )
}

export default VerticalNavSectionTitle

export const ColapsibleMenu = ({
  item,
  navVisible,
  toggleNavVisibility,
}: ColapsibleTitle) => {
  const itemMenu = (s: ItemMenu): ItemFunctionResult => ({
    item: {
      path: s.path,
      disabled: s.disabled,
      openInNewTab: s.openInNewTab,
      badgeContent: s.badgeContent,
      badgeColor: s.badgeColor,
      icon: s.icon,
      title: s.subMenu,
    },
    navVisible,
    toggleNavVisibility,
  })

  return (
    <ul className='list-unstyled'>
      <SidebarNavGroup toggleIcon={item.icon} toggleText={item.colapsibleTitle}>
        {item?.colapsibleMenu?.map((s: any) => (
          <div key={s.path} className={styles.itemMenu}>
            {/* @ts-ignore */}
            <VerticalNavLink {...itemMenu(s)} />
          </div>
        ))}
      </SidebarNavGroup>
    </ul>
  )
}

type SidebarNavGroupProps = {
  toggleIcon: IconDefinition
  toggleText: string | undefined
} & PropsWithChildren

const SidebarNavGroup = (props: SidebarNavGroupProps) => {
  const { toggleIcon, toggleText, children } = props
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <Accordion
        as='li'
        bsPrefix='nav-group'
        className={classNames({ show: isShow }, 'py-1')}
      >
        <SidebarNavGroupToggle icon={toggleIcon} eventKey='0' {...{ isShow, setIsShow }}>
          {toggleText}
        </SidebarNavGroupToggle>
        <Accordion.Collapse eventKey='0'>
          <ul className='nav-group-items list-unstyled'>{children}</ul>
        </Accordion.Collapse>
      </Accordion>
    </>
  )
}

type SidebarNavGroupToggleProps = {
  eventKey: string
  icon: IconDefinition
  setIsShow: (isShow: boolean) => void
  isShow: boolean
} & PropsWithChildren

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext)
  const { eventKey, icon, children, setIsShow, isShow } = props
  const decoratedOnClick = useAccordionButton(eventKey)
  const isCurrentEventKey = activeEventKey === eventKey

  useEffect(() => {
    setIsShow(activeEventKey === eventKey)
  }, [activeEventKey, eventKey, setIsShow])

  return (
    <Button
      variant='link'
      type='button'
      className={classNames(
        'rounded-0 nav-link ps-4 py-2 d-flex align-items-center flex-fill w-100 shadow-none',
        {
          collapsed: !isCurrentEventKey,
        }
      )}
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon className='nav-icon me-3' icon={icon} />
      {children}
      <div className='nav-chevron ms-auto text-end'>
        <FontAwesomeIcon size='xs' icon={isShow ? faChevronUp : faChevronDown} />
      </div>
    </Button>
  )
}

interface Props {
  item: NavSectionTitle
}

const ListSubheader = styled((props: ListSubheaderProps) => (
  <MuiListSubheader component='li' {...props} />
))(({ theme }) => ({
  lineHeight: 1,
  display: 'flex',
  position: 'relative',
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(2),
  backgroundColor: 'transparent',
  transition: 'padding-left .25s ease-in-out',
}))

const TypographyHeaderText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  letterSpacing: '0.21px',
  textTransform: 'uppercase',
  color: theme.palette.text.disabled,
  fontWeight: theme.typography.fontWeightMedium,
}))

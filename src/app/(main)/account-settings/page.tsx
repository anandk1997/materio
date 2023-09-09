'use client'
import React, { SyntheticEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import TabInfo from '@/views/account-settings/TabInfo'
import TabAccount from '@/views/account-settings/TabAccount'
import TabSecurity from '@/views/account-settings/TabSecurity'
import 'react-datepicker/dist/react-datepicker.css'
import { useSetLoading } from '@/@core/context/LoadingContext'

const AccountSettings = () => {
  useSetLoading()
  const [value, setValue] = useState<string>('account')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const customLabel = (label: React.ReactNode, Icon: React.FC) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Icon />
      <TabName>{label}</TabName>
    </Box>
  )

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{
            borderBottom: theme => `1px solid ${theme.palette.divider}`,
          }}
        >
          <CustomTab value='account' label={customLabel('Account', AccountOutline)} />
          <CustomTab value='security' label={customLabel('Security', LockOpenOutline)} />
          <CustomTab value='info' label={customLabel('Info', InformationOutline)} />
        </TabList>

        <TabPanel value='account'>
          <TabAccount />
        </TabPanel>

        <TabPanel value='security'>
          <TabSecurity />
        </TabPanel>

        <TabPanel value='info'>
          <TabInfo />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

type CustomTabProps = {
  label: React.ReactNode
}

const CustomTab: React.FC<CustomTabProps & TabProps> = ({ label, ...rest }) => (
  <Tab {...rest} label={label} />
)

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}))

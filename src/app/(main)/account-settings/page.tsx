'use client'

// import React, { SyntheticEvent, useState } from 'react'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import TabList from '@mui/lab/TabList'
// import TabPanel from '@mui/lab/TabPanel'
// // import TabContext from '@mui/lab/TabContext'
// import { styled } from '@mui/material/styles'
// import MuiTab, { TabProps } from '@mui/material/Tab'
// import AccountOutline from 'mdi-material-ui/AccountOutline'
// import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
// import InformationOutline from 'mdi-material-ui/InformationOutline'
// import TabInfo from '@/views/account-settings/TabInfo'
// import TabAccount from '@/views/account-settings/TabAccount'
// import TabSecurity from '@/views/account-settings/TabSecurity'
// import 'react-datepicker/dist/react-datepicker.css'
// import { useSetLoading } from '@/@core/context/LoadingContext'
// import TabWalletAddress from '@/views/account-settings/TabWalletAddress'
// import TabKYC from '@/views/account-settings/TabKyc/TabKYC'
// import { Tabs, Tooltip } from '@mui/material'

// const AccountSettings = () => {
//   useSetLoading()
//   const [value, setValue] = useState<string>('account')

//   const handleChange = (e: SyntheticEvent, newValue: string) => setValue(newValue)

//   return (
//     <Card>
//       {/* <TabContext value={value}> */}
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         aria-label='account-settings tabs'
//         sx={{
//           borderBottom: theme => `1px solid ${theme.palette.divider}`,
//         }}
//       >
//         <CustomTab value='account' label={customLabel('Account', AccountOutline)} />
//         <CustomTab value='security' label={customLabel('Security', LockOpenOutline)} />
//         <CustomTab
//           value='wallet'
//           label={customLabel('Wallet Address', LockOpenOutline)}
//         />
//         <CustomTab value='kyc' label={customLabel('Update KYC', LockOpenOutline)} />
//         <CustomTab value='info' label={customLabel('Info', InformationOutline)} />
//       </Tabs>

//       <TabPanel value='account'>{/* <TabAccount /> */}</TabPanel>

//       <TabPanel value='security'>{/* <TabSecurity /> */}</TabPanel>

//       <TabPanel value='wallet'>{/* <TabWalletAddress /> */}</TabPanel>

//       <TabPanel value='kyc'>{/* <TabKYC /> */}</TabPanel>

//       <TabPanel value='info'>{/* <TabInfo /> */}</TabPanel>
//       {/* </TabContext> */}
//     </Card>
//   )
// }

// export default AccountSettings

// const TabName = styled('span')(({ theme }) => ({
//   lineHeight: 1.71,
//   fontSize: '0.875rem',
//   marginLeft: theme.spacing(2.4),
//   [theme.breakpoints.down('md')]: {
//     display: 'none',
//   },
// }))

// type CustomTabProps = {
//   label: React.ReactNode
// }

// const CustomTab: React.FC<CustomTabProps & TabProps> = ({ label, ...rest }) => (
//   <Tab {...rest} label={label} />
// )

// const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
//   [theme.breakpoints.down('md')]: {
//     minWidth: 100,
//   },
//   [theme.breakpoints.down('sm')]: {
//     minWidth: 67,
//   },
// }))

// const customLabel = (label: React.ReactNode, Icon: React.FC) => (
//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Tooltip title={label}>
//       <Icon />
//     </Tooltip>

//     <TabName>{label}</TabName>
//   </Box>
// )

// ..................................................

import * as React from 'react'
import MuiTab, { TabProps } from '@mui/material/Tab'
import {
  Card,
  Tooltip,
  Tabs,
  //  Tab,
  Typography,
  Box,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { AccountOutline, InformationOutline, LockOpenOutline } from 'mdi-material-ui'
import TabAccount from '@/views/account-settings/TabAccount'
import TabSecurity from '@/views/account-settings/TabSecurity'
import TabWalletAddress from '@/views/account-settings/TabWalletAddress'
import TabKYC from '@/views/account-settings/TabKyc/TabKYC'
import TabInfo from '@/views/account-settings/TabInfo'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Card>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label={customLabel('Account', AccountOutline)} {...a11yProps(0)} />
            <Tab label={customLabel('Security', LockOpenOutline)} {...a11yProps(1)} />
            <Tab
              label={customLabel('Wallet Address', LockOpenOutline)}
              {...a11yProps(2)}
            />
            <Tab label={customLabel('Update KYC', LockOpenOutline)} {...a11yProps(3)} />
            <Tab label={customLabel('Info', InformationOutline)} {...a11yProps(4)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <TabAccount />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <TabSecurity />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <TabWalletAddress />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <TabKYC />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <TabInfo />
        </CustomTabPanel>
      </Box>
    </Card>
  )
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}))

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const customLabel = (label: React.ReactNode, Icon: React.FC) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Tooltip title={label}>
      <Icon />
    </Tooltip>

    <TabName>{label}</TabName>
  </Box>
)

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

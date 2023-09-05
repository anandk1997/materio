'use client'
import Grid from '@mui/material/Grid'
import CardStatisticsVerticalComponent from '@/@core/components/card-statistics/card-stats-vertical'
import ApexChartWrapper from '@/@core/styles/libs/react-apexcharts'
import Table from '@/views/dashboard/Table'
import Trophy from '@/views/dashboard/Trophy'
import TotalEarning from '@/views/dashboard/TotalEarning'
import StatisticsCard from '@/views/dashboard/StatisticsCard'
import WeeklyOverview from '@/views/dashboard/WeeklyOverview'
import DepositWithdraw from '@/views/dashboard/DepositWithdraw'
import SalesByCountries from '@/views/dashboard/SalesByCountries'
import {
  PollIcon,
  CurrencyUsdIcon,
  HelpCircleOutlineIcon,
  BriefcaseVariantOutlineIcon,
} from '@/@core/Icons'
import { useSetLoading } from '@/@core/context/LoadingContext'

const Dashboard = () => {
  useSetLoading()

  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy />
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <WeeklyOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TotalEarning />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='$25.6k'
                  icon={<PollIcon />}
                  color='success'
                  trendNumber='+42%'
                  title='Total Profit'
                  subtitle='Weekly Profit'
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='$78'
                  title='Refunds'
                  trend='negative'
                  color='secondary'
                  trendNumber='-15%'
                  subtitle='Past Month'
                  icon={<CurrencyUsdIcon />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='862'
                  trend='negative'
                  trendNumber='-18%'
                  title='New Project'
                  subtitle='Yearly Project'
                  icon={<BriefcaseVariantOutlineIcon />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='15'
                  color='warning'
                  trend='negative'
                  trendNumber='-18%'
                  subtitle='Last Week'
                  title='Sales Queries'
                  icon={<HelpCircleOutlineIcon />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SalesByCountries />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <DepositWithdraw />
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </>
  )
}

export default Dashboard

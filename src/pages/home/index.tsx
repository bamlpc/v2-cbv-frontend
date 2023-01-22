// ** React Imports
import { useContext } from 'react'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Demo Components Imports
import TopContributorAward from 'src/views/dashboards/crm/TopContributorAward'
import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget'
import CrmWeeklyOverview from 'src/views/dashboards/crm/CrmWeeklyOverview'
import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
import CrmMostSalesInCountries from 'src/views/dashboards/crm/CrmMostSalesInCountries'

const Home = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)

  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6} className='match-height'>
          <Grid item xs={6} sm={3} md={2}>
            <CardStatisticsVertical
              stats='New Issues'
              color='primary'
              trendNumber='+20'
              title='Total'
              chipText='Last Month'
              icon={<Icon icon='mdi:cart-plus' />}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <CardStatisticsVertical
              stats='Most Issues'
              color='success'
              trendNumber='+4'
              title='Bitcoin'
              chipText='Last Month'
              icon={<Icon icon='mdi:currency-usd' />}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <CrmTotalProfit />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <CrmTotalGrowth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopContributorAward />
          </Grid>
          <Grid item xs={12} md={4}>
            <CrmOrganicSessions />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CrmWeeklyOverview />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CrmMonthlyBudget />
          </Grid>
          <Grid item xs={12} md={4}>
            <CrmMostSalesInCountries />
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <CardHeader title='Common' />
              <CardContent>
                <Typography sx={{ mb: 4 }}>No ability is required to view this card</Typography>
                <Typography sx={{ color: 'primary.main' }}>This card is visible to 'user' and 'admin' both</Typography>
              </CardContent>
            </Card>
          </Grid>
          {ability?.can('read', 'analytics') ? (
            <Grid item md={6} xs={12}>
              <Card>
                <CardHeader title='Analytics' />
                <CardContent>
                  <Typography sx={{ mb: 4 }}>
                    User with 'Analytics' subject's 'Read' ability can view this card
                  </Typography>
                  <Typography sx={{ color: 'error.main' }}>This card is visible to 'admin' only</Typography>
                </CardContent>
              </Card>
            </Grid>
          ) : null}
        </Grid>
      </ApexChartWrapper>
    </>
  )
}
Home.authGuard = false
Home.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Home

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
import TotalGrowth from 'src/views/dashboards/crm/SmallPieChart'
import MonthlyCBVGrowth from 'src/views/dashboards/crm/MonthlyCBVGrowth'
import CrmWeeklyOverview from 'src/views/dashboards/crm/CrmWeeklyOverview'
import SeverityIssuesPie from 'src/views/dashboards/crm/SeverityIssuesPie'
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
              icon={<Icon icon='mdi:cart-plus' />} // TODO: revisar icono para mostrar
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <CardStatisticsVertical
              stats='Most Issues'
              color='success'
              trendNumber='+4'
              title='Bitcoin'
              chipText='Last Month'
              icon={<Icon icon='mdi:currency-usd' />} // TODO: revisar icono para mostrar
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TotalGrowth // TODO: revisar colores
              title={'Total New CBV'}
              subtitle={'by blockchain'}
              data={[30, 15, 10, 10]} // Order by decreace quantity TODO: needs to load dinamically
              labels={['Bitcoin', 'Ethereum', 'Phantama', 'Solana']} // TODO: needs to load dinamically
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TotalGrowth // TODO: revisar colores
              title={'Total New CBV'}
              subtitle={'by severity'}
              data={[10, 20, 30, 5]} // TODO: needs to load dinamically
              labels={['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']} // TODO: needs to load dinamically
              colorType={'severity'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopContributorAward />
          </Grid>
          <Grid item xs={12} md={4}>
            <SeverityIssuesPie data={[20, 40, 60, 10]} labels={['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CrmWeeklyOverview />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MonthlyCBVGrowth data={[0, 3, 10, 65, 130]} />
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

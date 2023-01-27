// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Demo Components Imports
import TopContributorAward from 'src/views/pages/home/TopContributorAward'
import TotalGrowth from 'src/views/pages/home/SmallPieChart'
import MonthlyCBVGrowth from 'src/views/pages/home/MonthlyCBVGrowth'
import LastSixMonthIssues from 'src/views/pages/home/LastSixMonthIssues'
import SeverityIssuesPie from 'src/views/pages/home/SeverityIssuesPie'
import ContributorsRanking from 'src/views/pages/home/ContributorsRanking'
import LastAddedIssues from 'src/views/pages/home/LastAddedIssues'

const Home = () => {
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
              icon={<Icon icon='fluent-mdl2:issue-tracking' />} // TODO: revisar icono para mostrar
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <CardStatisticsVertical
              stats='Most Issues'
              color='primary'
              trendNumber='+4'
              title='Bitcoin'
              chipText='Last Month'
              icon={<Icon icon='eos-icons:blockchain' />} // TODO: revisar icono para mostrar
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
            <TopContributorAward user={'@BMogetta'} amount={'5'} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SeverityIssuesPie data={[20, 40, 60, 10]} labels={['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <LastSixMonthIssues data={[10, 15, 25, 22, 65, 65]} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MonthlyCBVGrowth data={[0, 3, 10, 65, 130]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContributorsRanking />
          </Grid>
          <Grid item xs={12} md={6}>
            <LastAddedIssues />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </>
  )
}

export default Home

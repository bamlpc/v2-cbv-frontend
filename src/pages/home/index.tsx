//
import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// **  Components Imports
import TopContributorAward from 'src/views/pages/home/TopContributorAward'
import TotalGrowth from 'src/views/pages/home/SmallPieChart'
import MonthlyCBVGrowth from 'src/views/pages/home/MonthlyCBVGrowth'
import LastSixMonthIssues from 'src/views/pages/home/LastSixMonthIssues'
import SeverityIssuesPie from 'src/views/pages/home/SeverityIssuesPie'
import ContributorsRanking from 'src/views/pages/home/ContributorsRanking'
import LastAddedIssues from 'src/views/pages/home/LastAddedIssues'
import SmallStatisticsCards from 'src/views/pages/home/SmallStatisticsCards'
import { Skeleton } from '@mui/material'

const Home = () => {
  const [data, setData] = useState(Object)
  useEffect(() => {
    const dataFetch = async () => {
      const _data = await (
        await fetch('https://cbv-api.deno.dev/graphql', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `query{
              find_for_home_page(timeframe: {start: 2629800000}) {
                 contributors
                severities
                blockchains
              }
            }`
          })
        })
      ).json()
      setData(_data.data)
    }
    dataFetch()
  }, [])

  // TODO: revisar como retrazar los compoenentes, crasheando mientras se está haciendo el fetch
  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6} className='match-height'>
          <Grid item xs={6} sm={3} md={2}>
            <SmallStatisticsCards
              stats='New Issues'
              color='primary'
              trendNumber='+20'
              title='Total'
              chipText='Last Month'
              type='total_new_issues'
              data={data}
              icon={<Icon icon='fluent-mdl2:issue-tracking' />} // TODO: revisar icono para mostrar
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <SmallStatisticsCards
              stats='Most Issues'
              color='primary'
              trendNumber='+4'
              title='Bitcoin'
              chipText='Last Month'
              type='blockchain_with_most_new_issues'
              data={data.find_for_home_page}
              icon={<Icon icon='eos-icons:blockchain' />} // TODO: revisar icono para mostrar
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {data.find_for_home_page ? (
              <TotalGrowth // TODO: revisar colores
                title={'Total New CBV'}
                subtitle={'by blockchain'}
                data={data.find_for_home_page}
              />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {data.data ? (
              <TotalGrowth title={'Total New CBV'} subtitle={'by severity'} data={data} colorType={'severity'} />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <TopContributorAward user={'@BMogetta'} amount={'5'} />
          </Grid>
          {
            <Grid item xs={12} md={4}>
              {data.find_for_home_page ? (
                <SeverityIssuesPie data={[20, 40, 60, 10]} labels={['Low', 'Medium', 'High', 'Critical']} />
              ) : (
                <Skeleton variant='rectangular' animation='pulse' height='470px' />
              )}
            </Grid>
          }
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

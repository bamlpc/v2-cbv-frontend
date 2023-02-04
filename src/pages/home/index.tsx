// ** React Imports
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
  const [dataSmallChart, setDataSmallChart] = useState(Object)
  const [dataBigChart, setDataBigChart] = useState(Object)
  const [dataRanking, setDataRanking] = useState(Object)

  // this month
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
      setDataSmallChart(_data.data.find_for_home_page)
    }
    dataFetch()
  }, [])

  // 6 month
  const NOW = new Date()
  const SIX_MONTHS_AGO = NOW.setMonth(NOW.getMonth() - 6)
  useEffect(() => {
    const dataFetch = async () => {
      const _data = await (
        await fetch('https://cbv-api.deno.dev/graphql', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `query{
              find_for_home_page(timeframe: {start: ${SIX_MONTHS_AGO}}) {
                contributors
                severities
                blockchains
              }
            }`
          })
        })
      ).json()
      setDataBigChart(_data.data.find_for_home_page)
    }
    dataFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ranking
  useEffect(() => {
    const dataFetch = async () => {
      const _data = await (
        await fetch('https://cbv-api.deno.dev/graphql', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `query{
              find_for_home_page(timeframe: {start: 438300000}) {
                contributors
              }
            }`
          })
        })
      ).json()
      setDataRanking(_data.data.find_for_home_page)
    }
    dataFetch()
  }, [])

  // TODO: revisar como retrazar los compoenentes, crasheando mientras se está haciendo el fetch
  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6} className='match-height'>
          <Grid item xs={6} sm={3} md={2}>
            {dataSmallChart.blockchains ? (
              <SmallStatisticsCards
                stats='Total New Issues'
                color='primary'
                chipText='Last Month'
                type='total_new_issues'
                data={dataSmallChart}
                icon={<Icon icon='fluent-mdl2:issue-tracking' />}
              />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {dataSmallChart.blockchains ? (
              <SmallStatisticsCards
                stats='Most New Issues'
                color='primary'
                chipText='Last Month'
                type='blockchain_with_most_new_issues'
                data={dataSmallChart}
                icon={<Icon icon='eos-icons:blockchain' />}
              />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {dataSmallChart.blockchains ? (
              <TotalGrowth title={'Total New CBV'} subtitle={'by blockchain'} data={dataSmallChart} />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {dataSmallChart.severities ? (
              <TotalGrowth
                title={'Total New CBV'}
                subtitle={'by severity'}
                data={dataSmallChart}
                colorType={'severity'}
              />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            {dataSmallChart.contributors ? (
              <TopContributorAward data={dataSmallChart} />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
          </Grid>
          {
            <Grid item xs={12} md={4}>
              {dataBigChart.severities ? (
                <SeverityIssuesPie data={dataBigChart} />
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
            {dataRanking.contributors && dataSmallChart.blockchains ? (
              <ContributorsRanking allTime={dataRanking} lastMonth={dataSmallChart} />
            ) : (
              <Skeleton variant='rectangular' animation='pulse' height='200px' />
            )}
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

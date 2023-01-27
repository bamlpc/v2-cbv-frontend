import { Skeleton } from '@mui/material'

import { ThemeColor } from 'src/@core/layouts/types'

import { ReactNode } from 'react'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

type SmallCardProps = {
  stats: string
  color: ThemeColor
  trendNumber: string
  title: string
  chipText: string
  icon: ReactNode
  type: string
}

const SmallStatisticsCards = (props: SmallCardProps) => {
  return (
    <>
      {false ? (
        <CardStatisticsVertical
          stats={props.stats}
          color={props.color}
          trendNumber={props.trendNumber}
          title={props.title}
          chipText={props.chipText}
          icon={props.icon}
        />
      ) : (
        <Skeleton variant='rectangular' animation='pulse' height='200px' />
      )}
    </>
  )
}

export default SmallStatisticsCards

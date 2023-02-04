// ** React Imports
import { ReactNode } from 'react'

import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

type SmallCardProps = {
  stats: string
  color: ThemeColor
  chipText: string
  icon: ReactNode
  type: string
  data: Record<string, string>
}

const SmallStatisticsCards = (props: SmallCardProps) => {
  // Obj to array, sort mayor to minor
  const raw_data: Record<string, number> = JSON.parse(props.data.blockchains)
  const sortable = Object.entries(raw_data).sort(([, a], [, b]) => b - a)

  let title = ''
  let trendNumber = 0

  if (props.type === 'total_new_issues') {
    title = ''
    const sum = sortable.reduce((acc: number, curr: [string, number]) => {
      return acc + curr[1]
    }, 0)
    trendNumber = sum
  }
  if (props.type === 'blockchain_with_most_new_issues') {
    const extractBiggests = sortable.filter(item => {
      if (item[1] === sortable[0][1]) return item
    })
    const processedData = Object.fromEntries(extractBiggests)
    const labels = Object.keys(processedData)
    const amount = Object.values(processedData)
    title = labels.length > 1 ? labels.join(', ') : labels[0]
    trendNumber = amount.length > 1 ? amount.reduce((prev, number) => prev + number, 0) : amount[0]
  }

  //@ts-ignore: correct type

  return (
    <CardStatisticsVertical
      stats={props.stats}
      color={props.color}
      trendNumber={trendNumber.toString()}
      title={title}
      chipText={props.chipText}
      icon={props.icon}
    />
  )
}

export default SmallStatisticsCards

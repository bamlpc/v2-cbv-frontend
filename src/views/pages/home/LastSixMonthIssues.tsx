// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

function getLastSixMonth() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const today = new Date()
  const month = []
  for (let i = 5; i > -1; i -= 1) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1)
    month.push(monthNames[d.getMonth()])
  }

  return month
}

const LastSixMonthIssues = (props: Record<string, number[]>) => {
  const series = [
    {
      name: 'Issues',
      type: 'column',
      data: props.data
    },
    {
      type: 'line',
      name: 'Issues',
      data: props.data
    }
  ]
  const max_height = Math.max(...props.data) * 1.15 //extra 15% for display clarity

  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      offsetY: -9,
      offsetX: -16,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '35%',
        endingShape: 'rounded',
        startingShape: 'rounded',
        colors: {
          ranges: [
            {
              to: 50,
              from: 40,
              color: hexToRGBA(theme.palette.primary.main, 1)
            }
          ]
        }
      }
    },
    markers: {
      size: 3.5,
      strokeWidth: 2,
      fillOpacity: 1,
      strokeOpacity: 1,
      colors: [theme.palette.background.paper],
      strokeColors: hexToRGBA(theme.palette.primary.main, 1)
    },
    stroke: {
      width: [0, 2],
      colors: [theme.palette.customColors.trackBg, theme.palette.primary.main]
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [hexToRGBA(theme.palette.customColors.trackBg, 1)],
    grid: {
      strokeDashArray: 7,
      borderColor: theme.palette.divider
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: getLastSixMonth(),
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      min: 0,
      max: max_height,
      show: true,
      tickAmount: 3,
      labels: {
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}k` : Math.floor(value)}`,
        style: {
          fontSize: '0.75rem',
          colors: theme.palette.text.disabled
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Issues added in the last 6 months'
        action={
          <OptionsMenu
            options={['Refresh', 'Update', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts type='line' height={208} series={series} options={options} />
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default LastSixMonthIssues

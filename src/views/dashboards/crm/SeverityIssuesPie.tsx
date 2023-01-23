// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme, createTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface SeverityIssuesPieProps {
  data: Array<number>
  labels: Array<string>
}

const customColors = {
  low: '#e3f658',
  medium: '#fdcc8a',
  high: '#fc8d59',
  critical: '#d7301f'
}

const SeverityIssuesPie = (props: SeverityIssuesPieProps) => {
  // ** Hook
  const theme = useTheme()
  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    colors: [
      hexToRGBA(customColors.low, 1),
      hexToRGBA(customColors.medium, 1),
      hexToRGBA(customColors.high, 1),
      hexToRGBA(customColors.critical, 1)
    ],
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: { width: 3, lineCap: 'round', colors: [theme.palette.background.paper] },
    labels: props.labels,
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        endAngle: 130,
        startAngle: -130,
        customScale: 0.9,
        donut: {
          size: '83%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              fontSize: '1rem',
              color: theme.palette.text.secondary
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              fontSize: '2.125rem',
              formatter: value => `${value}`,
              color: theme.palette.text.primary
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '1rem',
              color: theme.palette.text.secondary,
              formatter: value => `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}`
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1709,
        options: {
          chart: { height: 237 }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Issus by Severity'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent>
        <ReactApexcharts type='donut' height={257} options={options} series={props.data} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ mx: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1.25, color: customColors.low } }}>
            <Icon icon='mdi:circle' fontSize='0.75rem' />
            <Typography variant='body2'>Low</Typography>
          </Box>
          <Box
            sx={{
              mx: 3,
              display: 'flex',
              alignItems: 'center',
              '& svg': { mr: 1.25, color: hexToRGBA(customColors.medium, 1) }
            }}
          >
            <Icon icon='mdi:circle' fontSize='0.75rem' />
            <Typography variant='body2'>Medium</Typography>
          </Box>
          <Box
            sx={{
              mx: 3,
              display: 'flex',
              alignItems: 'center',
              '& svg': { mr: 1.25, color: hexToRGBA(customColors.high, 1) }
            }}
          >
            <Icon icon='mdi:circle' fontSize='0.75rem' />
            <Typography variant='body2'>High</Typography>
          </Box>
          <Box
            sx={{
              mx: 3,
              display: 'flex',
              alignItems: 'center',
              '& svg': { mr: 1.25, color: hexToRGBA(customColors.critical, 1) }
            }}
          >
            <Icon icon='mdi:circle' fontSize='0.75rem' />
            <Typography variant='body2'>Critical</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SeverityIssuesPie

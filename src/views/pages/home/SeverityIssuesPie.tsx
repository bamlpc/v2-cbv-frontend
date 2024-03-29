// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
//import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface SeverityIssuesPieProps {
  data: Record<string, string>
}

const customColors = {
  Low: '#4F81BD',
  Medium: '#5A9C47',
  High: '#F2D455',
  Critical: '#FF3A3A'
} as Record<string, string>

const SeverityIssuesPie = (props: SeverityIssuesPieProps) => {
  // ** Hook
  const theme = useTheme()

  const raw_data: Record<string, number> = JSON.parse(props.data.severities)
  const series = [raw_data.Low || 0, raw_data.Medium, raw_data.High, raw_data.Critical]

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    colors: [
      hexToRGBA(customColors.Low, 1),
      hexToRGBA(customColors.Medium, 1),
      hexToRGBA(customColors.High, 1),
      hexToRGBA(customColors.Critical, 1)
    ],
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: { width: 3, lineCap: 'round', colors: [theme.palette.background.paper] },
    labels: /* props.labels */ ['Low', 'Medium', 'High', 'Critical'],
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

        /* action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        } */
      />
      <CardContent>
        <ReactApexcharts type='donut' height={257} options={options} series={series} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ mx: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1.25, color: customColors.Low } }}>
            <Icon icon='mdi:circle' fontSize='0.75rem' />
            <Typography variant='body2'>Low</Typography>
          </Box>
          <Box
            sx={{
              mx: 3,
              display: 'flex',
              alignItems: 'center',
              '& svg': { mr: 1.25, color: hexToRGBA(customColors.Medium, 1) }
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
              '& svg': { mr: 1.25, color: hexToRGBA(customColors.High, 1) }
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
              '& svg': { mr: 1.25, color: hexToRGBA(customColors.Critical, 1) }
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

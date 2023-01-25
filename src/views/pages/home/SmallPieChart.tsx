// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface pieDataProps {
  title: string
  subtitle: string
  labels: Array<string>
  data: Array<number>
  colorType?: string
}

const customSeverityColors = ['#e3f658', '#fdcc8a', '#fc8d59', '#d7301f']
const customBlockchainColors = ['#0868ac', '#2b8cbe', '#4eb3d3', '#7bccc4']

const TotalGrowth = (props: pieDataProps) => {
  // ** Hook
  const theme = useTheme()

  const pieData = props.data
  const sumPieData = pieData.reduce((partial, a) => partial + a, 0)

  const options: ApexOptions = {
    legend: { show: false },
    stroke: { width: 5, colors: [theme.palette.background.paper] },
    colors: props.colorType === 'severity' ? customSeverityColors : customBlockchainColors,
    labels: props.labels,
    tooltip: {
      y: { formatter: (val: number) => `${val}%` }
    },
    dataLabels: {
      enabled: false
    },
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
        donut: {
          size: '50%',
          labels: {
            show: true,
            name: { show: false },
            total: {
              label: '',
              show: true,
              fontWeight: 600,
              fontSize: '1rem',
              color: theme.palette.text.secondary,
              formatter: val => (typeof val === 'string' ? `${val}%` : `${sumPieData}`)
            },
            value: {
              offsetY: 6,
              fontWeight: 600,
              fontSize: '1rem',
              formatter: val => `${val}%`,
              color: theme.palette.text.secondary
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.5 }}>
            {props.title}
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'success.main' }}>
            {props.subtitle}
          </Typography>
        </Box>
        <ReactApexcharts type='donut' height={165} options={options} series={pieData} />
      </CardContent>
    </Card>
  )
}

export default TotalGrowth

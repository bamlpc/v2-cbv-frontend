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
  data: Record<string, string>
  colorType?: string
}

const customColors = {
  Low: '#4F81BD',
  Medium: '#5A9C47',
  High: '#F2D455',
  Critical: '#FF3A3A'
} as Record<string, string>

const TotalGrowth = (props: pieDataProps) => {
  // ** Hook
  const theme = useTheme()
  const raw_data: Record<string, number> =
    props.colorType === 'severity' ? JSON.parse(props.data.severities) : JSON.parse(props.data.blockchains)

  // Obj to array, sort mayor to minor, trim at four,to object
  const sortable = Object.entries(raw_data)
    .sort(([, a], [, b]) => b - a)
    .map((item, index) => {
      if (index <= 3 && item) return item
    })

  //@ts-ignore: correct type
  const sorted = Object.fromEntries(sortable)
  const labels = Object.keys(sorted)
  const pieData = Object.values(sorted)

  const sumPieData = pieData.reduce((partial, a) => partial + a, 0)

  const options: ApexOptions = {
    legend: { show: false },
    stroke: { width: 5, colors: [theme.palette.background.paper] },
    colors:
      props.colorType === 'severity'
        ? [
            customColors.labels[0],
            customColors.labels[1] || customColors.labels[0],
            customColors.labels[2] || customColors.labels[0],
            customColors.labels[3] || customColors.labels[0]
          ]
        : ['#0868ac', '#2b8cbe', '#4eb3d3', '#7bccc4'],

    //@ts-ignore: correct type
    labels: labels,
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

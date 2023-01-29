// ** MUI Imports
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const customColors = {
  Low: '#4F81BD',
  Medium: '#5A9C47',
  High: '#F2D455',
  Critical: '#FF3A3A'
} as Record<string, string>

type Severity = {
  severity: string
  score: string
}

function getColor(_severity: string): string {
  const color = customColors[_severity] || customColors.Low

  return color
}

const RadialGauge = (data: Severity) => {
  // ** Hook
  const theme = useTheme()

  const score = data.score
  const gaugeAdvance = Number(score) * 10

  const options: ApexOptions = {
    stroke: { lineCap: 'butt' },
    labels: [data.score],
    colors: [getColor(data.severity)],
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: { size: '30%' },
        track: {
          margin: 15,
          background: hexToRGBA(theme.palette.customColors.trackBg, 1)
        },
        dataLabels: {
          name: {
            fontSize: '2rem',
            show: true
          },
          value: {
            fontSize: '1rem',
            color: getColor(data.severity),
            show: true,
            formatter: () => {
              return data.severity
            }
          }
        }
      }
    }
  }

  return <ReactApexcharts type='radialBar' height={400} options={options} series={[gaugeAdvance]} />
}

export default RadialGauge

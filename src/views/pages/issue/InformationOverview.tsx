// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { PropsCBV } from 'src/context/types'

const renderList = (arr: Array<string[]>) => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <>
          <Box
            key={`A-${index}`}
            sx={{
              mt: -2,
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 },
              '& svg': { color: 'text.secondary' }
            }}
          >
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>{item[0]}</Typography>
          </Box>
          <Box
            key={`B-${index}`}
            sx={{
              mt: -2,
              mb: -3,
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 },
              '& svg': { color: 'text.secondary' }
            }}
          >
            <Typography sx={{ color: 'text.secondary' }}>{item[1]}</Typography>
          </Box>
        </>
      )
    })
  } else {
    return null
  }
}

const InformationOverview = (props: PropsCBV) => {
  const leftPanelList = [
    ['Version affected', props.cbv.version_affected],
    ['Vulnerability type', props.cbv.vulnerability_type],
    ['Component', props.cbv.component],
    ['Created at', props.cbv.created_at]
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={10}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 0 }}>
              <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
                {props.cbv.cbv_id}
              </Typography>
              {renderList(leftPanelList)}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card>
          <CardContent>
            <div>
              <Typography variant='body2' sx={{ mb: 2, color: 'text.disabled', textTransform: 'uppercase' }}>
                Credits
              </Typography>
              {props.cbv.credits}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default InformationOverview

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
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>{item[0]}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item[1]}</Typography>
        </Box>
      )
    })
  } else {
    return null
  }
}

const InformationOverview = (props: PropsCBV) => {
  const leftPanelList = [
    ['Blockchain:', props.cbv.blockchain],
    ['Version affected:', props.cbv.version_affected],
    ['Severity:', props.cbv.severity],
    ['Vulnerability type:', props.cbv.vulnerability_type],
    ['Component:', props.cbv.component],
    ['Created at:', props.cbv.created_at]
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 7 }}>
              <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
                {props.cbv.cbv_id}
              </Typography>
              {renderList(leftPanelList)}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <div>
              <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
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

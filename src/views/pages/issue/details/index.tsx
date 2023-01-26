// ** MUI Components
import Grid from '@mui/material/Grid'

//** Types
import { PropsCBV } from 'src/context/types'

import ReactMarkdown from 'react-markdown'

const Details = ({ data }: { data: PropsCBV }) => {
  return (
    <Grid container spacing={6} xs={12}>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={8}
        sx={{
          marginRight: '2rem'
        }}
      >
        <ReactMarkdown>{data.cbv.details}</ReactMarkdown>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default Details

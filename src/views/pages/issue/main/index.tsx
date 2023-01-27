// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import InformationOverview from 'src/views/pages/issue/InformationOverview'

//** Types
import { PropsCBV } from 'src/context/types'

import ReactMarkdown from 'react-markdown'

const MainTab = ({ data }: { data: PropsCBV }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={6}>
      <Grid item xl={3} md={4} xs={12} mr={-14}>
        <InformationOverview cbv={data.cbv} id={''} timestamp={0} />
      </Grid>
      <Grid item xl={9} md={8} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ReactMarkdown>{data.cbv.details}</ReactMarkdown>
          </Grid>
          <Grid item xs={12}>
            <ReactMarkdown>{data.cbv.recommendation}</ReactMarkdown>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null
}

export default MainTab

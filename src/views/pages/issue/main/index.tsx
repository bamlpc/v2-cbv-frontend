// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import InformationOverview from 'src/views/pages/issue/main/InformationOverview'

//** Types
import { PropsCBV } from 'src/context/types'

const MainTab = ({ data }: { data: PropsCBV }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={6}>
      <Grid item xl={4} md={5} xs={12}>
        <InformationOverview cbv={data.cbv} />
      </Grid>
      <Grid item xl={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <h1>{data.cbv.short_description}</h1>
            <h4>Imaginar props aca abajo, si se me ocurre alguno</h4>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null
}

MainTab.authGuard = false

export default MainTab

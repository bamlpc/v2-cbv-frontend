// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import AboutOverivew from 'src/views/pages/issue/profile/AboutOverivew'
import ProjectsTable from 'src/views/pages/issue/profile/ProjectsTable'
import ActivityTimeline from 'src/views/pages/issue/profile/ActivityTimeline'
import ConnectionsTeams from 'src/views/pages/issue/profile/ConnectionsTeams'

// ** Types
import { ProfileTabType } from 'src/@fake-db/types'

const ProfileTab = ({ data }: { data: ProfileTabType }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={6}>
      <Grid item xl={4} md={5} xs={12}>
        <AboutOverivew about={data.about} contacts={data.contacts} teams={data.teams} overview={data.overview} />
      </Grid>
      <Grid item xl={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ActivityTimeline />
          </Grid>
          <ConnectionsTeams connections={data.connections} teams={data.teamsTech} />
          <Grid item xs={12}>
            <ProjectsTable />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null
}

export default ProfileTab

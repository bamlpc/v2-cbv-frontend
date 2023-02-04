// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//** Types
import { PropsCBV } from 'src/context/types'

// ** Components
import InformationOverview from 'src/views/pages/issue/InformationOverview'

//** Markdown to react
import ReactMarkdown from 'react-markdown'

const References = ({ data }: { data: PropsCBV }) => {
  return data.cbv.references ? (
    <Grid container spacing={6}>
      <Grid item xl={3} md={4} xs={12} mr={-14}>
        <InformationOverview cbv={data.cbv} id={''} timestamp={0} />
      </Grid>
      <Grid item xl={9} md={8} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ReactMarkdown>{data.cbv.references}</ReactMarkdown>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <>
      <Grid container spacing={6} xs={12}>
        <Grid item xl={3} md={4} xs={12} mr={-14}>
          <InformationOverview cbv={data.cbv} id={''} timestamp={0} />
        </Grid>
        <Grid item xs={8} columns={12} sx={{ display: 'inline-table' }}>
          <Box sx={{ display: 'inline-table', alignItems: 'center', '& svg': { color: 'text.secondary' } }}>
            <Typography sx={{ color: 'text.secondary', fontWeight: 600, mt: 4 }}>
              There are no references for this vulnerability yet.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: 600, mt: 4 }}>
              Please consider to colaborate with us sharing references
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mt: 4 }}>
            <Button
              variant='contained'
              href='https://github.com/bamlpc/common-blockchain-vulnerabilities/issues/new/choose'
              startIcon={<Icon icon='jam:write' fontSize={20} />}
            >
              Summit references
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  )
}

export default References

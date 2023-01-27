// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { PropsCBV } from 'src/context/types'

const UserProfileHeader = ({ data }: { data: PropsCBV }) => {
  const designationIcon = 'mdi:briefcase-outline'

  /* theme => `url(/images/pages/pages-header-bg-${theme.palette.mode}.png)` */

  return (
    <>
      {data.cbv ? (
        <Card
          sx={{
            backgroundImage: theme => `url(/images/pages/pages-header-bg-${theme.palette.mode}.png)`
          }}
        >
          <CardContent
            sx={{
              height: { xs: 150, md: 250 },
              pt: 0,
              mt: -16,
              display: 'flex',
              alignItems: 'flex-end',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                ml: { xs: 0, md: 6 },
                alignItems: 'flex-end',
                flexWrap: ['wrap', 'nowrap'],
                justifyContent: ['center', 'space-between']
              }}
            >
              <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
                <Typography variant='h5' sx={{ mb: 4, fontSize: '1.375rem' }}>
                  {data.cbv.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: ['center', 'flex-start']
                  }}
                >
                  <Box
                    sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}
                  >
                    <Icon icon={designationIcon} />
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{data.cbv.cbv_id}</Typography>
                  </Box>
                  <Box
                    sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}
                  >
                    <Icon icon='mdi:map-marker-outline' />
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{data.cbv.blockchain}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                    <Icon icon='mdi:calendar-blank-outline' />
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Updated {data.cbv.updated_at ? data.cbv.updated_at : data.cbv.created_at}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button variant='contained' startIcon={<Icon icon='mdi:account-check-outline' fontSize={20} />}>
                Got new information?
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : null}
    </>
  )
}

export default UserProfileHeader

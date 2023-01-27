// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'
import { Skeleton } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  username: string
  new_issues: string
  trend: ReactNode
  ranking: string
}

//TODO: CREATE A FUNCTION THAT RETURNS THIS
const data: DataType[] = [
  {
    new_issues: '10',
    username: '@BMogetta',
    ranking: '1',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '9',
    username: '@BMogetta',
    ranking: '2',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '8',
    username: '@BMogetta',
    ranking: '3',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '7',
    username: '@BMogetta',
    ranking: '4',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '6',
    username: '@BMogetta',
    ranking: '5',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '5',
    username: '@BMogetta',
    ranking: '6',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '4',
    username: '@BMogetta',
    ranking: '7',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '3',
    username: '@BMogetta',
    ranking: '8',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '2',
    username: '@BMogetta',
    ranking: '9',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    new_issues: '1',
    username: '@BMogetta',
    ranking: '10',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  }
]

// TODO: add a field to the database to store the current time at the moment to be store so its easy to retrieve and sort
const ContributorsRanking = () => {
  const number_of_issues = 130
  const issues_added_last_month = 65

  return (
    <>
      {false ? (
        <Card>
          <CardHeader
            title='TOP CONTRIBUTORS'
            titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}
            action={
              <OptionsMenu
                options={['Last Month', 'All Time']}
                iconButtonProps={{ size: 'small', className: 'card-more-options' }}

                // TODO: ADD FUNCTIONALITY TO CHANGE TEXT AND RANKING WHEN CHOOSIN IN OPTION MENU
              />
            }
          />
          <CardContent sx={{ pb: theme => `${theme.spacing(1.75)} !important` }}>
            <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 1.25, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h3' sx={{ mr: 3.5 }}>
                  {number_of_issues}
                </Typography>
                <CustomChip
                  size='medium'
                  label={`+${issues_added_last_month}`}
                  color='success'
                  sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
                />
              </Box>
              <Typography variant='caption'>Last Month</Typography>
            </Box>

            <TableContainer>
              <Table>
                <TableBody>
                  {data.map((row: DataType) => {
                    return (
                      <TableRow
                        key={row.username}
                        sx={{
                          '&:last-of-type td': { border: 0, pb: 0 },
                          '&:first-of-type td': { borderTop: theme => `1px solid ${theme.palette.divider}` },
                          '& .MuiTableCell-root': {
                            '&:last-of-type': { pr: 0 },
                            '&:first-of-type': { pl: 0 },
                            py: theme => `${theme.spacing(2.75)} !important`
                          }
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '0.875rem' }}>{row.username}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{row.new_issues}</Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Typography sx={{ mr: 1.5, fontWeight: 600, fontSize: '0.875rem' }}>
                              {row.ranking}
                            </Typography>
                            {row.trend}
                          </Box>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ) : (
        <Skeleton variant='rectangular' animation='pulse' height='640px' />
      )}
    </>
  )
}

export default ContributorsRanking

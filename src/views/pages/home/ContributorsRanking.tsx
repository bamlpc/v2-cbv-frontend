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

//import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  username: string
  new_issues: string
  trend?: ReactNode
  contribution: string
}

//TODO: CREATE A FUNCTION THAT RETURNS THIS
const data = (args: [string, number][], totalIssues: number): DataType[] => {
  const dataArray: DataType[] = [{ new_issues: `Total of Issues`, username: `User`, contribution: `Contribution %` }]

  args.forEach(item => {
    const contribution = (item[1] / totalIssues) * 100
    dataArray.push({
      new_issues: `${item[1]}`,
      username: `${item[0]}`,
      contribution: `${contribution}`,
      trend: (
        <Box component='span' sx={{ display: 'flex', transform: 'scale(0.5)', ml: -2 }}>
          <Icon icon='fluent-mdl2:calculator-percentage' />
        </Box>
      )
    })
  })

  return dataArray
}

// TODO: add a field to the database to store the current time at the moment to be store so its easy to retrieve and sort
const ContributorsRanking = (props: Record<string, Record<string, string>>) => {
  const raw_data: Record<string, number> = JSON.parse(props.allTime.contributors)

  // Obj to array, sort mayor to minor, trim at four,to object
  const sortable = Object.entries(raw_data)
    .sort(([, a], [, b]) => b - a)
    .filter((item, index) => {
      if (index <= 9 && item) return item
    })
  const totalIssues = sortable.reduce((acc, curr) => {
    return acc + curr[1]
  }, 0)
  const renderData = data(sortable, totalIssues)

  const last_month: Record<string, number> = JSON.parse(props.lastMonth.contributors)
  const issues_added_last_month = Object.entries(last_month).reduce((acc, curr) => {
    return acc + curr[1]
  }, 0)

  return (
    <>
      {true ? (
        <Card>
          <CardHeader
            title='TOP CONTRIBUTORS'
            titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}

            /* action={
              <OptionsMenu
                options={['Last Month', 'All Time']}
                iconButtonProps={{ size: 'small', className: 'card-more-options' }}
              />
            } */
          />
          <CardContent sx={{ pb: theme => `${theme.spacing(1.75)} !important` }}>
            <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 1.25, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h3' sx={{ mr: 3.5 }}>
                  {`${totalIssues} Reports`}
                </Typography>
                <CustomChip
                  size='medium'
                  label={`+${issues_added_last_month} reports added last month`}
                  color='success'
                  sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
                />
              </Box>
              <Typography variant='caption'>All time contributors</Typography>
            </Box>

            <TableContainer>
              <Table>
                <TableBody>
                  {renderData.map((row: DataType, index) => {
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
                            <Typography sx={{ fontWeight: index === 0 ? 600 : null, fontSize: '0.875rem' }}>
                              {row.username}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography sx={{ fontWeight: index === 0 ? 600 : null, fontSize: '0.875rem' }}>
                            {row.new_issues}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Typography sx={{ mr: 1.5, fontWeight: index === 0 ? 600 : null, fontSize: '0.875rem' }}>
                              {row.contribution}
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

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

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

// ** React
import { useEffect, useState } from 'react'

interface CBV {
  cbv_id: string
  title: string
  blockchain: string
  severity: string
  score: string
  short_description: string
  recommendation: string
}
interface DataType {
  _id: string
  cbv: CBV
}
const LastAddedIssues = () => {
  const [searchLastTen, setSearchLastTen] = useState<DataType[]>([])

  useEffect(() => {
    const dataFetch = async () => {
      const _data = await (
        await fetch('https://cbv-api.deno.dev/graphql', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
           query{
            find_by_latest(number: "10" ){
               _id
               cbv{
                 cbv_id
                 title
                 blockchain
                 short_description
                 severity
                 score
                 recommendation
               }
             }
           }`
          })
        })
      )
        .json()
        .catch(error => console.log(error))
      console.log('setSearchLastTen', _data.data.find_by_latest)
      setSearchLastTen(_data.data.find_by_latest)
    }
    dataFetch()
  }, [])

  return (
    <>
      {searchLastTen.length ? (
        <Card>
          <CardHeader
            title='Last Indexed Blockchain Issues'
            titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}
            action={
              <OptionsMenu
                options={['Last 10', 'This week']}
                iconButtonProps={{ size: 'small', className: 'card-more-options' }}

                // TODO: ADD FUNCTIONALITY TO CHANGE TEXT AND DISPLAY WHEN CHOOSIN IN OPTION MENU
              />
            }
          />
          <CardContent sx={{ pb: theme => `${theme.spacing(1.75)} !important` }}>
            <Typography variant='subtitle1'>Last 10</Typography>

            <TableContainer>
              <Table>
                <TableBody>
                  {searchLastTen.length !== 0
                    ? searchLastTen.map((row: DataType) => {
                        return (
                          <TableRow
                            key={row._id}
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
                                <Typography sx={{ fontSize: '0.875rem' }}>{row.cbv.cbv_id}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Typography sx={{ mr: 1.5, fontWeight: 600, fontSize: '0.875rem' }}>
                                  {row.cbv.blockchain}
                                </Typography>
                                {row.cbv.severity}
                              </Box>
                            </TableCell>
                            <TableCell align='right'>
                              <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{row.cbv.title}</Typography>
                            </TableCell>
                          </TableRow>
                        )
                      })
                    : null}
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

export default LastAddedIssues

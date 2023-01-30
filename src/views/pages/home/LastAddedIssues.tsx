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
import { Link as MUILink, Tooltip } from '@mui/material'

//
import NextLink from 'next/link'

// ** Custom Components Imports
//import OptionsMenu from 'src/@core/components/option-menu'

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

function trimShortDescription(description: string): string {
  const maxLength = 100
  if (description.length < maxLength) return description
  else {
    const returnString = description.slice(0, maxLength).concat('...')

    return returnString
  }
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
            title='Newest 10 Indexed Blockchain Issues'
            titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}

            /* action={
              <OptionsMenu
                options={['Last 10', 'This week']}
                iconButtonProps={{ size: 'small', className: 'card-more-options' }}
              />
            } */
          />
          <CardContent sx={{ pb: theme => `${theme.spacing(1.75)} !important` }}>
            <TableContainer>
              <Table>
                <TableBody>
                  {searchLastTen.length !== 0
                    ? searchLastTen.map((row: DataType, index) => {
                        return index !== 0 ? (
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
                                <NextLink href={`/issue/${row.cbv.cbv_id}/main`} passHref>
                                  <MUILink variant='body2'>
                                    <Tooltip title={trimShortDescription(row.cbv.short_description)}>
                                      <Typography sx={{ fontSize: '0.875rem' }}>{row.cbv.cbv_id} </Typography>
                                    </Tooltip>
                                  </MUILink>
                                </NextLink>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'normal' }}>
                                <NextLink href={`/list?search=${row.cbv.blockchain}`} passHref>
                                  <MUILink variant='body2'>
                                    <Tooltip title={`More ${row.cbv.blockchain} Issues`}>
                                      <Typography sx={{ mr: 1.5, fontSize: '0.875rem' }}>
                                        {row.cbv.blockchain}
                                      </Typography>
                                    </Tooltip>
                                  </MUILink>
                                </NextLink>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'normal' }}>
                                <NextLink href={`/issue/${row.cbv.cbv_id}/main`} passHref>
                                  <MUILink variant='body2'>
                                    <Tooltip title={trimShortDescription(row.cbv.recommendation)}>
                                      <Typography sx={{ mr: 1.5, fontSize: '0.875rem' }}>{row.cbv.severity}</Typography>
                                    </Tooltip>
                                  </MUILink>
                                </NextLink>
                              </Box>
                            </TableCell>
                            <TableCell align='right'>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'normal' }}>
                                <NextLink href={`/issue/${row.cbv.cbv_id}/main`} passHref>
                                  <MUILink variant='body2'>
                                    <Tooltip title={trimShortDescription(row.cbv.short_description)}>
                                      <Typography sx={{ fontSize: '0.875rem' }}>{row.cbv.title}</Typography>
                                    </Tooltip>
                                  </MUILink>
                                </NextLink>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ) : (
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
                                <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{'Code'}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Typography sx={{ mr: 1.5, fontWeight: 600, fontSize: '0.875rem' }}>
                                  {'Blockchain'}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Typography sx={{ mr: 1.5, fontWeight: 600, fontSize: '0.875rem' }}>
                                  {'Severity'}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell align='right'>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'normal' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{'Title'}</Typography>
                              </Box>
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

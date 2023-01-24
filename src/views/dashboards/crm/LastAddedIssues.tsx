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

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  cbv_id: string
  title: string
  blockchain: string
  severity: string
}

//TODO: CREATE A FUNCTION THAT RETURNS THIS
const data: DataType[] = [
  {
    cbv_id: 'CBV-23-000001',
    title: 'Missing check for duplicate inputs',
    blockchain: 'Bitcoin',
    severity: '8'
  },
  {
    cbv_id: 'CBV-23-000001',
    title: 'Missing check for duplicate inputs',
    blockchain: 'Bitcoin',
    severity: '8'
  },
  {
    cbv_id: 'CBV-23-000001',
    title: 'Missing check for duplicate inputs',
    blockchain: 'Bitcoin',
    severity: '8'
  },
  {
    cbv_id: 'CBV-23-000001',
    title: 'Missing check for duplicate inputs',
    blockchain: 'Bitcoin',
    severity: '8'
  },
  {
    cbv_id: 'CBV-23-000001',
    title: 'Missing check for duplicate inputs',
    blockchain: 'Bitcoin',
    severity: '8'
  }
]

// TODO: add a field to the database to store the current time at the moment to be store so its easy to retrieve and sort
const LastAddedIssues = () => {
  return (
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
              {data.map((row: DataType) => {
                return (
                  <TableRow
                    key={row.title}
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
                        <Typography sx={{ fontSize: '0.875rem' }}>{row.cbv_id}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography sx={{ mr: 1.5, fontWeight: 600, fontSize: '0.875rem' }}>
                          {row.blockchain}
                        </Typography>
                        {row.severity}
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{row.title}</Typography>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default LastAddedIssues

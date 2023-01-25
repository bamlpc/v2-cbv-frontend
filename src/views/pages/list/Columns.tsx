// ** React Imports
import NextLink from 'next/link'

//
import { Link as MUILink } from '@mui/material'
import Typography from '@mui/material/Typography'
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid'

const columns = (): GridColumns => {
  return [
    {
      flex: 0.12,
      minWidth: 140,
      field: 'cbv_id',
      headerName: 'CBV Number',
      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              {params.row.cbv.cbv_id}
            </Typography>
          </MUILink>
        </NextLink>
      )
    },
    {
      flex: 0.1,
      minWidth: 120,
      field: 'blockchain',
      headerName: 'Blockchain',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.cbv.blockchain}
        </Typography>
      )
    },
    {
      flex: 0.38,
      field: 'title',
      minWidth: 150,
      headerName: 'Title',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.cbv.title}
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 60,
      field: 'severiry',
      headerName: 'Severity',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.cbv.severity}
        </Typography>
      )
    },
    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'Last updated',
      field: 'last_updated',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.cbv.updated_at || params.row.cbv.created_at}
        </Typography>
      )
    },
    {
      flex: 0.15,
      minWidth: 80,
      field: 'credits',
      headerName: 'Credits',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.cbv.credits || 'Anonymous'}
        </Typography>
      )
    }
  ]
}

export default columns

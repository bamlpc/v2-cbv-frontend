// ** React Imports
import NextLink from 'next/link'

//
import { Link as MUILink, Tooltip } from '@mui/material'
import Typography from '@mui/material/Typography'
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid'

function trimShortDescription(description: string): string {
  const maxLength = 100
  if (description.length < maxLength) return description
  else {
    const returnString = description.slice(0, maxLength).concat('...')

    return returnString
  }
}

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
            <Tooltip title={trimShortDescription(params.row.cbv.short_description)}>
              <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.cbv.cbv_id}
              </Typography>
            </Tooltip>
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
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              {params.row.cbv.blockchain}
            </Typography>
          </MUILink>
        </NextLink>
      )
    },
    {
      flex: 0.38,
      field: 'title',
      minWidth: 150,
      headerName: 'Title',
      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Tooltip title={trimShortDescription(params.row.cbv.short_description)}>
              <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.cbv.title}
              </Typography>
            </Tooltip>
          </MUILink>
        </NextLink>
      )
    },
    {
      flex: 0.1,
      minWidth: 60,
      field: 'severiry',
      headerName: 'Severity',
      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Tooltip title={trimShortDescription(params.row.cbv.recommendation)}>
              <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.cbv.severity}
              </Typography>
            </Tooltip>
          </MUILink>
        </NextLink>
      )
    },
    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'Last updated',
      field: 'last_updated',
      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              {params.row.cbv.updated_at || params.row.cbv.created_at}
            </Typography>
          </MUILink>
        </NextLink>
      )
    },
    {
      flex: 0.15,
      minWidth: 80,
      field: 'credits',
      headerName: 'Credits',

      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              {params.row.cbv.credits || 'Anonymous'}
            </Typography>
          </MUILink>
        </NextLink>
      )
    }
  ]
}

//TODO FIX BUG WITH CREDITS

export default columns

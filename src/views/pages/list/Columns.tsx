//
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

const customColors = {
  Low: '#4F81BD',
  Medium: '#5A9C47',
  High: '#F2D455',
  Critical: '#FF3A3A'
} as Record<string, string>

const columns = (): GridColumns => {
  return [
    {
      flex: 0.12,
      minWidth: 140,
      field: 'cbv_id',
      headerName: 'CBV Number',
      valueGetter: (params: GridRenderCellParams) => params.row.cbv.cbv_id,
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
      valueGetter: (params: GridRenderCellParams) => params.row.cbv.blockchain,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <NextLink href={`/list?search=${encodeURIComponent(params.row.cbv.blockchain.toLowerCase())}`} passHref>
            <MUILink variant='body2'>
              <Tooltip title={`More ${params.row.cbv.blockchain} Issues`}>
                <Typography variant='body2' sx={{ color: 'text.primary', ':hover': { cursor: 'pointer' } }}>
                  {params.row.cbv.blockchain}
                </Typography>
              </Tooltip>
            </MUILink>
          </NextLink>
        )
      }
    },
    {
      flex: 0.38,
      field: 'title',
      minWidth: 150,
      headerName: 'Title',
      valueGetter: (params: GridRenderCellParams) => params.row.cbv.title,
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
      valueGetter: (params: GridRenderCellParams) => params.row.cbv.severity,
      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Tooltip title={trimShortDescription(params.row.cbv.recommendation)}>
              <Typography
                variant='body2'
                sx={{ color: params.row.cbv.severity ? customColors[params.row.cbv.severity] : 'text.primary' }}
              >
                {`${params.row.cbv.severity}`}
              </Typography>
            </Tooltip>
          </MUILink>
        </NextLink>
      )
    },

    {
      flex: 0.1,
      minWidth: 60,
      hide: true,
      field: 'score',
      headerName: 'Score',
      valueGetter: (params: GridRenderCellParams) => params.row.cbv.score,
      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Tooltip title={trimShortDescription(params.row.cbv.recommendation)}>
              <Typography
                variant='body2'
                sx={{ color: params.row.cbv.severity ? customColors[params.row.cbv.severity] : 'text.primary' }}
              >
                {`${params.row.cbv.score}`}
              </Typography>
            </Tooltip>
          </MUILink>
        </NextLink>
      )
    },
    {
      flex: 0.15,
      minWidth: 120,
      field: 'last_updated',
      headerName: 'Last updated',
      valueGetter: (params: GridRenderCellParams) => params.row.cbv.last_updated || params.row.cbv.created_at,
      renderCell: (params: GridRenderCellParams) => (
        <NextLink href={`/issue/${params.row.cbv.cbv_id}/main`} passHref>
          <MUILink variant='body2'>
            <Tooltip title={trimShortDescription(params.row.cbv.short_description)}>
              <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.cbv.updated_at || params.row.cbv.created_at}
              </Typography>
            </Tooltip>
          </MUILink>
        </NextLink>
      )
    },
    {
      flex: 0.05,
      minWidth: 110,
      hide: true,
      field: 'test',
      headerName: 'Test',
      valueGetter: (params: GridRenderCellParams) => (params.row.cbv.tests !== '' ? 'Available' : 'Not available'),
      renderCell: (params: GridRenderCellParams) => {
        return (
          <NextLink href={`/issue/${params.row.cbv.cbv_id}/test`} passHref>
            <MUILink variant='body2'>
              <Tooltip title={`See Test or contribute to add`}>
                <Typography variant='body2' sx={{ color: 'text.primary', ':hover': { cursor: 'pointer' } }}>
                  {params.row.cbv.tests !== '' ? 'Available' : 'Not available'}
                </Typography>
              </Tooltip>
            </MUILink>
          </NextLink>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 80,
      field: 'credits',
      headerName: 'Credits',
      valueGetter: (params: GridRenderCellParams) => params.row.cbv.credits,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <NextLink href={`/list?search=${encodeURIComponent(params.row.cbv.credits.toLowerCase())}`} passHref>
            <MUILink variant='body2'>
              <Tooltip title={`See all issues reported by ${params.row.cbv.credits}`}>
                <Typography variant='body2' sx={{ color: 'text.primary', ':hover': { cursor: 'pointer' } }}>
                  {params.row.cbv.credits || 'Anonymous'}
                </Typography>
              </Tooltip>
            </MUILink>
          </NextLink>
        )
      }
    }
  ]
}

export default columns

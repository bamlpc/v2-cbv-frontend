// ** React Imports
import { ChangeEvent, useState } from 'react'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColumns, GridRenderCellParams } from '@mui/x-data-grid'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbar'

import { DataGridRowType } from 'src/@fake-db/types'

// ** Data Import FROM FAKE DB
import { rows } from 'src/@fake-db/table/static-data'

const escapeRegExp = (value: string) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const columns: GridColumns = [
  {
    flex: 0.12,
    minWidth: 60,
    field: 'cbv_id',
    headerName: 'CBV Number',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.cbv.cbv_id}
      </Typography>
    )
  },
  {
    flex: 0.1,
    minWidth: 60,
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
        {params.row.cbv.created_at}
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
        {params.row.cbv.credits}
      </Typography>
    )
  }
]

const TableColumns = () => {
  // ** States
  const [data] = useState<DataGridRowType[]>(rows)
  const [pageSize, setPageSize] = useState<number>(7)
  const [searchText, setSearchText] = useState<string>('')
  const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])

  const handleSearch = (searchValue: string) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = data.filter(row => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }

  return (
    <Card>
      <DataGrid
        autoHeight
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[7, 10, 25, 50]}
        components={{ Toolbar: QuickSearchToolbar }}
        rows={filteredData.length ? filteredData : data}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        componentsProps={{
          baseButton: {
            variant: 'outlined'
          },
          toolbar: {
            value: searchText,
            clearSearch: () => handleSearch(''),
            onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
          }
        }}
      />
    </Card>
  )
}

export default TableColumns

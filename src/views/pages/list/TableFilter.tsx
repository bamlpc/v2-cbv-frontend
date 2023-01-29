// ** React Imports
import React, { useState, useEffect } from 'react'

//
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

//
import SearchHeader from 'src/views/pages/list/SearchHeader'
import { PropsCBV } from 'src/context/types'
import columns from './Columns'
import { QueryContext } from './QueryContext'

const escapeRegExp = (value: string) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const TableColumns = () => {
  // ** States
  const [pageSize, setPageSize] = useState<number>(7)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>('cbv')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredData, setFilteredData] = useState<PropsCBV[]>([])
  const [apiData, setApiData] = useState<PropsCBV[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchStringQuery, setSearchStringQuery] = useState('cbv')

  useEffect(() => {
    const queryString = searchStringQuery ? searchStringQuery : 'cbv'
    const dataFetch = async () => {
      const _data = await (
        await fetch('https://cbv-api.deno.dev/graphql', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
           query{
             find_by_search_string(search_string: "${queryString}"){
               _id
               cbv{
                 cbv_id
                 title
                 blockchain
                 short_description
                 severity
                 score
                 recommendation
                 created_at
                 updated_at
                 credits
               }
             }
           }`
          })
        })
      ).json()
      console.log(apiData)
      setApiData(_data.data.find_by_search_string)
    }
    dataFetch()
  }, [searchStringQuery])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearch = (searchValue: string) => {
    console.log('search value: ', searchValue)
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = apiData.filter((row: PropsCBV) => {
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

  // TODO: work on filter and sort

  return (
    <QueryContext.Provider value={{ searchStringQuery, setSearchStringQuery }}>
      <SearchHeader />
      <Card>
        {apiData.length ? (
          <DataGrid
            autoHeight
            columns={columns()}
            pageSize={pageSize}
            rowsPerPageOptions={[7, 10, 25, 50]}
            rows={filteredData.length ? filteredData : apiData}
            getRowId={apiData => apiData._id}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          ></DataGrid>
        ) : (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </Card>
    </QueryContext.Provider>
  )
}

export default TableColumns

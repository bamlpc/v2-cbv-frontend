// ** React Imports
import React, { ChangeEvent, useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Card from '@mui/material/Card'
import { DataGrid /* GridColumnVisibilityModel */ } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

//
import SearchHeader from 'src/views/pages/list/SearchHeader'
import columns from './Columns'
import CustomToolbar from './GridToolbar'

//** Types
import { PropsCBV } from 'src/context/types'

const TableColumns = () => {
  const router = useRouter()

  // ** States
  const [pageSize, setPageSize] = useState<number>(7)
  const [apiData, setApiData] = useState<PropsCBV[]>([])

  const [searchText, setSearchText] = useState<string>('')
  const [filteredData, setFilteredData] = useState<PropsCBV[]>([])

  const search = window.location.search
  const [currentSearch, setCurrentSearch] = useState(search)
  useEffect(() => {
    if (currentSearch === router.query['search']) return

    //@ts-ignore
    setCurrentSearch(router.query['search'])
  }, [search, router.query, currentSearch])

  useEffect(() => {
    const queryString = currentSearch ? currentSearch : 'cbv'
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
                 tests
                 created_at
                 updated_at
                 credits
               }
             }
           }`
          })
        })
      ).json()
      setApiData(_data.data.find_by_search_string)
    }
    dataFetch()
  }, [currentSearch])

  const handleFilter = (searchValue: string) => {
    setSearchText(searchValue)
    const escapeRegExp = (value: string) => {
      return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    }
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

  return (
    <>
      <SearchHeader />
      <Card>
        {apiData.length ? (
          <DataGrid
            autoHeight
            columns={columns()}
            pageSize={pageSize}
            rowsPerPageOptions={[7, 10, 25, 50]}
            components={{ Toolbar: CustomToolbar }}
            rows={filteredData.length ? filteredData : apiData}
            getRowId={apiData => apiData._id}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            componentsProps={{
              toolbar: {
                value: searchText,
                clearSearch: () => handleFilter(''),
                onChange: (event: ChangeEvent<HTMLInputElement>) => handleFilter(event.target.value)
              }
            }}
          ></DataGrid>
        ) : (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </Card>
    </>
  )
}

export default TableColumns

/*
<input aria-invalid="false" id=":r8n:" placeholder="Filter value"
type="text" class="MuiInputBase-input MuiInput-input css-32jlfu-MuiInputBase-input-MuiInput-input" value="">
*/

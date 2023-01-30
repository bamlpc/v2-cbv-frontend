// ** React Imports
import React, { useState, useEffect } from 'react'

//
import { useRouter } from 'next/router'

//
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

//
import SearchHeader from 'src/views/pages/list/SearchHeader'
import { PropsCBV } from 'src/context/types'
import columns from './Columns'

/* const escapeRegExp = (value: string) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
} */

const TableColumns = () => {
  const router = useRouter()

  // ** States
  const [pageSize, setPageSize] = useState<number>(7)

  /* const [searchText, setSearchText] = useState<string>('cbv') */
  /* const [filteredData, setFilteredData] = useState<PropsCBV[]>([]) */
  const [apiData, setApiData] = useState<PropsCBV[]>([])

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
  console.log(currentSearch)

  /* const handleSearch = (searchValue: string) => {
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
  } */

  // TODO: work on filter and sort

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
            rows={/* filteredData.length ? filteredData :  */ apiData}
            getRowId={apiData => apiData._id}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
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

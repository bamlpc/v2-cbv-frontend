// ** React Imports
import React, { useState, useEffect } from 'react'

//
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'

//
import SearchHeader from 'src/views/pages/list/SearchHeader'
import { PropsCBV } from 'src/context/types'
import columns from './Columns'
import { QueryContext } from './QueryContext'

/* const escapeRegExp = (value: string) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
} */

const TableColumns = () => {
  // ** States
  const [pageSize, setPageSize] = useState<number>(7)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>('cbv')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredData, setFilteredData] = useState<PropsCBV[]>([])
  const [apiData, setApiData] = useState(Object)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchStringQuery, setSearchStringQuery] = useState('cbv')

  // agregar un iff donde, si hay querie params, llame a set querie y los use
  /* const searchStringQuery = 'cbv' */

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
                 severity
                 created_at
                 updated_at
               }
             }
           }`
          })
        })
      ).json()
      setApiData(_data.data.find_by_search_string)
    }
    dataFetch()
  }, [searchStringQuery])

  console.log('search text: ', searchText)

  /*   const handleSearch = (searchValue: string) => {
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
  } */

  return (
    <QueryContext.Provider value={{ searchStringQuery, setSearchStringQuery }}>
      <SearchHeader />
      <Card>
        <DataGrid
          autoHeight
          columns={columns()}
          pageSize={pageSize}
          rowsPerPageOptions={[7, 10, 25, 50]}
          rows={filteredData.length ? filteredData : apiData}
          getRowId={apiData => apiData._id}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        ></DataGrid>
      </Card>
    </QueryContext.Provider>
  )
}

export default TableColumns
import * as React from 'react'
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector
} from '@mui/x-data-grid'

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}> = ({ setFilterButtonEl }) => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton ref={setFilterButtonEl} />
      <GridToolbarDensitySelector /> {/**TODO: fix compact title height*/}
      <GridToolbarExport
        csvOptions={{ allColumns: true }}
        printOptions={{ allColumns: true, fileName: 'CBV List', hideFooter: false, hideToolbar: false }}
      />
    </GridToolbarContainer>
  )
}

export default CustomToolbar

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TableFilter from 'src/views/pages/list/TableFilter'

const DataGrid = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TableFilter />
      </Grid>
    </Grid>
  )
}

export default DataGrid

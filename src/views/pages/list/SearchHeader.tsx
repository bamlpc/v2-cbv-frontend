// ** React Imports
import { useState, ChangeEvent, useContext } from 'react'

// ** Next Import
//import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import MuiAutocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { SyntheticEvent } from 'react-draft-wysiwyg'

//
import { QueryContext } from './QueryContext'

// Styled Autocomplete component
const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    paddingLeft: theme.spacing(3.5),
    backgroundColor: theme.palette.background.paper
  },
  [theme.breakpoints.up('md')]: {
    width: '55%'
  },
  [theme.breakpoints.up('xl')]: {
    width: '45%'
  },
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const CardContentNoPadding = styled(CardContent)(`
  padding: 2;
  &:last-child {
    padding-bottom: 3.5rem;
    padding-top: 3.5rem;
  }
`)

type QueryFilter = {
  id: number
  label: string
}
const queryFilters = ['Layer 1', 'Layer 2', 'Bitcoin', 'Phantasma', 'Ethereum', 'Polygon']
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const queryFiltersOptions = queryFilters.map((queryFilter, index) => ({
  id: index + 1,
  label: queryFilter
}))

const SearchHeader = () => {
  // ** States
  const [value, setValue] = useState<string | unknown | QueryFilter | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { searchStringQuery, setSearchStringQuery }: any = useContext(QueryContext)

  console.log({ value })

  return (
    <CardContentNoPadding
      sx={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
        backgroundImage: theme => `url(/images/pages/pages-header-bg-${theme.palette.mode}.png)`
      }}
    >
      <Typography variant='h5' sx={{ fontWeight: 600, fontSize: '1.5rem !important' }}>
        Common blockchain vulnerability
      </Typography>

      <Autocomplete
        freeSolo={true}
        open={open}
        options={queryFilters}
        onClose={() => setOpen(false)}
        sx={{ my: 4, '& + .MuiAutocomplete-popper .MuiAutocomplete-listbox': { maxHeight: 250 } }}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={(event: SyntheticEvent, value: string | unknown | QueryFilter | null) => setSearchStringQuery(value)}
        onInputChange={(event, value: string) => {
          setValue(value)
          setOpen(!!(event.target as HTMLInputElement).value)
        }}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField
            {...params}
            value={value}
            placeholder='Search or filter...'
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start' sx={{ color: 'text.secondary' }}>
                  <Icon icon='mdi:magnify' />
                </InputAdornment>
              )
            }}
          />
        )}
        renderOption={(props, option: string | unknown) => {
          // @ts-ignore
          return value.length ? (
            <ListItem
              {...props}
              sx={{ p: '0 !important' }}
              key={option as string}
              onClick={() => {
                setValue(option)
                setOpen(false)
              }}
            >
              <ListItemButton sx={{ py: 1.5 }}>{option as string}</ListItemButton>
            </ListItem>
          ) : null
        }}
      />

      <Typography variant='body2'>Search & Filter at pleasure</Typography>
    </CardContentNoPadding>
  )
}

export default SearchHeader

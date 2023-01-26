// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//** Types
import { PropsCBV } from 'src/context/types'

import ReactMarkdown from 'react-markdown'

const Test = ({ data }: { data: PropsCBV }) => {
  return data.cbv.test ? (
    <ReactMarkdown>{data.cbv.test}</ReactMarkdown>
  ) : (
    <>
      <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
        <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
          There are no test for this vulnerability yet. Please consider to colaborate with us reporting a test
        </Typography>
      </Box>
      <Button variant='contained' startIcon={<Icon icon='mdi:account-check-outline' fontSize={20} />}>
        Summit tests
      </Button>
    </>
  )
}

export default Test

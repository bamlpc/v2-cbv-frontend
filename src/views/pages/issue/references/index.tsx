// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//** Types
import { PropsCBV } from 'src/context/types'

import ReactMarkdown from 'react-markdown'

const References = ({ data }: { data: PropsCBV }) => {
  return data.cbv.references ? (
    <ReactMarkdown>{data.cbv.references}</ReactMarkdown>
  ) : (
    <>
      <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
        <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
          There are no references for this vulnerability yet. Please consider to colaborate with us reporting a
          references
        </Typography>
      </Box>
      <Button variant='contained' startIcon={<Icon icon='mdi:account-check-outline' fontSize={20} />}>
        Summit references
      </Button>
    </>
  )
}

export default References

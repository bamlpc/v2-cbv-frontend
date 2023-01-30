// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Icon } from '@iconify/react'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()} `}
        <Link target='_blank' href='https://hacken.io/'>
          Hacken
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 6 } }}>
          <Link target='_blank' href='https://github.com/bamlpc/common-blockchain-vulnerabilities'>
            <Box component='span' sx={{ display: 'flex' }}>
              <Icon icon='mdi:github' />
              <Typography sx={{ ml: -5, mt: -1 }}>Github</Typography>
            </Box>
          </Link>
          <Link target='_blank' href='https://cbv-api.deno.dev/'>
            <Box component='span' sx={{ display: 'flex' }}>
              <Icon icon='mdi:graphql' />
              <Typography sx={{ ml: -5, mt: -1 }}>API</Typography>
            </Box>
          </Link>
          <Link target='_blank' href='/about'>
            <Box component='span' sx={{ display: 'flex' }}>
              <Icon icon='mdi:information-outline' />
              <Typography sx={{ ml: -5, mt: -1 }}>About</Typography>
            </Box>
          </Link>
          <Link target='_blank' href='https://github.com/bamlpc/common-blockchain-vulnerabilities/blob/main/LICENSE'>
            <Box component='span' sx={{ display: 'flex' }}>
              <Icon icon='tabler:license' />
              <Typography sx={{ ml: -5, mt: -1 }}>License</Typography>
            </Box>
          </Link>
        </Box>
      )}
    </Box>
  )
}

/* {
    title: 'Github',
    path: 'https://github.com/bamlpc/common-blockchain-vulnerabilities',
    externalLink: true,
    openInNewTab: true,
    icon: 'mdi:github'
  },
  {
    title: 'API',
    path: 'https://cbv-api.deno.dev/',
    externalLink: true,
    openInNewTab: true,
    icon: 'mdi:graphql'
  } */
export default FooterContent

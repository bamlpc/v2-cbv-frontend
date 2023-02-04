// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

import { SyntheticEvent } from 'react-draft-wysiwyg'

const actions = [
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
  { icon: <WhatsAppIcon />, name: 'WhatsApp' },
  { icon: <TwitterIcon />, name: 'Twitter' },
  { icon: <FacebookIcon />, name: 'Facebook' },
  { icon: <EmailIcon />, name: 'Email' }
]

// TODO: finish social media button
function ShareButton() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = (e: SyntheticEvent) => {
    e.preventDefault()
    setOpen(false)
  }

  return (
    <SpeedDial
      direction='down'
      ariaLabel='SpeedDial controlled open example'
      sx={{ position: 'absolute', trop: 16, right: 16 }}
      icon={<ShareIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map(action => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
      ))}
    </SpeedDial>
  )
}
export default ShareButton

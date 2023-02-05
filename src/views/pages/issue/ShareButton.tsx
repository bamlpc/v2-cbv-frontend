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
  { icon: <LinkedInIcon />, name: 'LinkedIn', run: () => shareOnSocial('LinkedIn') },
  { icon: <WhatsAppIcon />, name: 'WhatsApp', run: () => shareOnSocial('WhatsApp') },
  { icon: <TwitterIcon />, name: 'Twitter', run: () => shareOnSocial('Twitter') },
  { icon: <FacebookIcon />, name: 'Facebook', run: () => shareOnSocial('Facebook') },
  { icon: <EmailIcon />, name: 'Email', run: () => shareOnSocial('Email') }
]

function shareOnSocial(input: string) {
  const ahref = window.location.href
  const encodedAhref = encodeURIComponent(ahref)
  let link = ''
  switch (input) {
    case 'LinkedIn': //
      link = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedAhref}`
      open(link)
      break

    case 'WhatsApp': //
      link = `https://wa.me/?text=Check%20this%20vulnerability%20${encodedAhref}`
      open(link)
      break

    case 'Twitter':
      link = `https://twitter.com/intent/tweet?text=Check%20this%20vulnerability%20&url=${encodedAhref}&hashtags=Blockchain%2CSecurity`
      open(link)
      break
    case 'Facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${encodedAhref}`
      open(link)
      break
    default:
      link = `mailto:email.com?subject=Blockchain%20vulnerability&body=Check%20this%20vulnerability%20${encodedAhref}`
      open(link)
      break
  }
}

// TODO: finish social media button positioning
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
      ariaLabel='Share SpeedDial'
      sx={{ position: 'absolute', trop: 16, right: 16 }}
      icon={<ShareIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map(action => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.run} />
      ))}
    </SpeedDial>
  )
}
export default ShareButton

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Skeleton } from '@mui/material'

// Styled component for the trophy image
const TrophyImg = styled('img')(({ theme }) => ({
  right: 22,
  bottom: 0,
  width: 106,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 95
  }
}))

interface TopContributorProps {
  user: string
  amount: string
}

//TODO: AND ACTION TO BUTTON FOR SEARCH USERS CONTRIBUTION
const TopContributorAward = (props: TopContributorProps) => {
  return (
    <>
      {true ? (
        <Card sx={{ position: 'relative' }}>
          <CardContent>
            <Typography variant='h6'>
              Congratulations{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                {props.user}
              </Box>
              🎉
            </Typography>
            <Typography variant='body2' sx={{ mb: 3.25 }}>
              Top contributor of the month
            </Typography>
            <Typography variant='h5' sx={{ fontWeight: 600, color: 'primary.main' }}>
              {props.amount} issues
            </Typography>
            <Typography variant='body2' sx={{ mb: 3.25 }}>
              🤟🏻
            </Typography>
            <Button size='small' variant='contained'>
              View issues
            </Button>
            <TrophyImg alt='trophy' src='/images/cards/trophy.png' />
          </CardContent>
        </Card>
      ) : (
        <Skeleton variant='rectangular' animation='pulse' height='200px' />
      )}
    </>
  )
}

export default TopContributorAward

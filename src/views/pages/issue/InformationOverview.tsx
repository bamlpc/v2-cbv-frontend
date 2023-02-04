/* eslint-disable lines-around-comment */
/* eslint-disable react/no-children-prop */
// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

//** Markdown to react
import ReactMarkdown from 'react-markdown'

//** Types
import { PropsCBV } from 'src/context/types'

type Component = JSX.Element | string
type RenderList = [string, Component]

const renderList = (arr: RenderList[]) => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <>
          <Box
            key={`A-${index}`}
            sx={{
              mt: -2,
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 },
              '& svg': { color: 'text.secondary' }
            }}
          >
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>{item[0]}</Typography>
          </Box>
          <Box
            key={`B-${index}`}
            sx={{
              mt: -2,
              mb: -3,
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 },
              '& svg': { color: 'text.secondary' }
            }}
          >
            {item[1] === 'Not specified' ? (
              <Typography sx={{ color: 'text.secondary', mt: 0 }}>{item[1]}</Typography>
            ) : (
              <Typography sx={{ color: 'text.secondary', mt: -5 }}>{item[1]}</Typography>
            )}
          </Box>
        </>
      )
    })
  } else {
    return null
  }
}

const InformationOverview = (props: PropsCBV) => {
  const leftPanelList = [
    [
      'Version affected',
      props.cbv.version_affected !== '' && props.cbv.version_affected !== '-' ? (
        <ReactMarkdown children={props.cbv.version_affected} />
      ) : (
        'Not specified'
      )
    ],
    [
      'Vulnerability type',
      props.cbv.vulnerability_type !== '' && props.cbv.vulnerability_type !== '-' ? (
        <ReactMarkdown children={props.cbv.vulnerability_type} />
      ) : (
        'Not specified'
      )
    ],
    [
      'Component',
      props.cbv.component !== '' && props.cbv.component !== '-' ? (
        <ReactMarkdown children={props.cbv.component} />
      ) : (
        'Not specified'
      )
    ],
    [
      'Created at',
      props.cbv.created_at !== '' && props.cbv.created_at !== '-' ? (
        <ReactMarkdown children={props.cbv.created_at} />
      ) : (
        'Not specified'
      )
    ]
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={10}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 0 }}>
              <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
                {props.cbv.cbv_id}
              </Typography>
              {
                //@ts-ignore: component working fine
                renderList(leftPanelList)
              }
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card>
          <CardContent>
            <div>
              <Typography variant='body2' sx={{ mb: -3, color: 'text.disabled', textTransform: 'uppercase' }}>
                Credits
              </Typography>
              <ReactMarkdown children={props.cbv.credits} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default InformationOverview

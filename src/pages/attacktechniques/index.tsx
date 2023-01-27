// ** MUI Imports
import Grid from '@mui/material/Grid'

import { Box } from '@mui/system'

import { useState, useEffect } from 'react'

import ReactMarkdown from 'react-markdown'
import ReactHtmlParser from 'react-html-parser'

const url = 'https://raw.githubusercontent.com/hknio/blockchain-common-attack-techniques/main/README.md'

const AttackTechniques = () => {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [index, setIndex] = useState('')

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(url, {
          method: 'GET',
          mode: 'cors'
        })
      ).text()
      const extraxted_table_of_content = data.match(/(<div id="table-of-content">)(.*)(<\/div>)/s)
      const formated_table_of_content = extraxted_table_of_content?.join('\r\n')
      const findBody = data.indexOf('# Protocol Layer')
      const findTitle = data.indexOf('Table of Contents')
      setIndex(formated_table_of_content!)
      setTitle(data.slice(0, findTitle))
      setBody(data.slice(findBody))
    }
    dataFetch()
  }, [])

  return (
    <>
      {body && index && title ? (
        <>
          <Grid container spacing={6} className='match-height'>
            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 5 }}>Table of content</Box>
              <div> {ReactHtmlParser(index)} </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <ReactMarkdown>{title}</ReactMarkdown>
              <ReactMarkdown>{body}</ReactMarkdown>
            </Grid>
          </Grid>
        </>
      ) : null}
    </>
  )
}

export default AttackTechniques

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import ReactHtmlParser from 'react-html-parser'

const url = 'https://raw.githubusercontent.com/hknio/blockchain-common-attack-techniques/main/README.md'

const AttackTechniques = () => {
  const [text, setText] = useState('')
  const [table, setTable] = useState('')

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
      setTable(formated_table_of_content!)
      setText(data.replace(formated_table_of_content!, ''))
    }
    dataFetch()
  }, [])

  return (
    <>
      {text && table ? (
        <>
          <div> {ReactHtmlParser(table)} </div>
          <ReactMarkdown>{text}</ReactMarkdown>
        </>
      ) : null}
    </>
  )
}

AttackTechniques.authGuard = false

export default AttackTechniques

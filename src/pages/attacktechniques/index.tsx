import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const url = 'https://raw.githubusercontent.com/hknio/blockchain-common-attack-techniques/main/README.md'

const AttackTechniques = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(url, {
          method: 'GET',
          mode: 'cors'
        })
      ).text()
      setText(data)
    }
    dataFetch()
  }, [])

  return <>{text ? <ReactMarkdown>{text}</ReactMarkdown> : null}</>
}

AttackTechniques.authGuard = false

export default AttackTechniques

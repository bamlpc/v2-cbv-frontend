// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

import UserProfile from 'src/views/pages/issue/CbvPage'

export default function TabPage() {
  const router = useRouter()
  const cbv = router.query.cbv as string
  const tab = router.query.tab as string

  //console.log(cbv, tab)

  const [data, setData] = useState(Object)
  const [cbvCode, setCbvCode] = useState<string>('CBV-23-00008')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [validCbvCode, setValidCbvCode] = useState<boolean>(true)

  /* function isValidCBVCode() {
    const regex = /(CBV)-(\d){2}-(\d){5}/
    if (cbv.toUpperCase().match(regex)) return
    if (cbv.length !== 13) return
    setCbvCode(cbv.toUpperCase())
  } */
  useEffect(() => {
    if (cbv) setCbvCode(cbv)
    const dataFetch = async () => {
      const data = await (
        await fetch('https://cbv-api.deno.dev/graphql', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
          query{
            find_by_cbv_code(cbv_id: "${cbvCode}"){
              _id
              cbv{
                title
                short_description
                cbv_id
                severity
                score
                created_at
                updated_at
                component
                blockchain
                version_affected
                vulnerability_type
                details
                recommendation
                references
                tests
                credits
              }
            }
          }`
          })
        })
      ).json()
      setData(data)
    }
    dataFetch()
  }, [cbv, cbvCode])

  return <>{data.data && validCbvCode ? <UserProfile cbv={cbv} tab={tab} data={data.data.find_by_cbv_code} /> : null}</>
}

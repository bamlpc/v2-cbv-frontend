//** Types
import { PropsCBV } from 'src/context/types'

import ReactMarkdown from 'react-markdown'

const Details = ({ data }: { data: PropsCBV }) => {
  return <ReactMarkdown>{data.cbv.details}</ReactMarkdown>
}

export default Details

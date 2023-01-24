//** Types
import { PropsCBV } from 'src/context/types'

const Details = ({ data }: { data: PropsCBV }) => {
  return <>{data.cbv.details}</>
}

export default Details

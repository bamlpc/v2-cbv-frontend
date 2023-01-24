//** Types
import { PropsCBV } from 'src/context/types'

const Test = ({ data }: { data: PropsCBV }) => {
  return <>{data.cbv.test}</>
}

export default Test

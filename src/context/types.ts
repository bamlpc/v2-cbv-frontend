export type ErrCallbackType = (err: { [key: string]: string }) => void

export type PropsCBV = {
  id: string
  cbv: CBV
  timestamp: number
}

export type CBV = {
  title: string
  short_description: string
  cbv_id: string
  blockchain: string
  details: string
  recommendation: string
  version_affected: string
  severity: string
  vulnerability_type: string
  component: string
  created_at: string
  updated_at: string
  references: string
  test: string
  credits: string
}

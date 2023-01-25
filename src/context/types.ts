export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export type RegisterParams = {
  email: string
  username: string
  password: string
}

export type UserDataType = {
  id: number
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
}

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}

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

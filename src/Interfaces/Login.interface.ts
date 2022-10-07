export interface Login {
  username: string,
  password: string
}

export interface Answer {
  success: boolean,
  status: number,
  message: string,
  id: number | null,
}

export interface ServiceAnswer {
  success: boolean,
  token: string | null,
  status: number | null,
  message: string | null,
  id: number | null
}
export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface RegisteredUser extends User {
  id: number,
}
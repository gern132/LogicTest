export interface Response<T, P = string> {
  data: T | null
  error: P | null
}

export interface IErrorResponse<E> {
  [x: string]: any
  status?: number
  errors: E
}

export interface ICourse {
  id: string
  name: string
  image: string
  bgColor: string
  tags: string[]
}

export type IGetCoursesSuccessResponse = ICourse[]

export interface IGetCoursesSuccessResponseError {}

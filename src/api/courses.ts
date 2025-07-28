import axios, { AxiosError } from "axios"
import { IErrorResponse, Response } from "@models/types"
import {
  IGetCoursesSuccessResponse,
  IGetCoursesSuccessResponseError,
} from "@models/courses"

export class CoursesAPI {
  static async getCourses(): Promise<
    Response<
      IGetCoursesSuccessResponse,
      IErrorResponse<IGetCoursesSuccessResponseError>
    >
  > {
    try {
      const { data } = await axios.get<IGetCoursesSuccessResponse>(
        "https://logiclike.com/docs/courses.json"
      )

      return { data, error: null }
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = err.response?.data
        return { data: null, error }
      }

      return { data: null, error: null }
    }
  }
}

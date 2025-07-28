import { useState, useEffect } from "react"
import { ICourse, IGetCoursesSuccessResponseError } from "@models/courses"
import { IErrorResponse } from "@models/types"
import { CoursesAPI } from "@api"

interface UseCoursesReturn {
  courses: ICourse[] | null
  loading: boolean
  error: IErrorResponse<unknown> | null
  refetch: () => void
}

export const useCourses = (): UseCoursesReturn => {
  const [courses, setCourses] = useState<ICourse[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<IErrorResponse<unknown> | null>(null)

  const fetchCourses = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await CoursesAPI.getCourses()

      if (response.error) {
        setError(response.error)
        setCourses(null)
      } else if (response.data) {
        setCourses(response.data)
      }
    } catch (e) {
      const genericError: IErrorResponse<IGetCoursesSuccessResponseError> = {
        errors: { message: "Произошла непредвиденная ошибка" },
      }
      setError(genericError)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  return { courses, loading, error, refetch: fetchCourses }
}

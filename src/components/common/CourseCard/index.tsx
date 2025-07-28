import React, { memo } from "react"
import { View, Text, Image } from "react-native"
import { ICourse } from "@models/courses"
import { useStyles } from "./styles"

interface Props {
  course: ICourse
}

const CourseCard = ({ course }: Props) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <View
        style={[styles.imageContainer, { backgroundColor: course.bgColor }]}
      >
        <Image source={{ uri: course.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{course.name}</Text>
      </View>
    </View>
  )
}

export default memo(CourseCard)

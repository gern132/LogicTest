import React, { useMemo, useState } from "react"
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  Pressable,
} from "react-native"
import { useCourses } from "./useCourses"
import { useStyles } from "./styles"
import FilterModal from "@components/common/FilterModal"
import CourseCard from "@components/common/CourseCard"
import { ArrowDown } from "@assets/icons"

const ALL_THEMES_TAG = "Все темы"

const CoursesScreen = () => {
  const styles = useStyles()
  const { courses: allCourses, loading, error, refetch } = useCourses()

  const [selectedTag, setSelectedTag] = useState<string>(ALL_THEMES_TAG)
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)

  const uniqueTags = useMemo(() => {
    if (!allCourses || allCourses.length === 0) return []

    const tagsSet = new Set<string>()
    allCourses.forEach((course) => {
      course.tags.forEach((tag) => tagsSet.add(tag))
    })
    return [ALL_THEMES_TAG, ...Array.from(tagsSet).sort()]
  }, [allCourses])

  const filteredCourses = useMemo(() => {
    if (!allCourses) return []

    if (selectedTag === ALL_THEMES_TAG) {
      return allCourses
    }
    return allCourses.filter((course) => course.tags.includes(selectedTag))
  }, [allCourses, selectedTag])

  const openFilterModal = () => setIsFilterModalVisible(true)
  const closeFilterModal = () => setIsFilterModalVisible(false)
  const handleSelectTag = (tag: string) => setSelectedTag(tag)

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#4a4dff" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>
          {error.error?.message || "Произошла ошибка"}
        </Text>
        <Button title="Попробовать снова" onPress={refetch} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={openFilterModal} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>{selectedTag}</Text>
          <ArrowDown />
        </Pressable>
      </View>

      <FlatList
        data={filteredCourses}
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>Курсы не найдены.</Text>
        }
      />

      <FilterModal
        isVisible={isFilterModalVisible}
        onClose={closeFilterModal}
        tags={uniqueTags}
        selectedTag={selectedTag}
        onSelectTag={handleSelectTag}
      />
    </View>
  )
}

export default CoursesScreen

import React, { memo } from "react"
import { View, Text, Pressable, ScrollView } from "react-native"
import { useStyles } from "./styles"

interface TagFilterProps {
  tags: string[]
  selectedTag: string
  onSelectTag: (tag: string) => void
}

const CourseFilter = ({ tags, selectedTag, onSelectTag }: TagFilterProps) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {tags.map((tag) => (
          <Pressable
            key={tag}
            style={[
              styles.cardItem,
              selectedTag === tag
                ? styles.cardItemActive
                : styles.cardItemDefault,
            ]}
            onPress={() => onSelectTag(tag)}
          >
            <Text
              style={[
                styles.cardText,
                selectedTag === tag
                  ? styles.chipTextSelected
                  : styles.chipTextIdle,
              ]}
            >
              {tag}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default memo(CourseFilter)

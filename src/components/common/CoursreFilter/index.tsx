import React from "react"
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native"

interface Props {
  tags: string[]
  selectedTag: string
  onSelectTag: (tag: string) => void
}

const CourseFilter = ({ tags, selectedTag, onSelectTag }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tags.map((tag) => (
          <Pressable
            key={tag}
            style={[
              styles.chip,
              selectedTag === tag ? styles.chipSelected : styles.chipIdle,
            ]}
            onPress={() => onSelectTag(tag)}
          >
            <Text
              style={[
                styles.chipText,
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

export default React.memo(CourseFilter)

import React, { memo, useCallback } from "react"
import { Modal, View, Text, Pressable, SafeAreaView } from "react-native"
import CourseFilter from "../CoursreFilter"
import { useStyles } from "./styles"
import { Close } from "@assets/icons"

interface FilterModalProps {
  isVisible: boolean
  onClose: () => void
  tags: string[]
  selectedTag: string
  onSelectTag: (tag: string) => void
}

const FilterModal = ({
  isVisible,
  onClose,
  tags,
  selectedTag,
  onSelectTag,
}: FilterModalProps) => {
  const styles = useStyles()

  const handleSelectAndClose = useCallback(
    (tag: string) => {
      onSelectTag(tag)
      onClose()
    },
    [onSelectTag, onClose]
  )

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}
      presentationStyle="fullScreen"
      supportedOrientations={["landscape"]}
    >
      <SafeAreaView style={styles.fullScreenContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Выбор Темы</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Close />
          </Pressable>
        </View>
        <View style={styles.content}>
          <CourseFilter
            tags={tags}
            selectedTag={selectedTag}
            onSelectTag={handleSelectAndClose}
          />
        </View>
      </SafeAreaView>
    </Modal>
  )
}
export default memo(FilterModal)

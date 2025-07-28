import {
  ImageStyle,
  TextStyle,
  useColorScheme,
  useWindowDimensions,
  ViewStyle,
} from "react-native"
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context"
import { useMemo } from "react"
import { useColors } from "@hooks/useColors"

interface StyleParams {
  insets: EdgeInsets
  width: number
  height: number
  isDarkTheme: boolean
  colors: ReturnType<typeof useColors>
}

type NamedStyle<T> = { [P in keyof T]: ViewStyle & TextStyle & ImageStyle }

type StyleCallback<T> = (params: StyleParams) => NamedStyle<T>

export const withStyles =
  <T>(styles: StyleCallback<T>) =>
  () => {
    const colors = useColors()
    const insets = useSafeAreaInsets()
    const isDarkTheme = useColorScheme() === "dark"
    const { width, height } = useWindowDimensions()

    return useMemo(
      () => styles({ width, height, insets, isDarkTheme, colors }),
      [width, height, insets, isDarkTheme, colors]
    )
  }

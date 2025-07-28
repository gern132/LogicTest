import { useColorScheme } from "react-native"
import { colors } from "@utils/constants/colors"

export const useColors = () => {
  const scheme = useColorScheme()

  return Object.assign(colors.common, scheme ? colors[scheme] : colors.light)
}

import { StatusBar, useColorScheme } from "react-native"
import CoursesScreen from "@screens/Courses"
import { SafeAreaProvider } from "react-native-safe-area-context"

function App() {
  const isDarkMode = useColorScheme() === "dark"

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <CoursesScreen />
    </SafeAreaProvider>
  )
}

export default App

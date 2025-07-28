import * as React from "react"
import Svg, { Path } from "react-native-svg"

// eslint-disable-next-line react/prop-types
const ArrowDown = ({ color = "#fff" }) => (
  <Svg width={12} height={8} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m1 1.365 5 5 5-5"
    />
  </Svg>
)

export default ArrowDown

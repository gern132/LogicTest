import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const ArrowDown = () => (
  <Svg width={18} height={18} fill="none">
    <Circle cx={9} cy={9} r={9} fill="#000" fillOpacity={0.2} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.539 7.615 9 11.077l3.462-3.462"
    />
  </Svg>
)
export default ArrowDown

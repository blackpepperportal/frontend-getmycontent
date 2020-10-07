import React from "react"
import ContentLoader from "react-content-loader"

const SubscriptionNewLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1350}
    height={600}
    viewBox="0 0 1350 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="540" y="16" rx="0" ry="0" width="168" height="10" /> 
    <rect x="420" y="40" rx="0" ry="0" width="415" height="10" /> 
    <rect x="0" y="81" rx="0" ry="0" width="288" height="295" /> 
    <rect x="292" y="81" rx="0" ry="0" width="288" height="295" /> 
    <rect x="584" y="81" rx="0" ry="0" width="288" height="295" /> 
    <rect x="875" y="82" rx="0" ry="0" width="288" height="295" />
  </ContentLoader>
)

export default SubscriptionNewLoader;
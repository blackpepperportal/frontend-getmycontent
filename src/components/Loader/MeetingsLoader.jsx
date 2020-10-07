import React from "react"
import ContentLoader from "react-content-loader"

const MeetingsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1200 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="203" y="37" rx="0" ry="0" width="0" height="6" /> 
    <rect x="31" y="58" rx="2" ry="2" width="1100" height="57" /> 
    <rect x="30" y="60" rx="0" ry="0" width="10" height="400" /> 
    <rect x="1122" y="60" rx="0" ry="0" width="10" height="400" /> 
    <rect x="30" y="453" rx="0" ry="0" width="1100" height="10" /> 
    <rect x="53" y="139" rx="10" ry="10" width="1055" height="81" /> 
    <rect x="53" y="241" rx="10" ry="10" width="1055" height="81" /> 
    <rect x="53" y="343" rx="10" ry="10" width="1055" height="81" />
  </ContentLoader>
)

export default MeetingsLoader;
import React from "react"
import ContentLoader from "react-content-loader"

const SingleMeetingLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1350}
    height={600}
    viewBox="0 0 1350 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="27" y="18" rx="0" ry="0" width="1110" height="50" /> 
    <rect x="27" y="18" rx="0" ry="0" width="8" height="500" /> 
    <rect x="598" y="20" rx="0" ry="0" width="0" height="148" /> 
    <rect x="1132" y="18" rx="0" ry="0" width="8" height="500" /> 
    <rect x="29" y="507" rx="0" ry="0" width="1110" height="11" /> 
    <rect x="55" y="98" rx="10" ry="10" width="350" height="381" /> 
    <rect x="430" y="97" rx="10" ry="10" width="680" height="381" />
  </ContentLoader>
)

export default SingleMeetingLoader;
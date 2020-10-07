import React from "react"
import ContentLoader from "react-content-loader"

const EditProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={750}
    viewBox="0 0 1195 750"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="203" y="37" rx="0" ry="0" width="0" height="6" /> 
    <rect x="15" y="58" rx="2" ry="2" width="1130" height="57" /> 
    <rect x="15" y="60" rx="0" ry="0" width="10" height="573" /> 
    <rect x="1135" y="60" rx="0" ry="0" width="10" height="573" /> 
    <rect x="15" y="625" rx="0" ry="0" width="1130" height="10" /> 
    <rect x="45" y="139" rx="0" ry="0" width="150" height="10" /> 
    <rect x="45" y="161" rx="5" ry="5" width="500" height="33" /> 
    <rect x="45" y="208" rx="0" ry="0" width="150" height="10" /> 
    <rect x="45" y="230" rx="5" ry="5" width="500" height="33" /> 
    <rect x="45" y="278" rx="0" ry="0" width="150" height="10" /> 
    <rect x="45" y="300" rx="5" ry="5" width="500" height="33" /> 
    <rect x="45" y="350" rx="0" ry="0" width="150" height="10" /> 
    <rect x="45" y="372" rx="5" ry="5" width="500" height="33" /> 
    <rect x="48" y="419" rx="0" ry="0" width="150" height="10" /> 
    <rect x="48" y="441" rx="5" ry="5" width="500" height="60" /> 
    <rect x="53" y="512" rx="0" ry="0" width="150" height="10" /> 
    <rect x="53" y="534" rx="5" ry="5" width="500" height="60" /> 
    <rect x="580" y="235" rx="10" ry="10" width="535" height="280" />
  </ContentLoader>
)

export default EditProfileLoader;
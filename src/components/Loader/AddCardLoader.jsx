import React from "react"
import ContentLoader from "react-content-loader"

const AddCardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1185 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="203" y="37" rx="0" ry="0" width="0" height="6" /> 
    <rect x="15" y="58" rx="2" ry="2" width="1120" height="57" /> 
    <rect x="15" y="60" rx="0" ry="0" width="10" height="367" /> 
    <rect x="1125" y="60" rx="0" ry="0" width="10" height="367" /> 
    <rect x="15" y="419" rx="0" ry="0" width="1120" height="10" /> 
    <rect x="41" y="156" rx="10" ry="10" width="520" height="77" /> 
    <rect x="585" y="155" rx="10" ry="10" width="520" height="77" /> 
    <rect x="45" y="253" rx="10" ry="10" width="520" height="77" /> 
    <rect x="585" y="252" rx="10" ry="10" width="520" height="77" /> 
    <rect x="45" y="343" rx="5" ry="5" width="150" height="32" />
  </ContentLoader>
)

export default AddCardLoader;
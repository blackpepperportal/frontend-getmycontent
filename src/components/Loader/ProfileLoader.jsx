import React from "react"
import ContentLoader from "react-content-loader"

const NewProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={450}
    viewBox="0 0 1195 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="203" y="37" rx="0" ry="0" width="0" height="6" /> 
    <rect x="15" y="58" rx="2" ry="2" width="1130" height="57" /> 
    <rect x="15" y="60" rx="0" ry="0" width="10" height="288" /> 
    <rect x="1135" y="60" rx="0" ry="0" width="10" height="288" /> 
    <rect x="15" y="340" rx="0" ry="0" width="1130" height="10" /> 
    <circle cx="100" cy="119" r="50" /> 
    <rect x="900" y="139" rx="0" ry="0" width="150" height="31" /> 
    <rect x="45" y="183" rx="0" ry="0" width="150" height="10" /> 
    <rect x="74" y="217" rx="0" ry="0" width="85" height="8" /> 
    <circle cx="53" cy="221" r="8" /> 
    <rect x="45" y="243" rx="0" ry="0" width="105" height="7" /> 
    <rect x="221" y="215" rx="0" ry="0" width="85" height="8" /> 
    <circle cx="200" cy="219" r="8" /> 
    <rect x="192" y="241" rx="0" ry="0" width="105" height="7" /> 
    <rect x="74" y="279" rx="0" ry="0" width="85" height="8" /> 
    <circle cx="53" cy="283" r="8" /> 
    <rect x="45" y="305" rx="0" ry="0" width="105" height="7" />
  </ContentLoader>
)

export default NewProfileLoader;
import React from "react"
import ContentLoader from "react-content-loader"

const ForgotPasswordLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={400}
    viewBox="0 0 1205 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="34" y="59" rx="0" ry="0" width="8" height="245" /> 
    <rect x="34" y="59" rx="0" ry="0" width="1100" height="8" /> 
    <rect x="1128" y="59" rx="0" ry="0" width="8" height="245" /> 
    <rect x="35" y="296" rx="0" ry="0" width="1100" height="9" /> 
    <rect x="69" y="103" rx="10" ry="10" width="500" height="160" /> 
    <rect x="800" y="95" rx="0" ry="0" width="200" height="8" /> 
    <rect x="750" y="114" rx="0" ry="0" width="300" height="6" /> 
    <rect x="700" y="133" rx="0" ry="0" width="68" height="8" /> 
    <rect x="700" y="150" rx="2" ry="2" width="400" height="38" /> 
    <rect x="800" y="221" rx="5" ry="5" width="200" height="30" /> 
    <rect x="820" y="195" rx="0" ry="0" width="150" height="6" /> 
    <rect x="860" y="262" rx="0" ry="0" width="91" height="6" />
  </ContentLoader>
)

export default ForgotPasswordLoader;
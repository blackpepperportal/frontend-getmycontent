import React from "react"
import ContentLoader from "react-content-loader"

const LoginLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={450}
    viewBox="0 0 1205 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="34" y="59" rx="0" ry="0" width="8" height="305" /> 
    <rect x="34" y="59" rx="0" ry="0" width="1100" height="8" /> 
    <rect x="1130" y="59" rx="0" ry="0" width="8" height="305" /> 
    <rect x="35" y="355" rx="0" ry="0" width="1100" height="9" /> 
    <rect x="72" y="120" rx="10" ry="10" width="550" height="180" /> 
    <rect x="790" y="95" rx="0" ry="0" width="191" height="8" /> 
    <rect x="765" y="114" rx="0" ry="0" width="250" height="6" /> 
    <rect x="680" y="133" rx="0" ry="0" width="68" height="8" /> 
    <rect x="680" y="150" rx="2" ry="2" width="420" height="38" /> 
    <rect x="680" y="202" rx="0" ry="0" width="68" height="8" /> 
    <rect x="680" y="219" rx="2" ry="2" width="420" height="38" /> 
    <rect x="830" y="281" rx="5" ry="5" width="163" height="30" /> 
    <rect x="810" y="322" rx="0" ry="0" width="91" height="8" /> 
    <rect x="920" y="322" rx="0" ry="0" width="91" height="8" />
  </ContentLoader>
)

export default LoginLoader;
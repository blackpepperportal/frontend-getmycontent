import React from "react"
import ContentLoader from "react-content-loader"

const ModalProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={850}
    viewBox="0 0 1200 850"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="130" rx="0" ry="0" width="0" height="9" /> 
    <rect x="4" y="8" rx="10" ry="10" width="581" height="139" /> 
    <circle cx="73" cy="150" r="48" /> 
    <rect x="20" y="223" rx="0" ry="0" width="122" height="10" /> 
    <rect x="20" y="241" rx="0" ry="0" width="145" height="9" /> 
    <rect x="180" y="232" rx="0" ry="0" width="76" height="10" /> 
    <circle cx="427" cy="178" r="15" /> 
    <circle cx="471" cy="176" r="15" /> 
    <circle cx="513" cy="176" r="15" /> 
    <circle cx="557" cy="176" r="15" /> 
    <rect x="6" y="265" rx="0" ry="0" width="585" height="5" /> 
    <rect x="7" y="300" rx="0" ry="0" width="584" height="45" /> 
    <rect x="6" y="357" rx="0" ry="0" width="119" height="16" /> 
    <circle cx="37" cy="418" r="27" /> 
    <rect x="81" y="406" rx="0" ry="0" width="100" height="10" /> 
    <rect x="82" y="424" rx="0" ry="0" width="141" height="9" /> 
    <rect x="562" y="356" rx="0" ry="0" width="28" height="17" /> 
    <rect x="9" y="458" rx="0" ry="0" width="580" height="12" /> 
    <rect x="11" y="502" rx="0" ry="0" width="579" height="188" /> 
    <circle cx="27" cy="737" r="17" /> 
    <circle cx="69" cy="737" r="17" /> 
    <circle cx="111" cy="739" r="17" /> 
    <rect x="138" y="732" rx="0" ry="0" width="69" height="12" /> 
    <rect x="561" y="728" rx="0" ry="0" width="25" height="16" /> 
    <rect x="10" y="771" rx="0" ry="0" width="118" height="10" /> 
    <rect x="11" y="797" rx="0" ry="0" width="579" height="5" />
  </ContentLoader>
)

export default ModalProfileLoader;
import React from "react"
import ContentLoader from "react-content-loader"

const ProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={900}
    viewBox="0 0 1200 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="130" rx="0" ry="0" width="0" height="9" /> 
    <rect x="7" y="19" rx="10" ry="10" width="580" height="180" /> 
    <circle cx="83" cy="204" r="48" /> 
    <rect x="42" y="280" rx="0" ry="0" width="134" height="10" /> 
    <rect x="43" y="304" rx="0" ry="0" width="135" height="11" /> 
    <rect x="190" y="300" rx="0" ry="0" width="78" height="9" /> 
    <rect x="7" y="340" rx="0" ry="0" width="588" height="4" /> 
    <rect x="422" y="218" rx="20" ry="20" width="116" height="35" /> 
    <circle cx="564" cy="237" r="19" /> 
    <rect x="9" y="363" rx="0" ry="0" width="90" height="11" /> 
    <circle cx="582" cy="370" r="10" /> 
    <rect x="9" y="393" rx="0" ry="0" width="588" height="4" /> 
    <circle cx="41" cy="458" r="32" /> 
    <rect x="88" y="437" rx="0" ry="0" width="122" height="11" /> 
    <rect x="89" y="457" rx="0" ry="0" width="143" height="9" /> 
    <rect x="578" y="427" rx="0" ry="0" width="21" height="16" /> 
    <rect x="496" y="429" rx="0" ry="0" width="75" height="10" /> 
    <rect x="13" y="502" rx="0" ry="0" width="467" height="12" /> 
    <rect x="16" y="530" rx="5" ry="5" width="583" height="245" /> 
    <circle cx="40" cy="812" r="17" /> 
    <circle cx="87" cy="812" r="17" /> 
    <circle cx="131" cy="812" r="17" /> 
    <rect x="159" y="806" rx="0" ry="0" width="81" height="9" /> 
    <rect x="28" y="850" rx="0" ry="0" width="123" height="12" /> 
    <rect x="561" y="802" rx="0" ry="0" width="39" height="19" /> 
    <rect x="27" y="877" rx="0" ry="0" width="576" height="4" />
  </ContentLoader>
)

export default ProfileLoader;
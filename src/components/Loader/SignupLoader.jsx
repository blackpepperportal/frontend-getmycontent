import React from "react"
import ContentLoader from "react-content-loader"

const SignupLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={700}
    viewBox="0 0 1200 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="130" rx="0" ry="0" width="0" height="9" /> 
    <rect x="10" y="21" rx="5" ry="5" width="272" height="558" /> 
    <rect x="365" y="42" rx="0" ry="0" width="189" height="30" /> 
    <rect x="347" y="79" rx="0" ry="0" width="228" height="9" /> 
    <rect x="327" y="98" rx="25" ry="25" width="273" height="51" /> 
    <rect x="327" y="165" rx="25" ry="25" width="273" height="51" /> 
    <rect x="330" y="251" rx="0" ry="0" width="114" height="5" /> 
    <circle cx="467" cy="255" r="7" /> 
    <rect x="489" y="251" rx="0" ry="0" width="114" height="5" /> 
    <rect x="330" y="290" rx="0" ry="0" width="104" height="9" /> 
    <rect x="330" y="312" rx="0" ry="0" width="274" height="3" /> 
    <rect x="330" y="339" rx="0" ry="0" width="104" height="9" /> 
    <rect x="330" y="361" rx="0" ry="0" width="274" height="3" /> 
    <rect x="330" y="525" rx="25" ry="25" width="273" height="51" /> 
    <rect x="409" y="590" rx="0" ry="0" width="135" height="5" /> 
    <rect x="386" y="610" rx="0" ry="0" width="183" height="8" /> 
    <rect x="331" y="378" rx="0" ry="0" width="104" height="9" /> 
    <rect x="331" y="400" rx="0" ry="0" width="274" height="3" /> 
    <rect x="331" y="427" rx="0" ry="0" width="104" height="9" /> 
    <rect x="331" y="449" rx="0" ry="0" width="274" height="3" /> 
    <rect x="327" y="468" rx="0" ry="0" width="284" height="8" /> 
    <rect x="327" y="489" rx="0" ry="0" width="100" height="8" />
  </ContentLoader>
)

export default SignupLoader;

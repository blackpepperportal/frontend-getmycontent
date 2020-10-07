import React from "react"
import ContentLoader from "react-content-loader"

const SignupLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1204 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="34" y="59" rx="0" ry="0" width="8" height="445" /> 
    <rect x="34" y="59" rx="0" ry="0" width="1100" height="8" /> 
    <rect x="1126" y="59" rx="0" ry="0" width="8" height="445" /> 
    <rect x="37" y="495" rx="0" ry="0" width="1095" height="9" /> 
    <rect x="72" y="142" rx="10" ry="10" width="550" height="270" /> 
    <rect x="790" y="95" rx="0" ry="0" width="191" height="8" /> 
    <rect x="730" y="114" rx="0" ry="0" width="300" height="6" /> 
    <rect x="680" y="133" rx="0" ry="0" width="68" height="8" /> 
    <rect x="680" y="150" rx="2" ry="2" width="410" height="38" /> 
    <rect x="680" y="202" rx="0" ry="0" width="68" height="8" /> 
    <rect x="680" y="219" rx="2" ry="2" width="410" height="38" /> 
    <rect x="680" y="269" rx="0" ry="0" width="68" height="8" /> 
    <rect x="680" y="286" rx="2" ry="2" width="410" height="38" /> 
    <rect x="680" y="335" rx="0" ry="0" width="68" height="8" /> 
    <rect x="680" y="352" rx="2" ry="2" width="410" height="38" /> 
    <rect x="680" y="399" rx="0" ry="0" width="9" height="7" /> 
    <rect x="700" y="399" rx="0" ry="0" width="174" height="7" /> 
    <rect x="800" y="421" rx="5" ry="5" width="163" height="30" /> 
    <rect x="820" y="460" rx="0" ry="0" width="120" height="7" />
  </ContentLoader>
)

export default SignupLoader;

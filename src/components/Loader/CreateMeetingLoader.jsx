import React from "react"
import ContentLoader from "react-content-loader"

const CreateMeetingLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={750}
    viewBox="0 0 1200 750"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="203" y="37" rx="0" ry="0" width="0" height="6" /> 
    <rect x="31" y="58" rx="2" ry="2" width="1100" height="57" /> 
    <rect x="30" y="60" rx="0" ry="0" width="10" height="450" /> 
    <rect x="1122" y="60" rx="0" ry="0" width="10" height="450" /> 
    <rect x="30" y="510" rx="0" ry="0" width="1102" height="10" /> 
    <rect x="56" y="137" rx="0" ry="0" width="100" height="8" /> 
    <rect x="56" y="154" rx="2" ry="2" width="550" height="31" /> 
    <rect x="56" y="195" rx="0" ry="0" width="49" height="7" /> 
    <rect x="56" y="213" rx="0" ry="0" width="46" height="5" /> 
    <rect x="56" y="226" rx="0" ry="0" width="100" height="9" /> 
    <rect x="56" y="242" rx="0" ry="0" width="100" height="3" /> 
    <rect x="450" y="217" rx="2" ry="2" width="155" height="25" /> 
    <rect x="250" y="212" rx="0" ry="0" width="46" height="5" /> 
    <rect x="250" y="225" rx="0" ry="0" width="100" height="9" /> 
    <rect x="250" y="241" rx="0" ry="0" width="100" height="3" /> 
    <rect x="450" y="204" rx="0" ry="0" width="60" height="5" /> 
    <rect x="56" y="256" rx="0" ry="0" width="46" height="5" /> 
    <rect x="56" y="272" rx="0" ry="0" width="550" height="83" /> 
    <rect x="56" y="368" rx="0" ry="0" width="100" height="5" /> 
    <rect x="56" y="387" rx="0" ry="0" width="550" height="59" /> 
    <rect x="650" y="142" rx="10" ry="10" width="460" height="130" /> 
    <rect x="650" y="315" rx="10" ry="10" width="460" height="130" /> 
    <rect x="56" y="456" rx="5" ry="5" width="150" height="31" />
  </ContentLoader>
)

export default CreateMeetingLoader;
import React from "react"
import ContentLoader from "react-content-loader"

const DashboardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={1000}
    viewBox="0 0 1200 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="36" rx="0" ry="0" width="100" height="10" /> 
    <rect x="121" y="37" rx="0" ry="0" width="69" height="10" /> 
    <rect x="203" y="37" rx="0" ry="0" width="0" height="6" /> 
    <rect x="198" y="37" rx="0" ry="0" width="69" height="10" /> 
    <rect x="9" y="57" rx="0" ry="0" width="1150" height="2" /> 
    <rect x="9" y="75" rx="10" ry="10" width="260" height="55" /> 
    <rect x="305" y="75" rx="10" ry="10" width="260" height="55" /> 
    <rect x="600" y="75" rx="10" ry="10" width="260" height="55" /> 
    <rect x="900" y="75" rx="10" ry="10" width="260" height="55" /> 
    <rect x="9" y="151" rx="10" ry="10" width="550" height="214" /> 
    <rect x="610" y="154" rx="10" ry="10" width="550" height="208" /> 
    <rect x="9" y="385" rx="10" ry="10" width="300" height="208"></rect> 
    <rect x="360" y="385" rx="10" ry="10" width="300" height="208" /> 
    <rect x="710" y="385" rx="10" ry="10" width="450" height="208" /> 
    <rect x="9" y="620" rx="10" ry="10" width="550" height="156" /> 
    <rect x="610" y="621" rx="10" ry="10" width="550" height="156" /> 
    <rect x="9" y="809" rx="10" ry="10" width="1150" height="174" />
  </ContentLoader>
)

export default DashboardLoader;
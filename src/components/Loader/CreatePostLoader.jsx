import React from "react"
import ContentLoader from "react-content-loader"

const CreatePostLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={300}
    viewBox="0 0 1200 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="130" rx="0" ry="0" width="0" height="9" /> 
    <rect x="6" y="18" rx="0" ry="0" width="32" height="21" /> 
    <rect x="48" y="21" rx="0" ry="0" width="81" height="12" /> 
    <rect x="504" y="11" rx="20" ry="20" width="80" height="34" /> 
    <rect x="6" y="57" rx="0" ry="0" width="578" height="6" /> 
    <rect x="6" y="80" rx="0" ry="0" width="184" height="13" /> 
    <rect x="5" y="120" rx="0" ry="0" width="586" height="6" /> 
    <rect x="8" y="152" rx="0" ry="0" width="42" height="28" /> 
    <rect x="11" y="211" rx="0" ry="0" width="586" height="6" />
  </ContentLoader>
)

export default CreatePostLoader;

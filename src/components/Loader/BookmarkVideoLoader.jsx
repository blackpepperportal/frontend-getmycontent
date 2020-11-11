import React from "react"
import ContentLoader from "react-content-loader"

const BookmarkVideoLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1200 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="130" rx="0" ry="0" width="0" height="9" /> 
    <rect x="8" y="17" rx="0" ry="0" width="129" height="14" /> 
    <rect x="7" y="50" rx="0" ry="0" width="585" height="5" /> 
    <rect x="561" y="11" rx="0" ry="0" width="28" height="19" /> 
    <rect x="7" y="85" rx="0" ry="0" width="190" height="243" /> 
    <rect x="203" y="84" rx="0" ry="0" width="190" height="243" /> 
    <rect x="400" y="84" rx="0" ry="0" width="190" height="243" /> 
    <rect x="7" y="335" rx="0" ry="0" width="190" height="243" /> 
    <rect x="203" y="334" rx="0" ry="0" width="190" height="243" /> 
    <rect x="400" y="334" rx="0" ry="0" width="190" height="243" />
  </ContentLoader>
)

export default BookmarkVideoLoader;
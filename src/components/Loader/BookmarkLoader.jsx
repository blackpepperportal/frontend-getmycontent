import React from "react"
import ContentLoader from "react-content-loader"

const BookmarkLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={1000}
    viewBox="0 0 1200 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="130" rx="0" ry="0" width="0" height="9" /> 
    <rect x="8" y="17" rx="0" ry="0" width="129" height="14" /> 
    <rect x="7" y="50" rx="0" ry="0" width="587" height="5" /> 
    <circle cx="31" cy="105" r="28" /> 
    <rect x="80" y="93" rx="0" ry="0" width="123" height="10" /> 
    <rect x="80" y="111" rx="0" ry="0" width="150" height="10" /> 
    <rect x="546" y="83" rx="0" ry="0" width="21" height="16" /> 
    <rect x="577" y="83" rx="0" ry="0" width="19" height="16" /> 
    <rect x="10" y="148" rx="0" ry="0" width="490" height="9" /> 
    <rect x="4" y="179" rx="5" ry="5" width="594" height="233" /> 
    <circle cx="27" cy="452" r="19" /> 
    <circle cx="77" cy="452" r="19" /> 
    <circle cx="129" cy="452" r="19" /> 
    <rect x="157" y="444" rx="0" ry="0" width="89" height="11" /> 
    <rect x="11" y="486" rx="0" ry="0" width="138" height="13" /> 
    <rect x="555" y="438" rx="0" ry="0" width="43" height="22" /> 
    <rect x="7" y="514" rx="0" ry="0" width="594" height="5" /> 
    <circle cx="34" cy="570" r="28" /> 
    <rect x="83" y="558" rx="0" ry="0" width="123" height="10" /> 
    <rect x="83" y="576" rx="0" ry="0" width="150" height="10" /> 
    <rect x="549" y="548" rx="0" ry="0" width="21" height="16" /> 
    <rect x="580" y="548" rx="0" ry="0" width="19" height="16" /> 
    <rect x="13" y="613" rx="0" ry="0" width="490" height="9" /> 
    <rect x="7" y="644" rx="5" ry="5" width="594" height="233" /> 
    <circle cx="30" cy="917" r="19" /> 
    <circle cx="80" cy="917" r="19" /> 
    <circle cx="132" cy="917" r="19" /> 
    <rect x="160" y="909" rx="0" ry="0" width="89" height="11" /> 
    <rect x="14" y="951" rx="0" ry="0" width="138" height="13" /> 
    <rect x="558" y="903" rx="0" ry="0" width="43" height="22" /> 
    <rect x="10" y="979" rx="0" ry="0" width="594" height="5" />
  </ContentLoader>
)

export default BookmarkLoader;
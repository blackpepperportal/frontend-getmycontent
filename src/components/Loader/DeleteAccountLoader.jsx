import React from "react"
import ContentLoader from "react-content-loader"

const DeleteAccountLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={350}
    viewBox="0 0 1200 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="130" rx="0" ry="0" width="0" height="9" /> 
    <rect x="191" y="17" rx="0" ry="0" width="195" height="10" /> 
    <rect x="10" y="38" rx="0" ry="0" width="590" height="5" /> 
    <rect x="10" y="150" rx="0" ry="0" width="106" height="10" /> 
    <rect x="10" y="178" rx="0" ry="0" width="150" height="10" /> 
    <rect x="10" y="204" rx="0" ry="0" width="590" height="5" /> 
    <rect x="203" y="244" rx="20" ry="20" width="243" height="48" /> 
    <rect x="184" y="73" rx="0" ry="0" width="213" height="15" /> 
    <rect x="131" y="106" rx="0" ry="0" width="369" height="5" />
  </ContentLoader>
)

export default DeleteAccountLoader;
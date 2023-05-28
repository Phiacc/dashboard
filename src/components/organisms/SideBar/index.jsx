import React from 'react'
// import { IconText } from "../../molecules/IconText/index";
import { Icon } from "../../atoms/icons/index";

export const Sidebar = (props) => {
if (props.type === "sidebar") {
    return (
    <div className='flex flex-column '>
       <Icon type='welcome'/>
      </div>
      
  )
}
}
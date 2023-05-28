import React from 'react'
import { Icon } from "../../atoms/icons";

export const IconText = (props) => {
 if (props.type === "icontext1") {
  return (
    <div className='flex flex-column' >
      <div className='flex'>
        <Icon type='welcome'/><small className='side-text'>Home</small>
      </div>
      </div>
      )
     }
}
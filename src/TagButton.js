import React from 'react'
import './TagButtonStyle.css';
const TagButton = ({title,children}) => {
  return (
    <div>
        <button className='tagButton'>
          {title}
          {children}
          </button>
        
        
    </div>
  )
}

export default TagButton
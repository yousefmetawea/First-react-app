import React from 'react'
import TagButton from './TagButton';

const Sidemenue = () => {
  return (
    <div style={{margin:"25px",  border:"5px solid teal"}}>
        <TagButton title="comment 1 ">
          <div>
            <span>😂😂😂</span>
          </div>
        </TagButton>
        <TagButton title="comment 2 ">
          <div>
            <img src="https://example.com/heart-emoji.png" alt="heart emoji" style={{width:"50px"}}/>
          </div>
        </TagButton>
        <TagButton title="comment 3 ">
          <div>
            <span>😍😍😍</span>
          </div>
        </TagButton>
        <TagButton title="pro you are absolutely right ">
          <div>
            <span>😎😎😎</span>
          </div>
        </TagButton>
    </div>
  )
}

export default Sidemenue
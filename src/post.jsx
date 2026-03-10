import React from 'react'

const Post = ({postName="no title", postBody="no content has been provided"}) => {
  return (
    <div style={{padding :"10px", border:"5px solid teal", margin:"25px"}}>
        <h2 >{postName}</h2>
        <hr />
        <p>{postBody}</p>
    </div>
  )
}

export default Post
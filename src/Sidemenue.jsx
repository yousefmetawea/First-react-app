import React from 'react'
import TagButton from './TagButton';

const Sidemenue = () => {

  
  const categories =[
    {
      id:"1",
      title :"comment 1",
      c: (<div>
            <span>😂😂😂</span>
          </div>)
    },

    {
      id:"2",
      title :"comment 2",
      c: (<div> 
            <img src="https://example.com/heart-emoji.png" alt="heart emoji" style={{width:"50px"}}/> 
            </div>)
    },
    {
      id:"3", 
      title :"comment 3",
      c: (<div>
            <span>😍😍😍</span>
          </div>)
    },
    {      id:"4",
      title :"pro you are absolutely right",
      c: (<div>
            <span>😎😎😎</span>
          </div>)
    }

  ]

  const categoryList = categories.map((category)=>{
    return <TagButton key={category.id} title={category.title}   >
      {category.c}
    </TagButton>
  })

  
  return (
    <div style={{margin:"25px",  border:"5px solid teal"}}>
        {categoryList}


        {/* <TagButton title="comment 1 ">
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
        </TagButton> */}

        
    </div>
  )
}

export default Sidemenue
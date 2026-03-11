import Header from './Header';
import Sidemenue from './Sidemenue';
import Post from './Post';

function App() {

  const posts= [
      {
        id :"1" ,
        postName:"yousef hazem",
        postBody:"yeh that is right "
      },
      {
        id :"2" ,
        postName:"study react",
        postBody:"second post content "
      },{
        id :"3" ,
        postName:"yousef hazem",
        postBody:"third post content "
      },
    ]
    const PostList=posts.map((post)=>{
      return <Post key={post.id} postName={post.postName} postBody={post.postBody} />
    })
  return (
    
    <div className="App">
      <Header />
      <div style={{display:"flex", justifyContent:"center"}}>
      {/* post and side menue container  */}
      <div style={{display:"flex",width:"60%"}}>

      {/* start of post  container */}
      <div style={{width:"70%"}}>
        {PostList}


      </div>
        {/* end of post  container */}
      <div style={{width:"30%"}}>
        <Sidemenue />
      </div>

      
    </div>
    </div>
    </div>
  );
}

export default App;

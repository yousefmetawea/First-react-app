import Header from './Header';
import Sidemenue from './Sidemenue';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display:"flex", justifyContent:"center"}}>
      {/* post and side menue container  */}
      <div style={{display:"flex",width:"60%"}}>

      {/* start of post  container */}
      <div style={{width:"70%"}}>
        <Post postName="yousef hazem" postBody="yeh that is right "/>
        <Post postName="study  react" postBody="second post content"/>
        <Post postName="third title" postBody="third post content"/>
        <Post />
        <Post />

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

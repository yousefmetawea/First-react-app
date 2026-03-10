import Header from './Header';
import Sidemenue from './Sidemenue';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Header />

      {/* start of post  container */}
      <div style={{width:"70"}}>
        <Post />
        <Post />
        <Post />

      </div>
        {/* end of post  container */}
      <Sidemenue />

      

    </div>
  );
}

export default App;

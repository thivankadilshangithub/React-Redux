import '../App.css';
import ButtonComponent from './ButtonComponent';
import PostList from './PostList';
import SelectedPost from './SelectedPost';

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <ButtonComponent />
      <br>
      </br>
      <PostList />
      <br>
      </br>
      <SelectedPost />
    </div>
  );
}

export default App;

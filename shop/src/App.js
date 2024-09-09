import './App.css';
import Nav from '../src/components/Nav';
import Home from './components/productsinfo/PI';
import Comment from './components/productsinfo/CommentBox';
import Footer from './components/footer';
import COm from './components/productsinfo/commonProducts';


function App() {
  return (<>
      <Nav />
      <Home />
      <Comment />
      <COm />

      <div class="pt-4"><Footer /></div>
  </>);
}

export default App;

import './App.css';
import Nav from '../src/components/Nav';
<<<<<<< HEAD
import Home from './components/productsinfo/PI';
import Comment from './components/productsinfo/CommentBox';
import Footer from './components/footer';
import COm from './components/productsinfo/commonProducts';
=======
import Home from './components/Home';
import Hoe from './components/products/products';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 0e5a90ed1752c58d847db07e041ee5bc06326818


function App() {
  return (<>
<<<<<<< HEAD
      <Nav />
      <Home />
      <Comment />
      <COm />

      <div class="pt-4"><Footer /></div>
=======
    <Nav />
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </Router>
    <Footer />
>>>>>>> 0e5a90ed1752c58d847db07e041ee5bc06326818
  </>);
}

export default App;

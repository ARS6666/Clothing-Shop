import './App.css';
import Nav from '../src/components/Nav';
import Home from './components/Home';
import Hoe from './components/products/products';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (<>
    <Nav />
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </Router>
    <Footer />
  </>);
}

export default App;

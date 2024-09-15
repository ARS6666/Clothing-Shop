import './App.css';
import Nav from '../src/components/Nav';
import Home from './components/Home';
import PI from './components/productsinfo/ProductPage';
import Products from './components/products/ProductList';
import Signin from './components/authentication/signin';
import Login from './components/authentication/login';
import Panel from './components/account/panel';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prdctlist from './components/Features/PrdctList';
import About from './components/CornerPages/About';


function App() {
  return (<>
    <Nav />
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/pi' element={<PI />} />
        <Route path='/products' element={<Products />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/prdct' element={<Prdctlist />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    <Footer />
  </>);
}

export default App;
import './App.css';
import Nav from '../src/components/Nav';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';
import Test from './components/loading/loading';
import PI from './components/ProductPage';
import Products from './components/ProductList';
import Cart from './components/account/Cart/cart';
import Signin from './components/authentication/signin';
import Login from './components/authentication/login';
import Panel from './components/account/account';
import PrivateRoute from "./components/authentication/PrivateRoute";
import RefreshToken from "./components/authentication/RefreshToken";
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Prdctlist from './components/Features/PrdctList';
import About from './components/CornerPages/About';
import CustomCarousel from './components/products/Offprdct';
import 'bootstrap/dist/css/bootstrap.min.css';
/* index.css or App.css */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const AppContent = () => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register', '*', '/panel ', '/test'];
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      <div className="main-content  scrollable">
        <Nav />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/pi' element={<PI />} />
          <Route path='/test' element={<Test />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cc' element={<CustomCarousel />} />
          <Route path='/account' element={
            <PrivateRoute>
              <Panel />
            </PrivateRoute>} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/prdct' element={<Prdctlist />} />
          <Route path='/cart' element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>} />
          <Route path='/about' element={<About />} />
        </Routes>
        {showFooter ? <Footer /> : null}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
      <RefreshToken />
    </Router>
  );
}

export default App;
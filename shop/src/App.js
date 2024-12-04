import './App.css';
import Nav from '../src/components/Nav';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';
import Test from './components/account/orders/order';
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
import 'bootstrap/dist/css/bootstrap.min.css';



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
          <Route path='/account' element={
            <PrivateRoute>
              <Panel />
            </PrivateRoute>} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/prdct' element={<Prdctlist />} />
          <Route path='/cart' element={
            <PrivateRoute>
              <div class="col-md-12 justify-content-center d-flex " style={{ backgroundColor: "#f8f9fa" }}>
                <div class="col-md-8 ">
                  <Cart />
                </div>
              </div>
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
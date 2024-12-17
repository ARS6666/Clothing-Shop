import './App.css';
import Nav from '../src/components/Nav/Nav';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';
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
import React, { useState, useEffect } from 'react';



const AppContent = () => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/signin', '/test', '/account ', '/cart'];
  const showFooter = !hideFooterPaths.includes(location.pathname);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  };

  return (
    <>
      <div className={theme === "dark" ? "main-content scrollable dark" : "main-content scrollable"}>
        <button className="btn btn-lg" onClick={toggleTheme}>dssscsdfds</button>
        <Nav theme={theme} />
        <Routes>
          <Route path='' element={<Home theme={theme}/>} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/pi' element={<PI theme={theme}/>} />
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
        {showFooter ? <Footer theme={theme}/> : null}
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
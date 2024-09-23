import './App.css';
import Nav from '../src/components/Nav';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';
import Test from './components/productsinfo/CommentBox';
import PI from './components/productsinfo/ProductPage';
import Products from './components/products/ProductList';
import Signin from './components/authentication/signin';
import Login from './components/authentication/login';
import Panel from './components/account/account';
import AuthProvider from './context/AuthContext';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Prdctlist from './components/Features/PrdctList';
import About from './components/CornerPages/About';

const AppContent = () => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register', '*'];
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      <div className="main-content">
        {/* <Nav /> */}
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/pi' element={<PI />} />
          <Route path='/test' element={<Test />} />
          <Route path='/products' element={<Products />} />
          <Route path='/panel' element={<Panel />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/prdct' element={<Prdctlist />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;



// const AppContent = () => {
//   const location = useLocation();
//   const hideFooterPaths = ['/login', '/register', '*'];
//   const showFooter = !hideFooterPaths.includes(location.pathname);

//   return (
//     <>
//     <Nav />
//       <Router>
//         <Routes>
//
//         </Routes>
//       </Router>
//       <div class="pt-2">
//         {showFooter && <Footer />}
//       </div>
//     </>
//   );
// }
// function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }

// export default App;
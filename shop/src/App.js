import "./App.css";
import Nav from "../src/components/Nav";

import Home from "./components/Home";
import PI from "./components/productsinfo/ProductPage";
import ProductList from "./components/products/ProductList";
import Footer from "./components/footer";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  // const location = useLocation();
  // const hideFooterPaths = ["/login", "/register", "*"];
  // const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/pi" element={<PI />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

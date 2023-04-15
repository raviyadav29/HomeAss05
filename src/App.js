import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Contact from "./Component/Contact"
import Product from './Component/Product';
import { Route, Routes } from "react-router-dom"
import ProductDetail from './Component/ProductDetail';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product/>} />
        <Route path="productdetails/:id" element={<ProductDetail/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './components/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Cart from './components/Cart';
import Admin from './pages/Admin';
import AddProduct from './components/AddProduct';
//import Cart_product from './components/Cart_product';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="product" element={<Product />} />  */}
            <Route path="product/:id" element={<SingleProduct />} />            
            <Route path="cart" element={<Cart />} />
            <Route path="admin" element={<Admin />} />
            <Route path="start-selling" element={<AddProduct />} />

          </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

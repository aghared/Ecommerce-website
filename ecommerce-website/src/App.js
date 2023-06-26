import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import componets here
import Navbar from './componet/navbar';
//import pages here 
import { ProductPageHome  } from './pages/Product_Page_Home';
import { ProductPage } from './pages/Product_Page';
import { ShoppingCart } from './pages/ShoppingCart';
import { CheckoutPage } from './pages/CheckoutPage';

function App() {
  return (
   
  <React.Fragment>
  <nav><Navbar/></nav>
  
  <Routes>
    {/* Add pages here*/}
    <Route path="/" element={<ProductPageHome />}/>
    <Route path="/Product_Page/:id" exact element={<ProductPage/>} />
    <Route path="/checkout/" exact element={<CheckoutPage/>} />
    <Route path="/shoppingcart/" exact element={<ShoppingCart/>} />
    
    

  </Routes>
  </React.Fragment>
  )
}

export default App;

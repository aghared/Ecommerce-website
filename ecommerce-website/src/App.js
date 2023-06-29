import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import componets here
import Navbar from './componet/navbar';
import Footer from './componet/Footer'
//import pages here 
import { ProductPageHome  } from './pages/Product_Page_Home';
import  ProductPage  from './pages/Product_Page';
import { ShoppingCart } from './pages/ShoppingCart';
import { CheckoutPage } from './pages/CheckoutPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { SignInPage } from './pages/SignInPage';
import SearchResults from './pages/SearchResults';
import { AboutUsPage } from './pages/AboutUsPage';


function App() {
  return (
   
  <React.Fragment>
  <nav><Navbar/></nav>
  
  <Routes>
    {/* Add pages here*/}
    <Route path="/home" element={<ProductPageHome />}/>
    <Route path="/Product_Page/:id" exact element={<ProductPage/>} />
    <Route path="/checkout/" exact element={<CheckoutPage/>} />
    <Route path="/shoppingcart/" exact element={<ShoppingCart/>} />
    <Route path="/signup" element={<RegistrationPage />} />
    <Route path="/contact" element={<ContactUsPage />} />
    <Route path="/" element={<SignInPage />} />
    <Route path="/search" element={<SearchResults />} />
    <Route path="/about" element={<AboutUsPage />} />

    
    

  </Routes>

  <footer> <Footer/> </footer>
  </React.Fragment>

  )


}

export default App;

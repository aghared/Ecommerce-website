import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import componets here
import Navbar from './componet/navbar';
//import pages here 
import { ProductPageHome  } from './pages/Product_Page_Home';
import { ProductPage } from './pages/Product_Page';

function App() {
  return (
   
  <React.Fragment>
  <nav><Navbar/></nav>
  
  <Routes>
    {/* Add pages here*/}
    <Route path="/" element={<ProductPageHome />}/>
    <Route path="/Product_Page/:id" exact element={<ProductPage/>} />

  </Routes>
  </React.Fragment>
  )
}

export default App;

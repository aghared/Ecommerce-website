import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

//import pages here 
import { ProductPageHome  } from './pages/Product_Page_Home';
import { ProductPage } from './pages/Product_Page';

function App() {
  return (
  <React.Fragment>
  <nav>
    <ul>
      {/* Add navbar link here */}
      <li><Link to="/"> Product Home</Link></li>
    </ul>
  </nav>
  <Routes>
    {/* Add pages here*/}
    <Route path="/" element={<ProductPageHome />}/>
    <Route path="/Product_Page" element={<ProductPage/>} />

  </Routes>
  </React.Fragment>
  )
}

export default App;

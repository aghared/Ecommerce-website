import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from "./Components/Header";
import CheckoutPage from "./Components/CheckoutPage";
import ShoppingCart from "./Components/ShoppingCart";

import { Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
    <Routes>
        {/* <ShoppingCart /> */}
        <Route path="/" element={<ShoppingCart/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
      
    );
}



export default App;


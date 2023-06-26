import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

import "./style2.css";
//import "./Product_Page_Home_Style.css";

import UserCart from "../componet/userCart";

import { Link } from "react-router-dom";
import data from '../data/db.json';

export function ShoppingCart() {

    const userId = 1; //set the userID to 1 just so we can go through the code, ideally this would be fetched based on login
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        //obtains the user based on the userID
        const user = data.users.find((user) => user.id === userId);
        //initialize the variables and set them to 0 so that they are ready for summations
        let totalItems = 0;
        let totalPrice = 0;

        //react for loop to iterate through each item in the user's cart
        user.cart.forEach((item) => {
            //obtains the product based on the item.productID so that we can obtain the price
            const product = data.products.find((product) => product.id === item.productId);
            //item quantity is found from the user's cart and is then multiplied to obtain total price
            totalItems += item.quantity;
            totalPrice += product.price * item.quantity;
        });

        setTotalItems(totalItems);
        setTotalPrice(totalPrice);
        
    }, [userId]);

    //delete task
    //set the userCart state
    const [userCart, setUserCart] = useState([]);

    //when you fetch data or when userId changes, update userCart.
    useEffect(() => {
        const user = data.users.find((user) => user.id === userId);
        setUserCart(user.cart);
    }, [userId]);

    const deleteTask = (productId) => {
        console.log('delete', productId)
        const newUserCart = userCart.filter((item) => item.productId !== productId)
        setUserCart(newUserCart);
    }


    return (
      <div>
        
        {/* the custom margin pushes the shopping cart box down by 100px */}
        <div className="container custom-margin"> {/* green border */}
            <div className="border border-success-subtle border-2 py-3 mb-4">
                
                <h1 className="text-center">Shopping Cart</h1>
                <table className="table table-striped"> 
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                
                <tbody id="cart-table-body">
                    {/* Cart items will be inserted here using some javascript and json */}
                    {/* below we include usercart and the userID to display their cart*/}
                    <UserCart userId={userId} data={data} deleteTask={deleteTask}/>
                </tbody>
                </table>
            </div>
            {/* total price should show accumulated price and item quantity should show total items */}

            <div className="total-price">
                <h3>Total: $<span id="total-price">{totalPrice.toFixed(2)}</span></h3>
                <h6>Item quantity: {totalItems}</h6>
            </div>
            
            {/* checkout button but it still needs to link to the checkout page */}
            <div className="checkout-button">
                <Link to="/checkout" className="btn btn-success">Head to Checkout</Link>
            </div>
        </div>


      </div>
    );
}

//export default ShoppingCarts;


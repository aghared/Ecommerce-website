import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import "../CSS/style2.css";
//import "./Product_Page_Home_Style.css";
import UserCart from "../componet/userCart";
import { Link } from "react-router-dom";
import data from '../data/db.json';

export function ShoppingCart() {
    const userId = 1; //set the userID to 1 just so we can go through the code, ideally this would be fetched based on login
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8000/api/users/1/')
        .then(response => response.json())
        .then(data => {
            let totalItems = 0;
            let totalPrice = 0;
            //react for loop to iterate through each item in the user's cart
            data.cart.forEach((item) => {
                //item quantity is found from the user's cart and is then multiplied to obtain total price
                totalItems += item.quantity;
                totalPrice += item.product.productPrice * item.quantity;
            });
            setTotalItems(totalItems);
            setTotalPrice(totalPrice);
            setUserCart(data.cart);
        });
    }, [totalItems]);

    //delete task
    //set the userCart state and method
    const [userCart, setUserCart] = useState([]);

    //when you fetch data or when userId changes, update userCart.
    useEffect(() => {
        const user = data.users.find((user) => user.id === userId);
        setUserCart(user.cart);
    }, [userId]);
    const deleteTask = async (index) => {
        const cartId = userCart[index].id; //get the cart item ID based on the index
        console.log(cartId)

        const itemToDelete = await fetch(`http://localhost:8000/api/cart/${cartId}/`, {
        method: 'DELETE',
        });
      
        //update the user cart with item deleted
        const updatedUserCart = userCart.filter(item => item.id !== cartId);
        const updatedTotalItems = updatedUserCart.reduce((total,item) => total + item.quantity, 0); //i got this from a post i found on stackoverflow
        const updatedTotalPrice = updatedUserCart.reduce((total,item) => total + (item.price * item.quantity), 0); //i got this from a post i found on stackoverflow

        //update the totals
        setUserCart(updatedUserCart);
        setTotalItems(updatedTotalItems);
        setTotalPrice(updatedTotalPrice);
      };


    return (
      <div>
        {/* the custom margin pushes the shopping cart box down by 100px */}
        <div className="container custom-margin"> {/* green border */}
            <div className="border border-dark border-2 py-3 mb-4">
                
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
                    <UserCart userCart={userCart} deleteTask={deleteTask}/>                
                </tbody>
                </table>
            </div>
            {/* total price should show accumulated price and item quantity should show total items */}
            <div className="right-align">
                <div className="total-price">
                    <h3>Total: $<span id="total-price">{totalPrice.toFixed(2)}</span></h3>
                    <h4>Item quantity: {totalItems}</h4>
                </div>
                {/* checkout button but it still needs to link to the checkout page */}               
            </div>
            <div className="checkout-button, right-align-button">
                    <Link to="/checkout" className="btn custom-btn">Head to Checkout</Link>
            </div> 
        </div>
      </div>
    );
}

//export default ShoppingCarts;


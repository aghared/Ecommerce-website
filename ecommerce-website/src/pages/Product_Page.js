import React from 'react';
import { useParams, Link } from 'react-router-dom';
import product from '../data/product-data.json' 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/product-page.css'

export function ProductPage(){
    const {id} = useParams()
    return (
    
        <div className="Product-Page">
            <div id={"image-div"}>
                <img id={"product-image"} src ={product[id].image} alt={""}width="400px" height="400px" />
            </div>

            <div id={"info"}>
            <h2 id="product-name"> {product[id].productName} </h2>
            <h2 id="price"> {"$" + product[id].price}</h2>
            <p id={"product-description"}> {product[id].prodcutDescription}</p>
            <div className="add-cart">
                <form >
                    <label id={"qty-lable"} for="Qty"> Qty</label>
                    <select name="Qty" id="Qty">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                    </select>
                    
                    <div className="add-cart-btn">
                        <Link to="/shoppingcart" className="btn btn-success">Add Cart</Link>
                    </div>
                </form>
           
            
            </div>
            </div>
        </div>
        
    
    )
}
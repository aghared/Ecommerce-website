import React from 'react';
import { useParams } from 'react-router-dom';
import product from '../data/product-data.json' 

export function ProductPage(){
    const {id} = useParams()
    return (
    
        <div className="Product-Page">
            
            <img id={"product-image"} src ={product[id].image} alt={""}width="400px" height="400px" />
            <h2 id="product-name"> {product[id].productName} </h2>
            <h2 id="price"> {product[id].price}</h2>
            <p id={"product-description"}> {product[id].prodcutDescription}</p>
            <div className="add-cart">
                <form >
                    <label for="Qty"> Qty</label>
                    <select name="Qty" id="Qty">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                    </select>
                    
                    <input type="submit" value="Add Cart "/>
                </form>
           
            
            </div>
        
        </div>
        
    
    )
}
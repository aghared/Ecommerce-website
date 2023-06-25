import React from 'react';
import { useParams } from 'react-router-dom';

const product = [
 {
    id: 0,
    image:'/assets/Products/sausage-thing.jpg',
    productName: "Item 0",
    price: 13,
    prodcutDescription: "This is Item 0"
  },
  {
    id: 1,
    image:'/assets/Products/cake.jpeg',
    productName: "Item 1",
    price: 23,
    prodcutDescription: "This is Item 1"
  },
 {
    id: 2,
    image:'/assets/Products/pasta.jpeg',
    productName: "Item 2",
    price: 33,
    prodcutDescription: "This is Item 2"
},
 {
    id: 3,
    image:'/assets/Products/pizza.jpeg',
    productName: "Item 3",
    price: 43,
    prodcutDescription: "This is Item 3"

},
 {
    id: 4,
    image:'/assets/Products/rice-and-noodles.jpeg',
    productName: "Item 4",
    price: 53,
    prodcutDescription: "This is Item 4"
}

]

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
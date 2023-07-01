import React, { useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/product-page.css'

const ProductPage = ({ match }) =>  {
    const userId = 1;
    const {id} = useParams()
    let [product, setProduct] = useState(null)
 

    useEffect(() => {
        getProduct()

    })
    let getProduct = async () => {
        let response = await fetch(`/api/product/${id}`) 
        let data = await response.json()

        setProduct(data)
    }
    const addCart = async () => {
        
        fetch(`/api/product/add/${userId}/${id}/`, {
        method: 'POST',
        'headers':{
            'Content-Type': 'application/json'
        }
        });
    }
    return (
    
        <div className="Product-Page">
            <div id={"image-div"}>
                <img id={"product-image"} src ={product?.productImages} alt={""}width="400px" height="400px" />
            </div>

            <div id={"info"}>
            <h2 id="product-name"> {product?.productName} </h2>
            <h2 id="price"> {"$" + product?.productPrice}</h2>
            <p id={"product-description"}> {product?.productDescription}</p>
            <div className="add-cart">
                <form >
                    <label id={"qty-lable"} for="Qty"> Qty</label>
                    <select name="Qty" className="Qty" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    
                    <div className="add-cart-btn">
                        <Link to="/shoppingcart" className="btn custom-btn" onClick={addCart}>Add Cart</Link>
                    </div>
                </form>
           
            
            </div>
            </div>
        </div>
        
    
    )
}
export default ProductPage;

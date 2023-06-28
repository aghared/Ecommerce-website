import React, { useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/product-page.css'

const ProductPage = ({ match }) =>  {
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
export default ProductPage;

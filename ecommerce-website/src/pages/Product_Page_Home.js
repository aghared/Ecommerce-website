import React, { useEffect, useState} from 'react';
import '../CSS/Product_Page_Home_Style.css'
import { Link } from 'react-router-dom';



export function ProductPageHome(props){
    
    let [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()

    })
    let getProducts = async () => {
        let response = await fetch('/api/product/') 
        let data = await response.json()

        setProducts(data)
    }
     return   (  
    <React.Fragment>
    <div id="Recomendation">
        <h2 id="Recomendation"> Recomendation</h2>
        <div className ="scroll-container">
            <div id="scroll-container-Recomendation">
                {
                    products.map((product, index) => { 
                            return(
                                <Link key={index} to={"/Product_Page/"+product.id}><img src={product.productImages} alt={""}/></Link >
                            )

                        } 
                    )

                }
                            
            </div>       
        </div>
    </div>
    <div id="history">
        <h2 id="history"> Search History</h2>
        <div className = "scroll-container">
            <div id="scroll-container-History">
                {
                    products.map((product, index) => { 
                           
                            return(
                                <Link key={index} to={"/Product_Page/"+product.id} ><img src={product.productImages} alt={""}/></Link >
                            )

                        } 
                    )

                }
            </div>
            
        </div> 
    </div>
   
    </React.Fragment>
    )
}

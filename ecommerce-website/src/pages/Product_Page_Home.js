import React from 'react';
import '../CSS/Product_Page_Home_Style.css'
import { Link } from 'react-router-dom';
import product from '../data/product-data.json' 


export function ProductPageHome(props){
    
   // const prod = JSON.parse(product) 
    return   (  
    <React.Fragment>
    <div id="Recomendation">
        <h2 id="Recomendation"> Recomendation</h2>
        <div className ="scroll-container">
            <div id="scroll-container-Recomendation">
                {
                    product.map(item => { 
                            return(
                                <Link to={"/Product_Page/"+item.id}><img src={item.image} alt={""}/></Link >
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
                    product.map(item => { 
                           
                            return(
                                <Link to={"/Product_Page/"+item.id} ><img src={item.image} alt={""}/></Link >
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

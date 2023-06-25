import React from 'react';
import './Product_Page_Home_Style.css'
import { Link } from 'react-router-dom';

const product = ['/assets/Products/cake.jpeg','/assets/Products/pasta.jpeg','/assets/Products/pizza.jpeg','/assets/Products/rice-and-noodles.jpeg']
export function ProductPageHome(){
    return   (  
    <React.Fragment>
    <div id="Recomendation">
        <h2 id="Recomendation"> Recomendation</h2>
        <div className ="scroll-container">
            <div id="scroll-container-Recomendation">
                {
                    product.map(item => { 
                            return(
                                <Link to="/Product_Page"><img src={item} alt={""}/></Link >
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
                                <Link to="/Product_Page"><img src={item} alt={""}/></Link >
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

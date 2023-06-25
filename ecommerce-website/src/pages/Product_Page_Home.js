import React from 'react';
import './Product_Page_Home_Style.css'
import { Link } from 'react-router-dom';


const product = [ {
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
export function ProductPageHome(props){
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

import React from 'react';
import style from './Product_Page_Home_Style.css'
import { Link } from 'react-router-dom';
export function ProductPageHome(){
    return   (  
    <React.Fragment>
    <div id="Recomendation">
        <h2 id="Recomendation"> Recomendation</h2>
        <div className ="scroll-container">
            <div id="scroll-container-Recomendation">
                <Link to="/Product_Page"><img src={'/assets/Products/cake.jpeg'} /></Link>
                <img src={'/assets/134.png'}alt={"133.png"} />
                <img src={'/assets/135.png'}alt={"133.png"} />
                <img src={'/assets/136.png'}alt={"133.png"} />
                <img src={'/assets/196.png'}alt={"133.png"} />
                <img src={'/assets/197.png'}alt={"133.png"} />               
            </div>       
        </div>
    </div>
    <div id="history">
        <h2 id="history"> Search History</h2>
        <div className = "scroll-container">
            <div id="scroll-container-History">
          
                <img src='/assets/133.png' alt={"133.png"} />
                <img src='/assets/134.png'  alt={"133.png"}/>
                <img src='/assets/135.png'  alt={"133.png"}/>
                <img src='/assets/136.png'  alt={"133.png"}/>
                <img src='/assets/196.png' alt={"133.png"} />
                <img src='/assets/197.png'  alt={"133.png"}/>
                
            </div>
            
        </div> 
    </div>
   
    </React.Fragment>
    )
}

import React from 'react';
import style from './Product_Page_Home_Style.css'
export function ProductPageHome(){
    return   (  
    <React.Fragment>
    <div id="Recomendation">
        <h2 id="Recomendation"> Recomendation</h2>
        <div className ="scroll-container">
            <div id="scroll-container-Recomendation">
                <img src={'/assets/133.png'} />
                <img src={'/assets/134.png'} />
                <img src={'/assets/135.png'} />
                <img src={'/assets/136.png'} />
                <img src={'/assets/196.png'} />
                <img src={'/assets/197.png'} />               
            </div>       
        </div>
    </div>
    <div id="history">
        <h2 id="history"> Search History</h2>
        <div className = "scroll-container">
            <div id="scroll-container-History">
          
                <img src='/assets/133.png'  />
                <img src='/assets/134.png'  />
                <img src='/assets/135.png'  />
                <img src='/assets/136.png'  />
                <img src='/assets/196.png'  />
                <img src='/assets/197.png'  />
                
            </div>
            
        </div> 
    </div>
   
    </React.Fragment>
    )
}

function addImageLink(image,link){
    const image_link = document.createElement('a')
    image_link.setAttribute("href", link)
    image_link.setAttribute('id', link)
    document.getElementById('scroll-container-Recomendation').appendChild(image_link)

    const image_el = document.createElement('img')
    image_el.setAttribute('src', image)
    document.getElementById(link).appendChild(image_el)
    
} 
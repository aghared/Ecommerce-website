import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import product from '../data/product-data.json' 

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); //used ChatGPT for help on these 3 lines
  const searchTerm = searchParams.get('term');

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
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
  );
};

export default SearchResults;
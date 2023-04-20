import React from 'react';
import './Advert.css';

const Advert = (adv) => {
    return (
        <div className="add">
            <div className="productInfo">
            
                <div className="productName">
                    <h1>{adv.name}</h1>
                </div>

                <div className = "productData">
                    <p> Se
                        {adv.sale ? (<span id="isSale" > vende </span>):(<span id="isSale" >compra </span>)}este producto por:</p>
                    <h2>{adv.price} €</h2>   
                </div>

                <div className="product-img">
                    {adv.photo} 
                </div>

                <div className = "typeTag">
                        <p>Tags: {adv.tags}</p>
                </div>
            </div>
        </div>
    )
};

export default Advert;
import React from 'react';
import './Advert.css';
import defaultPhoto from '../../assets/Sin_imagen.jpg';

const Advert = (advs) => {
    const advDate = new Date(advs.createdAt);

    const photos = (photo) => {
        if (photo) {
            return advs.photo;
        } else {
            return defaultPhoto;
        }
    };

    return (
        <div className='productInfo'>
            <div className='productName'>
                <h1>{advs.name}</h1>
                <p>Created at: {`${advDate.toUTCString()}`}</p>
            </div>

            <div className='productData'>
                <p>
                    {' '}
                    Se
                    {advs.sale ? (
                        <span id='isSale'> vende </span>
                    ) : (
                        <span id='isSale'> compra </span>
                    )}
                    este producto por:
                </p>
                <h2>{advs.price} €</h2>
            </div>

            <div className='product-img'>
                <img
                    className='productPhoto'
                    src={photos(advs.photo)}
                    alt='imagen del producto en venta'
                ></img>
            </div>

            <div className='typeTag'>
                <p>Tags: {advs.tags}</p>
            </div>
        </div>
    );
};

export default Advert;

import React from 'react';
import './Advert.css';

const Advert = (advs) => {
  const advDate = new Date(advs.createdAt)
  return (
    <div className='add'>
      <div className='productInfo'>
        <div className='productName'>
          <h1>{advs.name}</h1>
          <p>Created at: {`${advDate.toUTCString()}`}</p>
          <p>Id: {advs.id}</p>
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

        <div className='product-img'>{advs.photo}</div>

        <div className='typeTag'>
          <p>Tags: {advs.tags}</p>
        </div>
      </div>
    </div>
  );
};

export default Advert;

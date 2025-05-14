import React from 'react';
import './Productcard.scss';

const ProductCard = ({ title, desc, img }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>Request Sample</button>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.scss';

const products = [
  {
    title: 'Shampoo',
    desc: 'Nourishing shampoo for all hair types.',
    img: 'https://via.placeholder.com/150'
  },
  {
    title: 'Toothpaste',
    desc: 'Fresh breath and white teeth.',
    img: 'https://via.placeholder.com/150'
  },
  {
    title: 'Detergent',
    desc: 'Powerful cleaning with a fresh scent.',
    img: 'https://via.placeholder.com/150'
  }
];

const ProductSection = () => {
  return (
    <section className="product-section" id="products">
      {products.map((p, i) => (
        <ProductCard key={i} title={p.title} desc={p.desc} img={p.img} />
      ))}
    </section>
  );
};

export default ProductSection;

import React from 'react';
import HeroSection from './Herosection';
import ProductCard from './Productcard';
import Footer from './Footer';
import './Home.scss';

const Home = () => (
  <>
    <HeroSection />
    <section id="products" className="products">
      <ProductCard title="Shampoo" desc="Gentle and nourishing for all hair types." img="https://via.placeholder.com/150" />
      <ProductCard title="Toothpaste" desc="Fresh breath and white teeth guaranteed." img="https://via.placeholder.com/150" />
      <ProductCard title="Detergent" desc="Powerful cleaning with a fresh scent." img="https://via.placeholder.com/150" />
    </section>
    <Footer />
  </>
);

export default Home;

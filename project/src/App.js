import React from 'react';
import './App.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/Productsection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;

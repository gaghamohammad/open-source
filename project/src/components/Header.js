import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>HomeCare Samples</h1>
      <nav>
        <a href="#products">Products</a>
        <a href="#request">Request Sample</a>
      </nav>
    </header>
  );
};

export default Header;

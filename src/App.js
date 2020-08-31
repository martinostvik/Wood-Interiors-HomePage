import React, {useEffect} from 'react';
import {WOW} from 'wowjs'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Warranty from './components/Warranty';
import Order from './components/Order';
import Price from './components/Price';
import Footer from './components/Footer';
import './App.css';
import './styles/animated.css';

function App() {

  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: true,
      live: true
  })

  wow.init();
  });

  return (
    <div className="App">
    <Navbar />
    <Home />
    <Product />
    <About />
    <Contact />
    <Warranty />
    <Order />
    <Price />
    <Footer />
    </div>
  );
}

export default App;

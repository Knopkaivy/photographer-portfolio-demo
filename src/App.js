import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import PhotoCardDetailed from './components/PhotoCardDetailed';
import Checkout from './components/Checkout';
import Bio from './components/Bio';
import './styles/global.css';
import { useDispatch } from 'react-redux';
import { closeCart } from './features/cart/cartSlice';

function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let goToCheckout = () => {
    dispatch(closeCart());
    navigate('checkout');
  };

  return (
    <div className="App">
      <Header />
      <Cart goToCheckout={goToCheckout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="portfolio/:galleryId" element={<Gallery />} />

        <Route
          path="portfolio/:galleryId/:imageId"
          element={<PhotoCardDetailed goToCheckout={goToCheckout} />}
        />
        <Route path="bio" element={<Bio />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

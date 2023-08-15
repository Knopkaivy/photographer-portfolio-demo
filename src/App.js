import React, { useState } from 'react';
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

function App() {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [overlayInputVal, setOverlayInputVal] = useState('/');
  const [cartIsOpen, setCartIsOpen] = useState(false);

  let navigate = useNavigate();

  let goToCheckout = () => {
    closeCart();
    navigate('checkout');
  };

  let openOverlay = (val) => {
    setOverlayInputVal(val);
    setOverlayIsOpen(true);
  };

  let closeOverlay = () => {
    setOverlayInputVal('/');
    setOverlayIsOpen(false);
  };

  let openCart = () => {
    setCartIsOpen(true);
  };

  let closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <div className="App">
      <Header openCart={openCart} />
      <Cart
        cartIsOpen={cartIsOpen}
        closeCart={closeCart}
        goToCheckout={goToCheckout}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route
          path="portfolio/:galleryId"
          element={
            <Gallery
              overlayIsOpen={overlayIsOpen}
              overlayInputVal={overlayInputVal}
              openOverlay={openOverlay}
              closeOverlay={closeOverlay}
            />
          }
        />

        <Route
          path="portfolio/:galleryId/:imageId"
          element={
            <PhotoCardDetailed
              overlayIsOpen={overlayIsOpen}
              openOverlay={openOverlay}
              closeOverlay={closeOverlay}
              openCart={openCart}
              goToCheckout={goToCheckout}
            />
          }
        />
        <Route path="bio" element={<Bio />} />
        <Route path="checkout" element={<Checkout openCart={openCart} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

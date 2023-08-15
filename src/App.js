import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { starter } from './utilities/starter';
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
  const [portfolio, setPortfolio] = useState(starter);
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

  let toggleLike = (galleryId, photoId) => {
    let newState = { ...portfolio };
    for (let gal of newState.categories) {
      if (gal.categoryId === galleryId) {
        for (let pht of gal.photos) {
          if (pht.photoId === photoId) {
            pht.liked = !pht.liked;
          }
        }
      }
    }
    setPortfolio(newState);
  };
  return (
    <div className="App">
      <Header
        portfolio={portfolio}
        cartIsOpen={cartIsOpen}
        openCart={openCart}
        closeCart={closeCart}
      />
      <Cart
        cartIsOpen={cartIsOpen}
        closeCart={closeCart}
        goToCheckout={goToCheckout}
      />
      <Routes>
        <Route path="/" element={<Home portfolio={portfolio} />} />
        <Route
          path="portfolio"
          element={<Portfolio portfolio={portfolio} />}
        ></Route>
        <Route
          path="portfolio/:galleryId"
          element={
            <Gallery
              portfolio={portfolio}
              toggleLike={toggleLike}
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
              portfolio={portfolio}
              toggleLike={toggleLike}
              overlayIsOpen={overlayIsOpen}
              overlayInputVal={overlayInputVal}
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

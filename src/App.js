import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { starter } from './starter';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import PhotoCardDetailed from './PhotoCardDetailed';
import Bio from './Bio';

import './styles/App.css';

function App() {
  const [portfolio, setPortfolio] = useState(starter);

  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  const [overlayInputVal, setOverlayInputVal] = useState('/');

  let openOverlay = (val) => {
    setOverlayInputVal(val);
    setOverlayIsOpen(true);
  };

  let closeOverlay = () => {
    setOverlayInputVal('/');
    setOverlayIsOpen(false);
  };
  const [cartIsOpen, setCartIsOpen] = useState(true);

  let openCart = (val) => {
    setCartIsOpen(true);
  };

  let closeCart = () => {
    setCartIsOpen(false);
    console.log('cart is now closed');
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
            />
          }
        />
        <Route path="bio" element={<Bio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

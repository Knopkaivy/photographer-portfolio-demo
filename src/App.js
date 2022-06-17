import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { starter } from './starter';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';
import Home from './Home';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import PhotoCardDetailed from './PhotoCardDetailed';
import Bio from './Bio';

import './styles/App.css';
// import { RiContactsBookLine } from 'react-icons/ri';

function App() {
  const [portfolio, setPortfolio] = useState(starter);

  const [purchaseItems, setPurchaseItems] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [overlayInputVal, setOverlayInputVal] = useState('/');

  let addItemToCart = (item) => {
    let newState = [...purchaseItems, item];
    setPurchaseItems(newState);
  };

  useEffect(() => {
    if (purchaseItems.length > 0) {
      let newSubtotal = 0;
      purchaseItems.forEach((item) => {
        newSubtotal = newSubtotal + item.price;
      });
      setCartSubtotal(newSubtotal);
    }
  }, [purchaseItems]);

  let openOverlay = (val) => {
    setOverlayInputVal(val);
    setOverlayIsOpen(true);
  };

  let closeOverlay = () => {
    setOverlayInputVal('/');
    setOverlayIsOpen(false);
  };
  const [cartIsOpen, setCartIsOpen] = useState(false);

  let openCart = (val) => {
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
        purchaseItems={purchaseItems}
      />
      <Cart
        cartSubtotal={cartSubtotal}
        cartIsOpen={cartIsOpen}
        closeCart={closeCart}
        purchaseItems={purchaseItems}
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
              purchaseItems={purchaseItems}
              addItemToCart={addItemToCart}
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

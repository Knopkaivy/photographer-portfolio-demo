import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { starter } from './utilities/starter';
import { licenseOptions } from './utilities/licenseOption';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';
import Home from './Home';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import PhotoCardDetailed from './PhotoCardDetailed';
import Checkout from './Checkout';
import Bio from './Bio';

import './styles/global.css';

function App() {
  const [portfolio, setPortfolio] = useState(starter);

  const [purchaseItems, setPurchaseItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [cartSubtotal, setCartSubtotal] = useState(0);

  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [overlayInputVal, setOverlayInputVal] = useState('/');

  let navigate = useNavigate();

  let calculateSubtotal = () => {
    if (purchaseItems.length === 0) {
      setCartSubtotal(0);
    } else if (purchaseItems.length > 0) {
      let newSubtotal = 0;
      purchaseItems.forEach((item) => {
        newSubtotal = newSubtotal + item.price;
      });
      if (cartSubtotal !== newSubtotal) {
        setCartSubtotal(newSubtotal);
      }
    }
  };

  let addItemToCart = (item) => {
    let newState = [...purchaseItems, item];
    setPurchaseItems(newState);
    localStorage.setItem('cart', JSON.stringify(newState));
  };

  let removeItemFromCart = (itemId) => {
    let newList = purchaseItems.filter((item) => item.id !== itemId);
    setPurchaseItems(newList);
    localStorage.setItem('cart', JSON.stringify(newList));
  };

  let updateItemInCart = (itemId, newLicenseId) => {
    let newList = [...purchaseItems];
    let newLicense;
    for (let license of licenseOptions) {
      if (license.licenseId === newLicenseId) {
        newLicense = license;
        break;
      }
    }
    for (let item of newList) {
      if (item.id === itemId) {
        item.licenseId = newLicense.licenseId;
        item.label = newLicense.label;
        item.detail = newLicense.detail;
        item.price = newLicense.price;
        item.memo = newLicense.memo;
        break;
      }
    }
    setPurchaseItems(newList);
    localStorage.setItem('cart', JSON.stringify(newList));
  };

  useEffect(() => {
    calculateSubtotal();
  }, [purchaseItems]);

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
  const [cartIsOpen, setCartIsOpen] = useState(false);

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
        purchaseItems={purchaseItems}
      />
      <Cart
        cartSubtotal={cartSubtotal}
        cartIsOpen={cartIsOpen}
        closeCart={closeCart}
        purchaseItems={purchaseItems}
        removeItemFromCart={removeItemFromCart}
        updateItemInCart={updateItemInCart}
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
              purchaseItems={purchaseItems}
              addItemToCart={addItemToCart}
              goToCheckout={goToCheckout}
            />
          }
        />
        <Route path="bio" element={<Bio />} />
        <Route
          path="checkout"
          element={
            <Checkout
              purchaseItems={purchaseItems}
              cartSubtotal={cartSubtotal}
              openCart={openCart}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

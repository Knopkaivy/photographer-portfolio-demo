import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <div className="App">
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="portfolio/:galleryId" element={<Gallery />} />

        <Route
          path="portfolio/:galleryId/:imageId"
          element={<PhotoCardDetailed />}
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

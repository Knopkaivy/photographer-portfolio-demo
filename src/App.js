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
import Store from './Store';

import './styles/App.css';

function App() {
  const [portfolio, setPortfolio] = useState(starter);
  let toggleLike = (galleryName, photoId) => {
    let newState = { ...portfolio };
    for (let gal of newState.categories) {
      if (gal.categoryName === galleryName) {
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
      <Header portfolio={portfolio} />
      <Routes>
        <Route path="/" element={<Home portfolio={portfolio} />} />
        <Route
          path="portfolio"
          element={<Portfolio portfolio={portfolio} />}
        ></Route>
        <Route
          path="portfolio/:galleryId"
          element={<Gallery portfolio={portfolio} toggleLike={toggleLike} />}
        />

        <Route
          path="portfolio/:galleryId/:imageId"
          element={<PhotoCardDetailed portfolio={portfolio} />}
        />
        <Route path="bio" element={<Bio />} />
        <Route path="store" element={<Store />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

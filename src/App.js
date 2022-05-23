import { Routes, Route, Link } from 'react-router-dom';

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
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="portfolio/:galleryName" element={<Gallery />} />
        <Route
          path="portfolio/:galleryName/:imageId"
          element={<PhotoCardDetailed />}
        />
        <Route path="bio" element={<Bio />} />
        <Route path="store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

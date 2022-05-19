import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Bio from './Bio';
import Store from './Store';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bio" element={<Bio />} />
        <Route path="store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// import ScrollToTop from "./components/scrollToTop/ScrollToTop"

// function App() {
//   return (
//     <>
//     <div>
//     <ScrollToTop />
//     </div>
//      </>
//   )
// }

// export default App



// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Location from './pages/location/Location';
import Offer from './pages/offer/Offer';
import Cart from './pages/cart/Cart';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;

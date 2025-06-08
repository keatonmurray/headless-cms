// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PopularProducts from './pages/PopularProducts';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SingleProduct from './pages/SingleProduct';
import Layout from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/popular-products" element={<Layout><PopularProducts /></Layout>} />
      <Route path="/product" element={<Layout><SingleProduct /></Layout>} />
    </Routes>
  );
}

export default App;

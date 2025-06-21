import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PopularProducts from './pages/PopularProducts';
import Layout from './layout/Layout';
import FeaturedProducts from './pages/FeaturedProducts';
import OnSale from './pages/OnSale';
import SingleProduct from './pages/SingleProduct';
import PageRenderer from './pages/PageRenderer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/popular-products" element={<Layout><PopularProducts /></Layout>} />
      <Route path="/featured-products" element={<Layout><FeaturedProducts /></Layout>} />
      <Route path="/on-sale" element={<Layout><OnSale /></Layout>} />
      <Route path="/product/:id" element={<Layout><SingleProduct /></Layout>} />
      <Route path="*" element={<Layout><PageRenderer /></Layout>} />
    </Routes>
  );
}

export default App;

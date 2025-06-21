import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import PageRenderer from './pages/PageRenderer';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="*" element={<Layout><PageRenderer /></Layout>} />
      <Route path="/product/:slug" element={<Layout><SingleProduct /></Layout>} />
    </Routes>
  );
}

export default App;

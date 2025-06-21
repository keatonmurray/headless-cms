import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Pages from './pages/Pages';
import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="*" element={<Layout><Pages /></Layout>} />
      <Route path="/product/:slug" element={<Layout><Product /></Layout>} />
    </Routes>
  );
}

export default App;

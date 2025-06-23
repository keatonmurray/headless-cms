import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Pages from './pages/Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="*" element={<Layout><Pages /></Layout>} />
    </Routes>
  );
}

export default App;

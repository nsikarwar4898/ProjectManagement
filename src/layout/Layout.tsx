import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import Products from '../pages/Product';
const Layout = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
};

export default Layout;

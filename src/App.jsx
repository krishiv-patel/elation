import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Automation from './pages/services/Automation';
import Healthcare from './pages/services/Healthcare';
import Design from './pages/services/Design';
import Startups from './pages/services/Startups';
import PPSO from './pages/services/PPSO';
import ProductDevelopment from './pages/services/ProductDevelopment';

import ScrollToTop from './components/shared/ScrollToTop';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/healthcare" element={<Healthcare />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/startups" element={<Startups />} />
          <Route path="/services/ppso" element={<PPSO />} />
          <Route path="/services/product-development" element={<ProductDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;

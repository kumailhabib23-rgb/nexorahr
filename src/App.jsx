
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { Header, Footer } from './shared.jsx';

import { Home } from './pages/Home.jsx';
import { Solutions } from './pages/Solutions.jsx';
import { About } from './pages/About.jsx';
import { FeaturePage } from './pages/FeaturePage.jsx';
import { Pricing } from './pages/Pricing.jsx';
import { Contact } from './pages/Contact.jsx';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="site">
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/features" element={<FeaturePage />} />
            <Route path="/operations" element={<FeaturePage />} />
            <Route path="/ai-tools" element={<FeaturePage />} />
            <Route path="/partners" element={<FeaturePage />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
